// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('input', function (event) {
  if (event.target.tagName.toLowerCase() !== 'textarea') return;
  autoExpand(event.target);
}, false);

document.addEventListener('turbolinks:load', () => {
  $(document).ready(function(){
    $(".button").click(function(){
    $('.overlay').show();
    });
    $(".close").click(function(){
    $('.overlay').hide();
    });
  });
});
