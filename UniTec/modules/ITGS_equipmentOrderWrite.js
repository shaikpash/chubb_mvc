var equipmentOrderWrite = {
	order : null,
	lines : null,
	addresses : null,
    addressesOrderDirection : 'asc',
	qtyEditLineIndex : null,
	isSelectingCatalog : false,
	cursor : 0,
	margin : 10,
    modifs : false
    };


equipmentOrderWrite.init = function() {
  equipmentOrderWrite.updating = false;
  if (equipmentOrderOverview.isInventory())	{
   equipmentOrderWrite.margin=50;
   var appMenu = [
		["equipmentOrderWrite.BACK", "Retour", "left.png", onBackClick],
		["equipmentOrderWrite.SAVE", "Enregistrer", "save.png", onSaveClick ],
    	["equipmentOrderWrite.VALID", "Valider", "check.png", onValidateClick ]
	];}
else {var appMenu = [
		["equipmentOrderWrite.BACK", "Retour", "left.png", onBackClick],
		["equipmentOrderWrite.DEL", "Supprimer", "bin.png", onDeleteClick],
		["equipmentOrderWrite.SAVE", "Enregistrer", "save.png", onSaveClick ],
		["equipmentOrderWrite.VALID", "Valider", "check.png", onValidateClick ]
	];}
  //Dhaval:Fix for app menu not working start
	function onBackClick(){
      function retour() {
		navigationModel.doReturn();
	  }
	if( equipmentOrderOverview.isInventory() && equipmentOrderWrite.modifs) {
		var msg =  "Des modifications ont été effectuées, souhaitez-vous sortir sans sauvegarder ?" ;
		popupModel.showPopError(msg, retour, undefined, true);}
      else {if (!equipmentOrderWrite.updating) navigationModel.doReturn();}
	}
  	function onDeleteClick(){
    equipmentOrderWrite.remove();
  	}
  	function onSaveClick(){
      equipmentOrderWrite.save();
    }
  	function onValidateClick(){
      equipmentOrderWrite.valid();
    }

  //End
	otis.application.createAppMenu("equipmentOrderWriteAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu
}

equipmentOrderWrite.newOrder = function(test) {
	equipmentOrderWrite.order = {
		id : null,
		issuerAN8 : login.user.AN8,
		addressId : -1,
		addressType : 'none',
		state : equipmentOrderOverview.isOrder() ? 'APEC' : 'INEC',
		dueDate :  null,
		cmdNummer : null,
		comment : ''
	};
	
	equipmentOrderWrite.lines = [];
	equipmentOrderWrite.addresses = [];
	frmEquipmentOrderWrite.show();
}

equipmentOrderWrite.preShow = function() {
    equipmentOrderWrite.init();
	otis.application.setCurrentAppMenu("equipmentOrderWriteAppMenu");//Dhaval:Invocation of custom app menu

	var isInventory = equipmentOrderOverview.isInventory();
	
	frmEquipmentOrderWrite.cbxDeliveryAddress.setVisibility(!isInventory);
	frmEquipmentOrderWrite.hBxAddress.setVisibility(!isInventory);
	frmEquipmentOrderWrite.lblDeliveryDate.text = isInventory ? "Date d'inventaire" : "Date de livraison";
	frmEquipmentOrderWrite.lblFormTitle.text = isInventory ? "Déclaration d'inventaire" : "Commande";
	//equipmentOrderWrite.cursor = 0; deplacé plus bas, seulement premier appel
  
  //frmEquipmentOrderWrite.hBxDate.setVisibility(!isInventory);
  //frmEquipmentOrderWrite.hBxComment.setVisibility(!isInventory);
  //frmEquipmentOrderWrite.cldDeliveryDate.setVisibility(!isInventory);
  //frmEquipmentOrderWrite.txtbxComment.setVisibility(!isInventory);
  if (isInventory){frmEquipmentOrderWrite.segOrderList.containerHeight="66dp";} else {frmEquipmentOrderWrite.segOrderList.containerHeight="45dp";}
  
	if (equipmentOrderWrite.isSelectingCatalog == true) {
		//back from catalog
     	equipmentOrderWrite.addCatalogUsualCodes(catalog.selectedItemCodes);
		equipmentOrderWrite.isSelectingCatalog = false;
	} else {
		// normal display
      equipmentOrderWrite.cursor = 0;
      equipmentOrderWrite.modifs=false;
		if(!isInventory) equipmentOrderWrite.loadAddresses();
		
		if (!validationModel.isNull(equipmentOrderWrite.order.dueDate)) {
			var d = dateFromsql(equipmentOrderWrite.order.dueDate);
			frmEquipmentOrderWrite.cldDeliveryDate.date = [d.getDate(), d.getMonth() + 1, d.getFullYear()];
		} else {
			frmEquipmentOrderWrite.cldDeliveryDate.clear();
		}
		frmEquipmentOrderWrite.txtbxComment.text = equipmentOrderWrite.order.comment;
		equipmentOrderWrite.loadLines();
    	}
};

equipmentOrderWrite.addCatalogUsualCodes = function(usualCodes) {
	function addLineFromUsualCode(usualCode) {
		//find ITM code
		var item = null;
		callBackModel.context.sql =
			"select i.itm, " +
			"i.description1 ||  CASE WHEN i.description2 = 'NULL' THEN '' ELSE i.description2 END name, " +
			"i.usualcode usualCode, \n " +
			"(CASE WHEN COALESCE(i.CNV18, 'NULL') <> 'NULL' and i.CNV18 > 0 THEN cast(1/i.CNV18 as integer) ELSE 1 END) orderMultiple, \n " +
			"(select DL01 from UDCT where RT='UM' and SY='00' and KY = i.measurementunit limit 1) unit \n " + 
			"from item i where usualCode = '" + usualCode +"' ";
		
		executeSql(
			callBackModel.context.sql,
			function (res) {
				if (res != null && res.length > 0) {
					item = res[0];
				}
			},
			eventErrorCallBack
		);
		if (validationModel.isNull(item)) {
			kony.print("equipmentOrderWrite.addCatalogUsualCodes : unknown Usual code " + usualCode);
			return;
		}
	
		//look if already exist in order
		var lineI = de.itgs.javascript.Array.find(
			equipmentOrderWrite.lines,
			function(l) {
				return l.articleCode == item.ITM;	
			}
		);
		
		if (lineI != -1) {
			// add one to the line and update
			if (!equipmentOrderOverview.isInventory() ) {equipmentOrderWrite.lines[lineI].quantity += 1;
			kony.print("add on :" + lineI);}
		} else {
			// add new line to order
			var newLineNum = equipmentOrderWrite.lines.reduce(
				function (last, next) {
					return (last > next.line) ? last : next.line;
				},
				0 // initial value
			) + 1;
			
			equipmentOrderWrite.lines.push({
				id : null,
				supplyOrderid : equipmentOrderWrite.order.id,
				line : newLineNum,
				articleCode : item.ITM,
				replacementCode : 'NULL',
				quantity : item.orderMultiple,
				quantityValidated : 0,
				quantityDelivered : 0,
				notAvailable : 0,
				deliveryDate : null,
				name : item.name,
				usualCode : item.usualCode,
				orderMultiple: item.orderMultiple,
				unit : item.unit
			}); 
            equipmentOrderWrite.modifs = true;
		}
	}
	var nblignesavant=equipmentOrderWrite.lines.length;
	usualCodes.forEach(addLineFromUsualCode);
    //alert("usual codes " + usualCodes.length)  ;
      if (equipmentOrderOverview.isInventory() && usualCodes.length==1) {  
         if (equipmentOrderWrite.lines.length != nblignesavant) // une nouvelle ligne
            {  
            equipmentOrderWrite.qtyEditLineIndex =equipmentOrderWrite.lines.length-1;
            var line = equipmentOrderWrite.lines[equipmentOrderWrite.qtyEditLineIndex ];
            popEquLineEdit.lblArticle.text = line.name + " (" + line.usualCode + ")" + "\n (Mx " + line.orderMultiple + ")";
  	        popEquLineEdit.txtQty.text = line.quantity;
            popEquLineEdit.lblUnit.text = line.unit;
            popEquLineEdit.txtQty.setFocus(true);
	        popEquLineEdit.show();
            } else {
            //alert("Article " +usualCodes[0] + " déjà présent dans l'inventaire" );
            kony.ui.Alert({"message" : "Article " +usualCodes[0] + " déjà présent dans l'inventaire" , "alertType" : constants.ALERT_TYPE_INFO},{});
           //frmEquipmentOrderWrite.segOrderList.selectedRowIndex=40;
            }
       } else {
	     equipmentOrderWrite.displayArticles();
       }
}

equipmentOrderWrite.displayArticles = function() {
	var cursorEnd = equipmentOrderWrite.cursor + equipmentOrderWrite.margin;
	var equipmentOrderWriteLinesCopy = equipmentOrderWrite.lines.slice();
    if ( !equipmentOrderOverview.isInventory() ) {
		equipmentOrderWriteLinesCopy.reverse();
    } 
	var articlesToDisplay = equipmentOrderWriteLinesCopy.slice(equipmentOrderWrite.cursor, cursorEnd);
	var rows = articlesToDisplay.map(equipmentOrderWrite.mapLine);
	frmEquipmentOrderWrite.segOrderList.setData(rows);

	equipmentOrderWrite.updateDisplayPrevious();
	equipmentOrderWrite.updateDisplayNext();
}

equipmentOrderWrite.updateCursor = function(addToCursor) {
	var newCursor = equipmentOrderWrite.cursor + addToCursor;
	if(newCursor >= equipmentOrderWrite.lines.length || newCursor < 0) return 0; // new value cannot be accepted.
	equipmentOrderWrite.cursor = newCursor;
	return 1; // new value accepted.
};

equipmentOrderWrite.onDisplayPreviousClick = function() {
	var cursorAdd = 0 - equipmentOrderWrite.margin;
	if(!equipmentOrderWrite.updateCursor(cursorAdd)) return;
	
	equipmentOrderWrite.displayArticles();
};

equipmentOrderWrite.updateDisplayPrevious = function() {
	frmEquipmentOrderWrite.btnDisplayPrevious.setVisibility((equipmentOrderWrite.lines.length > equipmentOrderWrite.margin && equipmentOrderWrite.cursor > 0));
	var startCursor = equipmentOrderWrite.cursor - equipmentOrderWrite.margin + 1;
	var lbl = "Afficher les articles précédents ( " + startCursor + " à " + equipmentOrderWrite.cursor + " )";
	frmEquipmentOrderWrite.btnDisplayPrevious.text = lbl;
};

equipmentOrderWrite.onDisplayNextClick = function() {
	var cursorAdd = equipmentOrderWrite.margin;
	if(!equipmentOrderWrite.updateCursor(cursorAdd)) return;
	
	equipmentOrderWrite.displayArticles();
};

equipmentOrderWrite.updateDisplayNext = function() {	
	var startCursor = equipmentOrderWrite.cursor + equipmentOrderWrite.margin;
	var endCursor = startCursor + equipmentOrderWrite.margin;
	frmEquipmentOrderWrite.btnDisplayNext.setVisibility((equipmentOrderWrite.lines.length > equipmentOrderWrite.margin  && startCursor < equipmentOrderWrite.lines.length));
	var lbl = "Afficher les articles suivants ( " + (startCursor + 1) + " à " + endCursor + " )";
	frmEquipmentOrderWrite.btnDisplayNext.text = lbl;
};

equipmentOrderWrite.recoverArticleIndexFromSegment = function(rowIndex) {
	return trueIndex = rowIndex + equipmentOrderWrite.cursor;
};

equipmentOrderWrite.loadAddresses = function() {
	equipmentOrderWrite.addresses = supplyOrder.getPossibleDeliveryAddresses(equipmentOrderWrite.addressesOrderDirection);
	var addressesMasterData = [];
	for (var i = 0; i < equipmentOrderWrite.addresses.length; i++) {
		var a = equipmentOrderWrite.addresses[i];
		if (!validationModel.isNull(a.name) || !validationModel.isNull(a.name2)) {
			var name = !validationModel.isNull(a.name) ? a.name + " " : '';
			var name2 = !validationModel.isNull(a.name2) ? a.name2 + "\n" : "\n";
			var street = !validationModel.isNull(a.street) ? a.street + "\n" : "";
			var zipCode = !validationModel.isNull(a.zipCode) ? a.zipCode + " " : '';
			var city = !validationModel.isNull(a.city) ? a.city : '';
			addressesMasterData.push([i, name + name2 + street + zipCode + city]);
		}
	}
	
	addressesMasterData = [[-1, "Choisir une adresse de livraison"]].concat(addressesMasterData);
	frmEquipmentOrderWrite.cbxDeliveryAddress.masterData = addressesMasterData;
	frmEquipmentOrderWrite.cbxDeliveryAddress.selectedKey = equipmentOrderWrite.findAddressKey(equipmentOrderWrite.order.addressId, equipmentOrderWrite.order.addressType);
}

equipmentOrderWrite.onVbxDeliveryAddressClick = function() {
  	if (equipmentOrderWrite.addressesOrderDirection == 'asc') {
    	equipmentOrderWrite.addressesOrderDirection = 'desc';
    	frmEquipmentOrderWrite.imgOrderByDeliveryAddress.src = 'down.png';
  	} else {
    	equipmentOrderWrite.addressesOrderDirection = 'asc';
    	frmEquipmentOrderWrite.imgOrderByDeliveryAddress.src = 'up.png';
  	}
  
    // reinitialize the selected address
    equipmentOrderWrite.order.addressId  = -1;
	equipmentOrderWrite.order.addressType  = "none";

    // reload address
  	equipmentOrderWrite.loadAddresses();
}

equipmentOrderWrite.findAddressKey = function(addressId, addressType) {
	function macthAddress(address) {
		return address.id == addressId && address.type == addressType;
	};
	
	var key = de.itgs.javascript.Array.find(equipmentOrderWrite.addresses, macthAddress);
	return key;
}

equipmentOrderWrite.mapLine = function(row) {
	var r = {
		imgWarn : { isVisible  : (!equipmentOrderOverview.isInventory() && ((row.notAvailable != 0) || (row.replacementCode != 'NULL'))) },
		lblQty : (row.quantityValidated != 0) ? row.quantityValidated : (row.quantity == 'NULL') ? " " : row.quantity,
		//vbox237134513913801 : { isVisible  : (!equipmentOrderOverview.isInventory() || (equipmentOrderOverview.isInventory() && row.quantity == 'NULL')) },
        //imgBin :  (row.quantity == 'NULL') ? {src : "bin.png"} : ""    	
        imgBin :  "bin.png" 
    };
	
	if (row.replacementCode == 'NULL') {
		r.lblItem = row.name + " (" + row.usualCode + ")";
       if (equipmentOrderOverview.isInventory()) { r.lblItem =  row.usualCode + " (" + row.name + ")";}
		r.lblUnit = row.unit + "\n (Mx " + row.orderMultiple + ")";
       if (equipmentOrderOverview.isInventory() && (row.unit != 'Unité' ||  parseInt(row.orderMultiple) != 1)) { r.lblUnit =  { skin : "sknLblKeyWithRedFont",  text : row.unit + "\n (Mx " + row.orderMultiple + ")"};}
	} else {
		r.lblItem = "Remplacé par : " + row.replacementName + " (" + row.replacementUsualCode + ")";
		r.lblUnit = row.replacementUnit + "\n (Mx " + row.replacementOrderMultiple + ")";
	}

 // if (!equipmentOrderOverview.isInventory() || (equipmentOrderOverview.isInventory() && row.quantity == 'NULL')) r.imgBin="bin.png";
 // if (equipmentOrderOverview.isInventory()) {
   //    if (row.quantity == 'NULL') {
   //       r.vbox237134513913801={ isVisible  : true};
    //  }  else {
    //      r.vbox237134513913801={ isVisible  : false };
   //   }
  // }
  
    if ((equipmentOrderOverview.isInventory()) && (row.quantity == 'NULL') ) {
		//r.vbox237134513908015 = { skin : "noSkinVBox" };
      r.vbox237134513908015 = { skin : "sknVbxTransparent" };
	} else {
		r.vbox237134513908015 = { skin : "sknVBBtnSquare" };
	}
  
	if ((row.quantityDelivered != row.quantityValidated) && (row.quantityDelivered != 0) ) {
		r.HBGlob = { skin : "sknHBxOrange" };
	} else {
		r.HBGlob = { skin : "skinDefault" };
	}
  
	return r ;
}

equipmentOrderWrite.loadLines = function() {
	equipmentOrderWrite.lines = (!validationModel.isNull(equipmentOrderWrite.order.id)) ? supplyOrder.getSupplyOrderLinesForOrder(equipmentOrderWrite.order): [];
	equipmentOrderWrite.displayArticles();
}

equipmentOrderWrite.onQuantityClick = function(context) {
	equipmentOrderWrite.qtyEditLineIndex = equipmentOrderWrite.recoverArticleIndexFromSegment(context.rowIndex);
    equipmentOrderWrite.rowIndex=context.rowIndex;
    var equipmentOrderWriteLinesCopy = equipmentOrderWrite.lines.slice();
    if ( !equipmentOrderOverview.isInventory() ) {
	    equipmentOrderWriteLinesCopy.reverse();
    }  
	var line = equipmentOrderWriteLinesCopy[equipmentOrderWrite.qtyEditLineIndex];
    if (!equipmentOrderOverview.isInventory()) {  
       popEquLineEdit.lblArticle.text = line.name + " (" + line.usualCode + ")" + "\n (Mx " + line.orderMultiple + ")";
    } else {
       popEquLineEdit.lblArticle.text = line.usualCode + " (" +line.name + ")\n (Mx " + line.orderMultiple + ")";
    }
	popEquLineEdit.txtQty.text = line.quantity;
    if (popEquLineEdit.txtQty.text=='NULL')popEquLineEdit.txtQty.text ="";
	popEquLineEdit.lblUnit.text = line.unit;
    popEquLineEdit.txtQty.setFocus(true);
	popEquLineEdit.show();
}

equipmentOrderWrite.onItemRemove = function(context) {
	var articleIndex = equipmentOrderWrite.recoverArticleIndexFromSegment(context.rowIndex);
    if (!equipmentOrderOverview.isInventory()) {  
    var equipmentOrderWriteLinesCopy = equipmentOrderWrite.lines.slice();
    equipmentOrderWriteLinesCopy.reverse();
	equipmentOrderWriteLinesCopy = de.itgs.javascript.Array.removeAt(equipmentOrderWriteLinesCopy , articleIndex, 1);
    equipmentOrderWriteLinesCopy.reverse();
	equipmentOrderWrite.lines = equipmentOrderWriteLinesCopy;
	equipmentOrderWrite.displayArticles();
       } else {
         if (equipmentOrderWrite.lines[articleIndex].quantity == 'NULL'){
      equipmentOrderWrite.lines[articleIndex].quantity =0;
      var ligneAModifier =   frmEquipmentOrderWrite.segOrderList.selectedRowItems[0];//[articleIndex];
       //alert(JSON.stringify(ligneAModifier));
         ligneAModifier.lblQty="0";
         ligneAModifier.vbox237134513908015 = { skin : "sknVBBtnSquare" };
         //ligneAModifier.imgBin =""   ;
         //ligneAModifier.vbox237134513913801={ isVisible  : false};
         frmEquipmentOrderWrite.segOrderList.setDataAt(ligneAModifier,context.rowIndex);
         equipmentOrderWrite.modifs = true;
              }
       }
  }
equipmentOrderWrite.onQuantityEditValid = function() {
    var equipmentOrderWriteLinesCopy = equipmentOrderWrite.lines.slice();
    if ( !equipmentOrderOverview.isInventory() ) {
      equipmentOrderWriteLinesCopy.reverse();
    }  
    
	var orderMultiple = parseInt(equipmentOrderWriteLinesCopy[equipmentOrderWrite.qtyEditLineIndex].orderMultiple);
    if (!equipmentOrderOverview.isInventory()) {  
	  if (parseInt(popEquLineEdit.txtQty.text) % orderMultiple > 0) {
		popEquLineEdit.txtQty.text = Math.ceil(parseInt(popEquLineEdit.txtQty.text)/orderMultiple) * orderMultiple;
	}}
	    if (popEquLineEdit.txtQty.text==="") {equipmentOrderWriteLinesCopy[equipmentOrderWrite.qtyEditLineIndex].quantity ="NULL";
           }else { 
	        equipmentOrderWriteLinesCopy[equipmentOrderWrite.qtyEditLineIndex].quantity = parseInt(popEquLineEdit.txtQty.text);}
    if (!equipmentOrderOverview.isInventory()) {  
	    equipmentOrderWrite.displayArticles();
	    }   else {
          equipmentOrderWrite.modifs = true;
         if (equipmentOrderWrite.qtyEditLineIndex == equipmentOrderWriteLinesCopy.length-1)
            {  if (equipmentOrderWrite.qtyEditLineIndex - equipmentOrderWrite.cursor<=equipmentOrderWrite.margin) equipmentOrderWrite.displayArticles();
            }   else {
            var ligneAModifier =   frmEquipmentOrderWrite.segOrderList.selectedRowItems[0];//[articleIndex];
            //alert(JSON.stringify(ligneAModifier));
            ligneAModifier.lblQty=equipmentOrderWriteLinesCopy[equipmentOrderWrite.qtyEditLineIndex].quantity ;
              if (ligneAModifier.lblQty=='NULL') ligneAModifier.lblQty=" "; 
              else
            ligneAModifier.vbox237134513908015 = { skin : "sknVBBtnSquare" };
            //ligneAModifier.imgBin =""   ;
            //ligneAModifier.vbox237134513913801={ isVisible  : false};
            frmEquipmentOrderWrite.segOrderList.setDataAt(ligneAModifier,equipmentOrderWrite.rowIndex); 
            }
        }
	popEquLineEdit.dismiss();
}

equipmentOrderWrite.onAddressChange = function() {
	if (-1 == frmEquipmentOrderWrite.cbxDeliveryAddress.selectedKey) {
		equipmentOrderWrite.order.addressId = frmEquipmentOrderWrite.cbxDeliveryAddress.selectedKey;
		equipmentOrderWrite.order.addressType = 'none';
		
	}
	else {
		equipmentOrderWrite.order.addressId = equipmentOrderWrite.addresses[frmEquipmentOrderWrite.cbxDeliveryAddress.selectedKey].id;
		equipmentOrderWrite.order.addressType = equipmentOrderWrite.addresses[frmEquipmentOrderWrite.cbxDeliveryAddress.selectedKey].type;
	}
}

equipmentOrderWrite.onDeliveryDateChange = function() {
	var enteredDate = new Date(
			frmEquipmentOrderWrite.cldDeliveryDate.year,
			frmEquipmentOrderWrite.cldDeliveryDate.month - 1, 
			frmEquipmentOrderWrite.cldDeliveryDate.day
	);
	
	var crtDate = new Date();
	crtDate.setHours(0, 0, 0, 0);
	
	if (enteredDate.getTime() < crtDate.getTime()) {
		popupModel.showPopError("Attention : la date proposée ne peut pas être antérieure à la date d'aujourd'hui.");
	}
	equipmentOrderWrite.order.dueDate = datePrintSql(enteredDate);
}

equipmentOrderWrite.onCommentChange = function() {
	equipmentOrderWrite.order.comment = frmEquipmentOrderWrite.txtbxComment.text.substr(0, 60); 
}

equipmentOrderWrite.onItemAddClick = function() {
	equipmentOrderWrite.isSelectingCatalog = true;
	catalogSearch.resetFullSearchFields();  
	catalogSearch.catalogType = 'completeSupply';
	catalog.canSelect = articleModel.findArticleTypes('supply');
	frmCatalogSearch.show();
}

equipmentOrderWrite.valid = function() {
	var errorArguments = [];	
	var crtDate = new Date();
	crtDate.setHours(0, 0, 0, 0);

	if (equipmentOrderWrite.lines.length == 0)
		errorArguments.push(" - Au moins un article à commander");
	if ((frmEquipmentOrderWrite.cbxDeliveryAddress.selectedKey == -1 || equipmentOrderWrite.order.addressId == -1) && !equipmentOrderOverview.isInventory())
		errorArguments.push(" - Une adresse valide");
	if (validationModel.isNull(equipmentOrderWrite.order.dueDate))
		errorArguments.push(" - Une date définie");
	else if (dateFromsql(equipmentOrderWrite.order.dueDate).getTime() < crtDate.getTime())
		errorArguments.push(" - Une date valide");
	
	if (errorArguments.length > 0) {
		var errorMessage = equipmentOrderOverview.isInventory() 
			? "Cet inventaire ne peut pas être validé car il manque :\n"
			: "Cette commande ne peut pas être validée car il manque :\n";
		errorMessage += errorArguments.join("\n");
		popupModel.showPopError(errorMessage);
	} else {
		function validateCB() {
			equipmentOrderWrite.order.state = equipmentOrderOverview.isOrder() ? 'APAT' : 'INAT';
            equipmentOrderWrite.updating = true; // pour eviter de cliquer sur précédent pdt maj
			equipmentOrderWrite.save();
		}
      //test si lignes non renseignées sur inventaire avant validation
      var nb=0;
      if (equipmentOrderOverview.isInventory() ){
        for (i=0,nblignes=equipmentOrderWrite.lines.length-1;i<=nblignes;i++)
        {if (equipmentOrderWrite.lines[i].quantity=='NULL') nb+=1;}
      }
		var msg = equipmentOrderOverview.isInventory() 
			? "Souhaitez-vous valider cet inventaire ?" 
			: "Souhaitez-vous valider cette commande ?";
	if (nb>0) msg += "\nATTENTION, IL RESTE DES LIGNES NON RENSEIGNEES.\n"	;
      if (equipmentOrderWrite.order.comment=='NULL' && equipmentOrderOverview.isInventory() )msg += "COMMENTAIRE NON RENSEIGNE.\n";
      msg += " Aucune modification ne sera possible par la suite.";
		popupModel.showPopError(msg, validateCB, undefined, true);
	}
}

equipmentOrderWrite.save = function() {
	// case when order is made empty 
	if (equipmentOrderWrite.order.addressId == -1 && equipmentOrderWrite.lines.length == 0 && equipmentOrderWrite.order.dueDate == null) { // and order is in database
		if (equipmentOrderWrite.order.id != null ) { // provoque a delete push
			equipmentOrderWrite.remove();
		} 
		else { // don't save and leave
			navigationModel.doReturn();
		}
	} else {
        equipmentOrderWrite.updating = true; // pour eviter de cliquer sur précédent pdt maj
      	supplyOrder.commit(equipmentOrderWrite.order, equipmentOrderWrite.lines, equipmentOrderOverview.isInventory());
        equipmentOrderWrite.modifs = false;
		navigationModel.doReturn();
           
	}
}

equipmentOrderWrite.remove = function() {
	function delectCB() {
		supplyOrder.removeOrder(equipmentOrderWrite.order);
		navigationModel.doReturn();
	}
	
	if (!validationModel.isNull(equipmentOrderWrite.order.id)) {
		var msg = equipmentOrderOverview.isInventory() 
			? "Souhaitez-vous supprimer cette déclaration d'inventaire ?" 
			: "Souhaitez-vous supprimer cette commande et ses articles ?";
		popupModel.showPopError(msg, delectCB, undefined, true);
	} else {
		navigationModel.doReturn();
	}
}
