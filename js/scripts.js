$(function(){

  function isVowel() {
    
  }

  //business logic
  function pigLatin(sentence){

    console.log(sentence.length);
    var arraySentence = sentence.split(" ");
    console.log(arraySentence + ", " + arraySentence.length);
    $(arraySentence).each(function(){
      console.log($(this));

    });
    return sentence;
  }

  //user logic
  $("#pigLatin").submit(function(){
    event.preventDefault();
    var sentence = $("#pigLatin input").val();
    var pigLatinOutput = pigLatin(sentence);
    $("#output h2").text(pigLatinOutput);
  });
});
