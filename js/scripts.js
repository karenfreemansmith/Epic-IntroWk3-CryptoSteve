//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

function stripXtraCharacters(str) {
  str=str.split("");
  for(i=0;i<=str.length;i++) {
    //eliminate spaces
    if (str[i]===" ") {
      str[i]="";
    }
    //eliminate punctuation
    if (str[i]==="." || str[i]==="?" || str[i]==="," || str[i]==="!" || str[i]===";" || str[i]===":" || str[i]==="-" || str[i]==="'") {
      str[i]="";
    }
  }
  return str.join("");
}

$("#encryptText").click(function() {
  var cleanedText = stripXtraCharacters($("#yourText").val().toLowerCase());
  var squareSize = Math.ceil(Math.sqrt(cleanedText.length));
  var cryptosquare = cleanedText.split("");
  var encryptedText=[];
  var counter=0;
  for(j=0;j<squareSize;j++){
    for(i=j;i<cryptosquare.length;i+=squareSize-1){
      encryptedText.push(cleanedText[i]);
      counter++;
      alert(counter);
      if(counter===5) {
        encryptedText.push(" ");
        counter=0;
      }
    }
  }
  $("#results").text(encryptedText.join(""));
});
