pricing = {};
pricing.logging = {};
pricing.provision = {};

pricing.getTarifficationContextByTypeAndWorkOrder = function (type, workOrder, task) {
	if (app_parameters.debug.pricing_log) {
		kony.print("#### getTarifficationContextByTypeAndWorkOrder START");
		kony.print("### type: " + type);
		kony.print("### workOrder.typeCode: " + workOrder.typeCode);	
	}


	var tarifficationContext = (workOrder.typeCode == "V") ? "V00" : ((workOrder.typeCode == "I") ? "I00" : "NA");
	
	if (workOrder.typeCode == "V" || workOrder.typeCode == "I") {
		if (type == "plannedTask" || type == "nonPlannedTask") {
			if (app_parameters.debug.pricing_log) kony.print("### task.prp0: " + task.prp0);
			callBackModel.result = null;
			
			pricing.getTarifficationContextByTypeAndWorkOrderCB = function (l_result) {
				if (!validationModel.isNull(l_result) && l_result.length > 0 && l_result[0].lineCount > 0) {
					if (type == "plannedTask") tarifficationContext = (workOrder.typeCode == "V") ? "V01" : "I01";
					else tarifficationContext = (workOrder.typeCode == "V") ? "V04" : "I04";
				} else {
					if (type == "plannedTask") tarifficationContext = (workOrder.typeCode == "V") ? "V02" : "I02";
					else tarifficationContext = (workOrder.typeCode == "V") ? "V03" : "I03";
				}
			}
	
			callBackModel.context.sql = 	
			  	"select count(id) lineCount from udc where sy = '56' and rt = 'UP' and ky = '" + task.prp0 + "'";
		
			executeSql(	callBackModel.context.sql, 
						pricing.getTarifficationContextByTypeAndWorkOrderCB,
					 	callBackModel.sqlErrorCB);
		} else if (type == "sparePart") {
			tarifficationContext = (workOrder.typeCode == "V") ? "V05" : "I05";
		} else if (type == "relatedProduct") {
			tarifficationContext = (workOrder.typeCode == "V") ? "V06" : "I06";
		} else if (type == "sale") {
			tarifficationContext = (workOrder.typeCode == "V") ? "V07" : "I07";
		}
	}
	
	pricing.logging.taskPrp0 = !validationModel.isNull(task) ? task.prp0 : "N/A";
	pricing.logging.tarifficationType = type;
	pricing.logging.tarifficationContext = tarifficationContext;
	
	if (app_parameters.debug.pricing_log) kony.print("#### getTarifficationContextByTypeAndWorkOrder END, tarifficationContext : " + tarifficationContext);
	
	return tarifficationContext;
}

pricing.makeWC = function(field, value){
	return (!value || value == 'NULL') ?
		"coalesce("+ field +", 'NULL') = 'NULL' \n" :
		field +" = '" + value.toString() + "' \n";
}


pricing.computeSalesQuoteTypeAndSubTypeForWO = function(WO) {
	var type = null;
	var subType = null;
	if (app_parameters.debug.pricing_log) kony.print("#### pricing.computeSalesQuoteTypeAndSubTypeForWO call with WO: " + JSON.stringify(WO));
	
	callBackModel.context.sql = "select SPHD from UDC where SY = '40' and RT = 'EU' and KY = '" + WO.services.substr(0, 2) + "'";
		
	function gotSPHD(res){
		if (res != null && res.length != 0 && !validationModel.isNull(res)) {
			type = res[0].SPHD.substr(0,1);
			subType = res[0].SPHD.substr(2,2);
		} else {
			kony.print('gotSPHD : no result');
		}
	}
		
	executeSql(callBackModel.context.sql, gotSPHD, callBackModel.sqlErrorCB);
	if (app_parameters.debug.pricing_log) kony.print("#### pricing.computeSalesQuoteTypeAndSubTypeForWO result : " + JSON.stringify([type, subType]));
	return [type, subType];
}

