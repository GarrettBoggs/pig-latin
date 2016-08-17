// Business Logic
var vowels = ["a","e","i","o","u"];
var counter = 0;
var cons = "";

function pigLatin(Input)
{
  for(var i = 0; i < Input.length; i ++)
  {
    if(Input.charAt(i)==="q" && Input.charAt(i + 1)==="u"){
       cons = cons + "q" + "u";
       Input = Input.substring(i + 2) + cons + "ay";
       cons = "";
       console.log(Input);
       return Input;
    }
    for(var j = 0; j < vowels.length; j ++)
    {

      if(Input.charAt(i) === vowels[j])
      {
        Input = Input.substring(i) + cons + "ay";
        cons = "";
        console.log(Input);
        return Input;
      }
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
