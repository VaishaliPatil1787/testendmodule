var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(
            "<h1>Erto management </h1>"
            +"<hr/>"
            +"<h3>Specification</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Permit</li>"
            +"<li>Penalty</li>"
            +"<li>learning License</li>"
            +"<li>Permanant License</li>"
            +"<li>Mock Test</li>"
            + "</ol>"
    );
});

app.get("/aboutus",(req, res)=>{
    res.send(
            "<h1>E-Rto Managment </h1>"
            +"<hr/>"
            +"<h3>Doing Offine Work Online </h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Group No-104</li>"
            +"<li>Project Mentor-Mrs.Manjiri Deshpande</li>"
            +"<li>Team Member-223226_Vaishali Patil</li>"
            +"<li>Team Member-223195_Shruti Kamble</li>"
            + "</ol>"
    );
});

app.get("/login",(req, res)=>{
    res.send(
            "<h1>Erto Login </h1>"
            + "<h3>Login</h3>"
            +"<hr/>"
            +"<form>"
            + "<input >Name<input/>"
            + "<br/>"
            +"<input>Password<input/> "
            +"<button>login</button>"
            + "</form>"
    );
});

var server=app.listen(9000);
console.log("E-rto Online Managment System running on port 9000");