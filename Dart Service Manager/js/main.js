$(document).ready(function(){

$('.accordion__content').hide();
$('.accordion__header').click(function(){
	var $accordion__content = $(this).next('.accordion__content');
	var $active = $(this).next('.accordion__content');
	if ($accordion__content.is(':hidden')) {
		$active.slideDown();
		$(this).addClass('close');
	} else {
		$accordion__content.slideUp();
		$(this).removeClass('close');
	}
});
 
//E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });


});