$(function(){

  function pigLatinIZE(string, index) {
    //console.log("Latinize, st: "+string + ", index: " + index);

    if(string.charAt(index) == "u") {
      console.log("PIG LATINIZE IF");
      var firstConsonants = string.slice(0,index+1);
      var remainderWord = string.slice(index+1,string.length);
      $("#output h2").text(remainderWord+firstConsonants+"ay");
    }else{
      console.log("PIG LATINIZE ELSE");
      var firstConsonants = string.slice(0,index);
      var remainderWord = string.slice(index,string.length);
      $("#output h2").text(remainderWord+firstConsonants+"ay");
    // for(j=0;j<index;j++){
    //   console.log("string index " + string.charAt(index));
    //   firstConsonants += string.charAt(j);
      // if(string[index] == "u") {
      //   console.log(firstConsonants);
      //   console.log("found that U!!!");
      // }
    //}
    }
  }

  function isVowel(string) {
    var vowel = ["a", "e", "i", "o", "u"];
    var k = 0;
    var index = 0;
    console.log("vowel check: " + string);
    $(string).each(function(){
      console.log("vowel to compare: " + this );
      for(i=0; i < string.length-1; i++){
        console.log("comparing string: " + vowel[i]);
        if((this == vowel[i]) && (k == 0)){
          console.log("WE FOUND A VOWEL! " + this + ", index found at:"+ index);
          k++;
          pigLatinIZE(string, index);
        }
      }
      index++;
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
