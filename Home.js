var logo=null;
        
        //this will display an alert message on my animation page
        function message()
        {
            alert("WELCOME TO ANIMATION PAGE");
        }
        
        function Animation()
        {
            logo=document.getElementById('pic');      
            logo.style.position='relative'; 
            logo.style.top='1px';  
        }
        /* 
        This image (logo) will move down.
        */
        function moveBottom() 
        {  
            logo.style.top=parseInt(logo.style.top)+100+'px';  
        }  
        window.onload=Animation;   