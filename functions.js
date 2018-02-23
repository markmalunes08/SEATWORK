function LengthDL()
{
    console.log("LENGTH");
    var options = "";
    
    for(var i = 16;i<33;i++)
    {
        options += "<option>"+ i +"</option>";
    }
    document.getElementById("length").innerHTML = options;
    
}

function Generate()
            {
                var examb ="!@#$%^&*_+=*.";
                var exsym ="!@#$%^&*()_+=[]{}':;*/.\"<>~`";
                var exnum ="23456789";
                var exsmall="abcdefghjkmnpqrstuvwxyz"
                var exbig ="ABCDEFGHJKLMNPQRSTUVWXYZ";
                var bigLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var smallLetters ="abcdefghijklmnopqrstuvwxyz";
                var numberCharacters="1234567890";
                var symbolCharacters="!@#$%^&*()_+=[]{}|':;*/.\"<>~`";
                var similarCharacters = "il1Lo0O|";
                var ambigouosCharacters = "{}[]<>;:./\\,~`\"'";
                var possible ="";
                var password ="";
                var checkedpassword ="";
                //length value
                var lengthval=document.getElementById('length').value;
                
                //checkbox values
                var symbolscheckbox =document.getElementById('symbols');
                var numberscheckbox =document.getElementById('numbers');
                var upcasecheckbox =document.getElementById('UpCase');
                var lowcasecheckbox =document.getElementById('LowCase');
                var ambicheckbox =document.getElementById('AmbiChar');
                var simicheckbox = document.getElementById("SimiChar");
               
                        // INCLUDE CHECKBOXESa
                       if(upcasecheckbox.checked)
                       {
                        if(simicheckbox.checked)
                        {
                            possible+=exbig;
                        }
                        else
                        {
                        possible += bigLetters;
                        }
                       }
                       if(lowcasecheckbox.checked)
                       {
                        if(simicheckbox.checked)
                        {
                            possible+=exsmall;
                        }
                        else
                        {
                        possible += smallLetters;
                        }
                       }
                       if(symbolscheckbox.checked)
                       {
                        if(simicheckbox.checked)
                        {
                            possible+=exsym;
                        }
                        else
                        {
                        possible += symbolCharacters;
                        }
                       }
                       if(numberscheckbox.checked)
                       {
                        if(simicheckbox.checked)
                        {
                            possible+=exnum;
                        }
                        else
                        {
                        possible += numberCharacters;
                        }
                       }
                       
                       // GENERATING PASSWORD
                        for(let i=0;i<lengthval;i++)
                        {
                                    password += possible.charAt(Math.floor(Math.random()*possible.length)+1); 
                                  
                        }
                        // Checking password 
                        for(let i=0;i<lengthval;i++)
                        {
                        var temporarypassword="";   
                        if(RegExp(/[[<>{}()/\\'\["`~,;:.\]]/gi).test(password.charAt(i))&&ambicheckbox.checked)
                        {    
                        do
                        {
                          temporarypassword= password.replace(password.charAt(i),"A");
                        }while(RegExp(/[<>{}()/]\\[\'"`~,;:.]/gi).test(temporarypassword==false))
                                checkedpassword+=temporarypassword.charAt(i);
                                temporarypassword="";
                               
                        }

                        else 
                        {
                               checkedpassword += password.charAt(i);
                        }
                        }
                        
                        document.getElementById('password').value=checkedpassword; 
                        var myObj, myJSON, text, obj;
                        //Storing data:
                        myObj = { "A":"APPLE", "B":"BEER", "C":"CRAB","D":"DEER", "E":"EAGLE", "F":"FOX", "G":"GECKO", "H":"HORSE" ,"I":"INSECT", "J":"JAGUAR", "K":"KOALA", "L":"LION", "M":"MONKEY", "N":"NEWT", "O":"OCTOPUS", "P":"PENGUIN", "Q":"QUAIL", "R":"RABBIT", "S":"SEAL", "T":"TIGER", "U":"UGUISU", "V":"VAMPIREBAT", "W":"WHALE", "X":"X-RAYTETRA", "Y":"YAK", "Z":"ZEBRA",  "a":"apple", "b":"beer", "c":"crab","d":"deer", "e":"eagle", 
                        "f":"fox", "g":"gecko", "h":"horse" ,"i":"insect", "j":"jaguar", "k":"koala", "l":"lion", "m":"monkey", "n":"newt", "o":"octopus", "p":"penguin", "q":"quail", "r":"rabbit", "s":"seal", "t":"tiger", "u":"uguisu", "v":"vampirebat", "w":"whale", "x":"x-raytetra", "y":"yak", "z":"zebra"};
                        
                        myJSON = JSON.stringify(myObj);
                        localStorage.setItem("Library", myJSON);
        
                        //Retrieving data:
                        text = localStorage.getItem("Library");
                        obj = JSON.parse(text);
                        
                        var RemPassword="";
                        //Getting each character from password to identify its type for displaying of JSON import values
                        for(i=0;i<=lengthval;i++)
                        {
                            if(isNaN(checkedpassword.charAt(i))==false)
                            {
                                RemPassword+=checkedpassword.charAt(i);   
                            }
                           else if(RegExp(/[-!$%^&*()_#@+|~=`{}\[\]:";'<>?,.\/]/gi).test(checkedpassword.charAt(i)))    
                            {
                                RemPassword+=checkedpassword.charAt(i);
                            }
                            else if(isNaN(obj[checkedpassword.charAt(i)])==true)
                            {
                                RemPassword+=obj[checkedpassword.charAt(i)];   
                            }  
                        }
                        
                        document.getElementById('rememberpassword').value= RemPassword;
                    }
    function Getdata() {
               
            }