pricing.computePrice = function(articleCode, workOrder, tarifMode ){
	databaseModel.openDBExchange('Calcul tarifaire en cours...');
	if (app_parameters.debug.pricing_log) {
		kony.print("#### computePrice START");
		kony.print("### articleCode: " + articleCode);
		kony.print("### workOrder: " + JSON.stringify(workOrder));
		kony.print("### tarifMode: " + JSON.stringify(tarifMode));
	}

	var article = articleModel.findArticleByArticleId(articleCode);
	if (validationModel.isNull(article)) {
		databaseModel.closeDBExchange();
		if (app_parameters.debug.pricing_log) kony.print("### pricing.computePrice : Article not found for ITM :" + articleCode);
		return {
			'basicPrice' : null,
			'price' : null,
			'vat' : {'vat': null, 'vatCode': null, 'vatType' : null},
			'UPC1' : UPC1,
			'EUSE' : EUSE,
			'pricingOrigin' : null};
	}
	if (app_parameters.debug.pricing_log) kony.print("### pricing.computePrice : Article found for ITM :" + JSON.stringify(article));
	
	var customer = customerModel.findCustomerByAN8(workOrder.customerAN8);
	if (validationModel.isNull(customer)) {
		popupModel.showPopError("Tarification erronée (client non trouvé, AN8: " +  + JSON.stringify(workOrder.customerAN8) + "). Veuillez contacter votre support.");
		databaseModel.closeDBExchange();
		if (app_parameters.debug.pricing_log) kony.print("### pricing.computePrice : customer not found for AN8:" + workOrder.customerAN8);
		return {
			'basicPrice' : null,
			'price' : null,
			'vat' : {'vat': null, 'vatCode': null, 'vatType' : null},
			'UPC1' : UPC1,
			'EUSE' : EUSE,
			'pricingOrigin' : null};
	}
	if (app_parameters.debug.pricing_log) kony.print("### pricing.computePrice : customer found  :" + JSON.stringify(customer));
	
	var price = null;
	var discount = null;
	
	var basicPrice = pricing.getBasicPriceByArticleGroup(article);
	if (validationModel.isNull(basicPrice))
		basicPrice = pricing.getBasicPriceByArticle(article);
//	if (validationModel.isNull(basicPrice))
//		basicPrice = 0;
	if (app_parameters.debug.pricing_log) kony.print("#### basic price : " + basicPrice);
	
	var UPC1 = 'NULL';
	var EUSE = 'NULL';
	var pricingOrigin = null;
	if (!validationModel.isNull(tarifMode)) {
		if (tarifMode == 'sale'){
			var types = pricing.computeSalesQuoteTypeAndSubTypeForWO(workOrder);
			UPC1 = types[0];
			EUSE = types[1];
		} else {
			UPC1 = tarifMode.UPC1;
			if (UPC1 == "V") {
				var types = pricing.computeSalesQuoteTypeAndSubTypeForWO(workOrder);
				EUSE = types[1];
			} else {
				EUSE = !validationModel.isNull(workOrder.services) ? workOrder.services.substr(0, 2) : 'NULL';
			}
		}
	}
	
	if ('V' != UPC1) {
		pricingOrigin = pricing.provision.getProvisionType(article, UPC1, EUSE, workOrder, customer);
	}
	
	if (pricingOrigin != null) {
		price = 0;
	} else if (!validationModel.isNull(tarifMode)) {
		if (!validationModel.isNull(customer.CPGP) && customer.CPGP != 0) {
			price = pricing.getPriceByClientGroup(article, UPC1, EUSE, workOrder, customer);
			pricingOrigin = (UPC1 == 'V') ? 'NVP_CM' : 'NSE_CM';
		}
		
		if (validationModel.isNull(price)) {
			if (!validationModel.isNull(customer.CPGP) && customer.CPGP != 0) {
				price = pricing.getPriceByClientGroupForItemGroup(article, UPC1, EUSE, workOrder, customer);
				pricingOrigin = (UPC1 == 'V') ? 'NVG_CM' : 'NSG_CM';
			}
		}
		
		if (validationModel.isNull(price) && !validationModel.isNull(basicPrice)) {
			if (!validationModel.isNull(customer.CPGP) && customer.CPGP != 0) {
				discount = pricing.getDiscountByClientGroup(article, UPC1, EUSE, workOrder, customer);
			}
			if (!validationModel.isNull(discount) && discount > 0) {
				price = basicPrice - (basicPrice * discount / 100)
				pricingOrigin = (UPC1 == 'V') ? 'GVP_CM' : 'GSE_CM';
			} else {
				price = pricing.getPriceByClient(article, UPC1, EUSE, workOrder, customer);
				pricingOrigin = (UPC1 == 'V') ? 'NVP_FA' : 'NSE_FA';
			}
		}
		
		if (validationModel.isNull(price)) {
			price = pricing.getPriceByClientForItemGroup(article, UPC1, EUSE, workOrder, customer);
			pricingOrigin = (UPC1 == 'V') ? 'NVG_FA' : 'NSG_FA';
		}
		
		if (validationModel.isNull(price) && !validationModel.isNull(basicPrice)) {
			discount = pricing.getDiscountByClient(article, UPC1, EUSE, workOrder, customer);
			if (!validationModel.isNull(discount) && discount > 0) {
				price = basicPrice - (basicPrice * discount / 100)
				pricingOrigin = (UPC1 == 'V') ? 'GVP_FA' : 'GSE_FA';
			} else {
				price = basicPrice;
				pricingOrigin = 'BASIC';
			}
		}
	} else {
		price = basicPrice;
		pricingOrigin = 'BASIC';
	}
	
	// adding vat details
	var vat = pricing.getItemTaxPercentage(article.vattype, workOrder.siteAN8, workOrder);
	
	basicPrice = !validationModel.isNull(basicPrice) ? basicPrice.toFixed(2) : basicPrice;
	price = !validationModel.isNull(price) ? price.toFixed(2) : price;
	if (app_parameters.debug.pricing_log){
		kony.print("#### computePrice END (1/6), basicPrice : " + basicPrice);
		kony.print("#### computePrice END (2/6), price : " + price);
		kony.print("#### computePrice END (3/6), vat : " + JSON.stringify(vat));
		kony.print("#### computePrice END (4/6), UPC1 : " + UPC1);
		kony.print("#### computePrice END (5/6), EUSE : " + EUSE);
		kony.print("#### computePrice END (6/6), pricingOrigin : " + pricingOrigin);
	}
	// popup for debugging
	var logMessage ="### Calculated price ### \n" +
					"usualCode : " + article.usualCode  + "\n" +
					"pricingOrigin : " + pricingOrigin + "\n" +
					"basicPrice : " + basicPrice + "\n" +
					"price : " + price + "\n" +
					"vat : " + JSON.stringify(vat) + "\n" +
					"UPC1 : " + UPC1 + "\n" +
					"UPC2_CPGP : " + pricing.logging.UPC2_CPGP + "\n" +
					"UPC2 : " + pricing.logging.UPC2 + "\n" +
					"EUSE : " + EUSE + "\n" +
					((tarifMode != 'sale') ? "etappes : " + pricing.logging.etappes + "\n" : "") +
					((tarifMode != 'sale') ? "tarifficationType : " + pricing.logging.tarifficationType + "\n" : "") +
					((tarifMode != 'sale') ? "tarifficationContext : " + pricing.logging.tarifficationContext + "\n" : "") +
					"workOrderType : " + workOrder.typeCode + "\n" +
					"pricingFamily : " + article.pricingFamily  + "\n" +
					"pricingSubFamily : " + article.pricingSubFamily  + "\n" +
					"workOrderChapter : " + workOrder.chapter  + "\n" +
					"AN8 facturé : " + customer.AN8 + " / " +
					"AN8 site : " + workOrder.siteAN8 + "\n" +
					((tarifMode != 'sale') ? "motif : " + pricing.logging.reason + "\n" : "") +
					((tarifMode != 'sale') ? "prp0 : " + pricing.logging.taskPrp0 + "\n" : "") +
					"########################\n";
					
	if (!pricing.logging.inProgress) {
		pricing.logging.inProgress = true;
		pricing.logging.result = logMessage;
	} else {
		pricing.logging.result += logMessage;
	}
	
	pricing.logging.UPC2 = undefined;
	pricing.logging.UPC2_CPGP = undefined;
	
	databaseModel.closeDBExchange();
	
	return {'basicPrice' : basicPrice,
			'price' : price,
			'vat' : vat,
			'UPC1' : UPC1,
			'EUSE' : EUSE,
			'pricingOrigin' : pricingOrigin };
}

