# my-backend-notes

sql 
```js
SELECT First_name FROM bed.my_table WHERE First_name = "Balls" ORDER BY First_name ASC||DESC;

SELECT a.First_Name as "First Name", a.Last_Name as "Last Name", s.Pcode as "Postcode" FROM bed.shop s, my_table a WHERE s.Email = a.Email;

SELECT CONCAT(a.First_Name, a.Last_Name) as "Full Name", s.Pcode as "Postcode" FROM bed.shop s, my_table a WHERE s.Email = a.Email;

INSERT INTO post (id) VALUES (1)
--alternative that does not require fields but ensure that length of values == fields
INSERT INTO shop VALUES (1, "HELLO", "BIG", "Email", "C", "12")

UPDATE my_table SET Email = 'BALL' WHERE Email = "balls@balls.com";

DELETE FROM my_table WHERE Email = '2';
```

app
```js
var id = req.params.userid
data = req.body; //AND THATS WHY BODY PARSER IS SO IMPORTANT
    username = data["username"]
    email = data["email"]
    password = data["password"]
    role = data["role"]
```

myCommonAppBlocks
```js
//detach ID from params
postID = parseInt(req.params.postID.replace(":", "")) //parseInt returns NaN if not int
if (isNaN(postID)) { //not in requirements
    res.status(400).send()
}

if (err) {
    res.status(500).send()
} else {
    res.status(204).send() //replace with success code
} 
```

myCommonAppHeaders
```js
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
//INSERT MODELS HERE

app.use(bodyParser.json())
```
whyAmITypingInCamelCasePleaseHelpProgrammingHasRuinedMyLifeHereIsMyModelTemplates
```js
const db = require("./databaseConfig.js") //replace with your path


var dbConn = db.getConnection();
dbConn.connect(function (err) {
if (err) {//database connection issue
    return callback(err, null);
} else {
    getQuery = `SELECT * FROM myTable`
    dbConn.query(getQuery, (err, result) => {
        dbConn.end()
        if (err){
            return callback(err, null)
        }
        return callback(null, result)
    })
}})
```

nodemon:
```js
//package.json
"scripts": {
    "start-dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

Making exceptions to errors (Practical 6 Post exercise)
```js
if (err && err.code != "ER_DUP_ENTRY") {
    //It is important to query err.code ONLY AFTER checking if err exists
    //because querying for err.code raises a fatal exception as err is a null object
    //This conditional makes an exception for this error code to send HTTP 201
    res.status(500).send()
    
} else {
    res.status(201).send() //replace with success code
} 
```

HTTP codes in scope
200 OK
201 Successful (POST)
put is used to update a resource, put only allows full replacement of the resource 
204 No Content - no body, used if successful in PUT
400 Bad Request - i.e key/value in body is invalid
404 Not Found
500 Internal Server Error ISE

![image](https://github.com/speckly/my-backend-notes/assets/60218942/254bab4b-0264-46ba-80db-92e7eed92a80)

