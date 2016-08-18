

//user interface
$("form").submit(function(event){
  $("#results").text(encode($("#words").val()));
  event.preventDefault();
});

//business Logic
function encode(phrase) {
  phrase = phrase.toLowerCase();
  phrase = phrase.replace(/[^a-z]/g,'');
  return phrase;
}
