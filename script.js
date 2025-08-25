const routineData = [

  { time: "5:00 – 5:30 AM", activity: "Fajr prayer + Quran + Water" },
  { time: "5:30 – 7:30 AM", activity: "Second Sleep" },
  { time: "7:30 – 8:00 AM", activity: "Exercise + Breakfast" },
  { time: "8:00 – 9:00 AM", activity: "Vocabulary / Collocations" },
  { time: "9:00 – 10:30 AM", activity: "Listening practice (Podcasts / Cambridge)" },
  { time: "10:30 – 12:00 PM", activity: "Reading practice (timed passages)" },
  { time: "12:00 – 1:00 PM", activity: "Writing Task 1" },
  { time: "1:00 – 1:30 PM", activity: "Dhuhr prayer + Lunch" },
  { time: "1:30 – 2:00 PM", activity: "Rest + Social Media" },
  { time: "2:00 – 3:00 PM", activity: "Speaking practice + Vocabulary review" },
  { time: "3:00 – 4:00 PM", activity: "Writing Task 2 (Essay)" },
  { time: "4:00 – 4:30 PM", activity: "Review Writing mistakes" },
  { time: "4:30 – 5:00 PM", activity: "Asr prayer" },
  { time: "5:00 – 6:30 PM", activity: "Listening + Reading review" },
  { time: "6:30 – 7:00 PM", activity: "Maghrib prayer + Quran" },
  { time: "7:00 – 7:30 PM", activity: "Light Snack" },
  { time: "7:30 – 10:00 PM", activity: "Web Development (Projects, Coding)" },
  { time: "10:00 – 10:15 PM", activity: "Isha prayer" },
  { time: "10:15 – 10:45 PM", activity: "Dinner" },
  { time: "10:45 – 1:00 AM", activity: "Web Development / Light IELTS review" },
  { time: "1:00 – 5:00 AM", activity: "Sleep" }

];

const startDate = new Date("2025-08-25");
const endDate = new Date("2025-10-31");
const dayArray = [];
let current = new Date(startDate);
while (current <= endDate) {
  dayArray.push(new Date(current));
  current.setDate(current.getDate() + 1);
}

// Table Header
const tableHead = document.getElementById("table-head");
const headerRow = document.createElement("tr");

const thActivity = document.createElement("th");
thActivity.textContent = "Time / Activity";
thActivity.classList.add("activity-col");
headerRow.appendChild(thActivity);

dayArray.forEach((date, index) => {
  const th = document.createElement("th");
  th.textContent = `Day ${index + 1}`;
  headerRow.appendChild(th);
});

tableHead.appendChild(headerRow);

// Table Body
const tableBody = document.getElementById("table-body");

routineData.forEach((item, rowIndex) => {
  const tr = document.createElement("tr");

  const tdActivity = document.createElement("td");
  tdActivity.textContent = `${item.time} – ${item.activity}`;
  tdActivity.classList.add("activity-col");
  tr.appendChild(tdActivity);

  dayArray.forEach((date, dayIndex) => {
    const td = document.createElement("td");
    const btn = document.createElement("button");

    const key = `routine-Day${dayIndex + 1}-Activity${rowIndex}`;
    if (localStorage.getItem(key) === "true") {
      btn.classList.add("completed");
      btn.textContent = "✔";
    } else {
      btn.textContent = "";
    }

    btn.addEventListener("click", () => {
      btn.classList.toggle("completed");
      if (btn.classList.contains("completed")) {
        btn.textContent = "✔";
        localStorage.setItem(key, "true");
      } else {
        btn.textContent = "";
        localStorage.setItem(key, "false");
      }
    });

    td.appendChild(btn);
    tr.appendChild(td);
  });

  tableBody.appendChild(tr);
});