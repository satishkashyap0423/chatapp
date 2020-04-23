const express = require('express')
var mysql = require('mysql');
const app = express()
const port = 3000
// var con = mysql.createConnection({
//     host: "www.000webhost.com",
//     user: "Satish",
//     password: "791\p+W81S!AHsl}"
//   });
  var con = mysql.createConnection({
    host : '',
    user : "id13373715_satish",
    password : "791\p+W81S!AHsl}",
    database : 'id13373715_firstapp',
    port:3306,
    timeout: 10000000
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });