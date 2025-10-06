// إعدادات عامة
const DAYS_AR = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
const MONTHS_AR = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
];

let scheduleData = [];
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // تطبيق الوضع المحفوظ
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
  
  // تحميل بيانات الجدول
  loadScheduleData();
  
  // تحديث الوقت الحالي
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);
  
  // تحديث الإحصائيات
  updateStatistics();
  
  // تحديد المحاضرة الحالية
  updateCurrentLecture();
  setInterval(updateCurrentLecture, 60000);
  
  // تمييز المحاضرات الملغاة
  highlightCancelledLectures();
}

function updateCurrentTime() {
  const now = new Date();
  const dayName = DAYS_AR[now.getDay()];
  const day = now.getDate();
  const month = MONTHS_AR[now.getMonth()];
  const year = now.getFullYear();
  
  // تحويل إلى صيغة 12 ساعة
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'م' : 'ص';
  
  hours = hours % 12;
  hours = hours ? hours : 12; // الساعة 0 تصبح 12
  const displayHours = hours.toString().padStart(2, '0');
  
  const timeString = `${dayName}، ${day} ${month} ${year}  
${displayHours}:${minutes}:${seconds} ${ampm}`;
  
  const timeElement = document.getElementById('current-time');
  if (timeElement) {
    timeElement.innerHTML = timeString;
  }
}

function updateStatistics() {
  const totalLectures = scheduleData.length;
  
  // حساب المحاضرات الملغاة بدقة
  let cancelledCount = 0;
  scheduleData.forEach(lecture => {
    if (lecture.subject.includes('لايوجد محاضرة') || 
        lecture.subject.includes('دراسة ذاتية') || 
        lecture.subject.includes('عن بعد')) {
      cancelledCount++;
    }
  });
  
  const uniqueSubjects = new Set(scheduleData.map(lecture => 
    lecture.subject.replace(/\s*\(-لايوجد محاضرة-\)\s*/, '')
                   .replace(/\s*\(عن بعد\)\s*/, '')
                   .replace(/\s*\(دراسة ذاتية\)\s*/, '')
                   .trim()
  )).size;
  
  document.getElementById('total-lectures').textContent = totalLectures;
  document.getElementById('cancelled-lectures').textContent = cancelledCount;
  document.getElementById('unique-subjects').textContent = uniqueSubjects;
}

function updateCurrentLecture() {
  const now = new Date();
  const currentDay = DAYS_AR[now.getDay()];
  const currentTime = now.getHours() * 60 + now.getMinutes();
  
  // إزالة التمييز السابق
  document.querySelectorAll('.current-lecture').forEach(row => {
    row.classList.remove('current-lecture');
  });
  
  let currentLecture = null;
  let nextLecture = null;
  
  for (const lecture of scheduleData) {
    if (lecture.day === currentDay && lecture.timeRange && !lecture.isCancelled) {
      if (currentTime >= lecture.timeRange.start && currentTime <= lecture.timeRange.end) {
        currentLecture = lecture;
        break;
      } else if (currentTime < lecture.timeRange.start) {
        if (!nextLecture || lecture.timeRange.start < nextLecture.timeRange.start) {
          nextLecture = lecture;
        }
      }
    }
  }
  
  const lectureStatusElement = document.getElementById('lecture-status');
  const lectureInfoElement = document.getElementById('current-lecture-info');
  
  if (currentLecture) {
    lectureStatusElement.innerHTML = `
      <strong>جاري الآن:</strong>  

      ${currentLecture.subject}  

      <small>${currentLecture.instructor}</small>  

      <small>${currentLecture.location}</small>
    `;
    lectureInfoElement.classList.add('active');
    currentLecture.element.classList.add('current-lecture');
    
  } else if (nextLecture) {
    const timeUntilNext = nextLecture.timeRange.start - currentTime;
    const hoursUntil = Math.floor(timeUntilNext / 60);
    const minutesUntil = timeUntilNext % 60;
    
    lectureStatusElement.innerHTML = `
      <strong>المحاضرة القادمة:</strong>  

      ${nextLecture.subject}  

      <small>خلال ${hoursUntil > 0 ? hoursUntil + ' ساعة و ' : ''}${minutesUntil} دقيقة</small>
    `;
    lectureInfoElement.classList.remove('active');
    
  } else {
    lectureStatusElement.innerHTML = 'لا توجد محاضرات متبقية اليوم';
    lectureInfoElement.classList.remove('active');
  }
}

