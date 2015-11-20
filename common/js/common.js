$(function(){

	var cvs = document.getElementById("indexCvs");
	var ctx = cvs.getContext("2d");
	ctx.fillStyle = "#f00";
	ctx.beginPath();
	ctx.arc(150,100,50,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();


})