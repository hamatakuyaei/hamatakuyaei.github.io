# hamatakuyaei.github.io

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">


<title>日本国憲法</title>



<style type="text/css">


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}




  header h1 {
    width: 300px;
    height: 34px;
    text-align: left;
    position: absolute;
    top: 20px;
    left: 30px; }
    header h1 a {
      font-size: 1.125rem;
      font-weight: 500;
      height: 34px;
      vertical-align: middle;
      text-decoration: none;
      color: #000; }
      
      header h1 a img {
        margin-right: 12px;
        vertical-align: middle; }

  header h1 {
    width: 260px;
    height: 37px;
    text-align: left;
    box-sizing: border-box;
    position: absolute;
    top: 10px;
    left: 30px; }
    header h1 a {
      font-size: 1.125rem;
      font-weight: 500;
      text-decoration: none;
      color: #000;
      line-height: 37px;
      display: block; }
      header h1 a img {
        margin: 0;
        margin-right: 12px;
        vertical-align: middle; }
        
        
        
    header #hamburgerMenu {
      position: fixed;
      top: 0px;
      width: 85%;
      height: 100%;
      background: #FFF;
      display: none; }
      header #hamburgerMenu.active {
      display: block; }
      header #hamburgerMenu h1 {
        display: block;
        position: relative;
        left: 0px;
        width: 100%; }
        header #hamburgerMenu h1 img {
          margin-left: 20px;
          vertical-align: middle; }
        header #hamburgerMenu h1 #btnHamburgerMenuClosed {
			position: absolute;
			top: 5px;
			right: 10px;
        }
      header #hamburgerMenu ul {
        position: relative;
        width: auto;
        text-align: left; }
        header #hamburgerMenu ul li {
          margin: 5px 0 5px 15px; 
          margin:top right bottom left;
        }
          header #hamburgerMenu ul li a {
            
			padding: 8px 5px 8px 10px;
			background: url(../img/arrow_gray_link.png) left 10px no-repeat;
			display: block;
			color: #000;
			text-decoration: none;
            
            }


@media screen and (max-width: 1024px) {
        }

@media screen and (max-width: 769px) {
}

@media screen and (max-width: 359px) {
  header h1 span {
    display: none; } }
    
    
header  button#btnHamburgerMenu {
	width: 37px;
	height: 37px;
	background: url("../img/icon/icon_menu_black.png") center center no-repeat;
	display: none;
	text-indent: -9999px;
	position: absolute;
	top: 10px;
	left: 10px;
}

@media screen and (max-width: 1024px) {

	header button#btnHamburgerMenu {
		display: block;
	}
	
	
	
	header h1 {
		top: 10px;
		left: 60px;
	}
	header h1 a br {
		display: none;
	}

}

#bgBody {
	width: 100%;
	height: 100%;
	background: #000;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 530;
	display: none;
	opacity: 0;
}
#bgBody.active {
    display: block;
}

#hamburgerMenu {
	z-index: 540;
}

#hamburgerMenu #subLink {
	width: calc(100% - 20px);
	padding: 12px 25px;
	background: #F5F6F8;
	text-align: left;
	margin-left: 10px;
	margin-right: 10px;
      }
      #hamburgerMenu #subLink .helpLink {
        padding: 8px 5px 8px 25px;
        background: url(../img/icon/icon_faq.png) left 10px no-repeat;
        display: block;
        color: #000;
        text-decoration: none; }


  button.moreList {
    width: 100%;
    margin-bottom: 12px;
    padding: 15px;
    background: #fff;
    border: 1px solid #636974;
    text-align: center;}
    button.moreList:hover {
      background: #C2CEE7; }
    button.moreList::after {
      width: 18px;
      height: 10px;
      content: '';
      background: url(../img/arrow_gray_down.png) left top no-repeat;
      background-size: contain;
      display: inline-block; }
    button.moreList.active::after {
      background: url(../img/arrow_gray_up.png) left top no-repeat; }

@import url(https://fonts.googleapis.com/earlyaccess/notosansjp.css);
@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 100; }

@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 200; }

@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 300; }

@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 400; }

@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Bold");
  font-weight: bold; }

* {
  box-sizing: border-box; }

header {
  width: 100%;
  min-width: 1200px;
  height: 67px;
  background: #fff;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 500; }

@media screen and (max-width: 1024px) {
  header {
    min-width: auto;
    height: 52px; } }

nav#pNavi {
  padding-bottom: 25px;
  text-align: left; }
  nav#pNavi section#outlineGraph {
    margin: 0 12px;
    border: 1px solid #D7D7D7;
    border-radius: 5px;
    display: none; }
    nav#pNavi section#outlineGraph.active {
      display: block; }
  nav#pNavi section#outlineList {
    margin: 0 12px;
    padding: 25px 12px 12px 12px;
    border: 1px solid #D7D7D7;
    border-radius: 5px;
    display: none; }
    nav#pNavi section#outlineList.active {
      display: block; }
    nav#pNavi section#outlineList p {
      padding-bottom: 12px; }
      nav#pNavi section#outlineList p.label {
        font-size: 0.75rem;
        text-align: right; }
    nav#pNavi section#outlineList ul li {
      padding-left: 12px;
      font-size: 0.875rem; }
      nav#pNavi section#outlineList ul li:nth-child(odd) {
        background: url(../img/icon/icon_outline_list.png) left 5px no-repeat; }
      nav#pNavi section#outlineList ul li.active {
        background: url(../img/icon/icon_outline_point.png) left 5px no-repeat; }
      nav#pNavi section#outlineList ul li ul {
        margin-bottom: 12px; }
        nav#pNavi section#outlineList ul li ul li {
          margin-bottom: 0;
          padding-left: 0;
          font-size: 0.75rem; }
          nav#pNavi section#outlineList ul li ul li:first-child {
            background: none; }
  nav#pNavi ul#tocCheckbox, nav#pNavi ul#pOutline {
    width: 220px;
    margin: 0 auto;
    font-size: 0; }
    nav#pNavi ul#tocCheckbox li, nav#pNavi ul#pOutline li {
      font-size: 0.875rem;
      display: inline-block; }
      nav#pNavi ul#tocCheckbox li button, nav#pNavi ul#pOutline li button {
        width: 100px;
        margin: 0 5px;
        display: inline-block; }
        nav#pNavi ul#tocCheckbox li button:hover, nav#pNavi ul#pOutline li button:hover {
          background: #C2CEE7; }
  nav#pNavi ul#tocCheckbox {
    margin-bottom: 25px; }
    nav#pNavi ul#tocCheckbox li button {
      padding: 8px;
      border: 1px solid #D7D7D7; }
  nav#pNavi ul#pOutline {
    height: 40px;
    padding: 0;
    position: relative;
    line-height: 0.875rem; }
    nav#pNavi ul#pOutline li button {
      padding: 8px;
      border-top: 1px solid #D7D7D7;
      border-left: 1px solid #D7D7D7;
      border-right: 1px solid #D7D7D7;
      position: absolute;
      top: 0; }
      nav#pNavi ul#pOutline li button.list {
        left: 0; }
      nav#pNavi ul#pOutline li button.outline {
        right: 0; }
      nav#pNavi ul#pOutline li button.active {
        background: #1042A4;
        color: #fff;
        border-top: none; }
      nav#pNavi div.tableOfContents2 a {
        text-decoration: none;
        color: #636974; }
        nav#pNavi div.tableOfContents2 a[href] {
          color: #000; }
          nav#pNavi div.tableOfContents2 a[href]:hover {
            color: #CA241E; }