function loadScheduleData() {
  const tableRows = document.querySelectorAll('#schedule-table tr');
  scheduleData = [];
  
  // تخطي الصف الأول (العناوين)
  for (let i = 1; i < tableRows.length; i++) {
    const row = tableRows[i];
    const cells = row.querySelectorAll('td');
    if (cells.length >= 5) {
      const lectureData = {
        id: i - 1,
        day: cells[0].textContent.trim(),
        subject: cells[1].textContent.trim(),
        time: cells[2].textContent.trim(),
        instructor: cells[3].textContent.trim(),
        location: cells[4].textContent.trim(),
        element: row,
        isCancelled: cells[1].textContent.includes('لايوجد محاضرة') || cells[1].textContent.includes('عن بعد') || cells[1].textContent.includes('دراسة ذاتية')
      };
      
      // تحليل وقت المحاضرة
      lectureData.timeRange = parseTimeRange(lectureData.time);
      
      scheduleData.push(lectureData);
    }
  }
}

function parseTimeRange(timeString) {
  const timeRegex = /(\d{1,2}):(\d{2})\s*(ص|م)\s*-\s*(\d{1,2}):(\d{2})\s*(ص|م)/;
  const match = timeString.match(timeRegex);
  
  if (!match) return null;
  
  const startHour = parseInt(match[1]);
  const startMinute = parseInt(match[2]);
  const startPeriod = match[3];
  const endHour = parseInt(match[4]);
  const endMinute = parseInt(match[5]);
  const endPeriod = match[6];
  
  const startTime = convertTo24Hour(startHour, startMinute, startPeriod);
  const endTime = convertTo24Hour(endHour, endMinute, endPeriod);
  
  return { start: startTime, end: endTime };
}

function convertTo24Hour(hour, minute, period) {
  let hour24 = hour;
  
  if (period === 'م' && hour !== 12) {
    hour24 += 12;
  } else if (period === 'ص' && hour === 12) {
    hour24 = 0;
  }
  
  return hour24 * 60 + minute;
}

