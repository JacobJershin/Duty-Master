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

app.use('/v1/dutyMaster/all', async (req, res) => {
  console.log("loading Master query");
  var all = []

  const duty = "Duty 22-23 v2!B4:J"
  const client = await auth.getClient();    
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const query = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: duty,
  });

  for (index=0; index < ((query.data.values.length / 21) - 1); index++) {
    var BDay = {}
    var ADay = {}
    var data = {}

    ADay["Cafeteria"] = query.data.values[0 + index * 21]
    ADay["Upper Eagle's Nest"] = query.data.values[1 + index * 21]
    ADay["Cafeteria Interior"] = query.data.values[2 + index * 21]
    ADay["Library"] = query.data.values[3 + index * 21]
    ADay["Lower F-G Hall"] = query.data.values[4 + index * 21]
    ADay["Upper F-G Hall"] = query.data.values[5 + index * 21]
    ADay["PAC"] = query.data.values[6 + index * 21]

    BDay["Cafeteria"] = query.data.values[10 + index * 21]
    BDay["Upper Eagle's Nest"] = query.data.values[11 + index * 21]
    BDay["Cafeteria Interior"] = query.data.values[12 + index * 21]
    BDay["Library"] = query.data.values[13 + index * 21]
    BDay["Lower F-G Hall"] = query.data.values[14 + index * 21]
    BDay["Upper F-G Hall"] = query.data.values[15 + index * 21]
    BDay["PAC"] = query.data.values[16 + index * 21]  

    data["A-Day"] = ADay
    data["B-Day"] = BDay

    all.push(data)
  }
  res.send(all);
});

app.use('/v1/dutyMaster/rotation/:filename', async (req, res) => {
  console.log("loading Master query");
  var queryRotation = parseInt(req.params.filename) - 1;
  var BDay = {}
  var ADay = {}
  var data = {}

  const duty = "Duty 22-23 v2!B" + (queryRotation * 21 + 4) + ":J" + (queryRotation * 21 + 20)
  const client = await auth.getClient();    
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const query = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: duty,
  });
  
  ADay["Cafeteria"] = query.data.values[0]
  ADay["Upper Eagle's Nest"] = query.data.values[1]
  ADay["Cafeteria Interior"] = query.data.values[2]
  ADay["Library"] = query.data.values[3]
  ADay["Lower F-G Hall"] = query.data.values[4]
  ADay["Upper F-G Hall"] = query.data.values[5]
  ADay["PAC"] = query.data.values[6]

  BDay["Cafeteria"] = query.data.values[10]
  BDay["Upper Eagle's Nest"] = query.data.values[11]
  BDay["Cafeteria Interior"] = query.data.values[12]
  BDay["Library"] = query.data.values[13]
  BDay["Lower F-G Hall"] = query.data.values[14]
  BDay["Upper F-G Hall"] = query.data.values[15]
  BDay["PAC"] = query.data.values[16]  

  data["A-Day"] = ADay
  data["B-Day"] = BDay
  res.send(data);
});

app.use('/v1/dutyMaster/dates/:filename', async (req, res) => {
  console.log("loading query");

  var rotationNumber = req.params.filename.toString() 
  
  const periodQuery = "Duty 22-23 v2!A" + (21 * rotationNumber + 1);
  const client = await auth.getClient();    
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const contentJSON = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: periodQuery,
  });
    res.send(contentJSON.data.values);
});


app.get('/views/src/Home/index.html', function (req, res) {
  res.render('views/src/Home/index.html');
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