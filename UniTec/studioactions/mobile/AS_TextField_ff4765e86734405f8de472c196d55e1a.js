function AS_TextField_ff4765e86734405f8de472c196d55e1a(eventobject, changedtext) {
    frmRelatedProductAdd.segRelatedProduct.isVisible = true;
    relatedProductAdd.tbRelatedProductText = frmRelatedProductAdd.tbRelatedProducts.text;
    relatedProductAdd.RelatedProductsData
    var relatedMatch = [];
    for (var i = 0; i < relatedProductAdd.relatedProductData.length; i++) {
        if (relatedProductAdd.relatedProductData[i].match(relatedProductAdd.tbRelatedProductText) != null) {
            relatedMatch.push({
                lblRelatedProduct: relatedProductAdd.relatedProductData[i][1]
            });
        }
    }
    frmRelatedProductAdd.segRelatedProduct.setData(relatedMatch);
}