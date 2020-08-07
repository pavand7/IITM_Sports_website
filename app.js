const express = require("express");
const bodyParser = require("body-parser");
const env = require("dotenv").config({path: __dirname + '/.env'})

const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// home
app.get("/", function (req, res) {
  res.render("pages/home");
});


// EVENTS
app.get('/events',function(req,res){
  res.render('pages/events')
})

// Sports

// inter-iit sports
app.get("/interiit", function (req, res) {
  res.render("pages/sports/interiit");
});

app.get("/athletics", function (req, res) {
  res.render("pages/sports/interiit-sports/athletics");
});

app.get("/aquatics", function (req, res) {
  res.render("pages/sports/interiit-sports/aquatics");
});

app.get("/badminton", function (req, res) {
  res.render("pages/sports/interiit-sports/badminton");
});

app.get("/basketball", function (req, res) {
  res.render("pages/records/interiit-sports/basketball");
});

app.get("/chess", function (req, res) {
  res.render("pages/sports/interiit-sports/chess");
});

app.get("/cricket", function (req, res) {
  res.render("pages/sports/interiit-sports/cricket");
});

app.get("/football", function (req, res) {
  res.render("pages/sports/interiit-sports/football");
});

app.get("/hockey", function (req, res) {
  res.render("pages/sports/interiit-sports/hockey");
});

app.get("/squash", function (req, res) {
  res.render("pages/sports/interiit-sports/squash");
});

app.get("/tennis", function (req, res) {
  res.render("pages/sports/interiit-sports/tennis");
});

app.get("/tabletennis", function (req, res) {
  res.render("pages/sports/interiit-sports/tabletennis");
});

app.get("/volleyball", function (req, res) {
  res.render("pages/sports/interiit-sports/volleyball");
});

app.get("/weightlifting", function (req, res) {
  res.render("pages/sports/interiit-sports/weightlifting");
});


// non-interiit Sports
app.get('/non-interiit', function(req,res){
  res.render('pages/sports/non-interiit')
});

// Facilities/Grounds
app.get('/facilities', function(req,res){
  res.render('pages/sports/facilities')
})


// HISTORY

// inter-IIT
app.get('/history-interiit', function(req,res){
  res.render('pages/history/interiit')
});

// IITM
app.get('/history-iitm', function(req,res){
  res.render('pages/history/iitm')
});


// RECORDS

// Inter-IIT
app.get('/records-interiit', function(req,res){
  res.render('pages/records/interiit')
});

// Schroeter
app.get('/records-schroeter', function(req,res){
  res.render('pages/records/schroeter')
});

// Dean's Trophy
app.get('/records-deanstrophy', function(req,res){
  res.render('pages/records/deanstrophy')
});


// PEOPLE

// Hall of fame
app.get('/halloffame', function(req,res){
  res.render('pages/people/wallOfFame')
})

// SOC
app.get("/SOC", function (req, res) {
  res.render("pages/people/SOC");
});

// Gymkhana
app.get("/gymkhana", function (req, res) {
  res.render("pages/people/Gymkhana");
});


// FEEDBACK
app.get('/feedback', function(req,res){
  formspreeURL = "https://formspree.io/" + env.parsed.FORMSPREE_ID;
  res.render('pages/Feedback.ejs', {formspreeURL : formspreeURL});
})

app.listen(PORT, function () {
  console.log("Server is running on localhost", PORT);
});
