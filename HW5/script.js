var piano = new Image
var piano_still = new Image
piano.src="piano.gif"
piano_still.src="piano_still.jpg"

var guitar = new Image
var guitar_still = new Image
guitar.src="guitar.gif"
guitar_still.src="guitar_still.jpg"
	
var drums = new Image
var drums_still = new Image
drums.src="drums.gif"
drums_still.src="drums_still.jpg"
function Navigationbar()
{
document.write(
    '<a href="../HW5/piano2.html"' +
	'onMouseOver="document.apiano.src=piano.src"' +
	'onMouseOut="document.apiano.src=piano_still.src">' +
	'<img src="piano_still.jpg" Name="apiano" Alt="Player.">' +
	'</a>' +
	'<a href="../HW5/guitar2.html"' +
	'onMouseOver="document.aguitar.src=guitar.src"' +
	'onMouseOut="document.aguitar.src=guitar_still.src">' +
    '<img src="guitar_still.jpg" Name="aguitar" Alt="Player.">' +
	'</a>' +
	'<a href="../HW5/drums2.html"' +
    'onMouseOver="document.adrums.src=drums.src"' +
    'onMouseOut="document.adrums.src=drums_still.src">' +
    '<img src="drums_still.jpg" Name="adrums" Alt="Player.">' +
    '</a>'
);
}