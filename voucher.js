// JavaScript Document
$(function(){
	$.getJSON('voucher.json', function(data){
	   for (var i = 0; i < data.voucher.length; i++) {
		  $('.list').append('<p>' + data.voucher[i].money + '</p>');
	   }
	});
})