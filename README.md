<!DOCTYPE html>

<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>جدول محمد الخزيم</title>
  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet" />
  <style>
    body {
      font-family: 'Cairo', sans-serif;
      background-color: #ffffff;
      color: #000000;
      margin: 0;
      padding: 0;
      direction: rtl;
    }


header {
  background-color: #f0f0f0;
  color: #000000;
  text-align: center;
  padding: 20px;
  border-bottom: 2px solid #ccc;
}

h1 {
  margin: 0;
  font-size: 26px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

.info-box {
  background-color: #fafafa;
  padding: 20px;
  border-radius: 10px;
  width: 95%;
  max-width: 900px;
  box-shadow: 0 0 10px #ddd;
}

.info-box h3 {
  text-align: center;
  color: #000000;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

th, td {
  border: 1px solid #ccc;
  padding: 12px;
  text-align: center;
  font-size: 15px;
  color: #000000;
}

th {
  background-color: #f2f2f2;
  color: #000000;
  font-weight: 600;
  border-bottom: 2px solid #bbb;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #eaeaea;
  transition: 0.2s;
}

.cancelled {
  text-decoration: line-through;
  color: #888;
}

footer {
  text-align: center;
  color: #555;
  border-top: 1px solid #ccc;
  margin-top: 25px;
  padding-top: 10px;
  font-size: 14px;
}

@media (max-width: 768px) {
  th, td {
    font-size: 12px;
    padding: 8px;
  }
  h1 {
    font-size: 20px;
  }
  .info-box h3 {
    font-size: 16px;
  }
}


  </style>
</head>

<body>
  <header>
    <h1>جدول محمد الخزيم</h1>
  </header>

  <div class="container">
    <div class="info-box">
      <h3>تخصص : برمجة وتطوير الويب</h3>


  <table id="schedule-table">
    <thead>
      <tr>
        <th>اليوم</th>
        <th>المادة</th>
        <th>الوقت</th>
        <th>المدرس</th>
        <th border="2">المبنى والغرفة </th>
      </tr>
    </thead>
    <tbody>
      <tr><td>الأحد</td><td class="cancelled">اللغة الإنجليزية (-لايوجد محاضرة-)</td><td class="cancelled">07:30 ص - 09:10 ص</td><td class="cancelled">خالد الجفن</td><td class="cancelled">مبنى 01 / 1040120114</td></tr>
      <tr><td>الأحد</td><td>هندسة البرمجيات</td><td>11:01 ص - 01:30 م</td><td>بدر الشويع</td><td>مبنى 02 / 1040220114</td></tr>
      <tr><td>الاثنين</td><td>مبادئ برمجة صفحات الإنترنت</td><td>07:30 ص - 10:50 ص</td><td>محمد الحربي</td><td>مبنى 02 / 1040220101</td></tr>
      <tr><td>الاثنين</td><td>مبادئ قواعد البيانات</td><td>11:01 ص - 12:40 م</td><td>خالد البليهي</td><td>مبنى 02 / 1040220110</td></tr>
      <tr><td>الثلاثاء</td><td>أساسيات برمجة الحاسب</td><td>07:30 ص - 09:10 ص</td><td>خالد البليهي</td><td>مبنى 02 / 1040220108</td></tr>
      <tr><td>الثلاثاء</td><td>مبادئ قواعد البيانات</td><td>09:20 ص - 11:00 ص</td><td>خالد البليهي</td><td>مبنى 02 / 1040220109</td></tr>
      <tr><td>الثلاثاء</td><td>مبادئ برمجة صفحات الإنترنت</td><td>11:01 ص - 12:40 م</td><td>محمد الحربي</td><td>مبنى 02 / 1040220101</td></tr>
      <tr><td>الثلاثاء</td><td class="cancelled">تطبيقات الحاسب المتقدمة (دراسة ذاتية)</td><td class="cancelled">04:30 م - 06:10 م</td><td class="cancelled">نايف الأسطاء</td><td class="cancelled">مبنى 01 / 1040110112</td></tr>
      <tr><td>الأربعاء</td><td>أساسيات برمجة الحاسب</td><td>07:30 ص - 10:50 ص</td><td>خالد البليهي</td><td>مبنى 02 / 1040230110</td></tr>
      <tr><td>الأربعاء</td><td>أساسيات ريادة الأعمال</td><td>11:01 ص - 12:41 م</td><td>فارس الحربي</td><td>مبنى 01 / 1040110101</td></tr>
      <tr><td>الأربعاء</td><td class="cancelled">تطبيقات الحاسب المتقدمة (دراسة ذاتية)</td><td class="cancelled">04:30 م - 06:10 م</td><td class="cancelled">نايف الأسطاء</td><td class="cancelled">مبنى 01 / 1040110112</td></tr>
      <tr><td>الخميس</td><td>اللغة الإنجليزية (2)</td><td>07:30 ص - 09:10 ص</td><td>خالد الجفن</td><td>مبنى 01 / 1040130114</td></tr>
      <tr><td>الخميس</td><td>الكتابة الفنية</td><td>09:20 ص - 11:00 ص</td><td>يوسف الحفير</td><td>مبنى 01 / 1040130114</td></tr>
    </tbody>
  </table>

  <footer>
    <p>© 2025 جميع الحقوق محفوظة - قسم برمجة وتطوير الويب</p>
  </footer>
</div>
```

  </div>
</body>
</html>