footer {
  padding: 30px;
  background: #F5F6F8;
  color: #707070;
  font-size: 0.75rem; }

#popuUpPage.document footer {
  margin-left: 310px; }
  #popuUpPage.document footer.allwidth {
    margin-left: 0; }

@media screen and (max-width: 1024px) {
  #popuUpPage.document footer {
    margin-left: 0; } }

@media print {
  #contentsLaw {
    width: 100% !important;
    border: none !important; }
  #innerDocument {
    width: 100% !important; }
  #toTop {
    display: none; }
  .document #leftNaviSide,
  .document #relationLinkSide,
  .document .lawDownload,
  .document header,
  .document nav,
  .document footer,
  .document button {
    display: none !important; } }

nav#spDocument {
  display: none; }

@media screen and (max-width: 1024px) {
  nav#spDocument {
    width: 100%;
    padding: 12px 0;
    background: #F5F6F8;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 500;
    display: block; }
    nav#spDocument #fDownloadFileSet {
      margin: 0 12px 25px 12px;
      padding: 12px;
      text-align: left;
      background: #fff;
      display: none; }
      nav#spDocument #fDownloadFileSet.active {
        display: block; }
      nav#spDocument #fDownloadFileSet ul li {
        margin-bottom: 25px; }
      nav#spDocument #fDownloadFileSet #fDownloadClose {
        width: 30px;
        text-align: center;
        font-size: 1.125rem;
        font-weight: 600;
        display: inline-block;
        position: absolute;
        top: 25px;
        right: 25px; }
    nav#spDocument div#spaceOfdocumentBtn {
      width: 80px;
      position: relative;
      margin-left: 3%;
      display: inline-block; }
    nav#spDocument button.footNav {
      width: 46px;
      height: 46px;
      margin-left: 3%;
      text-indent: -9999px;
      vertical-align: bottom; }
    nav#spDocument #fDownloadBtn {
      background: url(../img/icon/spnav/sp_menu04_off.png) center center no-repeat;
      background-size: 46px auto; }
      nav#spDocument #fDownloadBtn.active {
        background: url(../img/icon/spnav/sp_menu04_on.png) center center no-repeat;
        background-size: 46px auto; }
    nav#spDocument #fTocOutlineBtn {
      background: url(../img/icon/spnav/sp_menu02_off.png) center center no-repeat;
      background-size: 46px auto; }
      nav#spDocument #fTocOutlineBtn.active {
        background: url(../img/icon/spnav/sp_menu02_on.png) center center no-repeat;
        background-size: 46px auto; }
    nav#spDocument #fDocumentBtn {
      width: 80px;
      height: 80px;
      background: #F5F6F8 url(../img/icon/spnav/sp_menu01_off.png) center center no-repeat;
      background-size: 60px auto;
      position: absolute;
      bottom: -17px;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 50%; }
      nav#spDocument #fDocumentBtn.active {
        background: #F5F6F8 url(../img/icon/spnav/sp_menu01_on.png) center center no-repeat;
        background-size: 60px auto; }
    nav#spDocument #fRelationLinkBtn {
      background: url(../img/icon/spnav/sp_menu03_off.png) center center no-repeat;
      background-size: 46px auto; }
      nav#spDocument #fRelationLinkBtn.active {
        background: url(../img/icon/spnav/sp_menu03_on.png) center center no-repeat;
        background-size: 46px auto; }
    nav#spDocument #fSearchBtn {
      background: url(../img/icon/spnav/sp_menu05_off.png) center center no-repeat;
      background-size: 46px auto; }
      nav#spDocument #fSearchBtn.active {
        background: url(../img/icon/spnav/sp_menu05_on.png) center center no-repeat;
        background-size: 46px auto; } }

html {
  height: 100%;
  font-size: 100%; }

body {
  height: 100%;
  box-sizing: border-box;
  color: #323232;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: "メイリオ", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "Helvetica Neue", sans-serif;
  font-weight: 500; }

h2:not(.popuUpPage) {
  background-color: #fff;
  border-top: 1px solid #D7D7D7;
  border-bottom: 1px solid #D7D7D7;
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 2rem; }
  h2:not(.popuUpPage) span, h2:not(.popuUpPage) a {
    padding: 25px 80px 20px 80px;
    text-decoration: none;
    color: #323232;
    display: block; }
    h2:not(.popuUpPage) span:hover, h2:not(.popuUpPage) a:hover {
      color: #323232; }

a {
  color: #1042A4; }
  a:hover {
    color: #CA241E; }

img {
  vertical-align: bottom; }

p {
  padding-bottom: 25px; }
  p:last-child {
    padding-bottom: 0; }

ol {
  list-style: none; }

section {
  padding-bottom: 50px; }
  section:last-child {
    padding-bottom: 0; }

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  font-size: 1rem; }
  button:focus {
    outline-color: #3b99fc;
    outline-offset: 0px;
    outline-style: auto;
    outline-width: 5px; }

_:-ms-lang(x):focus, button:focus {
  outline: thin dotted invert; }

label {
  cursor: pointer; }

#contentsWrap {
  min-width: 1200px;
  margin: 25px 0 40px 30px;
  display: flex;
  position: relative; }

@media screen and (max-width: 1024px) {
  #contentsWrap {
    margin: 20px 0; } }

