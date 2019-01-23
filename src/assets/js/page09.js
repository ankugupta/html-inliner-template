$("form").trigger('reset');
$(document).ready(function () {
  $("#bed").keyup(function () {
    var value = $("#bed").val();
    var len = value.length;
    if (len == 0 && value.indexOf(' ') < 0) {
      $(this).parent(".thumbmail-details").addClass("bg-white");
    }
    else {
      $(this).parent(".thumbmail-details").removeClass("bg-white");
    }
    if (len == 1 && value.indexOf(' ') < 0) {
      if (value == 'b') {
        $("#no").trigger('stop');
        $("#yes").trigger('play');
        $(this).parent(".thumbmail-details").removeClass("bg-red");
        $(this).parent(".thumbmail-details").addClass("bg-green");
      }
      else {
        $("#yes").trigger('stop');
        $("#no").trigger('play');
        $(this).parent(".thumbmail-details").removeClass("bg-green");
        $(this).parent(".thumbmail-details").addClass("bg-red");
      }
    }
  });
});



$(document).ready(function () {
  $("#jet").keyup(function () {
    var value = $("#jet").val();
    var len = value.length;
    if (len == 0 && value.indexOf(' ') < 0) {
      $(this).parent(".thumbmail-details").addClass("bg-white");
    }
    else {
      $(this).parent(".thumbmail-details").removeClass("bg-white");
    }
    if (len == 1 && value.indexOf(' ') < 0) {
      if (value == 'j') {
        $("#no").trigger('stop');
        $("#yes").trigger('play');
        $(this).parent(".thumbmail-details").removeClass("bg-red");
        $(this).parent(".thumbmail-details").addClass("bg-green");
      }
      else {
        $("#yes").trigger('stop');
        $("#no").trigger('play');
        $(this).parent(".thumbmail-details").removeClass("bg-green");
        $(this).parent(".thumbmail-details").addClass("bg-red");
      }
    }
  });
});

$(document).ready(function () {
  $("#pet").keyup(function () {
    var value = $("#pet").val();
    var len = value.length;
    if (len == 0 && value.indexOf(' ') < 0) {
      $(this).parent(".thumbmail-details").addClass("bg-white");
    }
    else {
      $(this).parent(".thumbmail-details").removeClass("bg-white");
    }
    if (len == 1 && value.indexOf(' ') < 0) {
      if (value == 'p') {
        $("#no").trigger('stop');
        $("#yes").trigger('play');
        $(this).parent(".thumbmail-details").removeClass("bg-red");
        $(this).parent(".thumbmail-details").addClass("bg-green");
      }
      else {
        $("#yes").trigger('stop');
        $("#no").trigger('play');
        $(this).parent(".thumbmail-details").removeClass("bg-green");
        $(this).parent(".thumbmail-details").addClass("bg-red");
      }
    }
  });
});

$(document).ready(function () {
  $("#den").keyup(function () {
    var value = $("#den").val();
    var len = value.length;
    if (len == 0 && value.indexOf(' ') < 0) {
      $(this).parent(".thumbmail-details").addClass("bg-white");
    }
    else {
      $(this).parent(".thumbmail-details").removeClass("bg-white");
    }
    if (len == 1 && value.indexOf(' ') < 0) {
      if (value == 'd') {
        $("#no").trigger('stop');
        $("#yes").trigger('play');
        $(this).parent(".thumbmail-details").removeClass("bg-red");
        $(this).parent(".thumbmail-details").addClass("bg-green");
      }
      else {
        $("#yes").trigger('stop');
        $("#no").trigger('play');
        $(this).parent(".thumbmail-details").removeClass("bg-green");
        $(this).parent(".thumbmail-details").addClass("bg-red");
      }
    }
  });
});

$(document).ready(function () {
  $("#gem").keyup(function () {
    var value = $("#gem").val();
    var len = value.length;
    if (len == 0 && value.indexOf(' ') < 0) {
      $(this).parent(".thumbmail-details").addClass("bg-white");
    }
    else {
      $(this).parent(".thumbmail-details").removeClass("bg-white");
    }
    if (len == 1 && value.indexOf(' ') < 0) {
      if (value == 'g') {
        $("#no").trigger('stop');
        $("#yes").trigger('play');
        $(this).parent(".thumbmail-details").removeClass("bg-red");
        $(this).parent(".thumbmail-details").addClass("bg-green");
      }
      else {
        $("#yes").trigger('stop');
        $("#no").trigger('play');
        $(this).parent(".thumbmail-details").removeClass("bg-green");
        $(this).parent(".thumbmail-details").addClass("bg-red");
      }
    }
  });
});



$(document).ready(function () {
  $("#net").keyup(function () {
    var value = $("#net").val();
    var len = value.length;
    if (len == 0 && value.indexOf(' ') < 0) {
      $(this).parent(".thumbmail-details").addClass("bg-white");
    }
    else {
      $(this).parent(".thumbmail-details").removeClass("bg-white");
    }
    if (len == 1 && value.indexOf(' ') < 0) {
      if (value == 'n') {
        $("#no").trigger('stop');
        $("#yes").trigger('play');
        $(this).parent(".thumbmail-details").removeClass("bg-red");
        $(this).parent(".thumbmail-details").addClass("bg-green");
      }
      else {
        $("#yes").trigger('stop');
        $("#no").trigger('play');
        $(this).parent(".thumbmail-details").removeClass("bg-green");
        $(this).parent(".thumbmail-details").addClass("bg-red");
      }
    }
  });
});

$(document).ready(function () {
  $("#pen").keyup(function () {
    var value = $("#pen").val();
    var len = value.length;
    if (len == 0 && value.indexOf(' ') < 0) {
      $(this).parent(".thumbmail-details").addClass("bg-white");
    }
    else {
      $(this).parent(".thumbmail-details").removeClass("bg-white");
    }
    if (len == 1 && value.indexOf(' ') < 0) {
      if (value == 'p') {
        $("#no").trigger('stop');
        $("#yes").trigger('play');
        $(this).parent(".thumbmail-details").removeClass("bg-red");
        $(this).parent(".thumbmail-details").addClass("bg-green");
      }
      else {
        $("#yes").trigger('stop');
        $("#no").trigger('play');
        $(this).parent(".thumbmail-details").removeClass("bg-green");
        $(this).parent(".thumbmail-details").addClass("bg-red");
      }
    }
  });
});