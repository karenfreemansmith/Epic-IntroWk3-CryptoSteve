

//user interface
$("form").submit(function(event){
  $("#results").text(encode($("#words").val()));
  event.preventDefault();
});

//business Logic
function encode(phrase) {
  var cols=0;
  phrase = phrase.toLowerCase();
  phrase = phrase.replace(/[^a-z]/g,'');
  cols = Math.sqrt(phrase.length);
  alert(cols);
  return phrase;
}