#popuUpPage #contentsWrap {
  min-width: auto;
  margin: 0;
  border-top: 1px solid #D7D7D7; }
  #popuUpPage #contentsWrap #contentsLaw {
    width: calc(100% - 310px);
    float: none;
    padding: 25px 50px 25px 70px;
    border-right: 1px solid #D7D7D7;
    position: relative; }
    #popuUpPage #contentsWrap #contentsLaw.allOpen {
      width: calc(100% - 620px); }
    #popuUpPage #contentsWrap #contentsLaw.allClosed {
      width: 100%; }
    #popuUpPage #contentsWrap #contentsLaw ul.lawDownload {
      position: fixed;
      top: 160px;
      right: 311px; }
      #popuUpPage #contentsWrap #contentsLaw ul.lawDownload.openBtn {
        right: 0; }
      #popuUpPage #contentsWrap #contentsLaw ul.lawDownload li {
        margin-bottom: 12px; }
    #popuUpPage #contentsWrap #contentsLaw button.openClose {
      width: 40px;
      height: 40px;
      border-top: 1px solid #D7D7D7;
      border-bottom: 1px solid #D7D7D7;
      position: fixed;
      top: 100px; }
      #popuUpPage #contentsWrap #contentsLaw button.openClose#tocOutlineBtn {
        text-indent: -9999px;
        background: #F5F6F8 url(../img/arrow_gray_left.png) 12px 13px no-repeat;
        border-right: 1px solid #D7D7D7;
        border-radius: 0 5px 5px 0;
        left: 310px; }
        #popuUpPage #contentsWrap #contentsLaw button.openClose#tocOutlineBtn.openBtn {
          background: #F5F6F8 url(../img/icon/icon_toc.png) 3px 7px no-repeat;
          left: 0; }
          #popuUpPage #contentsWrap #contentsLaw button.openClose#tocOutlineBtn.openBtn:hover {
            background: #C2CEE7 url(../img/icon/icon_toc.png) 3px 7px no-repeat; }
        #popuUpPage #contentsWrap #contentsLaw button.openClose#tocOutlineBtn:hover {
          background: #C2CEE7 url(../img/arrow_gray_left.png) 12px 13px no-repeat; }
      #popuUpPage #contentsWrap #contentsLaw button.openClose#relationLinkBtn {
        text-indent: -9999px;
        background: #F5F6F8 url(../img/arrow_gray_right.png) 12px 13px no-repeat;
        border-left: 1px solid #D7D7D7;
        border-radius: 5px 0 0 5px;
        right: 311px; }
        #popuUpPage #contentsWrap #contentsLaw button.openClose#relationLinkBtn.openBtn {
          background: #F5F6F8 url(../img/icon/icon_relation.png) 3px 6px no-repeat;
          right: 0; }
          #popuUpPage #contentsWrap #contentsLaw button.openClose#relationLinkBtn.openBtn:hover {
            background: #C2CEE7 url(../img/icon/icon_relation.png) 3px 6px no-repeat; }
        #popuUpPage #contentsWrap #contentsLaw button.openClose#relationLinkBtn:hover {
          background: #C2CEE7 url(../img/arrow_gray_right.png) 12px 13px no-repeat; }

@media screen and (max-width: 1024px) {
  #popuUpPage #contentsWrap #contentsLaw {
    width: 100%;
    border-right: none;
    padding: 25px 5px 25px 25px;
    display: none; }
    #popuUpPage #contentsWrap #contentsLaw.active {
      width: 100%;
      display: block; } }

#leftNaviSide {
  width: 310px;
  padding-top: 25px;
  background: #fff;
  text-align: center;
  border-right: 1px solid #D7D7D7;
  display: none; }
  #leftNaviSide.active {
    display: block; }
  #leftNaviSide #tocOutlineWrap {
    width: 309px;
    height: calc(100% - 70px);
    background: #fff;
    overflow: auto;
    padding-top: 20px;
    position: fixed;
    top: 70px;
    left: 0;
    -webkit-overflow-scrolling: touch !important; }
  #leftNaviSide ul {
    font-size: 0; }
    #leftNaviSide ul li {
      font-size: 1rem;
      text-align: left; }
    #leftNaviSide ul#dayOfPromulgation {
      margin: 0 0 10px 12px; }
      #leftNaviSide ul#dayOfPromulgation li {
        font-size: 0.75rem;
        text-align: left; }
    #leftNaviSide .labelLaw {
      width: 120px;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 15px;
      margin-left: 12px; }
      #leftNaviSide .labelLaw h3 {
        padding: 1px 8px;
        text-align: left;
        width: 120px;
        height: 23px;
        border: 1px solid #1042A4;
        background: #FFFFFF;
        color: #000000;
        display: inline-block; 
        border-left-width: 15px; }
        #leftNaviSide .labelLaw h3.authFlag {
          margin-top: 2px;
          margin-bottom: 2px;
          border-color: #A44210;
          font-size: 85%; }
        #leftNaviSide .labelLaw h3.enforcementFlag {
          margin-top: 2px;
          margin-bottom: 2px;
          border-color: #4F71B3; }
    #leftNaviSide ul#tocTab {
      margin: 15px 25px 25px 25px;
      border-bottom: 1px solid #D7D7D7; }
      #leftNaviSide ul#tocTab li {
        font-size: 0.875rem;
        display: inline-block; }
        #leftNaviSide ul#tocTab li button {
          width: 100px;
          margin: 0 5px;
          line-height: 37px;
          display: inline-block;
          border-radius: 5px 5px 0 0; }
          #leftNaviSide ul#tocTab li button#tableOfContents {
            background: #F5F6F8 url(../img/icon/icon_tabe_of_contents.png) 12px 10px no-repeat; }
          #leftNaviSide ul#tocTab li button#outline {
            background: #F5F6F8 url(../img/icon/icon_outline.png) 12px 8px no-repeat; }
          #leftNaviSide ul#tocTab li button.active#tableOfContents {
            background: #1042A4 url(../img/icon/icon_tabe_of_contents_ov.png) 12px 10px no-repeat;
            color: #fff; }
          #leftNaviSide ul#tocTab li button.active#outline {
            background: #1042A4 url(../img/icon/icon_outline_ov.png) 12px 8px no-repeat;
            color: #fff; }

#relationLinkSide {
  margin-right: 1px;
  height: calc(100% - 200px);
  width: 310px;
  overflow: auto;
  padding: 20px 25px 12px 25px;
  position: fixed;
  top: 70px;
  right: 0;
  display: none; }
  #relationLinkSide.active {
    display: block; }
  #relationLinkSide h3 {
    margin-bottom: 25px;
    padding-bottom: 12px;
    font-size: 1.25rem;
    font-weight: 600;
    border-bottom: 1px solid #F5F6F8; }
  #relationLinkSide ul li {
    padding-bottom: 25px; }
    #relationLinkSide ul li a {
      font-size: 1.125rem; }
      #relationLinkSide ul li a span {
        font-size: 0.75rem; }

@media screen and (max-width: 1024px) {
  #leftNaviSide {
    width: 100%;
    text-align: center;
    border-right: none;
    display: none; }
    #leftNaviSide.active {
      display: block; }
  #leftNaviSide #tocOutlineWrap,
  #relationLinkSide {
    padding-top: 50px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #D7D7D7;
    position: static !important; }
  #leftNaviSide #tocOutlineWrap {
    height: auto !important;
    overflow: visible;
    border: none; }
    #leftNaviSide #tocOutlineWrap #searchKeyword {
      display: none; }
  #relationLinkSide {
    margin-top: 20px;
    border: none;
    display: none; }
    #relationLinkSide.active {
      display: block; } }

table {
  width: 100%;
  border-collapse: collapse; }
  table tr th {
    text-align: left;
    font-weight: normal; }

#sNavi {
  padding: 15px 0 25px 0;
  text-align: right; }
  #sNavi ul li {
    margin-top: 10px;
    margin-right: 20px;
    padding-left: 20px;
    display: inline-block; }
    #sNavi ul li#iconBeginner {
      padding-left: 30px;
      background: url(../img/icon/icon_help.png) left center no-repeat;
      background-size: 30px auto; }
    #sNavi ul li a {
      color: #1042A4; }
      #sNavi ul li a:hover {
        color: #CA241E; }

