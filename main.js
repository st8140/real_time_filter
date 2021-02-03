'use strict';

/* global $ */

$(document).ready(function() {
  let serchText;
  let val;
  
  // テキストボックスに入力された内容変数に保存
  $('#serch-text').keyup(function() {
    serchText = $('#serch-text').val();
  // eachを使って入力された内容とキーワードをmatchを使って比較  
    $('.serch-target-item-text').each(function() {
      val = $(this).text(); 
      if (val.match(serchText)) {
        $(this).parent().parent().show();
      } else {
        $(this).parent().parent().hide();
      }
    });
  });
  
  
  
  
});