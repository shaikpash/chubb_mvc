cameraOverlay = {
  clientIsOkForPhotos: false, 
  cameraBase64: null 
}


cameraOverlay.reInit = function() {
  cameraOverlay.clientIsOkForPhotos = false;
  cameraOverlay.cameraBase64 = null;
  
  cameraOverlay.releaseCameraRawBytes();  
}


cameraOverlay.releaseCameraRawBytes = function() {
  // Generates the following error : undefined is not an object (evaluating kony.camera.releaseRawBytes)

  var cameraBytes = frmCameraOverlay.camera.rawBytes;
  frmCameraOverlay.camera.releaseRawBytes(cameraBytes);
  
  frmCameraOverlay.camera.rawBytes = null;
  frmCameraOverlay.imgCameraResult.src = "imagedrag.png";
}


cameraOverlay.init = function() {
  //Specifies the compression level or picture quality with which the captured image must be stored. 
  //You can specify the compression level value between 0 (best picture quality) and 100 (low picture quality).
  // Note : Applicable only when the imageFormat is jpeg.
  frmCameraOverlay.camera.compressionLevel=100;
  var appMenu = [
    ["cameraOverlay.BACK", "Retour", "left.png", cameraComment.onClickBack]
  ];
  otis.application.createAppMenu("cameraOverlayAppMenu", appMenu, sknAppmenu, sknAppmenuF);
}


cameraComment.onClickBack = function() {
  cameraOverlay.cancel();
}


cameraOverlay.preshow = function() {
  otis.application.setCurrentAppMenu("cameraOverlayAppMenu");//Dhaval:Invocation of custom app menu
  
  frmCameraOverlay.camera.onCapture = cameraOverlay.onCapture;
  
  frmCameraOverlay.camera.onCaptureFailed = cameraOverlay.onCaptureFailed;
  frmCameraOverlay.camera.onFailure = cameraOverlay.onFailure;
  frmCameraOverlay.camera.onImageSaveFailed = cameraOverlay.onImageSaveFailed;  
}


cameraOverlay.onCapture = function(camera, metata) {
  frmCameraOverlay.imgCameraResult.base64 = camera.base64;
  cameraOverlay.cameraBase64 = camera.base64;
  
  cameraOverlay.openCameraComment();
}


cameraOverlay.onCaptureFailed = function(camera) {
  cameraOverlay.cancel();
}


cameraOverlay.onFailure = function(camera, errorcode) {
  cameraOverlay.cancel();
}


cameraOverlay.onImageSaveFailed = function(camera, status) {
  cameraOverlay.cancel();
}


cameraOverlay.openCameraComment = function() {
  cameraComment.cameraBase64 = cameraOverlay.cameraBase64;
  frmCameraComment.show();
}


cameraOverlay.postshow = function() {
  //Retrieve all the btphoto ids created with the current workOrder.id
  var oneBtPhoto = btphotosModel.findAtLeastOnePhotoIdByBtId(workOrder.id);
  if (!cameraOverlay.clientIsOkForPhotos && (validationModel.isNull(oneBtPhoto) || validationModel.isNull(oneBtPhoto.id))) {
	popupModel.showPopError("Avez-vous l'accord du client pour la prise de photos sur site?", cameraOverlay.takePicture, undefined, true, cameraOverlay.cancel);
  } else {
  	cameraOverlay.takePicture();
  }
}

cameraOverlay.takePicture = function() {
  cameraOverlay.clientIsOkForPhotos = true;
  frmCameraOverlay.camera.takePicture();
}


cameraOverlay.cancel = function() {
  cameraComment.reInit();
  
  // Try to go back from where the camera where called
  if(!validationModel.isNull(cameraComment.previousFormId)) {
    navigationModel.doReturnTo(cameraComment.previousFormId);
  } else {
    navigationModel.doReturn(); 
  }
}
