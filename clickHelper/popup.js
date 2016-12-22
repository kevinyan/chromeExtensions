// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.tabs.executeScript(null, {file:'jquery.js'});

function click(e) {
  chrome.tabs.executeScript(null,
      {code:'$(".mark-pass-btn").not(".disabled").not(".marked").addClass("marked").each(function(b){var d=document.createEvent("MouseEvents");d.initEvent("click",true,false);this.dispatchEvent(d)})'});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('button');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