pricing.computeTarifMode = function(WO, itemCode, pricingOrigin, reason, task) {
	databaseModel.openDBExchange("Calcul du contexte tarifaire...");
	if (app_parameters.debug.pricing_log) kony.print("Call pricing.computeTarifMode with :\n" +
		JSON.stringify({
			WO : WO,
			itemCode : itemCode,
			pricingOrigin : pricingOrigin,
			reason :reason
		})
	);
	
	pricing.logging.reason = reason;
	
	var mode = null;
	var item = null;
	callBackModel.result = null;
	executeSql(
		"select \n " +
		"i.ITM articleId,  \n " +
		"i.pricingFamily pricingFamily, \n " +
		"i.pricingSubFamily pricingSubFamily \n, " +
		"i.prp0 prp0 \n" +
		"from item i \n " +
		"where i.itm = " + itemCode + " \n ",
		callBackModel.successCB,
	 	callBackModel.konyErrorCB);
	if (callBackModel.result)
		item = callBackModel.result;
	else {
		if (app_parameters.debug.pricing_log)
			kony.print("pricing.computeTarifMode : No item for given item Code : " + JSON.stringify(itemCode));
		databaseModel.closeDBExchange();
		return ;
	}
	if (app_parameters.debug.pricing_log) kony.print("pricing.computeTarifMode item found :\n" +
			JSON.stringify(item));
	
	var sqlBase = "select co.UPC1, co.EUSE, co.FRGD \n" + 
				"from F56RTCO co \n" + 
				"Where coalesce(co.UPC2, 'NULL') = 'NULL' \n" + 
				"and coalesce(co.LOB, 'NULL') = 'NULL' \n" + 
				"and co.APRP6 = 'REA' \n" + 
				"and co.APRP4 = 'MTS' \n";
	
	var aprp5 = "and " + pricing.makeWC("co.APRP5", WO.chapter);
	var naprp5 = "and " + pricing.makeWC("co.APRP5", 'NULL');
	var frgd =  "and " + pricing.makeWC("co.frgd", reason );
	var nfrgd = (reason == "GET_REASON_CODES") ? "and coalesce(co.frgd, 'NULL') <> 'NULL' \n" : "and " + pricing.makeWC("co.frgd", 'NULL'); 
	var thgd = "and " + pricing.makeWC("co.thgd", pricing.getTarifficationContextByTypeAndWorkOrder(pricingOrigin, WO, task));
	var lthgd = "and " + pricing.makeWC("co.thgd", WO.typeCode + '00'); 
	var srp3 = "and " + pricing.makeWC("co.srp3", item.pricingFamily);
	var srp4 = "and " + pricing.makeWC("co.srp4", item.pricingSubFamily);
	var lsrp3 = "and " + pricing.makeWC("co.srp3", 'ZZZ');
	var lsrp4 = "and " + pricing.makeWC("co.srp4", 'ZZZ');
	var itm = "and " + pricing.makeWC("co.ITM", item.articleId);
	var cpgp = "and " + pricing.makeWC("co.cpgp", WO.tariffAgreement);
	var euse = "and " + ((!validationModel.isNull(WO.services))?
					 pricing.makeWC("co.euse", WO.services.substr(0, 2)) :
					 pricing.makeWC("co.euse", 'NULL'));
	var neuse = "and " + pricing.makeWC("co.euse", 'NULL');
	
	var algo = [];
	
	if (!validationModel.isNull(reason) && reason != "GET_REASON_CODES"){
		algo = algo.concat([
			[sqlBase, aprp5, euse, frgd, thgd, itm, cpgp], //1	
			[sqlBase, aprp5, euse, frgd, thgd, srp3, srp4, cpgp], //2	
			[sqlBase, aprp5, euse, frgd, thgd, itm], //3	
			[sqlBase, aprp5, euse, frgd, thgd, srp3, srp4], //4.0	
			[sqlBase, aprp5, euse, frgd, thgd, srp3, lsrp4], //4.1	
			[sqlBase, aprp5, euse, frgd, thgd, lsrp3, lsrp4], //4.1	
			[sqlBase, aprp5, euse, frgd, lthgd, srp3, srp4], //5.0	
			[sqlBase, aprp5, euse, frgd, lthgd, srp3, lsrp4], //5.1		
			[sqlBase, aprp5, euse, frgd, lthgd, lsrp3, lsrp4], //5.1	
			[sqlBase, aprp5, neuse, frgd, thgd, srp3, srp4], //4.0	
			[sqlBase, aprp5, neuse, frgd, thgd, srp3, lsrp4], //4.1	
			[sqlBase, aprp5, neuse, frgd, thgd, lsrp3, lsrp4], //4.1	
			[sqlBase, aprp5, neuse, frgd, lthgd, srp3, srp4], //5.0	
			[sqlBase, aprp5, neuse, frgd, lthgd, srp3, lsrp4], //5.1	
			[sqlBase, aprp5, neuse, frgd, lthgd, lsrp3, lsrp4], //5.1
			[sqlBase, naprp5, euse, frgd, thgd, itm, cpgp], //1	
			[sqlBase, naprp5, euse, frgd, thgd, srp3, srp4, cpgp], //2	
			[sqlBase, naprp5, euse, frgd, thgd, itm], //3	
			[sqlBase, naprp5, euse, frgd, thgd, srp3, srp4], //4.0	
			[sqlBase, naprp5, euse, frgd, thgd, srp3, lsrp4], //4.1	
			[sqlBase, naprp5, euse, frgd, thgd, lsrp3, lsrp4], //4.1	
			[sqlBase, naprp5, euse, frgd, lthgd, srp3, srp4], //5.0	
			[sqlBase, naprp5, euse, frgd, lthgd, srp3, lsrp4], //5.1		
			[sqlBase, naprp5, euse, frgd, lthgd, lsrp3, lsrp4], //5.1	
			[sqlBase, naprp5, neuse, frgd, thgd, srp3, srp4], //4.0	
			[sqlBase, naprp5, neuse, frgd, thgd, srp3, lsrp4], //4.1	
			[sqlBase, naprp5, neuse, frgd, thgd, lsrp3, lsrp4], //4.1	
			[sqlBase, naprp5, neuse, frgd, lthgd, srp3, srp4], //5.0	
			[sqlBase, naprp5, neuse, frgd, lthgd, srp3, lsrp4], //5.1	
			[sqlBase, naprp5, neuse, frgd, lthgd, lsrp3, lsrp4] //5.1
		]);
	}
	
	algo = algo.concat([
		[sqlBase, aprp5, euse, nfrgd, thgd, itm, cpgp], //1 //nfrgd
		[sqlBase, aprp5, euse, nfrgd, thgd, srp3, srp4, cpgp], //2
		[sqlBase, aprp5, euse, nfrgd, thgd, itm], //3
		[sqlBase, aprp5, euse, nfrgd, thgd, srp3, srp4], //4.0
		[sqlBase, aprp5, euse, nfrgd, thgd, srp3, lsrp4], //4.1
		[sqlBase, aprp5, euse, nfrgd, thgd, lsrp3, lsrp4], //4.1
		[sqlBase, aprp5, euse, nfrgd, lthgd, srp3, srp4], //5.0
		[sqlBase, aprp5, euse, nfrgd, lthgd, srp3, lsrp4], //5.1
		[sqlBase, aprp5, euse, nfrgd, lthgd, lsrp3, lsrp4], //5.1
		[sqlBase, aprp5, neuse, nfrgd, thgd, srp3, srp4], //4.0
		[sqlBase, aprp5, neuse, nfrgd, thgd, srp3, lsrp4], //4.1
		[sqlBase, aprp5, neuse, nfrgd, thgd, lsrp3, lsrp4], //4.1
		[sqlBase, aprp5, neuse, nfrgd, lthgd, srp3, srp4], //5.0
		[sqlBase, aprp5, neuse, nfrgd, lthgd, srp3, lsrp4], //5.1
		[sqlBase, aprp5, neuse, nfrgd, lthgd, lsrp3, lsrp4], //5.1
		[sqlBase, naprp5, euse, nfrgd, thgd, itm, cpgp], //1 //nfrgd
		[sqlBase, naprp5, euse, nfrgd, thgd, srp3, srp4, cpgp], //2
		[sqlBase, naprp5, euse, nfrgd, thgd, itm], //3
		[sqlBase, naprp5, euse, nfrgd, thgd, srp3, srp4], //4.0
		[sqlBase, naprp5, euse, nfrgd, thgd, srp3, lsrp4], //4.1
		[sqlBase, naprp5, euse, nfrgd, thgd, lsrp3, lsrp4], //4.1
		[sqlBase, naprp5, euse, nfrgd, lthgd, srp3, srp4], //5.0
		[sqlBase, naprp5, euse, nfrgd, lthgd, srp3, lsrp4], //5.1
		[sqlBase, naprp5, euse, nfrgd, lthgd, lsrp3, lsrp4], //5.1
		[sqlBase, naprp5, neuse, nfrgd, thgd, srp3, srp4], //4.0
		[sqlBase, naprp5, neuse, nfrgd, thgd, srp3, lsrp4], //4.1
		[sqlBase, naprp5, neuse, nfrgd, thgd, lsrp3, lsrp4], //4.1
		[sqlBase, naprp5, neuse, nfrgd, lthgd, srp3, srp4], //5.0
		[sqlBase, naprp5, neuse, nfrgd, lthgd, srp3, lsrp4], //5.1
		[sqlBase, naprp5, neuse, nfrgd, lthgd, lsrp3, lsrp4] //5.1
	]);
	
	function computeTarifModeCB(res){
		if (!validationModel.isNull(res) && res.length >0){
			if (reason == "GET_REASON_CODES") {
				if (validationModel.isNull(mode)) 
					mode = { FRGD: [] };
				for (var i = 0 ; i < res.length; i++) {
					mode.FRGD.push(res[i].FRGD);
				}
			} else {
				if (!validationModel.isNull(res[0].UPC1))
					mode = { UPC1: res[0].UPC1, EUSE: res[0].EUSE };
			}
		}
	}
	
	for (var i = 0 ; i < algo.length; i++){
		var s = algo[i].join('');
		executeSql(
			s,
			computeTarifModeCB,
			eventErrorCallBack);
			
		if (!validationModel.isNull(mode)) {
			if (app_parameters.debug.pricing_log) kony.print("pricing.computeTarifMode end of Algo step : " + i + "\n result : " + JSON.stringify(mode));
			if (reason != "GET_REASON_CODES") {
				pricing.logging.etappes = i+1;
				break;
			}
		}
	}
	
	if (validationModel.isNull(mode)) {
		if (app_parameters.debug.pricing_log) kony.print("pricing.computeTarifMode - could not find tarif mode.");
	}
	databaseModel.closeDBExchange();
	return mode;
}


