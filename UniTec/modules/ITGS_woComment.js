var woComment = null;

woCommentText = {};

woCommentText.text = "";

var woCommentObj = function() {
	this.workOrder = null;
	this.remark = null;
	this.form = null;
	this.edit = false;
	this.textZoneZone = null;
};

woCommentObj.prototype.load = function() {
	this.workOrder = workOrder;
	
	if(validationModel.isNull(this.form)) this.form = frmWOComment;
	
	this.form.lblBTReference.text = workOrder.getReference();
	this.form.hbBTReference.backgroundColor = workOrder.color;
	this.form.hbBTReference.focusSkin = workOrder.skin;
	
	this.remark = {
		doco : this.workOrder.doco,
		id : this.workOrder.summaryId,
		comment : !validationModel.isNull(this.workOrder.summaryText) ? this.workOrder.summaryText : ''
	};
	
	this.setCommentTextZone();
	this.displayComment();
};

woCommentObj.prototype.setCommentTextZone = function() {
	this.textZone = this.edit ? this.form.txtCommentEdit : this.form.lblCommentDisplay;
	this.form.txtCommentEdit.isVisible = this.edit;
	this.form.lblCommentDisplay.isVisible = !this.edit;
};

woCommentObj.prototype.reset = function() {
	//this.remark.comment = null;
  	this.remark.comment = "";
	this.displayComment();
};

woCommentObj.prototype.clear = function() {
	this.workOrder = null;
	this.remark = null;
	this.form.txtCommentEdit.text = null;
	this.form.lblCommentDisplay.text = null;
	this.edit = false;
};

woCommentObj.prototype.displayComment = function() {
	if(!validationModel.isNull(this.remark)) this.textZone.text = this.remark.comment;
}

woCommentObj.prototype.validate = function(goBackAfterValidation) {
	if(this.textZone.text.length > 4000) {
		popupModel.showPopError("Le commentaire contient plus de 4000 caractères. Seuls les 4000 premiers caractères seront enregistrés.");
		this.remark.comment = this.textZone.text.substring(0, 4000);
    } else {
		this.remark.comment = this.textZone.text;
    } 
	var type = 'ENTETE BT';

	if(!validationModel.isNull(this.remark.id)) remarkModel.updateRemark(this.remark, type);
	else remarkModel.createRemarkByWorkOrder(this.workOrder, this.remark.comment, type);

	workOrder = workOrderModel.findWorkOrderByDoco(this.workOrder.doco);
	this.close(goBackAfterValidation);
};

woCommentObj.prototype.close = function(goBackAfterClearing) {
	this.clear();
    var goBack = (validationModel.isNull(goBackAfterClearing)) ? true : (goBackAfterClearing===true);
	if(goBack) {  
		navigationModel.doReturn();
    }
};

woCommentObj.prototype.setEditMode = function() {
	this.edit = (workOrderModel.isOnSite(workOrder) || workOrderModel.CanBeCheckedByPhone(workOrder));
}

function onWOCommentInit() {

	var menuBackBtn = ["woSummary.BACK", "Retour", "left.png", onWOCommentCloseClick];
	var menuResetBtn = ["woSummary.CLEAR", "Supprimer commentaire", "recycle.png", onWOCommentResetClick];
	var menuValidBtn = ["woSummary.VALIDATE", "Valider", "check.png", onWOCommentValidateClick];
    var menuAddCameraBtn = ["woSummary.ADDCAMERA", "", "cameraphoto.png", onWOCommentAddCameraClick];
    var menuEditCameraBtn = ["woSummary.EDITCAMERA", "", "edit.png", onWOCommentEditCameraClick];
	
	var appEditMenu = [menuBackBtn,menuResetBtn,menuValidBtn,menuAddCameraBtn];
	var appReadMenu = [menuBackBtn,menuAddCameraBtn];
    
	//Retrieve the btphoto id from database if there is already one
	var btphoto = btphotosModel.findPhotoIdByBtId(workOrder.id);
    if (!validationModel.isNull(btphoto) && !validationModel.isNull(btphoto.id)) {
        //If a photo already exists on the current work order, add the EDIT PHOTO Button
        appEditMenu.push(menuEditCameraBtn);
    } 
  
	//Dhaval:Invocation of custom app menu start
	otis.application.createAppMenu("woCommentEditAppMenu", appEditMenu, sknAppmenu, sknAppmenuF);
	otis.application.createAppMenu("woCommentReadAppMenu", appReadMenu, sknAppmenu, sknAppmenuF);
	//End
	if(validationModel.isNull(woComment)) woComment = new woCommentObj();
};

function onWOCommentPreShow() {
  frmWOComment.txtCommentEdit.text = "";
	woComment.setEditMode();
	var appMenu = woComment.edit ? "woCommentEditAppMenu" : "woCommentReadAppMenu";
	otis.application.setCurrentAppMenu(appMenu);//Dhaval:Invocation of custom app menu
	woComment.load();
};

function onWOCommentValidateClick() {
	if(!validationModel.isNull(woComment)){woComment.validate(); frmWOComment.destroy();};
};

function onWOCommentAddCameraClick() {
	if(!validationModel.isNull(woComment)) { 
      	if(woComment.edit) {
            //Save the BT/WorkOrder comment and don't do a navigationModel.doReturn() from the WoComment form 
            woComment.validate(false);
          
            var btphoto = btphotosModel.findPhotoIdByBtId(workOrder.id);
            if (validationModel.isNull(btphoto) || validationModel.isNull(btphoto.id)) {
              cameraComment.reInit();        
              cameraComment.previousFormId = "frmWOComment";
              frmCameraOverlay.show();
              frmWOComment.destroy();
            }
      	} else {
        	alert("En mode lecture aucune photo ne peut être ajoutée.");
      	}
    }
};

function onWOCommentEditCameraClick() {
	if(!validationModel.isNull(woComment)) { 
        if(woComment.edit) {
            //Save the BT/WorkOrder comment and don't do a navigationModel.doReturn() from the WoComment form 
            woComment.validate(false);
          
            var btphoto = btphotosModel.findPhotoIdByBtId(workOrder.id);
            if (!validationModel.isNull(btphoto) && !validationModel.isNull(btphoto.id)) {
                cameraComment.reInit();        
                cameraComment.btphotoId = btphoto.id;
                cameraComment.previousFormId = "frmWOComment";
                frmCameraComment.show();
                frmWOComment.destroy();
            } else {
	          	alert("Aucune photo n'existe dans ce commentaire.");
            }
        } else {
          	alert("En mode lecture aucune photo ne peut être modifiée.");
        }
    }
};

function onWOCommentCloseClick() {
	if(!validationModel.isNull(woComment)){ woComment.close(); frmWOComment.destroy();};
};

function onWOCommentResetClick() {
	if(!validationModel.isNull(woComment)){woComment.reset();};
}

function WOCommentMatchRegex(currentText){
  var regexComment = new RegExp(/^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._();:!?´,.’\/€$&@"=+*><%«‘´»'"\s-]*$/);

  if(regexComment.test(currentText)){
    frmWOComment.txtCommentEdit.text = currentText;
    woCommentText.text = currentText;
  }else{
    frmWOComment.txtCommentEdit.text = woCommentText.text;
  }

}
