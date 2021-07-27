/**
*	this function will load the survey from the database.
*	it will be called once.
*/
function SurveyModel (referenceItems, topic, workOrder, location, user) {
  this.referenceItems = referenceItems;
  this.fields = [];
  this.actions = [];

  this.topic = topic;
  this.equipmentNumber = workOrder.equipmentNumber;
  this.woDOCO = workOrder.doco;
  this.woContract = workOrder.dcto;
  this.interventionLocationAN8 = location.AN8;
  this.userAN8 = user.AN8;
  
  switch(this.topic) {
    case 'FAR' :
      this.userInputTopic = 'FAR';
      break;
    case 'FAR2' :
      this.userInputTopic = 'FAR';
      break;
    default :
      this.userInputTopic = 'NA';
      break; 
  }
}

SurveyModel.prototype.getSummaryData = function (successCallBack, errorCallBack) {

  if(validationModel.isNull(errorCallBack)) errorCallBack = successCallBack;

  var that = this;
  var name = "";
  var data = {};
  var referenceItem = that.referenceItems[0];

  var close = function(hasError, msg) {
    if(validationModel.isNull(hasError)) hasError = false;
    if(hasError === true) {
      errorCallBack(msg);
    }
    else {
      successCallBack(data);
    }
  };

  var onError = function(err) {
    close(true, err.toString());
  };

  var setDefaultValues = function() {
    data.name = "";
    data.workOrder = workOrder;
  };

  var updateValue = function(propName, propValue) {
    data[propName] = propValue;
  };

  var getName = function() {

    var defineSQLWhereClause = function() {
      return "where ITM = " + referenceItem + " ";
    };

    var onFindsuccessCallBack = function(res) {
      if(validationModel.isNull(res) || res.length === 0) {
        name = "";
      }
      else {
        name = res[0].description1;
      }
      updateValue("name", name);
      close();
    };

    de.itgs.Masterdata.Item.find(defineSQLWhereClause(), onFindsuccessCallBack, onError);      

  };

  var execute = function() {
    setDefaultValues();
    getName();
  };

  execute();
};

