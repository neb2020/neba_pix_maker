function makeGrid() {

  // Select size input

  var canvas, cell, Height, Width, rows;

  canvas = $('#pixelCanvas');
  Height = $('#inputHeight').val();
  Width = $('#inputWeight').val();

  canvas.children().remove()

  for (x = 0; x <Height; x++) {
    canvas.append('<tr></tr>');
  }

  rows = $('tr');

  for (y = 0; y <Width; y++) {
    rows.append('<td></td>');
  }

  cell = canvas.find('td');

  // When td is clicked by the user, change color of td
  cell.click(function () {
    // Select color input
    var color;
    color = $("#colorPicker").val();
    $(this).attr('bgcolor', color);
  });

}

// When size is submitted by the user, call makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function (event) {
  event.preventDefault();
  makeGrid();
});

$("body").css({
  "background-color": "pink",
   
});

$("h1").css({ 
  "background-color": "MediumSeaGreen",
  "border": "5px solid red",
  "border-radius": "20px",
  
});

$("h2").css({
  "background-color": "SlateBlue", 
  "margin-right": "580px", 
  "margin-left": "580px",
  "border": "5px solid gray"
  });

$("#sizePicker").css({
   "background-color": "green", 
"border-radius": "15px",
"padding-right": "40px",
  "margin-right": "510px",
  "margin-left": "510px"
})