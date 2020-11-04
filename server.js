let express = require('express')
let path = require('path')
let app = express()

app.use(express.static('public'))


app.get("/",  function(req, res){
 res.sendFile(path.join(__dirname + '/index.html'))
})



app.listen(3000, function(){
    console.log("App is listening on 3000")
})