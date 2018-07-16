// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require bootstrap-material-design
//= require turbolinks
//= require_tree .



// function getText(){
//   //document.forms.フォーム名.要素名.valueで中身を取得できます
//   let textData1 = document.forms.Form1.elements["hanpanai[text1]"].value;
//   let textData2 = document.forms.Form1.elements["hanpanai[text2]"].value;
//   let textData3 = document.forms.Form1.elements["hanpanai[text3]"].value;
//   // document.getElementById('log').innerHTML = textData1 + constText1 + constText2 + textData2 + textData3;
//   let selectNum2 = document.forms.Form1.elements["hanpanai[select2]"].selectedIndex;
//   // let selectNum2 = document.forms.Form1.elements["hanpanai[select2]"];
//   // let selectNum2 = obj.selectedIndex;
//   //let selectNum2 = document.forms.Form1.getElementById("hanpanai_select2").value;
//   let selectStr2 = document.Form1.elements[2].value;

// Tweet初期化
var textData1 = "";
var textData2 = "";
var textData3 = "";
var selectData1 = "あいつ";
var selectData2 = "するもん。";
var selectData3 = "";
var constData1 = "半端ないって。";
var constData2 = "そんなんできひんやん、普通。";
var tweetURL = " " + "https://hanpanaitweet.com";

var siteURL = "https://hanpanaitweet.com";


function getText() {
  textData1 = document.forms.Form1.elements["text1"].value;
  textData2 = document.forms.Form1.elements["text2"].value;
  textData3 = document.forms.Form1.elements["text3"].value;
  connectText();
}

function getSelect(obj) {
  var selectId = obj.id;
  var idx = obj.selectedIndex;
  // console.log(selectId);
  //console.log(idx);

  switch (selectId) {
    case 'select1':
      selectData1 = obj.options[idx].value;
      break;

    case 'select2':
      selectData2 = obj.options[idx].value;
      break;

    case 'select3':
      selectData3 = obj.options[idx].value;
      break;
  }
  connectText();
}

// サイトURLをTweetに含めるかどうかの判定
function checkboxCheck() {
  if (document.Form1.checkbox1.checked) {
    tweetURL = " " + siteURL;
    console.log(tweetURL);
  }
  else {
    tweetURL = "";
    console.log(tweetURL);
  }
  connectText();
}

// Tweet文字列の連結
function connectText() {
  var tweetText = textData1 + constData1 + selectData1 + constData1 + textData2 + selectData2 + constData2 + textData3 + tweetURL;
  //var tweetText = tweetURL;
  document.getElementById('Tweetbox').innerText = tweetText;
  // var tweetTextBytes = bytesCount(tweetText);
  // console.log(tweetTextBytes);
}

// バイトカウントのロジック
function bytesCount(str) {
  return(encodeURIComponent(str).replace(/%../g,"x").length);
}

