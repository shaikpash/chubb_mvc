function focusCurrentAppMenu(gappMenuArr)
{
	var len = gappMenuArr.length;
	if(len == 1)
	{
		updateAppMenuOne(gappMenuArr);
	}else if(len == 2)
	{
		updateAppMenuTwo(gappMenuArr)
	}else if(len == 3)
	{
		updateAppMenuThree(gappMenuArr)
	}else if(len == 4)
	{
		updateAppMenuFour(gappMenuArr)
	}else if(len >= 5)
	{
		var gMoreTable = gappMenuArr.slice(4,gappMenuArr.length);
		updateAppMenuFive(gappMenuArr, gMoreTable);
	}else
	{
      hideAppMenu();		//Arati: Changed for isssue - #58
      //hbxMain1.setVisibility(false);//Dhaval:Added for case where no app menu is present
		// Do Nothing
	}
}
function hideAppMenu(){
	hbxMain1.setVisibility(false);
	hbxMain2.setVisibility(false);
	hbxMain3.setVisibility(false);
	hbxMain4.setVisibility(false);
	hbxMain5.setVisibility(false);
}
function updateAppMenuOne(appMenuArr){
	hbxMain1.setVisibility(true);
	hbxMain2.setVisibility(false);
	hbxMain3.setVisibility(false);
	hbxMain4.setVisibility(false);
	hbxMain5.setVisibility(false);
	
	hbxMain1.lbl1Main1.text = appMenuArr[0][1];
	hbxMain1.img1Main1.src = appMenuArr[0][2];
	hbxMain1.vbx1Main1.onClick = appMenuArr[0][3];

}
function  updateAppMenuTwo(appMenuArr){
	hbxMain1.setVisibility(false);
	hbxMain2.setVisibility(true);
	hbxMain3.setVisibility(false);
	hbxMain4.setVisibility(false);
	hbxMain5.setVisibility(false);
	
	hbxMain2.lbl1Main2.text = appMenuArr[0][1];
	hbxMain2.img1Main2.src = appMenuArr[0][2];
	hbxMain2.vbx1Main2.onClick = appMenuArr[0][3];
	hbxMain2.lbl2Main2.text = appMenuArr[1][1];
	hbxMain2.img2Main2.src = appMenuArr[1][2];
	hbxMain2.vbx2Main2.onClick = appMenuArr[1][3];

}

function  updateAppMenuThree(appMenuArr){
	hbxMain1.setVisibility(false);
	hbxMain2.setVisibility(false);
	hbxMain3.setVisibility(true);
	hbxMain4.setVisibility(false);
	hbxMain5.setVisibility(false);
	
	hbxMain3.lbl1Main3.text = appMenuArr[0][1];
	hbxMain3.img1Main3.src = appMenuArr[0][2];
	hbxMain3.vbx1Main3.onClick = appMenuArr[0][3];
	hbxMain3.lbl2Main3.text = appMenuArr[1][1];
	hbxMain3.img2Main3.src = appMenuArr[1][2];
	hbxMain3.vbx2Main3.onClick = appMenuArr[1][3];
	hbxMain3.lbl3Main3.text = appMenuArr[2][1];
	hbxMain3.img3Main3.src = appMenuArr[2][2];
	hbxMain3.vbx3Main3.onClick = appMenuArr[2][3];
	

}

function  updateAppMenuFour(appMenuArr){
	hbxMain1.setVisibility(false);
	hbxMain2.setVisibility(false);
	hbxMain3.setVisibility(false);
	hbxMain4.setVisibility(true);
	hbxMain5.setVisibility(false);
	
	hbxMain4.lbl1Main4.text = appMenuArr[0][1];
	hbxMain4.img1Main4.src = appMenuArr[0][2];
	hbxMain4.vbx1Main4.onClick = appMenuArr[0][3];
	hbxMain4.lbl2Main4.text = appMenuArr[1][1];
	hbxMain4.img2Main4.src = appMenuArr[1][2];
	hbxMain4.vbx2Main4.onClick = appMenuArr[1][3];
	hbxMain4.lbl3Main4.text = appMenuArr[2][1];
	hbxMain4.img3Main4.src = appMenuArr[2][2];
	hbxMain4.vbx3Main4.onClick = appMenuArr[2][3];
	hbxMain4.lbl4Main4.text = appMenuArr[3][1];
	hbxMain4.img4Main4.src = appMenuArr[3][2];
	hbxMain4.vbx4Main4.onClick = appMenuArr[3][3];
	
}

function  updateAppMenuFive(appMenuArr, moreTbl){
	hbxMain1.setVisibility(false);
	hbxMain2.setVisibility(false);
	hbxMain3.setVisibility(false);
	hbxMain4.setVisibility(false);
	hbxMain5.setVisibility(true);
	
	hbxMain5.lbl1Main5.text = appMenuArr[0][1];
	hbxMain5.img1Main5.src = appMenuArr[0][2];
	hbxMain5.vbx1Main5.onClick = appMenuArr[0][3];
	hbxMain5.lbl2Main5.text = appMenuArr[1][1];
	hbxMain5.img2Main5.src = appMenuArr[1][2];
	hbxMain5.vbx2Main5.onClick = appMenuArr[1][3];
	hbxMain5.lbl3Main5.text = appMenuArr[2][1];
	hbxMain5.img3Main5.src = appMenuArr[2][2];
	hbxMain5.vbx3Main5.onClick = appMenuArr[2][3];
	hbxMain5.lbl4Main5.text = appMenuArr[3][1];
	hbxMain5.img4Main5.src = appMenuArr[3][2];
	hbxMain5.vbx4Main5.onClick = appMenuArr[3][3];
	var moreCallback = function(event){ return onClickAppmenuMore(moreTbl);};
	//alert(JSON.stringify(appMenuArr[4]));	
  hbxMain5.lbl5Main5.text = appMenuArr[4][1];//"more";
	hbxMain5.img5Main5.src = appMenuArr[4][2];//"more.png";
	hbxMain5.vbx5Main5.onClick = appMenuArr[4][3];//moreCallback;
}
function onClickAppmenuMore(moreTbl)
{
	//alert("You clicked on more....");
	var appMenu = [];
	for(var i=0;i<moreTbl.length;i++)
	{
		var temp = {"lblAppmenuMore":moreTbl[i][1],
					"imgMore":moreTbl[i][2],
					"hbxAppIndex":{onClick:moreTbl[i][3]}
				   }
		appMenu.push(temp);		   
	}
	frmAppmenuMore.segShowMoreMenu.setData(appMenu);
	hbxMain5.img5Main5.src = "more.png";
	//frmAppmenuMore.show();//Dhaval:Commented as per client 
}
