(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var selectPick = document.getElementById('select');
var inputArea = document.getElementById('inputArea');
var results = document.getElementById('results');

function optionPicked(event) {
	event.preventDefault();
	if (selectPick.value == 'Metric') {
		inputArea.innerHTML = '<lable>Length in meters</lable>' + '<input type="number" id="length"><br>' + '<lable>Width in meters</lable>' + '<input type="number" id="width"><br>' + '<button onclick="calculate();">Calculate</button>';
	} else if (selectPick.value == 'Imperical') {
		inputArea.innerHTML = '<lable>Length in feet</lable>' + '<input type="number" id="length"><br>' + '<lable>Width in feet</lable>' + '<input type="number" id="width"><br>' + '<button onclick="calculate();">Calculate</button>';
	} else {
		inputArea.innerHTML = '';
	}
}
function calculate() {
	event.preventDefault();
	var impericalArea = document.getElementById('length').value * document.getElementById('width').value;
	var metricArea = impericalArea * 0.09290304;
	results.innerHTML = metricArea + ' Square meters<br>' + impericalArea + ' Square feet';
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map