function highlightCancelledLectures() {
  const rows = document.querySelectorAll("#schedule-table tr");
  
  rows.forEach(row => {
    if (row.textContent.includes("لايوجد محاضرة") || row.textContent.includes("عن بعد") || row.textContent.includes("دراسة ذاتية")) {
      row.classList.add('cancelled-lecture');
    }
  });
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

function printTable() {
  const printWindow = window.open('', '_blank');
  const currentTime = new Date();
  const timeString = `${DAYS_AR[currentTime.getDay()]}، ${currentTime.getDate()} ${MONTHS_AR[currentTime.getMonth()]} ${currentTime.getFullYear()}`;
  
  const printContent = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>جدول المواد الدراسية - برمجة وتطوير الويب</title>
      <style>
        body { 
          font-family: 'Cairo', Arial, sans-serif; 
          margin: 20px; 
          direction: rtl;
        }
        .header { 
          text-align: center; 
          margin-bottom: 30px; 
          border-bottom: 2px solid #333;
          padding-bottom: 15px;
        }
        .header h1 { 
          color: #111; 
          margin-bottom: 10px; 
          font-size: 24px;
        }
        .header p { 
          color: #666; 
          margin: 5px 0;
        }
        table { 
          width: 100%; 
          border-collapse: collapse; 
          margin-bottom: 20px; 
          border: 2px solid #343434;
        }
        th, td { 
          border: 1px solid #333; 
          padding: 8px; 
          text-align: center; 
          font-size: 12px;
        }
        th { 
          background-color: #333; 
          color: white; 
          font-weight: bold;
        }
        tr:nth-child(even) { 
          background-color: #f2f2f2; 
        }
        .cancelled { 
          background-color: #ffebee !important; 
          color: #c62828; 
          font-weight: bold; 
        }
        .footer { 
          text-align: center; 
          margin-top: 30px; 
          font-size: 12px; 
          color: #666; 
          border-top: 1px solid #ccc;
          padding-top: 15px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>برنامج برمجة وتطوير الويب</h1>
        <p>الجدول الدراسي للفصل الحالي</p>
        <p>تاريخ الطباعة: ${timeString}</p>
      </div>
      ${document.querySelector('.table-container table').outerHTML}
      <div class="footer">
        <p>© 2025 جميع الحقوق محفوظة - قسم برمجة وتطوير الويب</p>
      </div>
      <script>
        // تمييز المحاضرات الملغاة والمحاضرات عن بعد والدراسة الذاتية في النسخة المطبوعة
        const rows = document.querySelectorAll("table tr");
        rows.forEach(row => {
          if (row.textContent.includes("لايوجد محاضرة") || row.textContent.includes("عن بعد") || row.textContent.includes("دراسة ذاتية")) {
            row.classList.add('cancelled');
          }
        });
      </script>
    </body>
    </html>
  `;
  
  printWindow.document.write(printContent);
  printWindow.document.close();
  printWindow.focus();
  
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 500);
}

function showFilterOptions() {
  const days = [...new Set(scheduleData.map(l => l.day))];
  const instructors = [...new Set(scheduleData.map(l => l.instructor))];
  
  const filterDay = prompt(`اختر اليوم للتصفية:\n0 - جميع الأيام\n${days.map((day, index) => `${index + 1} - ${day}`).join('\n')}`);
  
  if (filterDay !== null) {
    const dayIndex = parseInt(filterDay);
    let filteredRows = scheduleData;
    
    if (dayIndex > 0 && dayIndex <= days.length) {
      const selectedDay = days[dayIndex - 1];
      filteredRows = scheduleData.filter(lecture => lecture.day === selectedDay);
    }
    
    // إخفاء جميع الصفوف
    scheduleData.forEach(lecture => {
      lecture.element.style.display = 'none';
    });
    
    // إظهار الصفوف المفلترة
    filteredRows.forEach(lecture => {
      lecture.element.style.display = '';
    });
    
    if (filteredRows.length === 0) {
      alert('لا توجد نتائج مطابقة للتصفية');
      // إظهار جميع الصفوف مرة أخرى
      scheduleData.forEach(lecture => {
        lecture.element.style.display = '';
      });
    }
  }
}

// اختصارات لوحة المفاتيح
document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 't') {
    e.preventDefault();
    toggleTheme();
  }
  
  if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
    e.preventDefault();
    printTable();
  }
  
  if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
    e.preventDefault();
    showFilterOptions();
  }
});

// نصائح متنوعة لليوم
const dailyTips = [
  "راجع دروسك أولاً بأول لضمان فهم أفضل",
  "اشرب الماء بكثرة للحفاظ على تركيزك",
  "خذ استراحة قصيرة كل ساعة دراسة",
  "نظم وقتك باستخدام جدول زمني يومي",
  "اطرح الأسئلة في المحاضرة لا تتردد",
  "كون مجموعات دراسية مع زملائك",
  "احرص على النوم 8 ساعات يومياً",
  "راجع الملاحظات قبل النوم مباشرة",
  "استخدم تقنية البومودورو في المذاكرة",
  "اكتب ملخصات للمواد المهمة"
];

function updateDailyTip() {
  const today = new Date().getDate();
  const tipIndex = today % dailyTips.length;
  const tipElement = document.getElementById('daily-tip');
  if (tipElement) {
    tipElement.textContent = dailyTips[tipIndex];
  }
}

// تحديث نصيحة اليوم عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  updateDailyTip();
});

// معالجة الأخطاء
window.addEventListener('error', function(e) {
  console.error('خطأ في التطبيق:', e.error);
});