pricing.getItemTaxPercentage = function (type, siteAn8, workOrder) {
	/*return return {
		'vat' : vat,
		'vatCode' : foundVATCode,
		'vatType' :  foundVATType};*/

	if (app_parameters.debug.pricing_log) kony.print("getItemTaxPercentage: " + 
		JSON.stringify([type, siteAn8]));
	var vat = 0;
	var foundVATCode = undefined;
	var foundVATType = undefined;
	
	function getSiteVAT() {
		callBackModel.context.sql = "select coalesce(TXR1, 0) TXR1, TXA1, LITM from VAT \n"+
			"where TXA1 = (select taxzone from Customer where AN8 = " + siteAn8 + " and Originalid = 0) \n" +
			"and coalesce (LITM, 'NULL') = 'NULL' and date('now') > EFTJ and date('now') < EXDJ";
		if (app_parameters.debug.pricing_log) kony.print("getSiteVATCB ");
		
		callBackModel.result = undefined;
		executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
		
		if (!validationModel.isNull(callBackModel.result)) {
			foundVATCode = callBackModel.result.TXA1;
			foundVATType = "Y";
			vat = validationModel.isNull(callBackModel.result.TXR1) ? 0 : callBackModel.result.TXR1; 
		} else {
			foundVATCode = null;
			foundVATType = "N";
			vat = 0;
		}
	}
	
	
	function getItemVAT(){
		callBackModel.context.sql = "select coalesce(TXR1, 0) TXR1, TXA1, LITM from VAT \n" +
			"where TXA1 = (select taxzone from Customer where AN8 = " + siteAn8 + " and Originalid = 0) \n"+
			"and substr(LITM,-1) = '" + type + "' and date('now') > EFTJ and date('now') < EXDJ";
		
		if (app_parameters.debug.pricing_log) kony.print("getItemVAT");
		
		callBackModel.result = undefined;
		executeSql(callBackModel.context.sql, callBackModel.successCB, callBackModel.sqlErrorCB);
		
		if (app_parameters.debug.pricing_log) kony.print("getItemVAT response: " + JSON.stringify(callBackModel.result));
		
		if (!validationModel.isNull(callBackModel.result)) {
			foundVATCode = callBackModel.result.TXA1;
			foundVATType = "Y";
			vat = validationModel.isNull(callBackModel.result.TXR1)? 0 : callBackModel.result.TXR1; 
		} else {
			getSiteVAT();
		}
	}
	
	if (type == "N") {
		foundVATCode = null;
		foundVATType = "N";
	 	vat = 0;
	}else if (type == "Y") {
		getSiteVAT();

	} else {
		getItemVAT();
	}
	
	if (app_parameters.debug.pricing_log) kony.print("pricing.getItemTaxPercentage out: " + 
		JSON.stringify([vat, foundVATCode, foundVATType]));
	return {
		'vatPercentage' : vat,
		'vatCode' : foundVATCode,
		'vatType' :  foundVATType};

}

pricing.getPriceByClientGroup = function (article, UPC1, EUSE, workOrder, customer) {
	if (app_parameters.debug.pricing_log) {
		kony.print("#### 1 getPriceByClientGroup START");
		kony.print("### usualcode: " + article.usualCode);
		kony.print("### UPC1: " + UPC1);
		kony.print("### EUSE: " + EUSE);
		kony.print("### APRP5 (Chapter): " + workOrder.chapter);
		kony.print("### CPGP: " + customer.CPGP);
	}

	callBackModel.result = null;
	
	callBackModel.context.sql = 
	  "select pg.FVTR value " + 
      "from PriceGridCPGP pg " +
      "inner join Item i on pg.ITM = i.ITM " +
      //"inner join UDC u on i.pricingFamily = u.KY " +
      //"inner join UDC u2 on i.pricingSubFamily = u2.KY " + 
      "where i.usualcode = '" + article.usualCode + "' " +
      //"and u.SY = '41' and u.RT = 'S3' " +
      //"and u2.SY = '41' and u2.RT = 'S4' " +
	  "and pg.UOM = '" + article.measurementUnit + "' " +
      "and pg.BSCD = 0 " +
      "and pg.UPC1 = '" + UPC1 + "' " +
      "and pg.EUSE = '" + EUSE  + "' " +
      "and pg.APRP5 = '" + workOrder.chapter + "' " +
      "and pg.APRP6 = 'PAN' " +
      "and pg.CPGP = '" + customer.CPGP + "' " +
      "and date('now') >= pg.EFTJ " + 
      "and date('now') <= pg.EXDJ ";
      //"and pg.EXDJ = (select min(EXDJ) from PriceGrid where ITM = pg.ITM and BSCD = pg.BSCD  " + 
      //"and UPC1 = pg.UPC1 and EUSE = pg.EUSE and date('now') <= EXDJ and date('now') >= EFTJ and CPGP = pg.CPGP and APRP6 = pg.APRP6 and APRP5 = pg.APRP5) " +
      //"and pg.EFTJ = (select max(EFTJ) from PriceGrid where ITM = pg.ITM and BSCD = pg.BSCD  " + 
      //"and UPC1 = pg.UPC1 and EUSE = pg.EUSE and date('now') <= EXDJ and date('now') >= EFTJ and CPGP = pg.CPGP and APRP6 = pg.APRP6 and APRP5 = pg.APRP5) limit 1";

	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
	
	if (app_parameters.debug.pricing_log) kony.print("#### 1 getPriceByClientGroup END, price: " + callBackModel.result);
	return callBackModel.result;
}

