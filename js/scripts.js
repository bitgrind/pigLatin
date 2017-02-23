$(function(){
  function pigLatinIZE(string, index) {
    if(string.charAt(index) == "u" && string.charAt(index-1) == "q") {
        index++;
    }
    var firstConsonants = string.slice(0,index);
    var remainderWord = string.slice(index,string.length);
    $("#output h2").append(remainderWord+firstConsonants+"ay ");
  }
  function isVowel(string) {
    var vowel = ["a", "e", "i", "o", "u"];
    var k = 0;
    var index = 0;
    $(string).each(function(){
      for(i=0; i <= string.length; i++){
        if((this == vowel[i]) && (k == 0)){
          k++;
          pigLatinIZE(string, index);
        }
      }
      index++;
    });
  }
  function pigLatin(sentence){
    var arraySentence = sentence.split(" ");
    $(arraySentence).each(function(){
      isVowel(this);
    });
    return sentence;
  }
  $("#pigLatin").submit(function(){
    event.preventDefault();
    var sentence = $("#pigLatin input").val();
    $("#output h2").html("");
    pigLatin(sentence);
  });
});
