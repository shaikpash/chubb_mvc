if(typeof(de)=== "undefined"){ de = {}; }
if(typeof(de.itgs)=== "undefined"){ de.itgs = {}; }
if(typeof(de.itgs.javascript)=== "undefined"){ de.itgs.javascript = {}; }




//object section
if(typeof(de.itgs.javascript.Object)=== "undefined"){ de.itgs.javascript.Object = {}; }

// Object properties are of type {p1: x, p2:y}, o1.px and o2.px will be summed
de.itgs.javascript.Object.mergeAdd = function (o1, o2){
	var res = o1;
	for (var p in o2){
		if (!validationModel.isNull(res[p])){
			res[p] += o2[p];
		}else{
			res[p] = o2[p];
		}
	};
	return res;
}

de.itgs.javascript.Object.clone = function (obj) {
    if (validationModel.isNull(obj) || typeof obj !== 'object') {
        return obj;
    }
 
    var temp = obj.constructor();
    for (var key in obj) {
        temp[key] = de.itgs.javascript.Object.clone(obj[key]);
    }
 
    return temp;
}

//array section
if(typeof(de.itgs.javascript.Array)=== "undefined"){ de.itgs.javascript.Array = {}; }

de.itgs.javascript.Array.sortByParam = function (arr, param) {
	return arr.sort(function(a, b){
	    if(a[param] < b[param]) return -1;
	    if(a[param] > b[param]) return 1;
	    return 0;
	});
}

de.itgs.javascript.Array.find = function (arr, testFunction, testObj){
	// returns the fisrt element index where the testFunction returns true
	// test function shall have signature bool function(item from arr, testObj)
	var i;
	for (i =0; i< arr.length; i++){
		if(testFunction(arr[i], testObj)){
			return i;
		}
	}
	return -1;
}

de.itgs.javascript.Array.count = function (arr, testFunction, testObj){
	// returns the number of elements where the testFunction returns true
	// test function shall have signature bool function(item from arr, testObj)
	var i;
	var n = 0;
	for (i =0; i< arr.length; i++){
		if(testFunction(arr[i], testObj)){
			n ++;
		}
	}
	return n;
}



de.itgs.javascript.Array.removeAt = function(arr, index, length){
	if (validationModel.isNull(length)) length = 1;
	return arr.slice(0,index).concat(arr.slice(index+length));
}

de.itgs.javascript.Array.insertAt = function(arr, o, index){
	return arr.slice(0,index).concat(
		[o].concat(
			arr.slice(index)
		)
	);
}

if(typeof(de.itgs.javascript.Segment)=== "undefined"){ de.itgs.javascript.Segment = {}; }

de.itgs.javascript.Segment.reverseLastSelection = 
	function(segment, section, row, isSelected){
	
	// cant stop selection, so reverse it here

	// get section or make one 
	var selection = segment.selectedIndices;
	selection = validationModel.isNull(selection) ?
		 [[section, []]] : selection;
		 
	var sectionIndex = de.itgs.javascript.Array.find(
		selection, function(s){
			return s[0] ==  section;
		}
	);
	if (sectionIndex == -1){
		selection.push([section, []]);
		sectionIndex = selection.length - 1;
	}

	var index = selection[sectionIndex][1].indexOf(row);
	if (isSelected){
		// remove have been selected
		if (index != -1){
			selection[sectionIndex][1].splice(index, 1);
		}
	}else{
		//add it back if have been removed
		if (index == -1){
			selection[sectionIndex][1].push(row);
		}
	}
	segment.selectedIndices = selection;
	return;
}

var checkNetworkSpeed = function(label){
  
  limitTimestamp = 400; // ms time, change if needed
  
    
  	var successCallBackFunc = function(status, res){
      timestampafter = Date.now();
      var resultTimestamp = timestampafter - timestampbefore;
      if(resultTimestamp > limitTimestamp || res.httpStatusCode != 0){
        if(label){
          label.isVisible = true;
          label.text = "(Votre connexion semble faible)";
        }
      }else{
        label.isVisible = false;
        //return true;
      }
      
    }

  var timestampbefore = Date.now();
  var timestampafter = 0;
  var service = new serviceInvoker("identifyUniTecUser", successCallBackFunc);
  	service.addParameter("AN8", 0);
  	service.execute();

  
} 

var checkIfNetworkAvailable = function(){
  return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
}


function regexNumber(value){
  var regexNumber = new RegExp(/^[0-9]*$/);

  if(regexNumber.test(value) == true){
    return true;
  }else{
    return false;
  }
}

