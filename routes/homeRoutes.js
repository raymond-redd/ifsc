//Dependencies
const route = require('express').Router();
const https = require('https');

//Home route
route.get("/", (req, res)=>{
    res.render("index")
});

//Search post route
route.post("/search", async(req, res)=>{
    const ifscCode = req.body.ifsc;
    console.log(ifscCode);
    const url = `https://ifsc.razorpay.com/${ifscCode}`;
    https.get(url, (response)=>{
        console.log(response.statusCode);
        response.on("data", (data)=>{
            const details = JSON.parse(data);
            console.log(details);
            if(response.statusCode == 200){
                console.log(`success!`);
                res.render("result", {
                    data: details
                });
                console.log(details);
            }else{
                res.render("error")
            }
        });
        
    })

})

//Export as default
module.exports = route;