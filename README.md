<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet">
  <title>جدول المواد الدراسية - برمجة وتطوير الويب</title>
</head>
<body>
  <script src="script.js"></script>

  <header>برمجة وتطوير الويب</header>

  <div class="container">
    <div class="info-box">
      <div class="owner-title">جدول محمد الخزيم</div>
      
      <!-- عرض التاريخ والوقت الحالي -->
      <div class="current-time" id="current-time"></div>
      
      <!-- إحصائيات الجدول -->
      <div class="stats-section">
        <h4>إحصائيات الجدول</h4>
        <div class="stat-item">
          <span>إجمالي المحاضرات: </span>
          <span id="total-lectures">0</span>
        </div>
        <div class="stat-item">
          <span>محاضرات ملغاة: </span>
          <span id="cancelled-lectures">0</span>
        </div>
        <div class="stat-item">
          <span>عدد المواد: </span>
          <span id="unique-subjects">0</span>
        </div>
      </div>

      <!-- المحاضرة الحالية -->
      <div class="current-lecture-info" id="current-lecture-info">
        <h4>المحاضرة الحالية</h4>
        <div id="lecture-status">لا توجد محاضرة حالياً</div>
      </div>
    </div>

    <div class="table-container">
      <!-- أزرار التحكم -->
      <div class="controls">
        <button onclick="printTable( )">طباعة الجدول</button>
        <button onclick="toggleTheme()">تبديل الوضع</button>
        <button onclick="showFilterOptions()">تصفية</button>
      </div>

      <table id="schedule-table">
        <tr>
          <th>اليوم</th>
          <th>المادة</th>
          <th>الوقت</th>
          <th>المدرس</th>
          <th>المبنى و الغرفة</th>
        </tr>

        <!-- الأحد -->
        <tr><td>الأحد</td><td>اللغة الإنجليزية (-لايوجد محاضرة-)</td><td>07:30 ص - 09:10 ص</td><td>خالد الجفن</td><td>مبنى 01 / 1040120114</td></tr>
        <tr><td>الأحد</td><td>هندسة البرمجيات</td><td>11:01 ص - 11:50 ص</td><td>بدر الشويع</td><td>مبنى 02 / 1040220114</td></tr>
        <tr><td>الأحد</td><td>هندسة البرمجيات </td><td>11:51 ص - 01:30 م</td><td>بدر الشويع</td><td>مبنى 02 / 1040220114</td></tr>

        <!-- الاثنين -->
        <tr><td>الاثنين</td><td>مبادئ برمجة صفحات الإنترنت</td><td>07:30 ص - 10:50 ص</td><td>محمد الحربي</td><td>مبنى 02 / 1040220101</td></tr>
        <tr><td>الاثنين</td><td>مبادئ قواعد البيانات</td><td>11:01 ص - 12:40 م</td><td>خالد البليهي</td><td>مبنى 02 / 1040220110</td></tr>

        <!-- الثلاثاء -->
        <tr><td>الثلاثاء</td><td>أساسيات برمجة الحاسب</td><td>07:30 ص - 09:10 ص</td><td>خالد البليهي</td><td>مبنى 02 / 1040220108</td></tr>
        <tr><td>الثلاثاء</td><td>مبادئ قواعد البيانات </td><td>09:20 ص - 11:00 ص</td><td>خالد البليهي</td><td>مبنى 02 / 1040220109</td></tr>
        <tr><td>الثلاثاء</td><td>مبادئ برمجة صفحات الإنترنت </td><td>11:01 ص - 12:40 م</td><td>محمد الحربي</td><td>مبنى 02 / 1040220101</td></tr>
        <tr><td>الثلاثاء</td><td>تطبيقات الحاسب المتقدمة (دراسة ذاتية)</td><td>04:30 م - 06:10 م</td><td>نايف الأسطاء</td><td>مبنى 01 / 1040110112</td></tr>

        <!-- الأربعاء -->
        <tr><td>الأربعاء</td><td>أساسيات برمجة الحاسب</td><td>07:30 ص - 10:50 ص</td><td>خالد البليهي</td><td>مبنى 02 / 1040230110</td></tr>
        <tr><td>الأربعاء</td><td>أساسيات ريادة الأعمال</td><td>11:01 ص - 12:41 م</td><td>فارس الحربي</td><td>مبنى 01 / 1040110101</td></tr>
        <tr><td>الأربعاء</td><td>تطبيقات الحاسب المتقدمة (دراسة ذاتية)</td><td>04:30 م - 06:10 م</td><td>نايف الأسطاء</td><td>مبنى 01 / 1040110112</td></tr>

        <!-- الخميس -->
        <tr><td>الخميس</td><td>اللغة الإنجليزية (2)</td><td>07:30 ص - 09:10 ص</td><td>خالد الجفن</td><td>مبنى 01 / 1040130114</td></tr>
        <tr><td>الخميس</td><td>الكتابة الفنية</td><td>09:20 ص - 11:00 ص</td><td>يوسف الحفير</td><td>مبنى 01 / 1040130114</td></tr>
      </table>

      <!-- قسم الأشياء الصغيرة المفيدة -->
      <div class="small-info-section">
        <div class="info-card">
          <div class="info-icon">📚</div>
          <div class="info-content">
            <h5>نصيحة اليوم</h5>
            <p id="daily-tip">راجع دروسك أولاً بأول لضمان فهم أفضل</p>
          </div>
        </div>
        
        <div class="info-card">
          <div class="info-icon">⏰</div>
          <div class="info-content">
            <h5>تذكير</h5>
            <p>لا تنس إحضار الكتب والأدوات المطلوبة</p>
          </div>
        </div>
        
        <div class="info-card">
          <div class="info-icon">🎯</div>
          <div class="info-content">
            <h5>هدف الأسبوع</h5>
            <p>إنهاء جميع المشاريع المطلوبة في الوقت المحدد</p>
          </div>
        </div>
        
        <div class="info-card">
          <div class="info-icon">📞</div>
          <div class="info-content">
            <h5>للاستفسار</h5>
            <p>تواصل مع المرشد الأكاديمي عند الحاجة</p>
          </div>
        </div>
      </div>

      <footer>
        <p>© 2025 جميع الحقوق محفوظة - قسم برمجة وتطوير الويب</p>
      </footer>
    </div>
  </div>

</body>
</html>
