itemScanFunctions = {};

/*Don't forget to paste the following xml into the appxmanifest \temp\KonyBarcode\build\winphone8\AppxManifestWP81IDE.xml:
  <Capabilities>
  ...
    <m2:DeviceCapability Name="bluetooth.rfcomm">
      <m2:Device Id="any">
        <m2:Function Type="serviceId:00001101-0000-1000-8000-00805F9B34FB" />
      </m2:Device>
    </m2:DeviceCapability>
   ...
  </Capabilities>
*/

itemScanFunctions.init = function(){
	var appMenu = [
		["summaryService.BACK", "Retour", "left.png", onClickHome]
	];

	otis.application.createAppMenu("itemScanFunctionsAppMenu", appMenu, sknAppmenu, sknAppmenuF);//Dhaval:Invocation of custom app menu

}
function onClickHome(){//Dhaval:Fix for App Menu button not working
  frmHome.show();
}
itemScanFunctions.preShow = function(){
	otis.application.setCurrentAppMenu("itemScanFunctionsAppMenu");//Dhaval:Invocation of custom app menu
	itemScanFunctions.getDevices();
}

itemScanFunctions.startScan = function (formName, startScanCB) {
  if(!formName){
    formName = kony.application.getCurrentForm();
  }

	itemScanFunctions.startScanCB = function (code, status) {
      code=(""+code.barcodestring).toUpperCase();
		//if(status == 0) {
			if (code.length == 0) {
				// Device going into sleep mode. Trigger StartRead().
				itemScanFunctions.startScan(formName);
				return;
			} else if (code == "h") {
				// Device config change success.
				popupModel.showPopError("Configuration effectuée");
			} else if (!validationModel.isNull(formName)) {
				/*if ((typeof code === 'string' && code.length == 9 && code[8] != '2' ))//Dhaval:Commented as per mail from Mathieu
					code = code + '2';
				else if (code > 99999999 && code < 1000000000)
					code = code * 10 + 2;*/
				
				// Device scan success.
				formName.txtBarCode.text = code;
				if (!validationModel.isNull(startScanCB)) {
					startScanCB(); 
				}
			//}
		}/* else if(status == 1)
			popupModel.showPopError("An error has occured - " + code); // TODO: Go to User Story 5
		else if(status == -1){
			frmItemScanConfig.btnTimeOutConfigure.isVisible = false;
		} // StopRead() success -- Do nothing*/
	}

	/*if (!validationModel.isNull(kony.store.getItem("bluetoothScanner"))) {
		ITGS.StartRead(kony.store.getItem("bluetoothScanner"), itemScanFunctions.startScanCB);
		frmItemScanConfig.btnTimeOutConfigure.isVisible = true;
	}*/
    
	barcode.captureBarcode(itemScanFunctions.startScanCB);

 

}

itemScanFunctions.stopScan = function () {
	if (!validationModel.isNull(kony.store.getItem("bluetoothScanner"))) {
		// Calls e411_startScanCB and returns status = -1
		var result = ITGS.StopRead();
	}
	frmItemScanConfig.btnTimeOutConfigure.isVisible = false;
}

// In Main Menu -> Bluetooth Device Select
itemScanFunctions.getDevices = function () {
	itemScanFunctions.getDevicesCB = function (message, hasError, count)
	{
		var devices = [];
		
		for(var i in arguments)
			if(i>=3)
				devices.push([i, arguments[i]]);
     
     
      //saurav:added else part for type error 
      else 
       devices.push(["select", "select"]);
		
		frmItemScanConfig.cbxBlueToothChoices.masterData = devices;
		
		var lastDevice = kony.store.getItem("bluetoothScanner");
		
		for(i in devices)
			if(devices[i][1] == lastDevice)
				frmItemScanConfig.cbxBlueToothChoices.selectedKey = devices[i][0];
	}
	ITGS.GetListBT(itemScanFunctions.getDevicesCB);
}

itemScanFunctions.onComboClick = function () {
	itemScanFunctions.stopScan(); 
  //saurav:added check to see weather selectedkeyvalue is null or not 
   if(null !== frmItemScanConfig.cbxBlueToothChoices.selectedKeyValue[1]){
	kony.store.setItem("bluetoothScanner", frmItemScanConfig.cbxBlueToothChoices.selectedKeyValue[1]);
   }else{
     kony.store.setItem("bluetoothScanner", "select");
     
   }
     itemScanFunctions.startScan(kony.application.getCurrentForm());
  
	
	// Show loading screen and block UI
	showSyncLoadingScreen();
	
	itemScanFunctions.itemScanTimeOutConfigurationTimerCB = function () {
		itemScanFunctions.configureTimeOut();
		kony.timer.cancel("itemScanTimeOutConfigurationTimer");
	
		// Dismiss loading screen and release UI once elements are loaded
		kony.application.dismissLoadingScreen();
	}
	kony.timer.schedule("itemScanTimeOutConfigurationTimer", itemScanFunctions.itemScanTimeOutConfigurationTimerCB, 3, true);
}

itemScanFunctions.onBtnTimeOutConfigureClick = function () {
	itemScanFunctions.configureTimeOut(frmItemScanConfig.txtTimeOutConnected.text, frmItemScanConfig.txtTimeOutNotConnected.text);
}

itemScanFunctions.configureTimeOut = function (timeOutConnected, timeOutNotConnected) {
	var timeout = databaseModel.findItemScanTimeOutConfiguration();
	if (validationModel.isNull(timeout)) {
		timeout = 30; // default timeout = 30 minutes
	}
	
	timeOutConnected = (validationModel.isNull(timeOutConnected)) ? timeout : timeOutConnected;
	timeOutNotConnected = (validationModel.isNull(timeOutNotConnected)) ? timeout : timeOutNotConnected;
	
	itemScanFunctions.configureTimeOutCBe = function (code, status) {
		itemScanFunctions.stopScan();
		if(status == 0)
			{} // Do nothing
		else if(status == 1)
			popupModel.showPopError("Configuration pas effectuée: " + code);
		else if(status == -1)
			{} // Do nothing
	}

	// Update the configuration
	ITGS.SetTimer(timeOutConnected, timeOutNotConnected, itemScanFunctions.configureTimeOutCBe);
}
