
var  Generate = () =>
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
                          temporarypassword= password.replace(password.charAt(i),possible.charAt(Math.floor(Math.random()*possible.length)+1));
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
                    }

                     
                    var GetData = () => {
                        
                            var xhttp = new XMLHttpRequest();
                            xhttp.onreadystatechange = function() {
                                if (this.readyState == 4 && this.status == 200) {
                                    // document.getElementById("demo").innerHTML =
                                   console.log(this.responseText); 
                                    data=JSON.parse(this.response);   
                            }
                            };
                            xhttp.open("GET", "./Library.json", true);
                            xhttp.send(); 
                            }
     function DisplayData()
 {
   console.log(data);
    var RemPassword="";
    //Getting each character from password to identify its type for displaying of JSON import values
    for(i=0;i<=lengthval;i++)
    {
        if(isNaN(checkedpassword.charAt(i))==false)
        {
            console.log("1");
            RemPassword+=checkedpassword.charAt(i);   
        }
       else if(RegExp(/[-!$%^&*()_#@+|~=`{}\[\]:";'<>?,.\/]/gi).test(checkedpassword.charAt(i)))    
        {
            console.log("2");
            RemPassword+=checkedpassword.charAt(i);
        }
        else if(isNaN(checkedpassword.charAt(i))==true)
        {   
            console.log("3");
            
            RemPassword+=data[checkedpassword.charAt(i)];   
        }  
    }
    
    document.getElementById('rememberpassword').value= RemPassword;
   
}