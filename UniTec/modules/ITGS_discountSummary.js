discountSummary = {};
discountSummary.displayOrHideCheckboxForDiscounts = function(workOrder, cbx, label){
	var customer = customerModel.findCustomerByAN8(workOrder.customerAN8);
	
	var cpgp=null;
	if (!validationModel.isNull(customer)) {	
		if(!validationModel.isNull(customer.CPGP))	
			cpgp = customer.CPGP;
		else
			cpgp=null;		
	} else
		cpgp=null;	

	// récupérer la valeur de cpgp de la table customer
	if(cpgp!=null){
		//("Le client a un accord tarifaire CPGP. Pas de remise possible.");
		if(cbx.isVisible){
			cbx.isVisible=false;			
			label.isVisible = true;				
		}		
	} 
};