'use strict';

var doc = window.document;
function getObj(id){
	return typeof id === 'string' ? doc.getElementById(id) : id;
}
var input = getObj('inputVal');

var even = function(ele, eve, handler){
	if(doc.addEventListener){
		ele.addEventListener(eve, handler, false);
	}else if(doc.attachEvent){
		ele.attachEvent('on' + eve, handler);
	}else{
		ele['on' + eve] = handler;
	}
};

function countLength(val){
	var len = val.length;
	var length = 0;
	for(var i = 0; i < len; i++){
		var codeKey = val.charCodeAt(i);
		if(!(codeKey >= 0 && codeKey >= 128)){
			length++;
		}else{
			length += 2;
		}
	}
	return length;
}

function show(){
	var inputValue = input.value.trim();
	var validateVal = getObj('validateVal');
	var inputLen = countLength(inputValue);

	if(inputLen === 0){
		validateVal.innerHTML = '请输入userName！';
		validateVal.style.color = 'red';
	}else if(inputLen >= 4 && inputLen <= 16){
		validateVal.innerHTML = '格式正确';
		validateVal.style.color = 'green';
	}else{
		validateVal.innerHTML = '请输入4-16位的字符！';
		validateVal.style.color = 'red';
	}
}

function init(){
	var validate = getObj('validate');
	even(validate, 'click', show);
	even(input, 'blur', show);
	input.value = '';
}

init();