pricing.getPriceByClientGroupForItemGroup = function (article, UPC1, EUSE, workOrder, customer) {
	if (app_parameters.debug.pricing_log){
		kony.print("#### 1B getPriceByClientGroupForItemGroup START");
		kony.print("### usualcode: " + article.usualCode);
		kony.print("### UPC1: " + UPC1);
		kony.print("### EUSE: " + EUSE);
		kony.print("### APRP5 (Chapter): " + workOrder.chapter);
		kony.print("### CPGP: " + customer.CPGP);
	}

	callBackModel.result = null;
	
	callBackModel.context.sql = 
	  "select pg.FVTR value " + 
      "from PriceGridCPGP pg " +
      "inner join Item i on pg.PRGR = i.PRGR and COALESCE(i.PRGR, 'NULL') <> 'NULL' " + 
      "where i.usualcode = '" + article.usualCode + "' " +
	  "and pg.UOM = '" + article.measurementUnit + "' " +
      "and pg.BSCD = 0 " +
      "and pg.UPC1 = '" + UPC1 + "' " +
      "and pg.EUSE = '" + EUSE  + "' " +
      "and pg.APRP5 = '" + workOrder.chapter + "' " +
      "and pg.APRP6 = 'PAN' " +
      "and pg.CPGP = '" + customer.CPGP + "' " +
      "and date('now') >= pg.EFTJ " + 
      "and date('now') <= pg.EXDJ ";

	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
	if (app_parameters.debug.pricing_log) kony.print("#### 1B getPriceByClientGroupForItemGroup END, price : " + callBackModel.result);
	return callBackModel.result;
}

pricing.getDiscountByClientGroup = function (article, UPC1, EUSE, workOrder, customer) {
	if (app_parameters.debug.pricing_log) {
		kony.print("#### getDiscountByClientGroup START");
		kony.print("### IGP1 (Pricing Family): " + article.pricingFamily);
		kony.print("### IGP2 (Pricing SubFamily): " + article.pricingSubFamily);
		kony.print("### EUSE: " + EUSE);
		kony.print("### CPGP: " + customer.CPGP);
	}

	callBackModel.result = 0;
	
	pricing.getDiscountByClientGroupCB = function(l_result) {
		if (!validationModel.isNull(l_result) && l_result.length > 0) {
			var UPC2 = l_result[0].value;
			pricing.logging.UPC2_CPGP = UPC2;
			if (app_parameters.debug.pricing_log) {
				kony.print("#### getDiscountByClientGroupCB START");
				kony.print("### IGP1 (Pricing Family): " + article.pricingFamily);
				kony.print("### IGP2 (Pricing SubFamily): " + article.pricingSubFamily);
				kony.print("### UPC1: " + UPC1);
				kony.print("### EUSE: " + EUSE);
				kony.print("### SDV1: " + UPC2);
				kony.print("### APRP5 (Chapter): " + workOrder.chapter);
			}
			var selectSQL = "select (case pg.FVTR when 'NULL' then 0 when NULL then 0 else pg.FVTR end) value ";
			var whereSQL = "where pg.IGP1 = '" + article.pricingFamily + "' " +
		        "and pg.IGP2 = '" + article.pricingSubFamily + "' " +
		        //"and pg.BSCD in (1,2) " +
		        "and pg.UPC1 = '" + UPC1 + "' " +
		        "and pg.EUSE = '" + EUSE + "' " +
		        "and pg.SDV1 = '" + UPC2 + "' " +
		        "and pg.APRP5 = '" + workOrder.chapter + "' " +
		        "and pg.APRP6 = 'GRI' " +
		        "and date('now') >= pg.EFTJ " + 
		        "and date('now') <= pg.EXDJ limit 1";
		        
			callBackModel.context.sql = selectSQL + "from PriceGridNULL pg " + whereSQL;
			executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
					 	
			if(validationModel.isNull(callBackModel.result)) {
				callBackModel.context.sql = selectSQL + "from PriceGridAN8 pg " + whereSQL;
				executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
			}
			if(validationModel.isNull(callBackModel.result)) {
				callBackModel.context.sql = selectSQL + "from PriceGridCPGP pg " + whereSQL;
				executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
			}
		}
	}
	
	callBackModel.context.sql = 
	  "select pg.UPC2 value " +   
      "from F56TARC_CPGP pg " +   
      "where pg.SRP3 = '" + article.pricingFamily + "' " +
      "and pg.SRP4 = '" + article.pricingSubFamily + "' " +  
      "and pg.EUSE = '" + EUSE + "' " + 
      "and pg.UPC1 = '" + UPC1 + "' " + 
      "and pg.CPGP = '" + customer.CPGP + "' " +  
      "and date('now') >= pg.EFTJ " +   
      "and date('now') <= pg.EXDJ limit 1";
      //"and pg.EXDJ = (select min(EXDJ) from F56TARC where " + 
      //"UPC1 = pg.UPC1 and EUSE = pg.EUSE and date('now') <= EXDJ and date('now') >= EFTJ and CPGP = pg.CPGP ) " + 
      //"and pg.EFTJ = (select max(EFTJ) from F56TARC where " + 
      //"UPC1 = pg.UPC1 and EUSE = pg.EUSE and date('now') <= EXDJ and date('now') >= EFTJ and CPGP = pg.CPGP ) limit 1 ";

	executeSql(callBackModel.context.sql, pricing.getDiscountByClientGroupCB, callBackModel.sqlErrorCB);

	var discount = Math.abs(callBackModel.result);
	if (app_parameters.debug.pricing_log) kony.print("#### getDiscountByClientGroup END, discount: " + discount);
	return discount;
}

