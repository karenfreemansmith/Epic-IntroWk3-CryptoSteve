

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
  cols = parseInt(Math.sqrt(phrase.length));
  var bigArray = [];
  var smallArray = [];
  var counter = 0;
  for(var i = 0; i <= phrase.length; i++){
    //debugger;
    if(counter < cols){
      smallArray.push(phrase.charAt(i));
      counter++;
    } else {
      bigArray.push(smallArray);
      counter = 0;
      smallArray = [];
      i--;
    }
  }
  console.log(bigArray);
  return phrase;
}
