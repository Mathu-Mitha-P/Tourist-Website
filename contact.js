function Name()
        {
            var name=document.contactform.name.value;
            if (name==null || name=="")
            {
            alert("Please Fill the Name column");
            return false;
            }
        }
        function Contactform()
        {
            var name=document.contactform.name.value;
            if (name==null || name=="")
            {
            alert("Please Fill the Name column");
            return false;
            }
            var email=document.contactform.email.value;
            var atposition=email.indexOf("@");
            var dotposition=email.lastIndexOf(".");
            if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
            {
                alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);
                return false;
            }
            var phone=document.contactform.phone.value;
            if(phone = /^[0-9]{10}$/)
            {
                alert("Phone number is valid!")
            }
            else 
            {
                alert("Invalid phone number. Please enter a 10-digit number");
            }
            var message=document.contactform.message.value;
            if(message==true)
            {
            alert("Successfully Sumbitted");
            }
        }