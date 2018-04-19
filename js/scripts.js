$(".Teaser-readMore").click(function(){
  if ("Plačiau..." === $(this).prop("innerText")) {
    $(this).prop("innerText", "Mažiau...");
  } else {
    $(this).prop("innerText", "Plačiau...");
  }
  $(this).siblings('.Teaser-body').toggle();
});