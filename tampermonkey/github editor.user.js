// ==UserScript==
// @name    GitHub Markdown editor
// @namespace   me
// @include   https://github.com/*
// @include   https://gist.github.com/*
// @version   1
// @grant     none
// ==/UserScript==


$(document).ready(function(){
  $('div.CodeMirror').height('auto');
});
