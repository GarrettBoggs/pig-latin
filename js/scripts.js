// Business Logic
var vowels = /[aeiou]/i ;
var counter = 0;
var cons = "";


function pigLatin(Input)
{
  if(parseInt(Input) > 0)
  {
    alert("Enter a word!")
    return;
  }
  for(var i = 0; i < Input.length; i ++)
  {
    if(Input.charAt(i)==="q" && Input.charAt(i + 1)==="u"){
       cons = cons + "q" + "u";
       Input = Input.substring(i + 2) + cons + "ay";
       cons = "";
       console.log(Input);
       return Input;
    }
      if(vowels.test(Input.charAt(i)))
      {
        Input = Input.substring(i) + cons + "ay";
        cons = "";
        console.log(Input);
        return Input;
      }
      cons = cons + Input.charAt(i);
  }
}

//User interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var Input = $("#year").val();
    console.log(Input);

    $("#output").text("Output: " + pigLatin(Input));
  });
});