SurveyModel.prototype.getContentData = function (successCallBack, errorCallBack) {

  var questions = [];
  var catalogs = [];
  var articleReferences = [];
  var udcs = [];
  var inputs = [];
  var surveyModel;
  var that = this;

  var close = function(hasError, msg) {
    if(validationModel.isNull(hasError)) hasError = false;
    if(hasError === true) {
      errorCallBack(msg);
    }
    else {
      successCallBack();
    }
  };

  var onError = function(err) {
    close(true, err.toString());
  };

  var format = function() {

    var defineFieldType = function(qst) {
      switch(qst.QTC2) {
        case "B" :
          var nextFieldType = "radio";
          break;
        case "C" :
          nextFieldType = "switch";
          break; 
        case "T" :
          nextFieldType = "comment";
          break; 
        default : 
          nextFieldType = "text";
          break;
      }

      return nextFieldType;
    };

    var defineFieldInputType = function(field) {
      switch(field.type) {
        case "switch" :
          var inputType = "switch";
//          var relatedUDCEntries = udcs.filter(defineFilterByUDC(field));
          permittedValues = [];
//           for(var index in relatedUDCEntries) {
//             var nextEntry = relatedUDCEntries[index];
//             var nextEntryValue = 
//                 (validationModel.isNull(nextEntry.DL01) ? "" : nextEntry.DL01) + 
//                 (validationModel.isNull(nextEntry.DL02) ?  "" : nextEntry.DL02);
//             var nextPermittedValues = {
//               key : nextEntry.KY,
//               value : nextEntryValue
//             };
//             permittedValues.push(nextPermittedValues);
//           }
          break;
        case "radio" :
          inputType = "list";
          var relatedUDCEntries = udcs.filter(defineFilterByUDC(field));
          permittedValues = [];
          for(var index in relatedUDCEntries) {
            var nextEntry = relatedUDCEntries[index];
            var nextEntryValue = 
                (validationModel.isNull(nextEntry.DL01) ? "" : nextEntry.DL01) + 
                (validationModel.isNull(nextEntry.DL02) ?  "" : nextEntry.DL02);
            var nextPermittedValues = {
              key : nextEntry.KY,
              value : nextEntryValue
            };
            permittedValues.push(nextPermittedValues);
          }
          break;
        case "comment" :
          inputType = "free";
          permittedValues = [];
          break;
        case "switch" :
          inputType = "none";
          var relatedUDCEntries = udcs.filter(defineFilterByUDC(field));
          permittedValues = [];
          for(var index in relatedUDCEntries) {
            var nextEntry = relatedUDCEntries[index];
            var nextEntryValue = 
                (validationModel.isNull(nextEntry.DL01) ? "" : nextEntry.DL01) + 
                (validationModel.isNull(nextEntry.DL02) ?  "" : nextEntry.DL02);
            var nextPermittedValues = {
              key : nextEntry.KY,
              value : nextEntryValue
            };
            permittedValues.push(nextPermittedValues);
          }
          break;
        default :
          break;
      }

      return {
        type : inputType,
        permittedValues : permittedValues
      };
    };

    var findInputForField = function(qst) {
      return function(e) {
        return (e.QTST == qst.QTST && e.AN8 == that.interventionLocationAN8);
      };
    };

    var addFieldData = function(qst, reference, isHidden) {
      if(validationModel.isNull(isHidden)) isHidden = false;
	  var type = defineFieldType(qst);
      var existingInput = inputs.find(findInputForField(qst));
      var fieldInput = existingInput === undefined ? {
        key : type === "switch" ? "NULL" : null,
        value : null        
      } :
      {
        key : isSQLStringEmpty(existingInput.QVAL) ? null : existingInput.QVAL,
        value : isSQLStringEmpty(existingInput.RESP) ? null : existingInput.RESP         
      };

      var nextField = {
        type : type,
        isHidden : isHidden,	
        label : isSQLStringEmpty(qst.D200) ? qst.DSC1 : qst.D200,
        refQst : qst.QTST,
        refPref : reference.ITM,
        inputKey : fieldInput.key,
        inputValue : fieldInput.value,
        isMandatory : (qst.QTC3 === 'O'),
        SY : qst.SY,
        RT : qst.RT
      };

      return (that.fields.push(nextField) - 1);      
    };

    var addAlertActionData = function(index, qst, udcQst, udc) {
      var nextAction = {
        field : index,
        key : defineFieldType(qst) == "switch" ? 0 : 1,
        btn : udc._KY,
        type : "alert",
        value : isSQLStringEmpty(udcQst.D200) ? udcQst.DSC1 : udcQst.D200
      };
      if(nextAction !== null) that.actions.push(nextAction);
      return (that.actions.length - 1);
    };

    var addSwitchActionData = function (nextFieldIndex, nextRelatedFieldIndex) {
      var nextAction = null;
      switch(that.fields[nextFieldIndex].type) {
        case "switch" :
          nextAction = {
            field : nextFieldIndex,
            type : "showhide",
            target : nextRelatedFieldIndex
          };
          break;
        case "radio" : 
          nextAction = {
            field : nextFieldIndex,
            type : "showhidereversed",
            target : nextRelatedFieldIndex
          };
          break;
        default :
          break;
      }
      if(nextAction !== null) that.actions.push(nextAction);
      return (that.actions.length - 1);
    };

    var sortByOrder = function(a, b) {
      return a.TRST - b.TRST;
    };

    var defineFilterByRef = function(ref, targetProperty, refProperty) {
      return function(e) {
        return e[targetProperty] == ref[refProperty];  
      };
    };

    var defineFilterByUDC = function(ref) {
      return function(e) {
        return e.SY == ref.SY && e.RT == ref.RT; 
      };
    };

    articleReferences.sort(sortByOrder);

    for(var refIndex in articleReferences) {
      var nextRef = articleReferences[refIndex];

      var relatedCatalogs = catalogs.filter(defineFilterByRef(nextRef, 'QSPC', 'QTST'));
      relatedCatalogs.sort(sortByOrder);

      for(var catIndex in relatedCatalogs) {
        var nextCat = relatedCatalogs[catIndex];
        var relatedQuestions = questions.filter(defineFilterByRef(nextCat, 'QTST', 'QTST'));

        for(var qstIndex in relatedQuestions) {
          var nextQst = relatedQuestions[qstIndex];

          var nextFieldIndex = addFieldData(nextQst, nextRef, false);

          if(notIsSQLStringEmpty(nextQst.SY) && notIsSQLStringEmpty(nextQst.RT)) {
            var relatedUdcs = udcs.filter(defineFilterByUDC(nextQst));

            for(var udcIndex in relatedUdcs) {
              var nextUdc = relatedUdcs[udcIndex];

              var udcRelatedCatalogs = catalogs.filter(defineFilterByRef(nextUdc, 'QSPC', 'SPHD'));
              udcRelatedCatalogs.sort(sortByOrder);

              for(var udcCatIndex in udcRelatedCatalogs) {
                var udcNextCat = udcRelatedCatalogs[udcCatIndex];
                var udcRelatedQuestions = questions.filter(defineFilterByRef(udcNextCat, 'QTST', 'QTST'));

                for(var udcQstIndex in udcRelatedQuestions) {
                  var udcNextQst = udcRelatedQuestions[udcQstIndex];

                  if(defineFieldType(udcNextQst) === "comment") {
                    addAlertActionData(nextFieldIndex, nextQst, udcNextQst, relatedUdcs[udcIndex]);
                  }
                  else {
                    addSwitchActionData(nextFieldIndex, addFieldData(udcNextQst, nextRef, true));
                  }
                }      	
              }
            }
          }
        }      	
      }
    }

    for(var fieldIndex in that.fields) {
      that.fields[fieldIndex].inputType = defineFieldInputType(that.fields[fieldIndex]);
    }

    for(var inputIndex in inputs) {
      var input = inputs[inputIndex];
    }

    close();
  };

  var recoverPRQData = function(references) {

    var defineSQLWhereClause = function() {
      return	"where ITM in (" + references.join(",") + ") " +
        "and TSSP = 'S' " +
        "and EFTJ <= Date() " +
        "and EXDJ > Date() ";
    };

    var onFindsuccessCallBack = function(res) {
      var prqs = res;
      var catReferences = [];
      for(var prqIndex in prqs) {
        articleReferences.push(prqs[prqIndex]);
        catReferences.push(prqs[prqIndex].QTST);
      }
      recoverCATData(catReferences, true);
    };

    de.itgs.Masterdata.F56PRQ.find(defineSQLWhereClause(), onFindsuccessCallBack, onError);
  };

  var recoverCATData = function(references, isPrimary) {

    if(validationModel.isNull(isPrimary) || isPrimary === '') isPrimary = false;

    var defineSQLWhereClause = function() {
      return "where QSPC in ('" + references.join("','") + "')";
    };

    var onFindsuccessCallBack = function(res) {
      var cats = res;
      var qstReferences = [];
      for(var catIndex in cats) {
        cats[catIndex].isPrimary = isPrimary;
        catalogs.push(cats[catIndex]);
        qstReferences.push(cats[catIndex].QTST);
      }
      recoverQSTData(qstReferences);
    };

    de.itgs.Masterdata.F56CAT.find(defineSQLWhereClause(), onFindsuccessCallBack, onError);
  };

  var recoverQSTData = function(references) {

    var defineSQLWhereClause = function() {
      return "where QTST in ('" + references.join("','") + "')";
    };

    var onFindsuccessCallBack = function(res) {
      var qsts = res;
      questions = questions.concat(qsts);
      var udcReferences = [];

      var findUDCKey = function(SY) {
        return function(nextKey) {
          return (nextKey.SY === SY);
        };
      };

      for(var qstIndex in qsts) {
        var qstEntry = qsts[qstIndex];
        if(notIsSQLNull(qstEntry.SY) && notIsSQLNull(qstEntry.RT)) {
          var udcKeyIndex = udcReferences.findIndex(findUDCKey(qstEntry.SY));
          if(udcKeyIndex >= 0) udcReferences[udcKeyIndex].RT.push(qstEntry.RT);
          else udcReferences.push({SY : qstEntry.SY, RT : [qstEntry.RT]});
        }      	
      }

      if(udcReferences.length === 0) recoverREPData();
      else recoverUDCData(udcReferences);
    };

    de.itgs.Masterdata.F56QST.find(defineSQLWhereClause(), onFindsuccessCallBack, onError); 
  };

  var recoverUDCData = function(references) {

    var defineSQLWhereClause = function() {
      var sySubWhereClauses = [];
      for(var index in references) {
        var nextRef = references[index];
        sySubWhereClauses.push("(SY = '" + nextRef.SY + "' and RT in ('" + nextRef.RT.join("', '") + "'))");
      }

      return "where " + sySubWhereClauses.join(" OR ") + "";  
    };

    var onFindsuccessCallBack = function(res) {
      var catalogReferences = [];
      for(var index in res) {
        var nextUdc = res[index];
        udcs.push(nextUdc);
        if(notIsSQLStringEmpty(nextUdc.SPHD)) {
          catalogReferences.push(nextUdc.SPHD);
        }
      }

      if(catalogReferences.length === 0) recoverREPData();
      else recoverCATData(catalogReferences, false);
    };

    de.itgs.Masterdata.UDC.find(defineSQLWhereClause(), onFindsuccessCallBack, onError);
  };

  var recoverREPData = function() {
    var defineSQLWhereClause = function() {
      var qstArrays = [];
      for(var index in questions) {
        qstArrays.push(questions[index].QTST);
      }

      return	"where AN8 = " + that.interventionLocationAN8 + 
        " and QTST in ('" + qstArrays.join("','") + "') " +
        " and topic = '" + that.userInputTopic + "' ";  
    };

    var onFindsuccessCallBack = function(res) {
      for(var index in res) {
        var nextInput = res[index];
        if(notIsSQLStringEmpty(nextInput.QVAL) || notIsSQLStringEmpty(nextInput.RESP)) {
          inputs.push(res[index]);
        }
      }

      format();
    };

    de.itgs.WorkOrders.F56REP.find(defineSQLWhereClause(), onFindsuccessCallBack, onError);    
  };

  var execute = function() {
    recoverPRQData(that.referenceItems);
  };

  execute();
};

