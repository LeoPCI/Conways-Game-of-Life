//function
var surrounding = function(cellNum){
	var count = 0
		var cell1 = cellNum+1
		var cell2 = cellNum-1
		var cell3 = cellNum+24
		var cell4 = cellNum-24
		var cell5 = cellNum+25
		var cell6 = cellNum-25
		var cell7 = cellNum+23
		var cell8 = cellNum-23
		//$("body:nth-child("+cell1+")")
		if ($("body :nth-child("+cell1+")").is('.on')){
			count++
		};
		if ($("body :nth-child("+cell2+")").is('.on')){
			count++
		};
		if ($("body :nth-child("+cell3+")").is('.on')){
			count++
		};
		if ($("body :nth-child("+cell4+")").is('.on')){
			count++
		};
		if ($("body :nth-child("+cell5+")").is('.on')){
			count++
		};
		if ($("body :nth-child("+cell6+")").is('.on')){
			count++
		};
		if ($("body :nth-child("+cell7+")").is('.on')){
			count++
		};
		if ($("body :nth-child("+cell8+")").is('.on')){
			count++
		};
	return count
};

//code
$(document).ready( function(){

setInterval(function(){

	var remove = []
	var add = []
	for (var i = 1; i < 576; i++) {
		if ($("body :nth-child("+i+")").is('#x')) {a=0}
		else if ($("body :nth-child("+i+")").is('.on')) {
			if (surrounding(i) < 2) {remove.push(i);}
			else if (surrounding(i) == (2 || 3)) {a = 0}
			else if (surrounding(i) > 3) {remove.push(i);}
		}
		else if (surrounding(i) == 3) {add.push(i)}
	};

	for (var i = 0; i < remove.length; i++) {
	$("body :nth-child("+remove[i]+")").removeClass('on')
	};

	for (var i = 0; i < add.length; i++) {
	$("body :nth-child("+add[i]+")").addClass('on')
	};

}, 500);

});