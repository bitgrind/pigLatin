$(function(){

  function pigLatinIZE(string, index) {
    //console.log("Latinize, st: "+string + ", index: " + index);
    var firstConsonants = "";
    var sliceLength = string.length-index;
    console.log(sliceLength);
    var remainderWord = string.slice(index,(sliceLength+index));
    for(j=0;j<index;j++){
      firstConsonants += string.charAt(j);
      console.log("pigLatinIZE: "+ string.charAt(j));
    }

    console.log("Pig Laten String: " + firstConsonants);
    console.log("Remainder of SLICE: " + remainderWord);
    $("#output h2").text(remainderWord+firstConsonants+"ay");
  }

  function isVowel(string) {
    var vowel = ["a", "e", "i", "o", "u"];
    console.log("vowel check: " + string);
    $(vowel).each(function(){
      console.log("vowel to compare: " + this );
      for(i=0; i < string.length; i++){
        if(this == string.charAt(i)){
          console.log("WE FOUND A VOWEL!");
          pigLatinIZE(string, i);
          break;
        }
      }
    });
  }

  //business logic
  function pigLatin(sentence){
    var arraySentence = sentence.split(" ");
    $(arraySentence).each(function(){
      isVowel(this);
    });
    return sentence;
  }

  //user logic
  $("#pigLatin").submit(function(){
    event.preventDefault();
    var sentence = $("#pigLatin input").val();
    pigLatin(sentence);
  });
});
