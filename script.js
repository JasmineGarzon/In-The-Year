$("button").click(function(){
    var input=$("#Monster").val();
    var input2= 2050 - $("#YearofBirth").val() ;
    var input3=$("#Verb").val();
    console.log(input);
    $("#answer").append("<h3>In the year 2054 you will face a " + input  + " when you're " + input2 + " . You will " + input3 + " a " + input  + ". How brave of you! </h3>");
});
