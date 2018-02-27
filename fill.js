var  LengthDL = () =>
{
    console.log("LENGTH");
    var options = "";
    for(var i = 16;i<33;i++)
    {
        options += "<option>"+ i +"</option>";
    }
    document.getElementById("length").innerHTML = options
};

//module.exports = {LengthDL};
