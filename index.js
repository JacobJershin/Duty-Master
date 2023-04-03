require('dotenv').config()
const express = require("express");
const path = require('path');
const { google } = require("googleapis");
const app = express();

const auth = new google.auth.GoogleAuth ({
    keyFile: "duty-master-key.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});
const spreadsheetId = process.env.SHEETID;

app.use(express.static(path.join(__dirname)));
app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express);
app.use(express.urlencoded({ extended: true }));

app.use('/content.js', async (req, res) => {
  console.log("loading sheet content")
  const teacher_duty_range = "Duty Tracker!A:B"
  const client = await auth.getClient();    
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const names_dutyCount = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: teacher_duty_range,
  });

  res.send(names_dutyCount);
});

app.get('/index', function (req, res) {
  res.render('index');
});

//https://APITHINGY.com/v1/.../query
app.use('/v1/duty/:filename', async (req, res) => {
  console.log("loading query");
  var fullQuery = new Boolean();
  console.log(req.params.filename.toString())

  if (req.params.filename.toString() != "all") {
    fullQuery = false;
    var index = req.params.filename.toString()
  } else {
    fullQuery = true;
  }

  const duty = "Duty Tracker!A:B"
  const client = await auth.getClient();    
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const query = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: duty,
  });

  if (fullQuery == false) {
    res.send(query.data.values[parseInt(index)]);
  } else { 
    res.send(query.data.values) 
  }
});

app.use('/v1/conf/period/:filename', async (req, res) => {
  console.log("loading query");
  var fullQuery = new Boolean();

  if (req.params.filename.toString() != "all") {
    fullQuery = false;
    var periodRange = num_to_letter_conf(req.params.filename.toString()) + "2:" + num_to_letter_conf(req.params.filename.toString());
  } else {
    fullQuery = true;
    var periodRange = "A:E";
  }
  
  const periodQuery = "CONF 22-23!" + periodRange;
  const client = await auth.getClient();    
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const contentJSON = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: periodQuery,
  });

  if (fullQuery == false) {
    res.send(contentJSON.data.values);
//      res.send(contentJSON.data.values[parseInt(period)]);
  } else { 
    res.send(contentJSON.data.values);
  }
});

app.use('/v1/team_planning/period/:filename', async (req, res) => {
  console.log("loading query");
  var fullQuery = new Boolean();

  if (req.params.filename.toString() != "all") {
    fullQuery = false;
    var periodRange = num_to_letter_plan(req.params.filename.toString()) + "2:" + num_to_letter_plan(req.params.filename.toString());
  } else {
    fullQuery = true;
    var periodRange = "A:E";
  }
  
  const periodQuery = "CONF 22-23!" + periodRange;
  const client = await auth.getClient();    
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const contentJSON = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: periodQuery,
  });

  if (fullQuery == false) {
    res.send(contentJSON.data.values);
//      res.send(contentJSON.data.values[parseInt(period)]);
  } else { 
    res.send(contentJSON.data.values);
  }
});
function num_to_letter_plan(n) {
  if (n == 1) return "A";
  if (n == 2) return "E";
  if (n == 3) return "I";
  if (n == 4) return "M";
  if (n == 5) return "Q";
  if (n == 6) return "U";
  if (n == 7) return "Y";
  if (n == 8) return "AC";
}
function num_to_letter_conf(n) {
  if (n == 1) return "C";
  if (n == 2) return "G";
  if (n == 3) return "K";
  if (n == 4) return "O";
  if (n == 5) return "S";
  if (n == 6) return "W";
  if (n == 7) return "AA";
  if (n == 8) return "AE";
}


app.listen(3000, (req, res) => console.log("running on 3000"));