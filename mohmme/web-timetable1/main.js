/* تحديث الوقت الحالي */
function updateTime() {
const now = new Date();
const options = { weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit' };
document.getElementById("current-time").textContent = now.toLocaleString("ar-SA", options);
}
setInterval(updateTime, 1000);
updateTime();

/* حساب الإحصائيات */
function updateStats() {
const rows = document.querySelectorAll("#schedule-table tbody tr");
const total = rows.length;
const cancelled = document.querySelectorAll(".cancelled").length;
const subjects = new Set();

rows.forEach(r => {
const cell = r.children[1];
if (cell && !cell.classList.contains("cancelled")) {
subjects.add(cell.textContent.trim());
}
});

document.getElementById("total-lectures").textContent = total;
document.getElementById("cancelled-lectures").textContent = cancelled;
document.getElementById("unique-subjects").textContent = subjects.size;
}
updateStats();

/* تحديد المحاضرة الحالية */
function getCurrentLecture() {
const now = new Date();
const currentDay = now.toLocaleDateString("ar-SA", { weekday: "long" });
const currentHour = now.getHours();
const currentMinute = now.getMinutes();

const rows = document.querySelectorAll("#schedule-table tbody tr");
let found = "لا توجد محاضرة حالياً";

rows.forEach(row => {
const day = row.children[0].textContent.trim();
const time = row.children[2].textContent.trim();
const subject = row.children[1].textContent.trim();

```
const [start, end] = time.split(" - ");
const startTime = parseTime(start);
const endTime = parseTime(end);

if (day === currentDay && isBetween(currentHour, currentMinute, startTime, endTime)) {
  found = subject;
}
```

});

document.getElementById("lecture-status").textContent = found;
}

function parseTime(str) {
let [hour, minutePart] = str.split(":");
let minute = minutePart.split(" ")[0];
let period = str.includes("م") ? "PM" : "AM";

hour = parseInt(hour);
minute = parseInt(minute);

if (period === "PM" && hour < 12) hour += 12;
if (period === "AM" && hour === 12) hour = 0;

return { hour, minute };
}

function isBetween(h, m, start, end) {
const total = h * 60 + m;
const s = start.hour * 60 + start.minute;
const e = end.hour * 60 + end.minute;
return total >= s && total <= e;
}

setInterval(getCurrentLecture, 60000);
getCurrentLecture();

/* طباعة الجدول */
function printTable() {
window.print();
}

/* تبديل الوضع (فاتح/غامق) */
function toggleTheme() {
const body = document.body;
body.classList.toggle("light-mode");
}
