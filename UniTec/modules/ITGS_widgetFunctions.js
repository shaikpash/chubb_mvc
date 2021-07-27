widgetFunctions = {};

widgetFunctions.getWidgetByContainerAndId = function (container, id) {
	var widgets = container.widgets();
	
	for (var i = 0; i < widgets.length; i++) {
		if (widgets[i].id.indexOf(id) > -1) {
			return widgets[i];
		}
	}
	
	return null;
}

// Makes a custom group of segments
widgetFunctions.makeSectionnedSegments = function(data, templateWidget, dataMapping, defaultExpanded){
	/*	data is of form :
		[
			{
				title : "Section 1",
				data : [
					{
						key1 : val1,
						key2 : val 2
					},
					{
						key1 : val42,
						key2 : val43
					},
					...
				]
			},
			{
				title : "Section 2",
				data : [
					{
						...
					}
				]
			}
		]
	*/
	
	function toggleSection(){
		img = this.info.img;
		seg = this.info.seg;
		var vis = seg.isVisible;
		
		vis = !vis;
		seg.isVisible = vis;
		img.src = vis ? "chevrondown.png" : "chevronright.png";

	}
	
	// big box
	var global = new kony.ui.Box({
        "id": "SegsBox",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin" : 'sknHboxNormal'
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "containerHeight":75
    });
    
    
	for (section in data){
		//create Title lbl
		var titleLbl =  new kony.ui.Label({
		        "id": "titleLbl" + section,
		        "isVisible": true,
		        "text": data[section].title,
		        "skin": "sknLblNormal"
		    }, {
		        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
		        "vExpand": false,
		        "hExpand": true,
		        "margin": [0, 0, 0, 0],
		        "padding": [0, 0, 0, 0],
		        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
		        "marginInPixel": true,
		        "paddingInPixel": false,
		        "containerWeight": 90
		    }, {}
		 );
		//create Title image
		var titleImg = new kony.ui.Image2({
			id : "imageIdTest" + section,
			isVisible:true,
			src: defaultExpanded ? "chevrondown.png":"chevronright.png",
			imageWhenFailed:"",
			imageWhileDownloading:""},{
			containerWeight:10},{});
		//create Segment
		var seg = new kony.ui.SegmentedUI2({
			id:"segId" + section, 
			isVisible : defaultExpanded, 
			"retainSelection": false,
			widgetDataMap: dataMapping,
			rowTemplate: templateWidget,
			rowSkin:"sknSeg", 
			rowFocusSkin:"sknSegFoc", 
			alternateRowSkin:"seg2Alter", 
			"sectionHeaderSkin": "seg2Header",
	        "separatorRequired": true,
	        "separatorThickness": 1,
	        "separatorColor": "64646400",
	        "showScrollbars": false,
	        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
	        "groupCells": false,
	        "screenLevelWidget": false,
	        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
	        "viewConfig": {
		            "coverflowConfig": {
		                "isCircular": true,
	               		"projectionAngle": 60
	            }
	        },
          	"psp": {
            "indicator": "none"
        	},
			data : data[section].data
			
			},{
			padding:[0,0,0,0],
			margin:[0,0,0,0],
			containerWeight:100},{});
		
		//create Title Box
		var titleBox = new kony.ui.Box({
		        "id": "titleBox"+ section,
		        "isVisible": true,
		        "position": constants.BOX_POSITION_AS_NORMAL,
		        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
		        "skin" : 'sknHbSectionTitle',
		        "info" : {"img" : titleImg, "seg" : seg},
		        "onClick" : toggleSection
		    }, {
		        "containerWeight": 100,
		        "percent": true,
		        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
		        "margin": [0, 0, 0, 0],
		        "padding": [0, 0, 0, 0],
		        "vExpand": false,
		        "marginInPixel": false,
		        "paddingInPixel": false,
		        "layoutType": constants.CONTAINER_LAYOUT_BOX
		    }, {});
		//Assemble !!
		titleBox.add(titleLbl);
		titleBox.add(titleImg);
		global.add(titleBox);
		global.add(seg);
		
	}
	return global;	
}