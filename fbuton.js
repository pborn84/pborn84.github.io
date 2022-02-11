function() {
  var obj = jQuery(this).parents(".contact-form");
  var Name = obj.find("input#name").val();
  var Email = obj.find("input#email").val();
  var Message = obj.find("textarea#message").val();
  var sendto = obj.find("input#sendto").val();
  Name = Name.replace('Name', '');
  Email = Email.replace('Email', '');
  Message = Message.replace('Message', '');
  if (!obj.find(".noticefailed").length) {
    obj.append('<div class="noticefailed"></div>');
  }
  obj.find(".noticefailed").text("");
  if (!IsEmail(Email)) {
    obj.find(".noticefailed").text("Please enter valid email.");
    return false;
  }
  if (Name === "") {
    obj.find(".noticefailed").text("Please enter your name.");
    return false;
  }
  if (Message === "") {
    obj.find(".noticefailed").text("Message is required.");
    return false;
  }
  obj.find(".noticefailed").html("");
  obj.find(".noticefailed").append("<img alt='loading' class='loading' src='" + onetone_params.themeurl + "/images/loading.gif' />");

  jQuery.ajax({
    type: "POST",
    dataType: "json",
    url: onetone_params.ajaxurl,
    data: "Name=" + Name + "&Email=" + Email + "&Message=" + Message + "&sendto=" + sendto + "&action=onetone_contact",
    success: function(data) {
      if (data.error == 0) {
        obj.find(".noticefailed").addClass("noticesuccess").removeClass("noticefailed");
        obj.find(".noticesuccess").html(data.msg);
      } else {
        obj.find(".noticefailed").html(data.msg);
      }
      jQuery('.loading').remove();
      obj[0].reset();
    },
    error: function() {
      obj.find(".noticefailed").html("Error.");
      obj.find('.loading').remove();
    }
  });
}