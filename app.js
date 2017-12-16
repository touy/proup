const async = require('async');
const express = require('express');
const app = express();
const uuidV4 = require('uuid/v4');
const nano = require('nano')('http://admin:admin@localhost:5984');
const LTCSERVICE = require('./ltctopup')();
//const nano = require('nano')('http://localhost:5984');
const cors = require('cors');
const base64 = require('file-base64');
const fs = require('fs');
var redis = require("redis");
var bluebird = require('bluebird');
const __browser = require('detect-browser');
var request = require('request');
r_client = redis.createClient();
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
var moment = require('moment-timezone');
var multer = require('multer');
var path = require('path');
var Client = require('node-rest-client').Client;
const _current_picture_path = __dirname+'/_doc_item_/';
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, '_doc_item_')));
app.use('/temp', express.static(path.join(__dirname, 'temp')));




var passwordValidator = require('password-validator');
var passValidator = new passwordValidator();
var userValidator = new passwordValidator();
var phoneValidator = new passwordValidator();
phoneValidator
  .is().min(10) // Minimum length 8 
  .is().max(10) // Maximum length 100 
  .has().not().letters() // Must not have lowercase letters 
  .has().digits() // Must have digits 
  .has().not().symbols()
  .has().not().spaces() // Should not have spaces 
// start with 0205 , 0207, 0209 ,0202
userValidator
  .is().min(3) // Minimum length 8 
  .is().max(6) // Maximum length 100 
  //.has().uppercase()                              // Must have uppercase letters 
  .has().lowercase() // Must have lowercase letters 
  //.has().digits()                                 // Must have digits 
  .has().not().symbols()
  .has().not().spaces() // Should not have spaces 
//.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values 
passValidator
  .is().min(6) // Minimum length 8 
  .is().max(10) // Maximum length 100 
  //.has().uppercase()                              // Must have uppercase letters 
  //.has().lowercase()                              // Must have lowercase letters 
  //.has().digits()                                 // Must have digits 
  .has().not().spaces() // Should not have spaces 
//.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values 








//const Promise=require ('promise');
// var Promise = require('nano-promise');
const Q = require('q');
//var Promise = require('bluebird');
//Promise.promisifyAll(nano);
//app.use(express.json());       // to support JSON-encoded bodies
//app.use(express.urlencoded()); // to support URL-encoded bodies
const bodyParser = require('body-parser');
var methodOverride = require('method-override');
//app.use(bodyParser());
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
// app.use(logErrors)
// app.use(clientErrorHandler)
app.use(errorHandler)

function errorHandler(err, req, res, next) {
  console.log(err);
  var l = {
    log: err,
    logdate: convertTZ(new Date()),
    type: "error",
    gui: uuidV4()
  };
  errorLogging(l);
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', {
    error: err
  });
}

function errorLogging(log) {
    var db = create_db("proerorlog");
    console.log(log);
    db.insert(log, log.gui, function (err, body) {
      if (err) console.log(err);
      else {
        console.log("log oK ");
      }
    });
  }



var proclient = {
    username: "",
    logintoken: "",
    logintime: null,
    logintimeout: null,
    //clientuid:null,
    registeruid: null,
    confirmregisteruid: null,
    browserinfo: "",
    ip: "",
    other: "",
    lastaccess: null,
    isexist: false,
    clientjs: "",
    fingerprint: "",
    data: {
      user: {},
      balance: {},
      couplingscore: {},
      balance: {},
      package: {},
      packagedetails: {},
      payment: {},
      userbinary: {},
      message: ''
    },
    gui: uuidV4()
  }
var prolog=prologinlog=proerorlog=proaccessedlog={
    log: res,
    logdate: convertTZ(new Date()),
    type: "",
    gui: uuidV4(),
}
app.all('/register',function(req,res){
    var js = {};
    js.client = req.body;
    js.resp = res;
});
app.all('/login',function(req,res){
    var js = {};
    js.client = req.body;
    js.resp = res;
});
app.all('/logout',function(req,res){
    var js = {};
    js.client = req.body;
    js.resp = res;
    logout(js);
});
var prouser={
    username:'',
    password:'',
    phone:'',
    email:'',
    adress:'',
    photo:'',
    createdtime:'',
    updatedtime:'',
    gui:''
}
app.all('/update_pro',function(req,res){

});
app.all('/regsiter_pro',function(req,res){

});
var pro={
    proname:'',
    provalue:'',
    description:'',
    quantity:1,
    condition:'',
    createdtime:'',
    endtime:'',
    activetime:'',
    gui:''
}
var proprodetails={
    shopname:'',
    shopgui:'',
    proname:'',
    progui:'',
    createdtime:'',
    endtime:'',
    activetime:'',
    provalue:0,
    description:'',
    numberofwinner:1,
    logo:'',
    code:'',
    prostatus:'',
    isapproved:false,
    gui:''
}
var proshopfavorite={
    shopname:'',
    shopgui:'',
    username:'',
    createdtime:'',
    deletedtime:'',
    gui:''
}
var procoupon={
    couponname:'',
    proname:'',
    prodetailsgui:'',
    couponvalue:0,
    couponexpire:'',
    couponcreated:'',
    isused:false,
    gui:''
}
var procouponowner={
    couponname:'',
    coupongui:'',
    proname:'',
    prodetailsgui:'',
    istransferred:false,
    createddate:'',
    gui:'',
}
var proregistered={
    prodetailsgui:'',
    prodetailscode:'',
    username:'',
    registeredtime:'',
    code:'',
    gui:''
}
var prowinner={
    username:'',
    proname:'',
    prodetailsgui:'',
    createdtime:'',
    gui:''
}
var proresults={
    prodetailsgui:'',
    proname:'',
    result:'',
    resulttime:'',
    winnergui:'',
    gui:''
}
var proshop={
    shopname:'',
    shopphoto:'',
    description:'',
    username:'',
    createdtime:'',
    shopaddress:'',
    shoplocation:'',
    gui:''
}
app.all('/git_pull',(req,res)=>{
    var exec = require('child_process').exec;
    var child = exec('git pull origin master',
      function (error, stdout, stderr){
        var newlines=/[\r\n]+/;
        var lines=stdout.split(newlines)
        //console.log(lines[2]);
        if(error !== null){
          console.log("Error -> "+error);
            res.send(error);
        }
        else
            res.send(lines);
        //ltcDecrypt(lines[2]);
    });
});