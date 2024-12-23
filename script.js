alert("Have a nice day!");  
function login()
{
        var userchoice=confirm("Do you want to login?");         
        if(userchoice==true)
        {
                var username=prompt(" What is your name? ");
                alert("Great! Login successfully");
        }
        else
        {
                alert("Login Cancelled");
        }
}   
