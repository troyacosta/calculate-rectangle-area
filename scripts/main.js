'use strict';
var selectPick = document.getElementById('select');
var inputArea = document.getElementById('inputArea');
var results = document.getElementById('results');

function optionPicked(event) {
	event.preventDefault();
	if(selectPick.value == 'Metric') {
		inputArea.innerHTML = '<lable>Length in meters</lable>'+'<input type="number" id="length"><br>'
								+'<lable>Width in meters</lable>'+'<input type="number" id="width"><br>'+
								'<button onclick="calculate();">Calculate</button>';
	}
	else if(selectPick.value == 'Imperical') {
		inputArea.innerHTML = '<lable>Length in feet</lable>'+'<input type="number" id="length"><br>'
								+'<lable>Width in feet</lable>'+'<input type="number" id="width"><br>'+
								'<button onclick="calculate();">Calculate</button>';
	}
	else {
		inputArea.innerHTML = '';
	}	
}
function calculate() {
	event.preventDefault();
	var impericalArea = document.getElementById('length').value * document.getElementById('width').value;
	var metricArea = impericalArea * 0.09290304;
	results.innerHTML = metricArea + ' Square meters<br>' + impericalArea + ' Square feet';
}
