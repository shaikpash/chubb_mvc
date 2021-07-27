phoneEdit = {}
phoneEdit.cbobject = null;
phoneEdit.MAX_LENGTH = 20;


phoneEdit.show = function(num, CBo, anchorWidget){ 
	phoneEdit.cbobject = CBo;
	
	if(num.trim() == null || num.trim().length == 0){
		phoneEditPop.countrycmb.selectedKey = "+33";
		phoneEditPop.number.text = '';
		phoneEditPop.extention.text = '';
	}else{
		var p = phoneEdit.parse(num);
		phoneEditPop.countrycmb.selectedKey = p[0];
		phoneEditPop.number.text = p[1];
		phoneEditPop.extention.text = p[2];
		phoneEdit.cleanNumField();
	}
	if (anchorWidget){
		phoneEditPop.setContext(
			{
				"widget":anchorWidget,
				"anchor":"center",
				"sizetoanchorwidth":false});
	}
	
	phoneEditPop.show();
}

phoneEdit.updateRender = function(){
	var comp = phoneEdit.compile();
		
	if (comp.length > phoneEdit.MAX_LENGTH){
		comp = comp.concat("\n20 caractères max !");
	}
}


phoneEdit.compile = function(){
	//country code, key is +xx[x]
	var render = '';
	if (phoneEditPop.countrycmb.selectedKey != "+33")
		render += phoneEditPop.countrycmb.selectedKey.concat(".");
	
	var number = phoneEditPop.number.text;
	number = phoneEdit.cleanNum(number);
	

	var extension = phoneEditPop.extention.text;
	
	
	render = render.concat(number);
	if (extension.length >0){
		render = render + "/" + extension;
	}
	
	return render;
}

phoneEdit.cleanNumField = function(){
	phoneEditPop.number.text = phoneEdit.cleanNum(phoneEditPop.number.text); 
}

phoneEdit.cleanNum = function (num){
	// keep numbers only
	var number = num;
	
	number = number.replace(
			/\D+/g,
			function(c){return ''});
	// add dots
	
	number = number.replace(/(\d\d)/g,"$&.");
	number = number[number.length-1] == '.' ?
				number.substring(0, number.length-1):
				number;
	return number;
	
}



phoneEdit.parse = function (numString){
	var res = [];
	var firstPoint = numString.indexOf(".");
	var slash = (numString.indexOf("/") == -1) ? numString.length : numString.indexOf("/");
	
	// country code
	var country = "";
	var number = "";

	if (numString.indexOf("+") == -1) {
		country = "+33";
		number = numString.substr(0, slash)
						.replace( /\D+/g,
							function(c){return ''}
						);
	} else {
		country = numString.substr(0, firstPoint);
		number = numString.substr(firstPoint+1, slash-firstPoint-1)
						.replace( /\D+/g,
							function(c){return ''}
						);
	}
	
	
	res.push(country);
	res.push(number);
	res.push(numString.substr(slash+1)
						.replace( /\D+/g,
							function(c){return ''}
						)
			);
	return res
}

phoneEdit.validate = function(){
	
	var numb = phoneEdit.compile();
	
	if (numb.length > phoneEdit.MAX_LENGTH){
		popupModel.showPopError(kony.i18n.getLocalizedString("err_phoneNumberTooLong") 
			+ " : " + numb.length.toString() + "/" + phoneEdit.MAX_LENGTH.toString()
		);
	}else{
		phoneEditPop.dismiss();
		phoneEdit.cbobject.text = (numb == null || numb == "") ? " " : numb;
	}
		
}

phoneEdit.remove = function(){
	phoneEditPop.dismiss();
	phoneEdit.cbobject.text = " ";
}