//Dhaval:This file contains functionality for creating Dynamic tab header
//Dhaval:Below variable contains configuration settings for the header
var tabHdrConfig = {
  	'frmCatalogSearch':{'tabID':'tabPaneIdentify','headerId':'hbxReference',config:["Rapide","Avancée"]},
  	'frmTaskOverview':{'tabID':'tabTaskOverview','headerId':'hbxReference',config:["TP","TC","Conso", "Statut"]},
  	'frmInventory':{'tabID':'tabInventory','headerId':'hbxReferenceForm',config:["Ecart","Filtre","TP","Parc"]},
  	'frmArticleSalesSummary':{'tabID':'tabArticleSalesSummary','headerId':'hbxReferenceForm',config:["Vente","Devis"]},
  	'frmTaskOverviewInstall':{'tabID':'tabTaskOverview','headerId':'hbxReference',config:["Tâches à réaliser","Information"]},
  	//'frmItemVerify':{'tabID':'detappTabPane','headerId':'hbxReference',config:[kony.i18n.getLocalizedString("tabItemDetails"),kony.i18n.getLocalizedString("tabCharacteristics")]},
  	'frmItemVerify':{'tabID':'detappTabPane','headerId':'hbxReference',config:["Appareil","Caracteristiques"]},
  	'frmItemShow':{'tabID':'detappTabPane','headerId':'hbxReference',config:["Appareil","Caracteristiques"]},
  	'frmInventoryAllocation':{'tabID':'tabInventoryAllocation','headerId':'hbxReferenceForm',config:["Parc","À affecter"]},
  	'frmWorkOrderOverview':{'tabID':'ibtTabPane','headerId':'hbxReference',config:["BT","Cons","TP","Site","Cont","Cct"]},
  	'frmSummaryService':{'tabID':'tabPane','headerId':'hbxReference',config:["Bilan","Refusée","Restant"]},
  	'frmSummaryServiceChubb':{'tabID':'tabPane','headerId':'hbxReference',config:["Bilan","Refusée","Tâches"]},
  	'frmSummaryServiceInstall':{'tabID':'tabPane','headerId':'hbxReference',config:["Bilan","Hors Parc","Refusée","Restant"]},
  	'frmSummaryServiceInstallChubb':{'tabID':'tabPane','headerId':'hbxReference',config:["Bilan","Hors Parc","Refusée","Tâches"]},
  	'frmWorkOrders':{'tabID':'e13tabPane','headerId':'hbxReference',config:["Panier des BT","Filtre"]}
  	
}
function focusTabHdr(){
	try{
		var frmRef = kony.application.getCurrentForm();
		var config = tabHdrConfig[frmRef.id];
		kony.print("focusTabHdr frmRef.id :: "+frmRef.id);
		kony.print("focusTabHdr config :: "+config);
		if(config != null){
			var tabID = config['tabID'];
			var tabRef = frmRef[tabID];
		}
	}catch(error){
	//Ignore
	}
}
function addTabHeaders(formId, frmRef){
	var config = tabHdrConfig[formId];
	if(config != null){
		var tabID = config['tabID'];
		var tabRef = frmRef[tabID];
		tabRef.viewType = 2;
		tabRef.retainPositionInTab = false;
		tabRef.scrollsToTop = true
		tabRef.pageSkin = 'sknFrmSteel';
		var lblConfig = config['config'];
		var tabHdrId = config['headerId'];
		prePareHdr(tabHdrId, frmRef, tabRef, lblConfig);
	}
}
function addTabHeader(strFormId){
}
function prePareHdr(tabHdrId, frmRef, tabRef, config){
	if(config.length == 1){
		buildTabExtHeader(frmRef, tabHdrId);
		return;
	}
	var tabClickCallback = tabRef.onTabClick;
	tabRef.onTabClick = function(event, currentindex){
		kony.print("tabRef.onTabClick :: called");
      	
      	if(tabClickCallback!=null){
		tabClickCallback(event, currentindex);
    }
	}	
	var onTabFirstCallback = function(event){ 
		onTabFirst(tabRef, tabRef.onTabClick, 0);
	};
	var onTabPrevCallback = function (){ 
		onTabPrevious(tabRef, tabRef.onTabClick, config);
	};

  	var onTabHdr1Callback = function (){ 
		onTabHdr1(tabRef, tabRef.onTabClick, config);
	};
  	var onTabHdr2Callback = function (){ 
		onTabHdr2(tabRef, tabRef.onTabClick, config);
	};

	var onTabNextCallback = function (){
		onTabNext(tabRef, tabRef.onTabClick, config);
	};
	var onTabLastCallback = function(event){ 
		onTabLast(tabRef, tabRef.onTabClick, config.length-1);
	};						
	buildTabExtHeader(frmRef, tabHdrId, onTabFirstCallback, onTabPrevCallback, onTabHdr1Callback, onTabHdr2Callback, onTabNextCallback, onTabLastCallback);
	var postShowCallback = frmRef.postShow;
	frmRef.postShow = function(event){
		if(postShowCallback != undefined && postShowCallback != null && typeof(postShowCallback) == 'function')
			postShowCallback(event);
	}	
}
function enableFocus(btnRef){
	btnRef.setEnabled(true);
	btnRef.skin = 'sknBtnTab';
}
function disableFocus(btnRef){
	btnRef.setEnabled(false);
	btnRef.skin = 'sknBtnTabFocus';
}
function onTabFirst(tabRef, tabCallback, firstIndex){
	if(parseInt(tabRef.activeTabs)!=firstIndex){
		tabRef.activeTabs = [firstIndex];
		tabCallback(tabRef, firstIndex);
	}
}
function onTabLast(tabRef, tabCallback, lastIndex){
	if(parseInt(tabRef.activeTabs)!=lastIndex){
		tabRef.activeTabs = [lastIndex];
		tabCallback(tabRef, lastIndex);
	}
}
function onTabPrevious(tabRef, tabRefCallback, config){
	var tabIndex = parseInt(tabRef.activeTabs);
	tabRef.activeTabs = [1];
	tabRefCallback(tabRef, 1);
}
function onTabHdr1(tabRef, tabRefCallback, config){
	var tabIndex = parseInt(tabRef.activeTabs);
 	tabRef.activeTabs = [2];
	tabRefCallback(tabRef, 2);
}