pricing.getPriceByClient = function (article, UPC1, EUSE, workOrder, customer) {
	if (app_parameters.debug.pricing_log) {
		kony.print("#### 3 getPriceByClient START");
		kony.print("### usualcode: " + article.usualCode);
		kony.print("### UPC1: " + UPC1);
		kony.print("### EUSE: " + EUSE);
		kony.print("### APRP5 (Chapter): " + workOrder.chapter);
		kony.print("### AN8: " + customer.AN8);
	}

	callBackModel.result = null;

	callBackModel.context.sql = 
	  "select (case pg.FVTR when 'NULL' then 0 when NULL then 0 else pg.FVTR end) value " + 
      "from PriceGridAN8 pg inner join Item i on pg.ITM = i.ITM " +
      //"inner join UDC u on i.pricingFamily = u.KY " +
      //"inner join UDC u2 on i.pricingSubFamily = u2.KY " + 
      //"where u.SY = '41' and u.RT = 'S3' " +
      //"and u2.SY = '41' and u2.RT = 'S4' " +
      "where i.usualcode = '" + article.usualCode + "' " +
      "and pg.UPC1 = '" + UPC1 + "' " +
      "and pg.EUSE = '" + EUSE + "' " +
      "and pg.AN8 = " + customer.AN8 + " " + 
      "and pg.UOM = '" + article.measurementUnit + "' " +
      "and pg.BSCD = 0 " +
      "and pg.APRP5 = '" + workOrder.chapter + "' " +
      "and pg.APRP6 = 'PAN' " +
      "and date('now') >= pg.EFTJ " + 
      "and date('now') <= pg.EXDJ limit 1";
      //"and pg.EXDJ = (select min(EXDJ) from PriceGrid where " + 
      //"UPC1 = pg.UPC1 and EUSE = pg.EUSE and ITM = pg.ITM and BSCD = pg.BSCD and APRP6 = pg.APRP6 and APRP5 = pg.APRP5 and date('now') <= EXDJ and date('now') >= EFTJ and AN8 = pg.AN8) " +
      //"and pg.EFTJ = (select max(EFTJ) from PriceGrid where " + 
      //"UPC1 = pg.UPC1 and EUSE = pg.EUSE and ITM = pg.ITM and BSCD = pg.BSCD and APRP6 = pg.APRP6 and APRP5 = pg.APRP5 and date('now') <= EXDJ and date('now') >= EFTJ and AN8 = pg.AN8) limit 1";

	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);

	if (app_parameters.debug.pricing_log) kony.print("#### 3 getPriceByClient END, price : " + callBackModel.result);
	return callBackModel.result;
}

pricing.getPriceByClientForItemGroup = function (article, UPC1, EUSE, workOrder, customer) {
	if (app_parameters.debug.pricing_log) {
		kony.print("#### 3B getPriceByClientForItemGroup START");
		kony.print("### usualcode: " + article.usualCode);
		kony.print("### UPC1: " + UPC1);
		kony.print("### EUSE: " + EUSE);
		kony.print("### APRP5 (Chapter): " + workOrder.chapter);
		kony.print("### AN8: " + customer.AN8);
	}

	callBackModel.result = null;

	callBackModel.context.sql = 
	  "select (case pg.FVTR when 'NULL' then 0 when NULL then 0 else pg.FVTR end) value " + 
      "from PriceGridAN8 pg inner join Item i on pg.PRGR = i.PRGR and COALESCE(i.PRGR, 'NULL') <> 'NULL' " +
      "where i.usualcode = '" + article.usualCode + "' " +
      "and pg.UPC1 = '" + UPC1 + "' " +
      "and pg.EUSE = '" + EUSE + "' " +
      "and pg.AN8 = " + customer.AN8 + " " + 
      "and pg.UOM = '" + article.measurementUnit + "' " +
      "and pg.BSCD = 0 " +
      "and pg.APRP5 = '" + workOrder.chapter + "' " +
      "and pg.APRP6 = 'PAN' " +
      "and date('now') >= pg.EFTJ " + 
      "and date('now') <= pg.EXDJ limit 1";

	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
	if (app_parameters.debug.pricing_log) kony.print("#### 3B getPriceByClientForItemGroup END, price: " + callBackModel.result);
	return callBackModel.result;
}

pricing.getDiscountByClient = function (article, UPC1, EUSE, workOrder, customer) {
	if (app_parameters.debug.pricing_log) {
		kony.print("#### getDiscountByClient START");
		kony.print("### usualcode: " + article.usualCode);
		kony.print("### UPC1: " + UPC1);
		kony.print("### EUSE: " + EUSE);
		kony.print("### AN8: " + customer.AN8);
	}

	callBackModel.result = 0;
	
	pricing.getDiscountByClientCB = function(l_result) {
		if (app_parameters.debug.pricing_log) kony.print("#### getDiscountByClient END, result : " + JSON.stringify(l_result));
	
		if (!validationModel.isNull(l_result) && l_result.length > 0) {
			var UPC2 = l_result[0].value;
			pricing.logging.UPC2 = UPC2;
			if (app_parameters.debug.pricing_log) {
				kony.print("#### getDiscountByClientCB START");
				kony.print("### IGP1 (Pricing Family): " + article.pricingFamily);
				kony.print("### IGP2 (Pricing SubFamily): " + article.pricingSubFamily);
				kony.print("### UPC1: " + UPC1);
				kony.print("### EUSE: " + EUSE);
				kony.print("### SDV1: " + UPC2);
				kony.print("### APRP5 (Chapter): " + workOrder.chapter);
			}
			callBackModel.context.sql =
				"select (case pg.FVTR when 'NULL' then 0 when NULL then 0 else pg.FVTR end) value " +
				"from PriceGridNULL pg " +
				"where pg.IGP1 = '" + article.pricingFamily + "' " +
		        "and pg.IGP2 = '" + article.pricingSubFamily + "' " +
		        "and pg.UPC1 = '" + UPC1 + "' " +
		        "and pg.EUSE = '" + EUSE + "' " +
		        "and pg.SDV1 = '" + UPC2 + "' " +
		        "and pg.APRP5 = '" + workOrder.chapter + "' " +
		        "and pg.APRP6 = 'GRI' " +
		        "and date('now') >= pg.EFTJ " + 
		        "and date('now') <= pg.EXDJ limit 1";
			executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
		}
	}
	
	callBackModel.context.sql = 
	  	"select pg.UPC2 value " + 
	    "from F56TARC pg " +
	    //"inner join Item i on pg.SRP3 = i.pricingFamily and pg.SRP4 = i.pricingSubFamily " +
	    //"inner join UDC u on i.pricingFamily = u.KY " +
	    //"inner join UDC u2 on i.pricingSubFamily = u2.KY " + 
	    //"where i.usualcode = '" + article.usualCode + "' " + 
	    //"and u.SY = '41' and u.RT = 'S3' " +
	    //"and u2.SY = '41' and u2.RT = 'S4' " +
	    "where pg.SRP3 = '" + article.pricingFamily + "' " +
		"and pg.SRP4 = '" + article.pricingSubFamily + "' " +
	    "and pg.UPC1 = '" + UPC1 + "' " +
	    "and pg.EUSE = '" + EUSE + "' " +
	    "and pg.AN8 = " + customer.AN8 + " " +
	    "and date('now') >= pg.EFTJ " + 
	    "and date('now') <= pg.EXDJ limit 1"; 
	    //"and pg.EXDJ = (select min(EXDJ) from PriceGrid where " + 
	    //"UPC1 = pg.UPC1 and EUSE = pg.EUSE and UPC2 = pg.UPC2 and SRP3 = pg.SRP3 and SRP4 = pg.SRP4 and date('now') <= EXDJ and date('now') >= EFTJ and AN8 = pg.AN8) " +
	    //"and pg.EFTJ = (select max(EFTJ) from PriceGrid where " + 
	    //"UPC1 = pg.UPC1 and EUSE = pg.EUSE and UPC2 = pg.UPC2 and SRP3 = pg.SRP3 and SRP4 = pg.SRP4 and date('now') <= EXDJ and date('now') >= EFTJ and AN8 = pg.AN8) limit 1";

	executeSql(	callBackModel.context.sql, 
				pricing.getDiscountByClientCB,
			 	callBackModel.sqlErrorCB);

	var discount = Math.abs(callBackModel.result);
	if (app_parameters.debug.pricing_log) kony.print("#### getDiscountByClient END, discount: " + discount);
	return discount;
}