@media screen and (max-width: 1024px) {
  #sNavi ul li {
    margin-right: 12px; }
    #sNavi ul li a {
      font-size: 0.75rem; } }

#innerDocument {
  padding-top: 10px; 
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  
  }

@media screen and (max-width: 1024px) {
  #innerDocument {
    display: none; }
    #innerDocument.active {
      padding-top: 10px;
      display: block; } }

#innerDocument section {
  padding-bottom: 10px;
  display: none; }
  #innerDocument section.active {
    display: block; }
  #innerDocument section h3, #innerDocument section h4, #innerDocument section dt {
    font-weight: 600; }
  #innerDocument section.table {
    padding-bottom: 25px; }
    #innerDocument section.table h3 {
/*      margin-left: -1rem;*/
      margin-bottom: 5px;
      padding-right: 2rem; }
    #innerDocument section.table table {
      width: auto;
      border-collapse: collapse;
      border-right: 1px solid #636974;
      border-top: 1px solid #636974; }
      #innerDocument section.table table tr th {
        padding: 5px;
        border-left: 1px solid #636974;
        border-bottom: 1px solid #636974; }
      #innerDocument section.table table tr td {
        padding: 5px;
        border-left: 1px solid #636974;
        border-bottom: 1px solid #636974; }
        #innerDocument section.table table tr td p {
          padding: 0; }
  #innerDocument section h4 {
    text-indent: 2rem; }
  #innerDocument section ol, #innerDocument section ul {
    /*margin-left: -1rem; */}
    #innerDocument section ol li, #innerDocument section ul li {
      padding-left: 1rem;
      /*text-indent: -1rem; */}
      #innerDocument section ol li ol, #innerDocument section ol li ul, #innerDocument section ul li ol, #innerDocument section ul li ul {
        margin-left: 0; }
      #innerDocument section ol li .number, #innerDocument section ul li .number {
        padding-right: 1rem;
        font-weight: 600; }
  #innerDocument section dl {
    margin-bottom: 5px;
    display: none; }
    #innerDocument section dl.active {
      display: block; }
    #innerDocument section dl dt {
      /*margin-left: -1rem;*/
      padding-right: 2rem;
      display: inline-block;
      float: left; }
    #innerDocument section dl dd {
      display: inline; }

#toTop _:-ms-lang(x), #toTop button {
  color: #fff; }
  #toTop _:-ms-lang(x):focus, #toTop button:focus {
    outline: thin dotted #000; }

.circleBtn {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  opacity: 0.8;
  position: fixed;
  bottom: 20px;
  cursor: pointer;
  z-index: 100;
  display: inline-block; }
  .circleBtn#toTop {
    right: 20px;
    background: #636974; }
  .circleBtn:hover {
    opacity: 1; }
  .circleBtn button {
    width: 80px;
    height: 80px;
    display: block;
    text-align: center;
    color: #fff; }
    .circleBtn button:hover {
      color: #fff; }

@media screen and (max-width: 1024px) {
  .circleBtn {
    width: 60px;
    height: 60px;
    bottom: 75px; }
    .circleBtn#toTop {
      right: 5px; }
      .circleBtn#toTop.active {
        display: none; }
    .circleBtn button {
      width: 60px;
      height: 60px; }
      .circleBtn button img {
        width: 50%;
        height: auto; } }

#searchKeyword2 {
  width: 100%;
  padding: 12px !important;
  position: absolute;
  left: 0;
  bottom: 45px;
  z-index: 500;
  display: none; }
  #searchKeyword2.active {
    display: block; }
  #searchKeyword2 h2 {
    text-align: left; }
  #searchKeyword2 #searchKeywordBtn2 button {
    width: auto !important;
    height: auto !important;
    margin: 5px 10px 5px 20px !important;
    text-indent: 0 !important; }
  #searchKeyword2 #delInfoBtn2 {
    width: 30px;
    text-align: center;
    font-size: 1.125rem;
    font-weight: 600;
    display: inline-block;
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 550; }

#searchKeyword,
#searchKeyword2 {
  margin-bottom: 25px;
  padding: 12px 5px;
  background: #e9f0f7; }
  #searchKeyword h2,
  #searchKeyword2 h2 {
    margin-bottom: 12px;
    background: none;
    font-size: 0.875rem;
    color: #1F72DB;
    line-height: 1.125rem;
    border-top: none;
    border-bottom: none; }
    #searchKeyword h2:before,
    #searchKeyword2 h2:before {
      content: url(../img/icon/icon_hilight.png);
      display: inline-block;
      width: 16px;
      height: 18px; }
  #searchKeyword ul,
  #searchKeyword2 ul {
    margin-bottom: 12px;
    text-align: left; }
    #searchKeyword ul li,
    #searchKeyword2 ul li {
      display: inline-block; }
  #searchKeyword #searchKeywordBtn,
  #searchKeyword2 #searchKeywordBtn2 {
    font-size: 0; }
    #searchKeyword #searchKeywordBtn button,
    #searchKeyword2 #searchKeywordBtn2 button {
      margin: 5px;
      min-height: 26px;
      background: #1F72DB;
      font-size: 0.75rem;
      color: #fff;
      border-radius: 13px; }
      #searchKeyword #searchKeywordBtn button#prev,
      #searchKeyword2 #searchKeywordBtn2 button#prev {
        padding: 0 25px;
        background-image: url(../img/arrow_white_left.png);
        background-repeat: no-repeat;
        background-position: 10px 8px; }
      #searchKeyword #searchKeywordBtn button#next,
      #searchKeyword2 #searchKeywordBtn2 button#next {
        padding: 0 25px;
        background-image: url(../img/arrow_white_right.png);
        background-repeat: no-repeat;
        background-position: right 10px top 8px; }
      #searchKeyword #searchKeywordBtn button:hover,
      #searchKeyword2 #searchKeywordBtn2 button:hover {
        background: #36aae7; }

.cf:before,
.cf:after {
  content: '';
  display: table; }

.cf:after {
  clear: both; }

.cf {
  zoom: 1; }

