// دالة تسجيل الدخول
function login(event) {
  // منع إرسال النموذج بشكل غير مرغوب فيه
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // تحقق من أن اسم المستخدم وكلمة المرور غير فارغين
  if (username === "" || password === "") {
    alert("يرجى ملء جميع الحقول");
    return;
  }

  // عرض القيم المدخلة في الـ console للمراجعة
  console.log("اسم المستخدم: " + username);
  console.log("كلمة المرور: " + password);

  // تحقق من صحة اسم المستخدم وكلمة المرور
  if (username === "admin" && password === "11") {
    // تسجيل الدخول بنجاح: الانتقال إلى صفحة لوحة التحكم
    window.location.href = "dashboard.html"; // اسم الملف الخاص بالصفحة الثانية (لوحة التحكم)
  } else {
    alert("اسم المستخدم أو كلمة المرور غير صحيحة");
  }
}
