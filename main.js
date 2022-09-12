 const express = require('express')
 require('dotenv').config()
 const app = express()
 app.use(express.static("public"))
 app.use(express.json())

const port = 3000;
const { pipeline } = require('stream')


app.get('/',(req,res)=>{
    const dataStream = got.stream({
        uri: 'https://jsonplaceholder.typicode.com/users'
    });
    pipeline(dataStream, res, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    })

    }    
)
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