SurveyModel.prototype.setUserInputData = function (userInput, successCallBack, errorCallBack) {

  var that = this;
  var existing = [];
  var toCreate = [];
  var toDelete = [];
  var toUpdate = [];  
  var surveyProfile = {};
  
  var defineSurveyProfile = function() {
    
    var recordingDate = new Date();
    var formattedDate = dateFunctions.javaDateToStringFormat(recordingDate, false);
    var formattedTime = dateFunctions.javaDateToTimeFormat(recordingDate, false);
    var reducedDate = 
        dateNumDigits(recordingDate.getFullYear(),4) + 
        dateNumDigits(recordingDate.getMonth()+1,2) + 
        dateNumDigits(recordingDate.getDate(),2);
    
    surveyProfile = {
      formattedDate : formattedDate,
      formattedTime : formattedTime,
      parsedReducedDate : parseInt(reducedDate, 10),
      MCU : '     MAGTECH',
      location : that.interventionLocationAN8,
      equipmentNumber : that.equipmentNumber,
      user : that.userAN8,
      TTTY : 'R',
      topic : that.userInputTopic
    };
    
    switch(that.topic) {
      case 'FAR' :
        surveyProfile.doco = null;
        surveyProfile.dcto = null;
      	break;
      case 'FAR2' :
        surveyProfile.doco = null;
        surveyProfile.dcto = null;
        break;
      default :
        surveyProfile.doco = that.woDOCO;
        surveyProfile.dcto = that.woContract;
        break;
    }
  };

  var close = function(hasError, msg) {
    if(validationModel.isNull(hasError)) hasError = false;
    if(hasError === true) {
      var returnMsg = "Erreur lors de la sauvegarde du questionnaire : veuillez contacter le support Kony.";
      if(validationModel.isNull(msg)) returnMsg += " Erreur : " + msg;
      if(!validationModel.isNull(errorCallBack)) errorCallBack(msg);
    }
    else {
      if(!validationModel.isNull(successCallBack)) successCallBack();
    }
  }; 

  var onError = function(err, err2) {
    close(true, JSON.stringify(err));
  };

  var getRecordedInput = function() {
    var defineSQLWhereClause = function() {

      var whereClause =
          "where AN8 = '" + surveyProfile.location + "' and TTTY = '" + surveyProfile.TTTY + "' " +
          "and topic = '" + surveyProfile.topic + "' ";

      if(surveyProfile.topic != 'FAR' && surveyProfile.topic != 'FAR2') {
        whereClause += " and ANO = '" + surveyProfile.user + "' ";
      }

      return whereClause;      
    };

    var onFindsuccessCallBack = function(res) {
      defineExistingData(res);
      sortDataForDBUpdate();
      deleteDataInDB();
    };

    de.itgs.WorkOrders.F56REP.find(defineSQLWhereClause(), onFindsuccessCallBack, onError);
  };

  var defineExistingData = function(data) {
    for(var index in data) {
      var foundData = data[index];
      var existingDataRow = {
        key : foundData.id,
        code : foundData.QTST,
        structuredInput : foundData.QVAL,
        freeInput : foundData.RESP
      };
      existing.push(existingDataRow);
    }
  };

  var sortDataForDBUpdate = function() {

    var associateInputsByCode = function(a, b) {
      return a.code === b.code;  
    };

    for (var existingIndex in existing) {
      var existingRow = existing[existingIndex];
      var newInputIndex = de.itgs.javascript.Array.find(userInput, associateInputsByCode, existingRow);
      if (newInputIndex === -1) {
        toDelete.push(existingRow);
      }
      else {
        var nextInput = userInput[newInputIndex];
        if (existingRow.structuredInput != nextInput.inputKey || existingRow.freeInput != nextInput.inputValue) {
          toUpdate.push({before : existingRow, after : nextInput});
        }
      }
    }

    for (var userInputIndex in userInput) {
      var userInputRow = userInput[userInputIndex];
      var toUpdateIndex = de.itgs.javascript.Array.find(existing, associateInputsByCode, userInputRow);
      if (toUpdateIndex === -1) {
        toCreate.push(userInputRow);
      }
    } 
  };

  var format = function(element) {

    for(var property in element) {
      if(element.hasOwnProperty(property)){
        var nextProperty = element[property];
        if(typeof nextProperty === "object") {
          element[property] = format(nextProperty);
        }
        else if (typeof element[property] === "number") {
          element[property] = nextProperty.toString();
        }
      } 

    }
    return element;
  };

  var createDataInDB = function() {

    var defineInsertData = function() {
      var insertData = [];
      for(var index in toCreate) {
        var nextRow = toCreate[index];
        var insertRow = {
          AN8 : surveyProfile.location,
          LOCN : surveyProfile.equipmentNumber,
          ANO : surveyProfile.userAN8,
          QDAT : surveyProfile.formattedDate,
          QTIM : surveyProfile.formattedTime,
          SNBR : surveyProfile.parsedReducedDate,
          MCU : surveyProfile.MCU,
          MCU2 : surveyProfile.MCU,
          TTTY : surveyProfile.TTTY,
          DOCO : surveyProfile.doco,
          DCTO : surveyProfile.dcto,
          topic : surveyProfile.topic,
          ITM : nextRow.refPref,
          QTST : nextRow.code,
          QVAL : nextRow.inputKey,
          RESP : nextRow.inputValue,
          hasChangedFlag : true
        };

        insertData.push(insertRow);
      }

      return format(insertData);
    };

    var onCreateSuccess = function() {
      close();
    };

    if(toCreate.length === 0) onCreateSuccess();
    else de.itgs.WorkOrders.F56REP.createAll(defineInsertData(), onCreateSuccess, onError);
  };

  var updateDataInDB = function() {

    var defineUpdateData = function() {
      var sql = "where id = ";
      var keys = [];
      var updateData = [];
      for(var index in toUpdate) {
        var nextRow = toUpdate[index];
        var source = nextRow.before;
        var target = nextRow.after;
        var updateRow = {
          whereClause : sql + source.key,
          changeSet : {
            QDAT : surveyProfile.formattedDate,
            QTIM : surveyProfile.formattedTime,
            SNBR : surveyProfile.parsedReducedDate,
            QVAL : target.inputKey,
            RESP : target.inputValue,
            hasChangedFlag : true
          }
        };

        updateData.push(updateRow);
      }

      return format(updateData);

    };

    var onUpdateSuccess = function() {
      createDataInDB();
    };

    if(toUpdate.length === 0) onUpdateSuccess();
    else de.itgs.WorkOrders.F56REP.updateAll(defineUpdateData(), onUpdateSuccess, onError);
  };

  var deleteDataInDB = function() {

    var defineSQLWhereClause = function() {
      var sql = "where ";
      var keys = [];
      for(var index in toDelete) keys.push(toDelete[index].key);
      sql += "id in (" + keys.join(",") + ")";
      return sql;
    };

    var onDeleteSuccess = function() {
      updateDataInDB();
    };

    if(toDelete.length === 0) onDeleteSuccess();
    else de.itgs.WorkOrders.F56REP.remove(defineSQLWhereClause(), onDeleteSuccess, onError);

  };

  var execute = function() {
    defineSurveyProfile();
    getRecordedInput();  
  };

  execute();
};