pricing.getBasicPriceByArticle = function (article) {
	if (app_parameters.debug.pricing_log) {
		kony.print("#### getBasicPriceByArticle START - usualcode: " + article.usualCode);
		kony.print("### usualcode: " + article.usualCode);
	}

	callBackModel.result = null;

	callBackModel.context.sql = 
	  	"select bp.UPRC value " + 
		"from BasicPrice bp inner join Item i on bp.ITM = i.ITM and date('now') <= bp.EXDJ  and date('now') >= bp.EFTJ and bp.EXDJ = (select min(EXDJ) from BasicPrice where ITM = i.ITM and date('now') < EXDJ) " +
		"where i.usualcode = '" + article.usualCode + "' and bp.CPGP = 'NULL' limit 1";

	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
	if (app_parameters.debug.pricing_log) kony.print("#### getBasicPriceByArticle END - price: " + callBackModel.result);
	return callBackModel.result;
}

pricing.getBasicPriceByArticleGroup = function (article) {
	if (app_parameters.debug.pricing_log) kony.print("#### getBasicPriceByArticleGroup START - usualcode: " + article.usualCode);

	callBackModel.result = null;
	callBackModel.context.sql = 
		"select bp.UPRC value " +
		"from Item i " +
		"inner join Item item_group on i.PRGR = item_group.usualcode " +
		"inner join BasicPrice bp "+
			"on item_group.ITM = bp.ITM and date('now') <= bp.EXDJ  and date('now') >= bp.EFTJ and bp.EXDJ = (select min(EXDJ) from BasicPrice where ITM = item_group.ITM and date('now') < EXDJ) "+
		"where i.usualcode = '" + article.usualCode + "' and bp.CPGP = 'NULL' and i.PRGR <> 'NULL' limit 1";

	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);
	if (app_parameters.debug.pricing_log) kony.print("#### getBasicPriceByArticleGroup END - price: " + callBackModel.result);
	return callBackModel.result;
}

pricing.getOneShotDiscount = function (workOrder) {
	if (app_parameters.debug.pricing_log){
		kony.print("#### getOneShotDiscount START");
		kony.print("### workOrder.chapter: " + workOrder.chapter);
	}

	callBackModel.result = undefined;
	var sql = 1;
	
	pricing.getOneShotDiscountCB = function(l_result) {
		if (app_parameters.debug.pricing_log) kony.print("#### getOneShotDiscount/getOneShotDiscountCB END, discount : " + JSON.stringify(l_result));
	
		if (!validationModel.isNull(l_result) && l_result.length > 0) {
			callBackModel.result = {};
			for (var i = 0 ; i < l_result.length; i++){
				if (!callBackModel.result.hasOwnProperty([Math.abs(l_result[i].FVTR)])) {
					if (!callBackModel.result.hasOwnProperty("minDiscount") ||
						Math.abs(l_result[i].FVTR) < callBackModel.result.minDiscount) 
							callBackModel.result.minDiscount = Math.abs(l_result[i].FVTR);
					callBackModel.result[Math.abs(l_result[i].FVTR)] = [{UPC1: l_result[i].UPC1, EUSE: l_result[i].EUSE}]
				} else {
					callBackModel.result[Math.abs(l_result[i].FVTR)].push({UPC1: l_result[i].UPC1, EUSE: l_result[i].EUSE})
				}
			}
		} else if (sql == 1) {
			if (app_parameters.debug.pricing_log) kony.print("#### getOneShotDiscountCB START");
			sql = 2;
			
			callBackModel.context.sql = 
			  	"select distinct tpg.FVTR, tpg.UPC1, tpg.EUSE from TargetPriceGrid tpg  " +  
		      	"where tpg.APRP6 = 'ROT' " +
		      	"and COALESCE(tpg.FVTR,'NULL') <> 'NULL' " +
		      	"and COALESCE(tpg.APRP5,'NULL') = 'NULL'";
		      	//and ifnull(tpg.AN8,'NULL') = 'NULL' " +
		      	//"and date('now') <= tpg.EXDJ and tpg.EXDJ = (select min(EXDJ) from TargetPriceGrid where UPC1 = '" + UPC1 + "' " + 
		      	//"and EUSE = '" + EUSE + "' and APRP6 = 'ROT' and COALESCE(tpg.APRP5,'NULL') = 'NULL' " +
			  	//"and ifnull(tpg.AN8,'NULL') = 'NULL' and date('now') <= EXDJ) limit 1";
				
			executeSql(	callBackModel.context.sql, 
						pricing.getOneShotDiscountCB,
					 	callBackModel.sqlErrorCB);
		}
	}

	callBackModel.context.sql = 
	  	"select distinct tpg.FVTR, tpg.UPC1, tpg.EUSE from TargetPriceGrid tpg  " +  
      	"where tpg.APRP6 = 'ROT' " +
      	"and COALESCE(tpg.FVTR,'NULL') <> 'NULL' " +
      	"and COALESCE(tpg.APRP5,'NULL') = '" + workOrder.chapter + "'"; 
      	// and ifnull(tpg.AN8,'NULL') = 'NULL' " +
      	//"and date('now') <= tpg.EXDJ and tpg.EXDJ = (select min(EXDJ) from TargetPriceGrid where UPC1 = '" + UPC1 + "' " + 
      	//"and EUSE = '" + EUSE + "' and APRP6 = 'ROT' and COALESCE(tpg.APRP5,'NULL') = '" + workOrder.chapter + "' " +
	  	//"and ifnull(tpg.AN8,'NULL') = 'NULL' and date('now') <= EXDJ) limit 1";

	executeSql(	callBackModel.context.sql, 
				pricing.getOneShotDiscountCB,
			 	callBackModel.sqlErrorCB);

	return callBackModel.result;
}