function onTabHdr2(tabRef, tabRefCallback, config){
	var tabIndex = parseInt(tabRef.activeTabs);
	
 	tabRef.activeTabs = [3];
	tabRefCallback(tabRef, 3);
}

function onTabNext(tabRef, tabRefCallback, config){
	var tabIndex = parseInt(tabRef.activeTabs);	
	tabRef.activeTabs = [4];
	tabRefCallback(tabRef, 4);
}

function buildTabExtHeader(frmRef, tabHdrId, onTabFirstCallback, onTabPrevCallback, onTabHdr1Callback, onTabHdr2Callback, onTabNextCallback, onTabLastCallback){
	var wdgs = frmRef.widgets();
	for(var idx in wdgs){
		var tmpWdgs = wdgs[idx];
		if(tmpWdgs.id == tabHdrId){
			var tbHeader = createTabExtHeader(onTabFirstCallback, onTabPrevCallback, onTabHdr1Callback, onTabHdr2Callback, onTabNextCallback, onTabLastCallback, frmRef);
			var tabExt = mergeTabHdr(tmpWdgs, tbHeader);
			frmRef.replaceAt(tabExt, idx);
			break;
		}
	}
}
function mergeTabHdr(eHeader, tbHeader){
	var vhdr = new kony.ui.Box({
        "id": "vhdr",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vhdr.add(
    eHeader, tbHeader);
    var hdr2 = new kony.ui.Box({
        "id": "hdr2",
        "isVisible": true,
        "skin": "sknSegTrans",
        "focusSkin": "sknSegTrans",
        "position": constants.BOX_POSITION_AS_HEADER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hdr2.add(vhdr);
	return hdr2;
}
function createTabExtHeader(onTabFirstCallback, onTabPrevCallback, onTabHdr1Callback, onTabHdr2Callback, onTabNextCallback, onTabLastCallback, frmRef){
    var hdr1 = new kony.ui.BoxTemplate({
        "id": "hdr1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshdr1
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    function addWidgetshdr1(){
      
      var containerSize;//size of first button
      var containerSize2;//size of second button
      var containerSize3;//size of third button
      var containerSize4;//size of fourth button
      var containerSize5;//size of fifth button
      var containerSize6;//size of sixth button
      var config = tabHdrConfig[frmRef.id];
      var labels=config["config"];//We are dynamically taking the labels from configuration mentioned in tabHdrConfig
      if(labels.length == 2){//If we have two tabs
        containerSize = 50;
        containerSize2 = 50;
        if(frmRef.id == "frmWorkOrders"){
        containerSize = 60;
        containerSize2 = 40;
        }
        else if(frmRef.id == "frmItemVerify" || frmRef.id == "frmItemShow"){
        containerSize = 40;
        containerSize2 = 60;
        }
        else if(frmRef.id =="frmTaskOverviewInstall"){
        containerSize = 63;
        containerSize2 = 38;
        }
        //Arati: changed for design issue #19 Start here
      } else if(labels.length == 3) {//If we have three tabs
        containerSize = 35;
        containerSize2 = 35;
        containerSize3 = 35;
      } else if(labels.length == 4) {
        if(frmRef.id == "frmSummaryServiceInstall"  || frmRef.id == "frmSummaryServiceInstallChubb"){
        	containerSize = 20;
        	containerSize2 = 32;
          	containerSize3 = 28;
          	containerSize4 = 25;
        } else if(frmRef.id == "frmInventory"){
        	containerSize = 28;
        	containerSize2 = 28;
          	containerSize3 = 16;
          	containerSize4 = 28;
        } else {
          	containerSize = 25;
        	containerSize2 = 25;
          	containerSize3 = 25;
          	containerSize4 = 25;
        }
        //Arati: changed for design issue #19 End here
      } else if(labels.length == 5) {
        containerSize = 16;
        containerSize2 = 16;
        containerSize3 = 26;
      	containerSize4 = 16;
        containerSize5 = 27;
      } else if(labels.length == 6){	//Arati: changed for design issue #19 Start here
        containerSize = 15;
        containerSize2= 19;
        containerSize3 = 15;
        containerSize4 = 18;
        containerSize5 = 19;
        containerSize6 = 18;
      } 								//Arati: changed for design issue #19 End here
      	
        var btnTabFirst = new kony.ui.Button({//First tab
            "id": "btnTabFirst",
            "isVisible": true,
            "text": labels[0],                       
            "skin": "sknTabBtnFoc",                     //Arati: changed for design issue #19
            "focusSkin": "sknTabBtnFoc",           		//Arati: changed for design issue #19
            "onClick": onTabFirstCallback
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": true,
            "paddingInPixel": false,
            //"containerWeight": 15
          	"containerWeight": containerSize                   
        }, {
            "glowEffect": false,
            "showProgressIndicator": false
        });
        var btnTabPrev = new kony.ui.Button({//Second tab
            "id": "btnTabPrev",
            "isVisible": true,
            "text": labels[1],
            "skin": "skntabBtn",
            "focusSkin": "sknTabBtnFoc",
            "onClick": onTabPrevCallback
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": true,
            "paddingInPixel": false,
            "containerWeight": containerSize2
        }, {
            "glowEffect": false,
            "showProgressIndicator": false
        });
      
        var btnTabHdr1 = new kony.ui.Button({//Third tab
            "id": "btnTabHdr1",
            "isVisible": true,
            "text": labels[2],
            "skin": "skntabBtn",
            "focusSkin": "sknTabBtnFoc",
            "onClick": onTabHdr1Callback
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": true,
            "paddingInPixel": false,
            "containerWeight": containerSize3
        }, {
            "glowEffect": false,
            "showProgressIndicator": false
        });
      	var btnTabHdr2 = new kony.ui.Button({//Fourth tab
            "id": "btnTabHdr2",
            "isVisible": true,
            "text": labels[3],
            "skin": "skntabBtn",
            "focusSkin": "sknTabBtnFoc",
            "onClick": onTabHdr2Callback
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": true,
            "paddingInPixel": false,
            "containerWeight": containerSize4
        }, {
            "glowEffect": false,
            "showProgressIndicator": false
        });
 
        var btnTabNext = new kony.ui.Button({//Fifth tab
            "id": "btnTabNext",
            "isVisible": true,
            "text": labels[4],
            "skin": "skntabBtn",
            "focusSkin": "sknTabBtnFoc",
            "onClick": onTabNextCallback
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": true,
            "paddingInPixel": false,
            "containerWeight": containerSize5
        }, {
            "glowEffect": false,
            "showProgressIndicator": false
        });
        var btnTabLast = new kony.ui.Button({//Sixth tab
            "id": "btnTabLast",
            "isVisible": true,
            "text": labels[5],                     
            "skin": "skntabBtn",                     //Arati: changed for design issue #19			
            "focusSkin": "sknTabBtnFoc",			 //Arati: changed for design issue #19
            "onClick": onTabLastCallback			
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": true,
            "paddingInPixel": false,
            //"containerWeight": 15					//Arati: changed for catalog search tab pane
          	"containerWeight": containerSize6                
        }, {
            "glowEffect": false,
            "showProgressIndicator": false
        });
        //hdr1.add(
        //btnTabFirst, btnTabPrev, btnTabHdr, btnTabNext, btnTabLast);
      	hdr1.add(btnTabFirst, btnTabPrev, btnTabHdr1, btnTabHdr2, btnTabNext, btnTabLast);               //Arati: changed for design issue #19
      
			if(onTabFirstCallback == undefined){
				btnTabFirst.skin = 'sknTabBtnFoc';
				btnTabFirst.setEnabled(false);
	        }
	        if(onTabPrevCallback == undefined){
	        	btnTabPrev.skin = 'sknTabBtnFoc';
				btnTabPrev.setEnabled(false);
	        }
	        if(onTabNextCallback == undefined){
	        	btnTabNext.skin = 'sknTabBtnFoc';
				btnTabNext.setEnabled(false);
	        }
	        if(onTabLastCallback == undefined){
	        	btnTabLast.skin = 'sknTabBtnFoc';
				btnTabLast.setEnabled(false);
			}
        }
    return hdr1;
}