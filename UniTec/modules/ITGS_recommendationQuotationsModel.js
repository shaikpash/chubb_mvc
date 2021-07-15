recommendationQuotationsModel = {};

recommendationQuotationsModel.linkQuotationToRecommendations = function (quotation, recommendations) {
	var links = [];
	for (var i = 0; i < recommendations.length; i++) {
		links.push({
			RecommendationId : recommendations[i].id,
			QuotationId : quotation.id,
			QuotationNumber : quotation.quotationNumber,
			QuotationVersion : quotation.quotationVersion,
			ContactId : recommendations[i].contactId
		});
	}
	de.itgs.WorkOrders.RecommendationQuotations.createAll(links, callBackModel.successCB, callBackModel.konyErrorCB);
}