pricing.allowedOriginForDiscount = function () {
	return ['GVP_CM', 'GSE_CM', 'GVP_FA', 'GSE_FA', 'BASIC'];
}

pricing.provision.isArticleIncludedInProvision = function (article, UPC1, EUSE, workOrder, params) {
	// Preconditions check
	if ((null != params.AN8 && null != params.CPGP) || ['item', 'group', 'family'].indexOf(params.level) < 0) {
		if (app_parameters.debug.pricing_log) kony.print("###! ERROR !### pricing.provision.isArticleIncludedInProvision, params: " + JSON.stringify(params));
		popupModel.showPopError("Erreur de configuration de l'algorithme de tarification.")
		return null;
	}
	
	if ('CPGP' == params.client && (validationModel.isNull(params.CPGP) || 0 == params.CPGP))
		return null;
	
	var tables = [];
	var itemJoin = "";
	var conditions = [];
	
	switch(params.client) {
	case 'none':
		tables = ["PriceGridNull", "PriceGridAN8", "PriceGridCPGP"];
		break;
	case 'AN8':
		tables = ["PriceGridAN8"];
		conditions.push("pg.AN8 = '" + params.AN8 + "'");
		break;
	case 'CPGP':
		tables = ["PriceGridCPGP"];
		conditions.push("pg.CPGP = '" + params.CPGP + "'");
		break;
	}
	
	conditions.push("pg.UPC1 = '" + UPC1 + "'");
	conditions.push("pg.EUSE = '" + EUSE  + "'");
	conditions.push("COALESCE(pg.LOB, 'NULL') = '" + (validationModel.isNull(workOrder.equipmentActivity) ? 'NULL' : workOrder.equipmentActivity) + "'");
	
	switch(params.level) {
	case 'item':
		itemJoin = "inner join Item i on pg.ITM = i.ITM ";
		conditions.push("i.usualcode = '" + article.usualCode + "'");
		break;
	case 'group':
		itemJoin = "inner join Item i on pg.PRGR = i.PRGR and COALESCE(i.PRGR, 'NULL') <> 'NULL' ";
		conditions.push("i.usualcode = '" + article.usualCode + "'");
		break;
	case 'family':
		conditions.push("pg.IGP1 = '" + article.pricingFamily + "'");
		conditions.push("pg.IGP2 = '" + article.pricingSubFamily + "'");
	}
	conditions.push("pg.APRP5 = '" + workOrder.chapter + "'");
	conditions.push("pg.APRP6 = '" + params.APRP6 + "'");
	conditions.push("date('now') >= pg.EFTJ");
	conditions.push("date('now') <= pg.EXDJ");

	pricing.provision.isArticleIncludedInProvisionCB = function(result) {
		if (!validationModel.isNull(result) && result.length > 0 && result[0].nb > 0)
			callBackModel.result = true;
	}
	
	callBackModel.result = null;
	var i = 0;
	while(i < tables.length && (validationModel.isNull(callBackModel.result) || !callBackModel.result)) {
		callBackModel.context.sql = "select count(1) nb " + "from " + tables[i] + " pg " + itemJoin + "where " + conditions.join(' and ');
		executeSql(callBackModel.context.sql, pricing.provision.isArticleIncludedInProvisionCB, callBackModel.sqlErrorCB);
		i++;
	}
	return callBackModel.result;
}

pricing.provision.getProvisionType = function (article, UPC1, EUSE, workOrder, customer) {
	if (app_parameters.debug.pricing_log) kony.print("#### provision.getProvisionType START");
	
	provisionType = null;

	searchConfiguration = [
		{ params: { client: 'none',	AN8: null,	CPGP: null,				level: 'family',	APRP6: 'CGE' },	provisionType: 'CGE'},
		{ params: { client: 'CPGP',	AN8: null,	CPGP: customer.CPGP,	level: 'item',		APRP6: 'CPE' },	provisionType: 'CPE_CM'},
		{ params: { client: 'CPGP',	AN8: null,	CPGP: customer.CPGP,	level: 'group',		APRP6: 'CPE' },	provisionType: 'CPG_CM'},
		{ params: { client: 'AN8',	AN8: customer.AN8,	CPGP: null,		level: 'item',		APRP6: 'CPE' },	provisionType: 'CPE_FA'},
		{ params: { client: 'AN8',	AN8: customer.AN8,	CPGP: null,		level: 'group',		APRP6: 'CPE' },	provisionType: 'CPG_FA'},
		{ params: { client: 'CPGP',	AN8: null,	CPGP: customer.CPGP,	level: 'family',	APRP6: 'CPE' },	provisionType: 'CPE_GRM'},
		{ params: { client: 'AN8',	AN8: customer.AN8,	CPGP: null,		level: 'family',	APRP6: 'CPE' },	provisionType: 'CPE_FA'},
		
		{ params: { client: 'AN8',	AN8: workOrder.siteAN8,	CPGP: null,	level: 'item',		APRP6: 'COP' },	provisionType: 'COP_SI'},
		{ params: { client: 'AN8',	AN8: workOrder.siteAN8,	CPGP: null,	level: 'group',		APRP6: 'COP' },	provisionType: 'COG_SI'},
		{ params: { client: 'AN8',	AN8: workOrder.siteAN8,	CPGP: null,	level: 'family',	APRP6: 'COP' },	provisionType: 'COP_SI'}
	]
	
	var i = 0;
	while(i < searchConfiguration.length && validationModel.isNull(provisionType)) {
		if (pricing.provision.isArticleIncludedInProvision(article, UPC1, EUSE, workOrder, searchConfiguration[i].params))
			provisionType = searchConfiguration[i].provisionType;
		i++;
	}

	if (app_parameters.debug.pricing_log) kony.print("#### provision.getProvisionType END, provisionType: " + provisionType);
	return provisionType;
}

pricing.getSparePartsPrice = function(wo, article){
  
  callBackModel.result = null;

	callBackModel.context.sql = 
      "SELECT sum(Coalesce(sp.PriceEBILL, 0) - Coalesce(sp.PriceEBILL, 0) * sp.DiscountTRDC/100) discountPrice, "+
      " sum(Coalesce(sp.PriceEBILL, 0)) price, i2.srp2 [type], sp.f56btid "+
        " FROM spareparts sp "+
        " JOIN f56btdt dt ON dt.id = sp.f56btdtid "+
        " JOIN item i2 ON i2.usualcode = dt.litm "+
        "WHERE sp.f56btid = " + wo.id + " and i2.usualCode = "+ article.usualCode +"  "+
        " GROUP BY i2.srp2";
 
	executeSql(callBackModel.context.sql, callBackModel.valueSuccessCB, callBackModel.sqlErrorCB);

	return callBackModel.result;

}