.attention {
  color: #CA241E !important; }

.annotation {
  font-size: 0.75rem !important;
  line-height: 1rem !important;
  text-indent: -1em;
  margin-left: 1em; }

.searchLabel {
  background: #C2CEE7; }

.searchLabel.active {
  background: #1042A4;
  color: #fff; }

.mBottom {
  margin-bottom: 25px; }

#innerDocument section.active.SupplProvision div._div_SupplProvisionLabel {
	margin-bottom: 10px;
	margin-left: 3em;
	font-weight: bold;
}


</style>



</head>
<body>

<main id="contentsLaw" class="active">
<div id="innerDocument" class="active">




<div style="margin-bottom: 12px;">
<div id="lawTitleNo" style="font-size: 1.067rem; font-weight: bold;">昭和二十一年憲法</div>
<div id="lawTitle" style="margin-left: 3rem; font-size: 1.5rem; font-weight: bold; line-height: 1.25em;">日本国憲法</div>
</div><section id="Preamble" class="active Preamble"><div style="text-indent: 1em;" class="_div_ParagraphSentence">日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍が起ることのないやうにすることを決意し、ここに主権が国民に存することを宣言し、この憲法を確定する。そもそも国政は、国民の厳粛な信託によるものであつて、その権威は国民に由来し、その権力は国民の代表者がこれを行使し、その福利は国民がこれを享受する。これは人類普遍の原理であり、この憲法は、かかる原理に基くものである。われらは、これに反する一切の憲法、法令及び詔勅を排除する。</div>
<div style="text-indent: 1em;" class="_div_ParagraphSentence">日本国民は、恒久の平和を念願し、人間相互の関係を支配する崇高な理想を深く自覚するのであつて、平和を愛する諸国民の公正と信義に信頼して、われらの安全と生存を保持しようと決意した。われらは、平和を維持し、専制と隷従、圧迫と偏狭を地上から永遠に除去しようと努めてゐる国際社会において、名誉ある地位を占めたいと思ふ。われらは、全世界の国民が、ひとしく恐怖と欠乏から免かれ、平和のうちに生存する権利を有することを確認する。</div>
<div style="text-indent: 1em;" class="_div_ParagraphSentence">われらは、いづれの国家も、自国のことのみに専念して他国を無視してはならないのであつて、政治道徳の法則は、普遍的なものであり、この法則に従ふことは、自国の主権を維持し、他国と対等関係に立たうとする各国の責務であると信ずる。</div>
<div style="text-indent: 1em;" class="_div_ParagraphSentence">日本国民は、国家の名誉にかけ、全力をあげてこの崇高な理想と目的を達成することを誓ふ。</div></section><section id="MainProvision" class="active MainProvision"><section id="" class="active Chapter"><div style="margin-left: 3em; font-weight: bold;" class="ChapterTitle _div_ChapterTitle">第一章　天皇</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第一条</span>　天皇は、日本国の象徴であり日本国民統合の象徴であつて、この地位は、主権の存する日本国民の総意に基く。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第二条</span>　皇位は、世襲のものであつて、国会の議決した皇室典範の定めるところにより、これを継承する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第三条</span>　天皇の国事に関するすべての行為には、内閣の助言と承認を必要とし、内閣が、その責任を負ふ。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第四条</span>　天皇は、この憲法の定める国事に関する行為のみを行ひ、国政に関する権能を有しない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　天皇は、法律の定めるところにより、その国事に関する行為を委任することができる。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第五条</span>　皇室典範の定めるところにより摂政を置くときは、摂政は、天皇の名でその国事に関する行為を行ふ。この場合には、前条第一項の規定を準用する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第六条</span>　天皇は、国会の指名に基いて、内閣総理大臣を任命する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　天皇は、内閣の指名に基いて、最高裁判所の長たる裁判官を任命する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第七条</span>　天皇は、内閣の助言と承認により、国民のために、左の国事に関する行為を行ふ。<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">一</span>　憲法改正、法律、政令及び条約を公布すること。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">二</span>　国会を召集すること。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">三</span>　衆議院を解散すること。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">四</span>　国会議員の総選挙の施行を公示すること。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">五</span>　国務大臣及び法律の定めるその他の官吏の任免並びに全権委任状及び大使及び公使の信任状を認証すること。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">六</span>　大赦、特赦、減刑、刑の執行の免除及び復権を認証すること。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">七</span>　栄典を授与すること。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">八</span>　批准書及び法律の定めるその他の外交文書を認証すること。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">九</span>　外国の大使及び公使を接受すること。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">十</span>　儀式を行ふこと。</div>
</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第八条</span>　皇室に財産を譲り渡し、又は皇室が、財産を譲り受け、若しくは賜与することは、国会の議決に基かなければならない。</div></section><section id="" class="active Chapter"><div style="margin-left: 3em; font-weight: bold;" class="ChapterTitle followingChapter _div_ChapterTitle">第二章　戦争の放棄</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第九条</span>　日本国民は、正義と秩序を基調とする国際平和を誠実に希求し、国権の発動たる戦争と、武力による威嚇又は武力の行使は、国際紛争を解決する手段としては、永久にこれを放棄する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　前項の目的を達するため、陸海空軍その他の戦力は、これを保持しない。国の交戦権は、これを認めない。</div></section><section id="" class="active Chapter"><div style="margin-left: 3em; font-weight: bold;" class="ChapterTitle followingChapter _div_ChapterTitle">第三章　国民の権利及び義務</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第十条</span>　日本国民たる要件は、法律でこれを定める。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第十一条</span>　国民は、すべての基本的人権の享有を妨げられない。この憲法が国民に保障する基本的人権は、侵すことのできない永久の権利として、現在及び将来の国民に与へられる。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第十二条</span>　この憲法が国民に保障する自由及び権利は、国民の不断の努力によつて、これを保持しなければならない。又、国民は、これを濫用してはならないのであつて、常に公共の福祉のためにこれを利用する責任を負ふ。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第十三条</span>　すべて国民は、個人として尊重される。生命、自由及び幸福追求に対する国民の権利については、公共の福祉に反しない限り、立法その他の国政の上で、最大の尊重を必要とする。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第十四条</span>　すべて国民は、法の下に平等であつて、人種、信条、性別、社会的身分又は門地により、政治的、経済的又は社会的関係において、差別されない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　華族その他の貴族の制度は、これを認めない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">③</span>　栄誉、勲章その他の栄典の授与は、いかなる特権も伴はない。栄典の授与は、現にこれを有し、又は将来これを受ける者の一代に限り、その効力を有する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第十五条</span>　公務員を選定し、及びこれを罷免することは、国民固有の権利である。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　すべて公務員は、全体の奉仕者であつて、一部の奉仕者ではない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">③</span>　公務員の選挙については、成年者による普通選挙を保障する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">④</span>　すべて選挙における投票の秘密は、これを侵してはならない。選挙人は、その選択に関し公的にも私的にも責任を問はれない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第十六条</span>　何人も、損害の救済、公務員の罷免、法律、命令又は規則の制定、廃止又は改正その他の事項に関し、平穏に請願する権利を有し、何人も、かかる請願をしたためにいかなる差別待遇も受けない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第十七条</span>　何人も、公務員の不法行為により、損害を受けたときは、法律の定めるところにより、国又は公共団体に、その賠償を求めることができる。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第十八条</span>　何人も、いかなる奴隷的拘束も受けない。又、犯罪に因る処罰の場合を除いては、その意に反する苦役に服させられない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第十九条</span>　思想及び良心の自由は、これを侵してはならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第二十条</span>　信教の自由は、何人に対してもこれを保障する。いかなる宗教団体も、国から特権を受け、又は政治上の権力を行使してはならない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　何人も、宗教上の行為、祝典、儀式又は行事に参加することを強制されない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">③</span>　国及びその機関は、宗教教育その他いかなる宗教的活動もしてはならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第二十一条</span>　集会、結社及び言論、出版その他一切の表現の自由は、これを保障する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　検閲は、これをしてはならない。通信の秘密は、これを侵してはならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第二十二条</span>　何人も、公共の福祉に反しない限り、居住、移転及び職業選択の自由を有する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　何人も、外国に移住し、又は国籍を離脱する自由を侵されない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第二十三条</span>　学問の自由は、これを保障する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第二十四条</span>　婚姻は、両性の合意のみに基いて成立し、夫婦が同等の権利を有することを基本として、相互の協力により、維持されなければならない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　配偶者の選択、財産権、相続、住居の選定、離婚並びに婚姻及び家族に関するその他の事項に関しては、法律は、個人の尊厳と両性の本質的平等に立脚して、制定されなければならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第二十五条</span>　すべて国民は、健康で文化的な最低限度の生活を営む権利を有する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　国は、すべての生活部面について、社会福祉、社会保障及び公衆衛生の向上及び増進に努めなければならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第二十六条</span>　すべて国民は、法律の定めるところにより、その能力に応じて、ひとしく教育を受ける権利を有する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　すべて国民は、法律の定めるところにより、その保護する子女に普通教育を受けさせる義務を負ふ。義務教育は、これを無償とする。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第二十七条</span>　すべて国民は、勤労の権利を有し、義務を負ふ。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　賃金、就業時間、休息その他の勤労条件に関する基準は、法律でこれを定める。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">③</span>　児童は、これを酷使してはならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第二十八条</span>　勤労者の団結する権利及び団体交渉その他の団体行動をする権利は、これを保障する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第二十九条</span>　財産権は、これを侵してはならない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　財産権の内容は、公共の福祉に適合するやうに、法律でこれを定める。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">③</span>　私有財産は、正当な補償の下に、これを公共のために用ひることができる。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第三十条</span>　国民は、法律の定めるところにより、納税の義務を負ふ。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第三十一条</span>　何人も、法律の定める手続によらなければ、その生命若しくは自由を奪はれ、又はその他の刑罰を科せられない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第三十二条</span>　何人も、裁判所において裁判を受ける権利を奪はれない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第三十三条</span>　何人も、現行犯として逮捕される場合を除いては、権限を有する司法官憲が発し、且つ理由となつてゐる犯罪を明示する令状によらなければ、逮捕されない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第三十四条</span>　何人も、理由を直ちに告げられ、且つ、直ちに弁護人に依頼する権利を与へられなければ、抑留又は拘禁されない。又、何人も、正当な理由がなければ、拘禁されず、要求があれば、その理由は、直ちに本人及びその弁護人の出席する公開の法廷で示されなければならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第三十五条</span>　何人も、その住居、書類及び所持品について、侵入、捜索及び押収を受けることのない権利は、第三十三条の場合を除いては、正当な理由に基いて発せられ、且つ捜索する場所及び押収する物を明示する令状がなければ、侵されない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　捜索又は押収は、権限を有する司法官憲が発する各別の令状により、これを行ふ。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第三十六条</span>　公務員による拷問及び残虐な刑罰は、絶対にこれを禁ずる。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第三十七条</span>　すべて刑事事件においては、被告人は、公平な裁判所の迅速な公開裁判を受ける権利を有する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　刑事被告人は、すべての証人に対して審問する機会を充分に与へられ、又、公費で自己のために強制的手続により証人を求める権利を有する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">③</span>　刑事被告人は、いかなる場合にも、資格を有する弁護人を依頼することができる。被告人が自らこれを依頼することができないときは、国でこれを附する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第三十八条</span>　何人も、自己に不利益な供述を強要されない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　強制、拷問若しくは脅迫による自白又は不当に長く抑留若しくは拘禁された後の自白は、これを証拠とすることができない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">③</span>　何人も、自己に不利益な唯一の証拠が本人の自白である場合には、有罪とされ、又は刑罰を科せられない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第三十九条</span>　何人も、実行の時に適法であつた行為又は既に無罪とされた行為については、刑事上の責任を問はれない。又、同一の犯罪について、重ねて刑事上の責任を問はれない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第四十条</span>　何人も、抑留又は拘禁された後、無罪の裁判を受けたときは、法律の定めるところにより、国にその補償を求めることができる。</div></section><section id="" class="active Chapter"><div style="margin-left: 3em; font-weight: bold;" class="ChapterTitle followingChapter _div_ChapterTitle">第四章　国会</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第四十一条</span>　国会は、国権の最高機関であつて、国の唯一の立法機関である。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第四十二条</span>　国会は、衆議院及び参議院の両議院でこれを構成する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第四十三条</span>　両議院は、全国民を代表する選挙された議員でこれを組織する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　両議院の議員の定数は、法律でこれを定める。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第四十四条</span>　両議院の議員及びその選挙人の資格は、法律でこれを定める。但し、人種、信条、性別、社会的身分、門地、教育、財産又は収入によつて差別してはならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第四十五条</span>　衆議院議員の任期は、四年とする。但し、衆議院解散の場合には、その期間満了前に終了する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第四十六条</span>　参議院議員の任期は、六年とし、三年ごとに議員の半数を改選する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第四十七条</span>　選挙区、投票の方法その他両議院の議員の選挙に関する事項は、法律でこれを定める。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第四十八条</span>　何人も、同時に両議院の議員たることはできない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第四十九条</span>　両議院の議員は、法律の定めるところにより、国庫から相当額の歳費を受ける。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第五十条</span>　両議院の議員は、法律の定める場合を除いては、国会の会期中逮捕されず、会期前に逮捕された議員は、その議院の要求があれば、会期中これを釈放しなければならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第五十一条</span>　両議院の議員は、議院で行つた演説、討論又は表決について、院外で責任を問はれない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第五十二条</span>　国会の常会は、毎年一回これを召集する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第五十三条</span>　内閣は、国会の臨時会の召集を決定することができる。いづれかの議院の総議員の四分の一以上の要求があれば、内閣は、その召集を決定しなければならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第五十四条</span>　衆議院が解散されたときは、解散の日から四十日以内に、衆議院議員の総選挙を行ひ、その選挙の日から三十日以内に、国会を召集しなければならない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　衆議院が解散されたときは、参議院は、同時に閉会となる。但し、内閣は、国に緊急の必要があるときは、参議院の緊急集会を求めることができる。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">③</span>　前項但書の緊急集会において採られた措置は、臨時のものであつて、次の国会開会の後十日以内に、衆議院の同意がない場合には、その効力を失ふ。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第五十五条</span>　両議院は、各々その議員の資格に関する争訟を裁判する。但し、議員の議席を失はせるには、出席議員の三分の二以上の多数による議決を必要とする。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第五十六条</span>　両議院は、各々その総議員の三分の一以上の出席がなければ、議事を開き議決することができない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　両議院の議事は、この憲法に特別の定のある場合を除いては、出席議員の過半数でこれを決し、可否同数のときは、議長の決するところによる。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第五十七条</span>　両議院の会議は、公開とする。但し、出席議員の三分の二以上の多数で議決したときは、秘密会を開くことができる。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　両議院は、各々その会議の記録を保存し、秘密会の記録の中で特に秘密を要すると認められるもの以外は、これを公表し、且つ一般に頒布しなければならない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">③</span>　出席議員の五分の一以上の要求があれば、各議員の表決は、これを会議録に記載しなければならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第五十八条</span>　両議院は、各々その議長その他の役員を選任する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　両議院は、各々その会議その他の手続及び内部の規律に関する規則を定め、又、院内の秩序をみだした議員を懲罰することができる。但し、議員を除名するには、出席議員の三分の二以上の多数による議決を必要とする。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第五十九条</span>　法律案は、この憲法に特別の定のある場合を除いては、両議院で可決したとき法律となる。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　衆議院で可決し、参議院でこれと異なつた議決をした法律案は、衆議院で出席議員の三分の二以上の多数で再び可決したときは、法律となる。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">③</span>　前項の規定は、法律の定めるところにより、衆議院が、両議院の協議会を開くことを求めることを妨げない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">④</span>　参議院が、衆議院の可決した法律案を受け取つた後、国会休会中の期間を除いて六十日以内に、議決しないときは、衆議院は、参議院がその法律案を否決したものとみなすことができる。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第六十条</span>　予算は、さきに衆議院に提出しなければならない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　予算について、参議院で衆議院と異なつた議決をした場合に、法律の定めるところにより、両議院の協議会を開いても意見が一致しないとき、又は参議院が、衆議院の可決した予算を受け取つた後、国会休会中の期間を除いて三十日以内に、議決しないときは、衆議院の議決を国会の議決とする。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第六十一条</span>　条約の締結に必要な国会の承認については、前条第二項の規定を準用する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第六十二条</span>　両議院は、各々国政に関する調査を行ひ、これに関して、証人の出頭及び証言並びに記録の提出を要求することができる。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第六十三条</span>　内閣総理大臣その他の国務大臣は、両議院の一に議席を有すると有しないとにかかはらず、何時でも議案について発言するため議院に出席することができる。又、答弁又は説明のため出席を求められたときは、出席しなければならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第六十四条</span>　国会は、罷免の訴追を受けた裁判官を裁判するため、両議院の議員で組織する弾劾裁判所を設ける。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　弾劾に関する事項は、法律でこれを定める。</div></section><section id="" class="active Chapter"><div style="margin-left: 3em; font-weight: bold;" class="ChapterTitle followingChapter _div_ChapterTitle">第五章　内閣</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第六十五条</span>　行政権は、内閣に属する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第六十六条</span>　内閣は、法律の定めるところにより、その首長たる内閣総理大臣及びその他の国務大臣でこれを組織する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　内閣総理大臣その他の国務大臣は、文民でなければならない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">③</span>　内閣は、行政権の行使について、国会に対し連帯して責任を負ふ。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第六十七条</span>　内閣総理大臣は、国会議員の中から国会の議決で、これを指名する。この指名は、他のすべての案件に先だつて、これを行ふ。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　衆議院と参議院とが異なつた指名の議決をした場合に、法律の定めるところにより、両議院の協議会を開いても意見が一致しないとき、又は衆議院が指名の議決をした後、国会休会中の期間を除いて十日以内に、参議院が、指名の議決をしないときは、衆議院の議決を国会の議決とする。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第六十八条</span>　内閣総理大臣は、国務大臣を任命する。但し、その過半数は、国会議員の中から選ばれなければならない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　内閣総理大臣は、任意に国務大臣を罷免することができる。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第六十九条</span>　内閣は、衆議院で不信任の決議案を可決し、又は信任の決議案を否決したときは、十日以内に衆議院が解散されない限り、総辞職をしなければならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第七十条</span>　内閣総理大臣が欠けたとき、又は衆議院議員総選挙の後に初めて国会の召集があつたときは、内閣は、総辞職をしなければならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第七十一条</span>　前二条の場合には、内閣は、あらたに内閣総理大臣が任命されるまで引き続きその職務を行ふ。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第七十二条</span>　内閣総理大臣は、内閣を代表して議案を国会に提出し、一般国務及び外交関係について国会に報告し、並びに行政各部を指揮監督する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第七十三条</span>　内閣は、他の一般行政事務の外、左の事務を行ふ。<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">一</span>　法律を誠実に執行し、国務を総理すること。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">二</span>　外交関係を処理すること。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">三</span>　条約を締結すること。但し、事前に、時宜によつては事後に、国会の承認を経ることを必要とする。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">四</span>　法律の定める基準に従ひ、官吏に関する事務を掌理すること。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">五</span>　予算を作成して国会に提出すること。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">六</span>　この憲法及び法律の規定を実施するために、政令を制定すること。但し、政令には、特にその法律の委任がある場合を除いては、罰則を設けることができない。</div>
<div id="" style="margin-left: 1em; text-indent: -1em;" class="_div_ItemSentence">
<span style="font-weight: bold;">七</span>　大赦、特赦、減刑、刑の執行の免除及び復権を決定すること。</div>
</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第七十四条</span>　法律及び政令には、すべて主任の国務大臣が署名し、内閣総理大臣が連署することを必要とする。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第七十五条</span>　国務大臣は、その在任中、内閣総理大臣の同意がなければ、訴追されない。但し、これがため、訴追の権利は、害されない。</div></section><section id="" class="active Chapter"><div style="margin-left: 3em; font-weight: bold;" class="ChapterTitle followingChapter _div_ChapterTitle">第六章　司法</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第七十六条</span>　すべて司法権は、最高裁判所及び法律の定めるところにより設置する下級裁判所に属する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　特別裁判所は、これを設置することができない。行政機関は、終審として裁判を行ふことができない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">③</span>　すべて裁判官は、その良心に従ひ独立してその職権を行ひ、この憲法及び法律にのみ拘束される。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第七十七条</span>　最高裁判所は、訴訟に関する手続、弁護士、裁判所の内部規律及び司法事務処理に関する事項について、規則を定める権限を有する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　検察官は、最高裁判所の定める規則に従はなければならない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">③</span>　最高裁判所は、下級裁判所に関する規則を定める権限を、下級裁判所に委任することができる。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第七十八条</span>　裁判官は、裁判により、心身の故障のために職務を執ることができないと決定された場合を除いては、公の弾劾によらなければ罷免されない。裁判官の懲戒処分は、行政機関がこれを行ふことはできない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第七十九条</span>　最高裁判所は、その長たる裁判官及び法律の定める員数のその他の裁判官でこれを構成し、その長たる裁判官以外の裁判官は、内閣でこれを任命する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　最高裁判所の裁判官の任命は、その任命後初めて行はれる衆議院議員総選挙の際国民の審査に付し、その後十年を経過した後初めて行はれる衆議院議員総選挙の際更に審査に付し、その後も同様とする。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">③</span>　前項の場合において、投票者の多数が裁判官の罷免を可とするときは、その裁判官は、罷免される。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">④</span>　審査に関する事項は、法律でこれを定める。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">⑤</span>　最高裁判所の裁判官は、法律の定める年齢に達した時に退官する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">⑥</span>　最高裁判所の裁判官は、すべて定期に相当額の報酬を受ける。この報酬は、在任中、これを減額することができない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第八十条</span>　下級裁判所の裁判官は、最高裁判所の指名した者の名簿によつて、内閣でこれを任命する。その裁判官は、任期を十年とし、再任されることができる。但し、法律の定める年齢に達した時には退官する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　下級裁判所の裁判官は、すべて定期に相当額の報酬を受ける。この報酬は、在任中、これを減額することができない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第八十一条</span>　最高裁判所は、一切の法律、命令、規則又は処分が憲法に適合するかしないかを決定する権限を有する終審裁判所である。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第八十二条</span>　裁判の対審及び判決は、公開法廷でこれを行ふ。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　裁判所が、裁判官の全員一致で、公の秩序又は善良の風俗を害する虞があると決した場合には、対審は、公開しないでこれを行ふことができる。但し、政治犯罪、出版に関する犯罪又はこの憲法第三章で保障する国民の権利が問題となつてゐる事件の対審は、常にこれを公開しなければならない。</div></section><section id="" class="active Chapter"><div style="margin-left: 3em; font-weight: bold;" class="ChapterTitle followingChapter _div_ChapterTitle">第七章　財政</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第八十三条</span>　国の財政を処理する権限は、国会の議決に基いて、これを行使しなければならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第八十四条</span>　あらたに租税を課し、又は現行の租税を変更するには、法律又は法律の定める条件によることを必要とする。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第八十五条</span>　国費を支出し、又は国が債務を負担するには、国会の議決に基くことを必要とする。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第八十六条</span>　内閣は、毎会計年度の予算を作成し、国会に提出して、その審議を受け議決を経なければならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第八十七条</span>　予見し難い予算の不足に充てるため、国会の議決に基いて予備費を設け、内閣の責任でこれを支出することができる。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　すべて予備費の支出については、内閣は、事後に国会の承諾を得なければならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第八十八条</span>　すべて皇室財産は、国に属する。すべて皇室の費用は、予算に計上して国会の議決を経なければならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第八十九条</span>　公金その他の公の財産は、宗教上の組織若しくは団体の使用、便益若しくは維持のため、又は公の支配に属しない慈善、教育若しくは博愛の事業に対し、これを支出し、又はその利用に供してはならない。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第九十条</span>　国の収入支出の決算は、すべて毎年会計検査院がこれを検査し、内閣は、次の年度に、その検査報告とともに、これを国会に提出しなければならない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　会計検査院の組織及び権限は、法律でこれを定める。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第九十一条</span>　内閣は、国会及び国民に対し、定期に、少くとも毎年一回、国の財政状況について報告しなければならない。</div></section><section id="" class="active Chapter"><div style="margin-left: 3em; font-weight: bold;" class="ChapterTitle followingChapter _div_ChapterTitle">第八章　地方自治</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第九十二条</span>　地方公共団体の組織及び運営に関する事項は、地方自治の本旨に基いて、法律でこれを定める。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第九十三条</span>　地方公共団体には、法律の定めるところにより、その議事機関として議会を設置する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　地方公共団体の長、その議会の議員及び法律の定めるその他の吏員は、その地方公共団体の住民が、直接これを選挙する。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第九十四条</span>　地方公共団体は、その財産を管理し、事務を処理し、及び行政を執行する権能を有し、法律の範囲内で条例を制定することができる。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第九十五条</span>　一の地方公共団体のみに適用される特別法は、法律の定めるところにより、その地方公共団体の住民の投票においてその過半数の同意を得なければ、国会は、これを制定することができない。</div></section><section id="" class="active Chapter"><div style="margin-left: 3em; font-weight: bold;" class="ChapterTitle followingChapter _div_ChapterTitle">第九章　改正</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第九十六条</span>　この憲法の改正は、各議院の総議員の三分の二以上の賛成で、国会が、これを発議し、国民に提案してその承認を経なければならない。この承認には、特別の国民投票又は国会の定める選挙の際行はれる投票において、その過半数の賛成を必要とする。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　憲法改正について前項の承認を経たときは、天皇は、国民の名で、この憲法と一体を成すものとして、直ちにこれを公布する。</div></section><section id="" class="active Chapter"><div style="margin-left: 3em; font-weight: bold;" class="ChapterTitle followingChapter _div_ChapterTitle">第十章　最高法規</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第九十七条</span>　この憲法が日本国民に保障する基本的人権は、人類の多年にわたる自由獲得の努力の成果であつて、これらの権利は、過去幾多の試錬に堪へ、現在及び将来の国民に対し、侵すことのできない永久の権利として信託されたものである。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第九十八条</span>　この憲法は、国の最高法規であつて、その条規に反する法律、命令、詔勅及び国務に関するその他の行為の全部又は一部は、その効力を有しない。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　日本国が締結した条約及び確立された国際法規は、これを誠実に遵守することを必要とする。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第九十九条</span>　天皇又は摂政及び国務大臣、国会議員、裁判官その他の公務員は、この憲法を尊重し擁護する義務を負ふ。</div></section><section id="" class="active Chapter"><div style="margin-left: 3em; font-weight: bold;" class="ChapterTitle followingChapter _div_ChapterTitle">第十一章　補則</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第百条</span>　この憲法は、公布の日から起算して六箇月を経過した日から、これを施行する。</div>
<div style="margin-left: 1em; text-indent: -1em;" class="_div_ParagraphSentence">
<span style="font-weight: bold;">②</span>　この憲法を施行するために必要な法律の制定、参議院議員の選挙及び国会召集の手続並びにこの憲法を施行するために必要な準備手続は、前項の期日よりも前に、これを行ふことができる。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第百一条</span>　この憲法施行の際、参議院がまだ成立してゐないときは、その成立するまでの間、衆議院は、国会としての権限を行ふ。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第百二条</span>　この憲法による第一期の参議院議員のうち、その半数の者の任期は、これを三年とする。その議員は、法律の定めるところにより、これを定める。</div></section><section id="" class="active Article"><div style="margin-left: 1em; font-weight: bold;" class="_div_ArticleCaption"></div>
<div style="margin-left: 1em; text-indent: -1em;" id="" class="_div_ArticleTitle">
<span style="font-weight: bold;">第百三条</span>　この憲法施行の際現に在職する国務大臣、衆議院議員及び裁判官並びにその他の公務員で、その地位に相応する地位がこの憲法で認められてゐる者は、法律で特別の定をした場合を除いては、この憲法施行のため、当然にはその地位を失ふことはない。但し、この憲法によつて、後任者が選挙又は任命されたときは、当然その地位を失ふ。</div></section></section>





</div>
</main>

</body>
</html>
