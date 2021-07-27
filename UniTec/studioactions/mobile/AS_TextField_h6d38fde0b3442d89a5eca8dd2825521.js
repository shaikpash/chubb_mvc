function AS_TextField_h6d38fde0b3442d89a5eca8dd2825521(eventobject, changedtext) {
    var isDecimalNumber = regexNumber(frmArticleRecommendationAdd.txtQuantity.text);
    if (isDecimalNumber == false) {
        frmArticleRecommendationAdd.txtQuantity.text = articleRecommendationAdd.quantityField;
    } else {
        articleRecommendationAdd.quantityField = frmArticleRecommendationAdd.txtQuantity.text;
    }
}