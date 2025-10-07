# 🚀 دليل الإعداد السريع

## المتطلبات الأساسية

- حساب Firebase (مجاني)
- حساب GitHub
- متصفح حديث يدعم Geolocation API

## خطوات الإعداد

### 1️⃣ إعداد Firebase

#### إنشاء مشروع Firebase

1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. اضغط على "إضافة مشروع" (Add Project)
3. أدخل اسم المشروع (مثل: `bus-tracking-system`)
4. اختر إعدادات Google Analytics (اختياري)
5. اضغط على "إنشاء المشروع"

#### تفعيل Authentication

1. من القائمة الجانبية، اختر **Build** → **Authentication**
2. اضغط على "Get Started"
3. اختر **Email/Password** من قائمة Sign-in providers
4. فعّل الخيار واضغط "Save"

#### تفعيل Firestore Database

1. من القائمة الجانبية، اختر **Build** → **Firestore Database**
2. اضغط على "Create Database"
3. اختر **Start in test mode** (سنغيرها لاحقاً)
4. اختر الموقع الجغرافي الأقرب لك
5. اضغط على "Enable"

#### تفعيل Realtime Database

1. من القائمة الجانبية، اختر **Build** → **Realtime Database**
2. اضغط على "Create Database"
3. اختر الموقع الجغرافي
4. اختر **Start in test mode**
5. اضغط على "Enable"

#### الحصول على إعدادات Firebase

1. من نظرة عامة على المشروع، اضغط على أيقونة **Web** (`</>`)
2. أدخل اسم التطبيق (مثل: `Bus Tracking Web`)
3. **لا تختر** Firebase Hosting الآن
4. اضغط على "Register app"
5. **انسخ** كائن `firebaseConfig`

### 2️⃣ تكوين المشروع

#### تحديث إعدادات Firebase

1. افتح ملف `assets/js/firebase-config.js`
2. استبدل القيم في `firebaseConfig`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com"
};
```

3. احفظ الملف

#### تحديث قواعد الأمان

**Firestore Rules:**

1. في Firebase Console، اذهب إلى **Firestore Database** → **Rules**
2. انسخ محتوى ملف `firestore.rules`
3. الصقه في المحرر
4. اضغط على "Publish"

**Realtime Database Rules:**

1. في Firebase Console، اذهب إلى **Realtime Database** → **Rules**
2. انسخ محتوى ملف `database.rules.json`
3. الصقه في المحرر
4. اضغط على "Publish"

### 3️⃣ إنشاء المستخدمين الأوليين

#### إنشاء حساب المدير

1. اذهب إلى **Authentication** → **Users**
2. اضغط على "Add User"
3. أدخل:
   - Email: `admin@school.com`
   - Password: `Admin@123` (غيّرها لاحقاً!)
4. احفظ UID المستخدم

#### إضافة بيانات المدير في Firestore

1. اذهب إلى **Firestore Database** → **Data**
2. اضغط على "Start Collection"
3. Collection ID: `users`
4. Document ID: الصق UID المستخدم
5. أضف الحقول:
   ```
   email: admin@school.com
   role: admin
   name: مدير النظام
   createdAt: (اختر Timestamp)
   ```
6. احفظ

#### إنشاء حسابات إضافية (اختياري)

كرر نفس الخطوات لإنشاء:
- **سائق**: `role: driver`, `busId: 1`
- **ولي أمر**: `role: parent`

### 4️⃣ النشر على GitHub Pages

#### رفع المشروع إلى GitHub

```bash
# في مجلد المشروع
git init
git add .
git commit -m "Initial commit: Bus Tracking System"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bus-tracking-system.git
git push -u origin main
```

#### تفعيل GitHub Pages

1. اذهب إلى repository على GitHub
2. **Settings** → **Pages**
3. Source: اختر **main** branch
4. اضغط على **Save**
5. انتظر دقيقة حتى يتم النشر
6. الموقع سيكون متاح على:
   ```
   https://YOUR_USERNAME.github.io/bus-tracking-system/
   ```

### 5️⃣ الاختبار

#### تسجيل الدخول كمدير

1. افتح الموقع
2. اختر تبويب "مدير"
3. سجل دخول بـ:
   - Email: `admin@school.com`
   - Password: `Admin@123`
4. يجب أن يتم توجيهك إلى لوحة التحكم

#### اختبار تخطيط المسارات

1. من القائمة الجانبية، اختر "تخطيط المسارات"
2. أضف موقع المدرسة والمشرف
3. أضف بعض الطلاب
4. اضغط على "توليد المسارات"
5. تحقق من النتائج على الخريطة

#### اختبار تطبيق السائق

1. افتح `/driver/index.html`
2. سجل دخول بحساب السائق
3. اضغط على "بدء المسار"
4. اسمح بالوصول إلى الموقع
5. تحقق من تحديث الموقع على لوحة المدير

## 🔧 استكشاف الأخطاء

### خطأ: "Firebase is not defined"

**الحل:**
- تأكد من تحميل مكتبات Firebase قبل `firebase-config.js`
- تحقق من اتصال الإنترنت

### خطأ: "Permission denied"

**الحل:**
- تحقق من قواعد الأمان في Firebase
- تأكد من تسجيل الدخول بالحساب الصحيح
- تحقق من حقل `role` في Firestore

### خطأ: "Geolocation not available"

**الحل:**
- استخدم HTTPS (GitHub Pages يوفره تلقائياً)
- اسمح بالوصول إلى الموقع في إعدادات المتصفح
- جرب متصفح آخر

### الخريطة لا تظهر

**الحل:**
- تحقق من Console في المتصفح
- تأكد من تحميل Leaflet CSS و JS
- تحقق من اتصال الإنترنت

## 📱 الاستخدام على الجوال

### للسائق:
1. افتح `/driver/index.html` على الجوال
2. أضف الصفحة إلى الشاشة الرئيسية:
   - **iOS**: Safari → Share → Add to Home Screen
   - **Android**: Chrome → Menu → Add to Home Screen

### لولي الأمر:
1. افتح `/parent/index.html` على الجوال
2. أضف الصفحة إلى الشاشة الرئيسية

## 🔐 تحسينات الأمان (مهم!)

بعد الإعداد الأولي:

1. **غيّر كلمات المرور الافتراضية**
2. **فعّل المصادقة الثنائية** في Firebase
3. **راجع قواعد الأمان** وعدّلها حسب احتياجاتك
4. **لا تشارك** ملف `firebase-config.js` في مستودعات عامة مع بيانات حقيقية

## 💡 نصائح

- استخدم **Firebase Emulator** للتطوير المحلي
- فعّل **Firebase Analytics** لمتابعة الاستخدام
- استخدم **Firebase Cloud Functions** للعمليات المعقدة
- اعمل نسخ احتياطية منتظمة من Firestore

## 📞 الدعم

إذا واجهت أي مشاكل:
1. تحقق من [Issues](https://github.com/YOUR_USERNAME/bus-tracking-system/issues)
2. افتح Issue جديد مع وصف تفصيلي للمشكلة
3. راجع [Firebase Documentation](https://firebase.google.com/docs)

---

**تم الإعداد بنجاح؟** 🎉 ابدأ باستخدام النظام!
