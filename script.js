document.getElementById("loginButton").addEventListener('click',function(){


    const uname = document.getElementById("uname").value;
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const pno = document.getElementById("pno.").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Pass").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!uname || !fname || !lname || !pno || !email || !password){
     
         alert("All fields are required to fill")}

    else{

    if(!emailRegex.test(email)){

        alert("Email should be in the correct format like something@domain.com")
    }
    
    if(!phoneRegex.test(pno)){
        alert("phone number should be of 10 digits")
    }

    if(!passwordRegex.test(password)){
        alert("Password should be at least 8 characters,1 uppercase,1 lowercase,1 number and 1 special character")
    }}
     if(uname && fname && lname && pno && email && password){

alert(`Login Details:\n
    Username: ${uname}\n
    First Name: ${fname}\n
    Last Name: ${lname}\n
    Phone Number: ${pno}\n
    Email: ${email}\n
    Password: ${password}\n`);

     }
document.getElementById("loginForm").reset()
})