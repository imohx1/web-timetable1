<!DOCTYPE html>

<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>جدول محمد الخزيم</title>
  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet" />
</head>

<body>
  <header>جدول محمد الخزيم</header>

  <div class="container">
    <div class="info-box">
      <h3>برمجة وتطوير الويب</h3>
      <div class="current-time" id="current-time"></div>


  <div class="stats-section">
    <h4>إحصائيات الجدول</h4>
    <div><span>إجمالي المحاضرات:</span> <span id="total-lectures">0</span></div>
    <div><span>محاضرات ملغاة:</span> <span id="cancelled-lectures">0</span></div>
    <div><span>عدد المواد:</span> <span id="unique-subjects">0</span></div>
  </div>

  <div class="current-lecture-info">
    <h4>المحاضرة الحالية</h4>
    <div id="lecture-status">لا توجد محاضرة حالياً</div>
  </div>
</div>

<div class="table-container">
  <div class="controls">
    <button onclick="printTable()">طباعة الجدول</button>
    <button onclick="toggleTheme()">تبديل الوضع</button>
  </div>

  <table id="schedule-table">
    <thead>
      <tr>
        <th>اليوم</th>
        <th>المادة</th>
        <th>الوقت</th>
        <th>المدرس</th>
        <th>المبنى والغرفة</th>
      </tr>
    </thead>
    <tbody>
      <!-- الأحد -->
      <tr><td>الأحد</td><td class="cancelled">اللغة الإنجليزية (-لايوجد محاضرة-)</td><td>07:30 ص - 09:10 ص</td><td>خالد الجفن</td><td>مبنى 01 / 1040120114</td></tr>
      <tr><td>الأحد</td><td>هندسة البرمجيات</td><td>11:01 ص - 01:30 م</td><td>بدر الشويع</td><td>مبنى 02 / 1040220114</td></tr>
      <!-- الاثنين -->
      <tr><td>الاثنين</td><td>مبادئ برمجة صفحات الإنترنت</td><td>07:30 ص - 10:50 ص</td><td>محمد الحربي</td><td>مبنى 02 / 1040220101</td></tr>
      <tr><td>الاثنين</td><td>مبادئ قواعد البيانات</td><td>11:01 ص - 12:40 م</td><td>خالد البليهي</td><td>مبنى 02 / 1040220110</td></tr>
      <!-- الثلاثاء -->
      <tr><td>الثلاثاء</td><td>أساسيات برمجة الحاسب</td><td>07:30 ص - 09:10 ص</td><td>خالد البليهي</td><td>مبنى 02 / 1040220108</td></tr>
      <tr><td>الثلاثاء</td><td>مبادئ قواعد البيانات</td><td>09:20 ص - 11:00 ص</td><td>خالد البليهي</td><td>مبنى 02 / 1040220109</td></tr>
      <tr><td>الثلاثاء</td><td>مبادئ برمجة صفحات الإنترنت</td><td>11:01 ص - 12:40 م</td><td>محمد الحربي</td><td>مبنى 02 / 1040220101</td></tr>
      <tr><td>الثلاثاء</td><td class="cancelled">تطبيقات الحاسب المتقدمة (دراسة ذاتية)</td><td>04:30 م - 06:10 م</td><td>نايف الأسطاء</td><td>مبنى 01 / 1040110112</td></tr>
      <!-- الأربعاء -->
      <tr><td>الأربعاء</td><td>أساسيات برمجة الحاسب</td><td>07:30 ص - 10:50 ص</td><td>خالد البليهي</td><td>مبنى 02 / 1040230110</td></tr>
      <tr><td>الأربعاء</td><td>أساسيات ريادة الأعمال</td><td>11:01 ص - 12:41 م</td><td>فارس الحربي</td><td>مبنى 01 / 1040110101</td></tr>
      <tr><td>الأربعاء</td><td class="cancelled">تطبيقات الحاسب المتقدمة (دراسة ذاتية)</td><td>04:30 م - 06:10 م</td><td>نايف الأسطاء</td><td>مبنى 01 / 1040110112</td></tr>
      <!-- الخميس -->
      <tr><td>الخميس</td><td class="cancelled">اللغة الإنجليزية (2)</td><td>07:30 ص - 09:10 ص</td><td>خالد الجفن</td><td>مبنى 01 / 1040130114</td></tr>
      <tr><td>الخميس</td><td>الكتابة الفنية</td><td>09:20 ص - 11:00 ص</td><td>يوسف الحفير</td><td>مبنى 01 / 1040130114</td></tr>
    </tbody>
  </table>

  <footer>
    <p>© 2025 جميع الحقوق محفوظة - قسم برمجة وتطوير الويب</p>
  </footer>
</div>


  </div>

  <script src="script.js"></script>

</body>
</html>
