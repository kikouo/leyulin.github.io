$(document).ready(function(){
  $("#NameOfSong").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#songListBody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  $("#chinese").on("click", function() {
    var value = $(this).val().toLowerCase();
    $("#songListBody tr").filter(function() {
      $(this).toggle($(this).find("td:eq(4 )").text().toLowerCase().indexOf(value) > -1)
    });
  });
  $("#cantonese").on("click", function() {
    var value = $(this).val().toLowerCase();
    $("#songListBody tr").filter(function() {
      $(this).toggle($(this).find("td:eq(4 )").text().toLowerCase().indexOf(value) > -1)
    });
  });
  $("#caicaiyu").on("click", function() {
    var value = $(this).val().toLowerCase();
    $("#songListBody tr").filter(function() {
      $(this).toggle($(this).find("td:eq(4 )").text().toLowerCase().indexOf(value) > -1)
    });
  });
  $("#oldFashion").on("click", function() {
    var value = $(this).val().toLowerCase();
    $("#songListBody tr").filter(function() {
      $(this).toggle($(this).find("td:eq(3 )").text().toLowerCase().indexOf(value) > -1)
    });
  });
  $("#pop").on("click", function() {
    var value = $(this).val().toLowerCase();
    $("#songListBody tr").filter(function() {
      $(this).toggle($(this).find("td:eq(3 )").text().toLowerCase().indexOf(value) > -1)
    });
  });
  $("#poet").on("click", function() {
    var value = $(this).val().toLowerCase();
    $("#songListBody tr").filter(function() {
      $(this).toggle($(this).find("td:eq(3 )").text().toLowerCase().indexOf(value) > -1)
    });
  });
  $("#vip1").on("click", function() {
    var value = $(this).val().toLowerCase();
    $("#songListBody tr").filter(function() {
      $(this).toggle($(this).find("td:eq(5 )").text().toLowerCase().indexOf(value) > -1)
    });
  });
  $("#vip2").on("click", function() {
    var value = $(this).val().toLowerCase();
    $("#songListBody tr").filter(function() {
      $(this).toggle($(this).find("td:eq(5 )").text().toLowerCase().indexOf(value) > -1)
    });
  });
  $("#vip3").on("click", function() {
    var value = $(this).val().toLowerCase();
    $("#songListBody tr").filter(function() {
      $(this).toggle($(this).find("td:eq(5 )").text().toLowerCase().indexOf(value) > -1)
    });
  });
  $("#all").on("click", function() {
      var value = $(this).val().toLowerCase();
    $("#songListBody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) == -1)
    });
  });
  $("#song-menu li").on("touch", function() {
    var value = $(this).text().toLowerCase();
    $("#songListBody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
$("#song-menu li").on("click", function() {
    var value = $(this).text().toLowerCase();
    if (value == "全部")
    {
    $("#songListBody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) == -1)
    });
    }
    else
   {
    $("#songListBody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
   }
 });
}); 