//user interface
$("form").submit(function(event){
  $("#results").text(encrypt($("#words").val()));
  event.preventDefault();
});

// backend logic for old form
function encrypt(phrase) {
  var cleanedText = stripXtraCharacters(phrase);
  var squareSize = Math.floor(Math.sqrt(cleanedText.length));
  var cryptosquare = cleanedText.split("");
  var encryptedText=[];
  var counter=0;
  for(j=0;j<squareSize;j++){
    for(i=j;i<cryptosquare.length;i+=squareSize){
      encryptedText.push(cleanedText[i]);
      counter++;
      if(counter===5) {
        encryptedText.push(" ");
        counter=0;
      }
    }
  }
  return encryptedText.join("");
}

function stripXtraCharacters(str) {
  str = str.toLowerCase();
  return str.replace(/[^a-z]/g,'');
}
