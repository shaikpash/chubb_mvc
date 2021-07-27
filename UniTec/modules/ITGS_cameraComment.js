cameraComment = {
  previousFormId : null,
  photoDescription : '',
  cameraBase64 : null,
  btphotoId : null,
  btphoto : null,
  precoId : null,
  isReadOnly : false
}


cameraComment.reInit = function() {
  cameraComment.previousFormId = null;
  cameraComment.photoDescription = '';
  cameraComment.cameraBase64 = null;
  cameraComment.btphotoId = null;
  cameraComment.btphoto = null;
  cameraComment.precoId = null;
  cameraComment.isReadOnly = false;
  
  frmCameraComment.txtEditPhotoComment.text = '';
  frmCameraComment.imgPhotoImage.base64 = null;
  
  cameraOverlay.reInit();
}


cameraComment.init = function() {
  var appMenu = [
    ["cameraComment.CAMERA", "", "cameraphoto.png", cameraComment.onClickCamera],
    ["cameraComment.VALID", "Valider", "check.png", cameraComment.onClickValidate],
    ["cameraComment.DEL", "Supprimer", "bin.png", cameraComment.onClickDelete]
  ];
  otis.application.createAppMenu("cameraCommentAppMenu", appMenu, sknAppmenu, sknAppmenuF);
}

 
cameraComment.onClickCamera = function() {
  if (cameraComment.isReadOnly) return;

  //Save photo description  
  cameraComment.photoDescription = frmCameraComment.txtEditPhotoComment.text;
  
  //Release Camera RawBytes 
  cameraOverlay.releaseCameraRawBytes();
  
  //Go back to the camera input
  frmCameraOverlay.show();
}


cameraComment.onClickValidate = function() {
  cameraComment.onValidate();
}


cameraComment.onClickDelete = function() {
  if (cameraComment.isReadOnly) return;
  
  cameraComment.onRemove();
}


cameraComment.preshow = function() {
  cameraComment.isReadOnly = !workOrderModel.isOnSite(workOrder) || WOValidationSignature.isValid(workOrder) || (workOrder.statusCode == 70);
  
  otis.application.setCurrentAppMenu("cameraCommentAppMenu");//Dhaval:Invocation of custom app menu
  
  frmCameraComment.lblClientReference.text = workOrder.getReference();
  frmCameraComment.hbxClientReference.backgroundColor = workOrder.color;
  frmCameraComment.hbxClientReference.focusSkin = workOrder.skin;

  //Retrieve the photo from database if there is already one, and that the camera did not take a new one
  if (!validationModel.isNull(cameraComment.btphotoId) && (validationModel.isNull(cameraComment.cameraBase64))) {
    cameraComment.btphoto = btphotosModel.findPhotoById(cameraComment.btphotoId);
    if (!validationModel.isNull(cameraComment.btphoto)) {
      cameraComment.photoDescription = cameraComment.btphoto.comment;
      cameraComment.cameraBase64 = cameraComment.btphoto.image;
    } 
  }
  
  frmCameraComment.txtEditPhotoComment.text = cameraComment.photoDescription;
  frmCameraComment.imgPhotoImage.base64 = cameraComment.cameraBase64;
}


cameraComment.onValidate = function() {
  var btid = workOrder.id;
  var cibid = null;
  
  if (!cameraComment.isReadOnly) {
    cameraComment.photoDescription = frmCameraComment.txtEditPhotoComment.text;
    if (!validationModel.isNull(cameraComment.btphotoId) && (validationModel.isNull(cameraComment.cameraBase64))) {
      cameraComment.btphoto = btphotosModel.findPhotoById(cameraComment.btphotoId);
    }    
        
    // If the photo is already created in the local data base
    if (!validationModel.isNull(cameraComment.btphoto) && !validationModel.isNull(cameraComment.btphoto.id)) {
      // If the comment or the image has been updated on the UI
      if((cameraComment.photoDescription != cameraComment.btphoto.comment) || (cameraComment.cameraBase64 != cameraComment.btphoto.image)) {
        if(cameraComment.cameraBase64 != cameraComment.btphoto.image){
          cameraComment.cameraBase64 = btphotosModel.scaleImageBase64(cameraComment.cameraBase64);
        }
        //Then update the comment and the image
        btphotosModel.updatePhotoById(cameraComment.btphoto.id, cameraComment.photoDescription, cameraComment.cameraBase64);
      }
    } else {
      //Create the new photo based on the previous main location
      if( cameraComment.previousFormId == "frmTaskOverview" ) {
        cibid = itemVerify.item.id; 
        btphotosModel.createPhotoByCustomerInstalledBase(btid, cibid, cameraComment.photoDescription, cameraComment.cameraBase64);
      } else if( cameraComment.previousFormId == "frmWOComment" ) {
        btphotosModel.createPhotoByWorkOrderId(btid, cameraComment.photoDescription, cameraComment.cameraBase64);
      } else if( cameraComment.previousFormId == "frmArticleRecommendations" ) {
        btphotosModel.createPhotoByPrecoId(btid, cameraComment.precoId, cameraComment.photoDescription, cameraComment.cameraBase64);
      } else {
        alert("La photo et le commentaire sont sans objet. Ils n'ont donc pas été enregistré.");
      }
    }
  }

  //Close form
  cameraComment.close();
}


cameraComment.onRemove = function() {
  //Delete from local data base if needed  
  function removeCB() {
    btphotosModel.removePhotoById(cameraComment.btphoto.id);

    //Close form
    cameraComment.close();
  }
  
  if (!validationModel.isNull(cameraComment.btphoto) && !validationModel.isNull(cameraComment.btphoto.id)) {
    var msg = "Souhaitez-vous supprimer cette photo?";
    popupModel.showPopError(msg, removeCB, undefined, true);
  } else {
    //Close form
    cameraComment.close();
  }
}


cameraComment.postshow = function() {
}


cameraComment.close = function() {
  //Clear global form data 
  cameraComment.reInit();

  // Try to go back from where the camera where called
  if(!validationModel.isNull(cameraComment.previousFormId)) {
    navigationModel.doReturnTo(cameraComment.previousFormId);
  } else {
    navigationModel.doReturn(); 
  }
}