async function GET(url) {
    const response = await fetch(url);
    var JSON = await response.json();
    console.log(JSON);
    HTMLShower(JSON);
}
GET("http://localhost:3000/v1/dutyMaster/all");
/*
async function GETDATE(date) {
    const response = await fetch("http://localhost:3000/v1/dutyMaster/dates/" + date);
    var JSON = await response.json()
    console.log(JSON)
}

function dateShower(date) {
    GETDATE(date)
}
*/

//UGLY AF FIX THIS CODE OH MY GOD AHHHHH IM THROWING UP RN ASKDJQIWRJLKFJLKE
function HTMLShower(JSON) {
    var final = ""
    for (i=0; i < JSON.length; i++)
    {
        final += `
        <div class="waffle-Title">Rotation #`+(JSON.length - i)+`</div>
      <div class="ritz grid-container" dir="ltr" style="filter: drop-shadow(-1vw 1vw 1px darkgrey); padding-top: 0px;">
      <table class="waffle" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td class="titleA" dir="ltr" colspan="11" style="
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;">
              A DAY - ROTATION `+ (JSON.length - i) +`:
              <span style="font-weight: normal;"
                > Monday August 29th - Friday September 16th </span
              >
            </td>
          </tr>
          <tr>
            <th class="row-headers-background"></th>
            <td class="tableTitle" dir="ltr" rowspan="2">A-day duties</td>
            <td class="period" colspan="2">1st Conf</td>
            <td class="period" colspan="2">2nd Conf</td>
            <td class="period" colspan="2">3rd Conf Lunch Duty</td>
            <td class="period" colspan="2">4th Conf</td>
            <td class="period" colspan="2">8th Conf</td>
          </tr>
          <tr>
            <th class="row-headers-background"></th>
            <td class="time">8:00 - 8:30</td>
            <td class="time" dir="ltr">8:50 - 9:45</td>
            <td class="time" dir="ltr">9:50 - 10:40</td>
            <td class="time" dir="ltr">10:35 - 11:25</td>
            <td class="lunchTime" dir="ltr">A Lunch</td>
            <td class="lunchTime">B Lunch</td>
            <td class="time" dir="ltr">1:35 - 2:25</td>
            <td class="time" dir="ltr">2:20 - 3:10</td>
            <td class="time" dir="ltr">3:15 - 4:10</td>
          </tr>
          <tr>
            <th class="row-headers-background"></th>
            <td class="location" dir="ltr">
              <a
                target="_blank"
                href="https://canvas.allenisd.org/courses/1368446/pages/cafeteria?module_item_id=56456831"
                >Cafeteria</a
              >
            </td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"].Cafeteria[0]+`</td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"].Cafeteria[1]+`</div>
            </td>
            <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["A-Day"].Cafeteria[2]+`</td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"].Cafeteria[3]+`</div>
            </td>
            <td class="lunchDutyOne" dir="ltr" rowspan="3">
              <div>`+JSON[JSON.length - i - 1]["A-Day"].Cafeteria[4].split('ISS')[0]+`</div><br>
              <div> ISS `+JSON[JSON.length - i - 1]["A-Day"].Cafeteria[4].split('ISS')[1]+`</div>
            </td>
            <td class="lunchDutyOne" rowspan="3">`+JSON[JSON.length - i - 1]["A-Day"].Cafeteria[5]+`</td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"].Cafeteria[6]+`</div>
            </td>
            <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["A-Day"].Cafeteria[7]+`</td>
            <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["A-Day"].Cafeteria[8]+`</td>
          </tr>
          <tr>
            <th class="row-headers-background"></th>
            <td class="location" dir="ltr">
              <a
                target="_blank"
                href="https://canvas.allenisd.org/courses/1378480/pages/upper-eagles-nest"
                >Upper Eagle's Nest</a
              >
            </td>
            <td class="noDuty" dir="ltr">`+JSON[JSON.length - i - 1]["A-Day"]["Upper Eagle's Nest"][0]+`</td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"]["Upper Eagle's Nest"][1]+`</div>
            </td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"]["Upper Eagle's Nest"][2]+`</div>
            </td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"]["Upper Eagle's Nest"][3]+`</div>
            </td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"]["Upper Eagle's Nest"][6]+`</div>
            </td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"]["Upper Eagle's Nest"][7]+`</div>
            </td>
            <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["A-Day"]["Upper Eagle's Nest"][8]+`</td>
          </tr>
          <tr>
            <th class="row-headers-background"></th>
            <td class="location" dir="ltr">
              <a
                target="_blank"
                href="https://allenisd.instructure.com/courses/1378480/pages/loss-of-privilege"
                >Cafeteria Interior</a
              >
            </td>
            <td class="noDuty" dir="ltr">`+JSON[JSON.length - i - 1]["A-Day"]["Cafeteria Interior"][0]+`</td>
            <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["A-Day"]["Cafeteria Interior"][1]+`</td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"]["Cafeteria Interior"][2]+`</div>
            </td>
            <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["A-Day"]["Cafeteria Interior"][3]+`</td>
            <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["A-Day"]["Cafeteria Interior"][6]+`</td>
            <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["A-Day"]["Cafeteria Interior"][7]+`</td>
            <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["A-Day"]["Cafeteria Interior"][8]+`</td>
          </tr>
          <tr>
            <th class="row-headers-background"></th>
            <td class="location" dir="ltr">
              <a
                target="_blank"
                href="https://allenisd.instructure.com/courses/1378480/pages/lower-eagles-nest?module_item_id=58315851"
                >Library</a
              >
            </td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"].Library[0]+`</td>
            <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["A-Day"].Library[1]+`</td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"].Library[2]+`</div>
            </td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"].Library[3]+`</div>
            </td>
            <td class="lunchTime" dir="ltr">C Lunch</td>
            <td class="lunchTime" dir="ltr">D Lunch</td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"].Library[6]+`</div>
            </td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"].Library[7]+`</div>
            </td>
            <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["A-Day"].Library[8]+`</td>
          </tr>
          <tr>
            <th class="row-headers-background"></th>
            <td class="location" dir="ltr">
              <a
                target="_blank"
                href="https://canvas.allenisd.org/courses/1368446/pages/main-hallways?module_item_id=56456833"
                >1st floor F-G halls</a
              >
            </td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"]["Lower F-G Hall"][0]+`</td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"]["Lower F-G Hall"][1]+`</td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"]["Lower F-G Hall"][2]+`</td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"]["Lower F-G Hall"][3]+`</td>
            <td class="lunchDutyTwo" dir="ltr" rowspan="3">
            `+JSON[JSON.length - i - 1]["A-Day"]["Lower F-G Hall"][4]+`
            </td>
            <td class="lunchDutyTwo" dir="ltr" rowspan="3">
            `+JSON[JSON.length - i - 1]["A-Day"]["Lower F-G Hall"][5]+`
            </td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"]["Lower F-G Hall"][6]+`</td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"]["Lower F-G Hall"][7]+`</td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"]["Lower F-G Hall"][8]+`</td>
          </tr>
          <tr>
            <th class="row-headers-background"></th>
            <td class="location" dir="ltr">
              <a
                target="_blank"
                href="https://canvas.allenisd.org/courses/1368446/pages/main-hallways?module_item_id=56456833"
                >2nd floor F-G halls</a
              >
            </td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"]["Upper F-G Hall"][0]+`</td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"]["Upper F-G Hall"][1]+`</td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"]["Upper F-G Hall"][2]+`</td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"]["Upper F-G Hall"][3]+`</td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"]["Upper F-G Hall"][6]+`</td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"]["Upper F-G Hall"][7]+`</td>
            <td class="Security">`+JSON[JSON.length - i - 1]["A-Day"]["Upper F-G Hall"][8]+`</td>
          </tr>
          <tr>
            <th class="row-headers-background"></th>
            <td class="location" dir="ltr" style="border-bottom-left-radius: 25px;">
              <a
                target="_blank"
                href="https://canvas.allenisd.org/courses/1378480/pages/senior-privilege"
                >PAC</a
              >
            </td>
            <td class="noDuty" dir="ltr">`+JSON[JSON.length - i - 1]["A-Day"].PAC[0]+`</td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"].PAC[1]+`</div>
            </td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"].PAC[2]+`</div>
            </td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"].PAC[3]+`</div>
            </td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"].PAC[6]+`</div>
            </td>
            <td class="teacher softmerge" dir="ltr">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"].PAC[7]+`</div>
            </td>
            <td class="teacher softmerge" dir="ltr" style="border-bottom-right-radius: 25px;">
              <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["A-Day"].PAC[8]+`</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
     <div class="ritz grid-container" dir="ltr" style="filter: drop-shadow(-1vw 1vw 1px darkgrey);">
      <table class="waffle" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
        <td class="titleB" dir="ltr" colspan="11" style="
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;">
          B DAY - ROTATION `+ (JSON.length - i) +`:
          <span style="font-weight: normal;"
            > Monday August 29th - Friday September 16th </span
          >
        </td>
      </tr>
      <tr>
        <th class="row-headers-background"></th>
        <td class="tableTitleB" dir="ltr" rowspan="2">B-day duties</td>
        <td class="period" colspan="2">1st Conf</td>
        <td class="period" colspan="2">2nd Conf</td>
        <td class="period" colspan="2">3rd Conf Lunch Duty</td>
        <td class="period" colspan="2">4th Conf</td>
        <td class="period" colspan="2">8th Conf</td>
      </tr>
      <tr>
        <th class="row-headers-background"></th>
        <td class="time">8:00 - 8:30</td>
        <td class="time" dir="ltr">8:50 - 9:45</td>
        <td class="time" dir="ltr">9:50 - 10:40</td>
        <td class="time" dir="ltr">10:35 - 11:25</td>
        <td class="lunchTime" dir="ltr">A Lunch</td>
        <td class="lunchTime">B Lunch</td>
        <td class="time" dir="ltr">1:35 - 2:25</td>
        <td class="time" dir="ltr">2:20 - 3:10</td>
        <td class="time" dir="ltr">3:15 - 4:10</td>
      </tr>
      <tr>
        <th class="row-headers-background"></th>
        <td class="locationB" dir="ltr">
          <a
            target="_blank"
            href="https://canvas.allenisd.org/courses/1368446/pages/cafeteria?module_item_id=56456831"
            >Cafeteria</a
          >
        </td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"].Cafeteria[0]+`</td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"].Cafeteria[1]+`</div>
        </td>
        <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["B-Day"].Cafeteria[2]+`</td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"].Cafeteria[3]+`</div>
        </td>
        <td class="lunchDutyOne" dir="ltr" rowspan="3">
            <div>`+JSON[JSON.length - i - 1]["B-Day"].Cafeteria[4].split('ISS')[0]+`</div><br>
            <div> ISS `+JSON[JSON.length - i - 1]["B-Day"].Cafeteria[4].split('ISS')[1]+`</div>
        </td>
        <td class="lunchDutyOne" rowspan="3">`+JSON[JSON.length - i - 1]["B-Day"].Cafeteria[5]+`</td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"].Cafeteria[6]+`</div>
        </td>
        <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["B-Day"].Cafeteria[7]+`</td>
        <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["B-Day"].Cafeteria[8]+`</td>
      </tr>
      <tr>
        <th class="row-headers-background"></th>
        <td class="locationB" dir="ltr">
          <a
            target="_blank"
            href="https://canvas.allenisd.org/courses/1378480/pages/upper-eagles-nest"
            >Upper Eagle's Nest</a
          >
        </td>
        <td class="noDuty" dir="ltr">`+JSON[JSON.length - i - 1]["B-Day"]["Upper Eagle's Nest"][0]+`</td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"]["Upper Eagle's Nest"][1]+`</div>
        </td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"]["Upper Eagle's Nest"][2]+`</div>
        </td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"]["Upper Eagle's Nest"][3]+`</div>
        </td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"]["Upper Eagle's Nest"][6]+`</div>
        </td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"]["Upper Eagle's Nest"][7]+`</div>
        </td>
        <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["B-Day"]["Upper Eagle's Nest"][8]+`</td>
      </tr>
      <tr>
        <th class="row-headers-background"></th>
        <td class="locationB" dir="ltr">
          <a
            target="_blank"
            href="https://allenisd.instructure.com/courses/1378480/pages/loss-of-privilege"
            >Cafeteria Interior</a
          >
        </td>
        <td class="noDuty" dir="ltr">`+JSON[JSON.length - i - 1]["B-Day"]["Cafeteria Interior"][0]+`</td>
        <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["B-Day"]["Cafeteria Interior"][1]+`</td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"]["Cafeteria Interior"][2]+`</div>
        </td>
        <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["B-Day"]["Cafeteria Interior"][3]+`</td>
        <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["B-Day"]["Cafeteria Interior"][6]+`</td>
        <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["B-Day"]["Cafeteria Interior"][7]+`</td>
        <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["B-Day"]["Cafeteria Interior"][8]+`</td>
      </tr>
      <tr>
        <th class="row-headers-background"></th>
        <td class="locationB" dir="ltr">
          <a
            target="_blank"
            href="https://allenisd.instructure.com/courses/1378480/pages/lower-eagles-nest?module_item_id=58315851"
            >Library</a
          >
        </td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"].Library[0]+`</td>
        <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["B-Day"].Library[1]+`</td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"].Library[2]+`</div>
        </td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"].Library[3]+`</div>
        </td>
        <td class="lunchTime" dir="ltr">C Lunch</td>
        <td class="lunchTime" dir="ltr">D Lunch</td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"].Library[6]+`</div>
        </td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"].Library[7]+`</div>
        </td>
        <td class="teacher" dir="ltr">`+JSON[JSON.length - i - 1]["B-Day"].Library[8]+`</td>
      </tr>
      <tr>
        <th class="row-headers-background"></th>
        <td class="locationB" dir="ltr">
          <a
            target="_blank"
            href="https://canvas.allenisd.org/courses/1368446/pages/main-hallways?module_item_id=56456833"
            >1st floor F-G halls</a
          >
        </td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"]["Lower F-G Hall"][0]+`</td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"]["Lower F-G Hall"][1]+`</td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"]["Lower F-G Hall"][2]+`</td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"]["Lower F-G Hall"][3]+`</td>
        <td class="lunchDutyTwo" dir="ltr" rowspan="3">
        `+JSON[JSON.length - i - 1]["B-Day"]["Lower F-G Hall"][4]+`
        </td>
        <td class="lunchDutyTwo" dir="ltr" rowspan="3">
        `+JSON[JSON.length - i - 1]["B-Day"]["Lower F-G Hall"][5]+`
        </td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"]["Lower F-G Hall"][6]+`</td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"]["Lower F-G Hall"][7]+`</td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"]["Lower F-G Hall"][8]+`</td>
      </tr>
      <tr>
        <th class="row-headers-background"></th>
        <td class="locationB" dir="ltr">
          <a
            target="_blank"
            href="https://canvas.allenisd.org/courses/1368446/pages/main-hallways?module_item_id=56456833"
            >2nd floor F-G halls</a
          >
        </td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"]["Upper F-G Hall"][0]+`</td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"]["Upper F-G Hall"][1]+`</td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"]["Upper F-G Hall"][2]+`</td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"]["Upper F-G Hall"][3]+`</td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"]["Upper F-G Hall"][6]+`</td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"]["Upper F-G Hall"][7]+`</td>
        <td class="Security">`+JSON[JSON.length - i - 1]["B-Day"]["Upper F-G Hall"][8]+`</td>
      </tr>
      <tr>
        <th class="row-headers-background"></th>
        <td class="locationB" dir="ltr" style="border-bottom-left-radius: 25px;">
          <a
            target="_blank"
            href="https://canvas.allenisd.org/courses/1378480/pages/senior-privilege"
            >PAC</a
          >
        </td>
        <td class="noDuty" dir="ltr">`+JSON[JSON.length - i - 1]["B-Day"].PAC[0]+`</td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"].PAC[1]+`</div>
        </td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"].PAC[2]+`</div>
        </td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"].PAC[3]+`</div>
        </td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"].PAC[6]+`</div>
        </td>
        <td class="teacher softmerge" dir="ltr">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"].PAC[7]+`</div>
        </td>
        <td class="teacher softmerge" dir="ltr" style="border-bottom-right-radius: 25px;">
          <div class="softmerge-inner">`+JSON[JSON.length - i - 1]["B-Day"].PAC[8]+`</div>
        </td>
      </tr>
        </tbody>
      </table>
    </div>
    <div style="padding-bottom:20px;"></div>
        `
    }
    document.getElementById("testContent").innerHTML = final

}