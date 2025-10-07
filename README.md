# 🚌 نظام تتبع الباصات المدرسية المتكامل

نظام شامل لإدارة وتتبع الباصات المدرسية في الوقت الفعلي مع لوحات تحكم متعددة.

## ✨ المميزات

### 🎛️ لوحة التحكم الإدارية
- تخطيط المسارات الذكي باستخدام خوارزميات التحسين
- توزيع الطلاب على الباصات تلقائياً
- تتبع جميع الباصات في الوقت الفعلي
- إحصائيات وتقارير شاملة
- إدارة السائقين والطلاب

### 📱 تطبيق السائق
- تتبع GPS تلقائي
- قائمة الطلاب والنقاط
- تأكيد استلام/توصيل الطلاب
- ملاحة خطوة بخطوة
- إشعارات فورية

### 👨‍👩‍👧 تطبيق أولياء الأمور
- تتبع موقع الباص مباشرة
- إشعارات عند الاقتراب
- سجل الحضور والمواعيد
- معلومات السائق والباص
- تقييم الخدمة

## 🚀 التقنيات المستخدمة

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Maps**: Leaflet.js + OpenStreetMap
- **Routing**: OSRM API
- **Database**: Firebase Firestore
- **Real-time**: Firebase Realtime Database
- **Authentication**: Firebase Auth
- **Hosting**: GitHub Pages

## 📦 التثبيت والإعداد

### 1. استنساخ المشروع
```bash
git clone https://github.com/your-username/bus-tracking-system.git
cd bus-tracking-system
```

### 2. إعداد Firebase

1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. أنشئ مشروع جديد
3. فعّل **Authentication** (Email/Password)
4. فعّل **Firestore Database**
5. فعّل **Realtime Database**
6. انسخ إعدادات Firebase

### 3. تكوين المشروع

افتح ملف `assets/js/firebase-config.js` وضع إعدادات Firebase الخاصة بك:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  databaseURL: "YOUR_DATABASE_URL"
};
```

### 4. نشر على GitHub Pages

1. ارفع الملفات إلى repository
2. اذهب إلى Settings → Pages
3. اختر Branch: main
4. احفظ

الموقع سيكون متاح على:
```
https://your-username.github.io/bus-tracking-system/
```

## 📱 الاستخدام

### للمدير
1. افتح `index.html` أو `admin/dashboard.html`
2. سجل دخول بحساب المدير
3. ابدأ بإضافة المدرسة والمشرف
4. أضف الطلاب والباصات
5. ولّد المسارات
6. راقب الباصات في الوقت الفعلي

### للسائق
1. افتح `driver/index.html` على الجوال
2. سجل دخول بحساب السائق
3. ابدأ المسار
4. تابع التعليمات والملاحة
5. أكد استلام/توصيل كل طالب

### لولي الأمر
1. افتح `parent/index.html` على الجوال
2. سجل دخول بحساب ولي الأمر
3. شاهد موقع باص ابنك مباشرة
4. استقبل الإشعارات

## 🔐 الأمان

- جميع البيانات محمية بـ Firebase Security Rules
- المصادقة مطلوبة لجميع العمليات
- تشفير البيانات أثناء النقل
- صلاحيات محددة لكل نوع مستخدم

## 📊 قاعدة البيانات

### Collections في Firestore

```
users/
  ├── {userId}/
      ├── email
      ├── role (admin/driver/parent)
      ├── name
      └── ...

schools/
  ├── {schoolId}/
      ├── name
      ├── location {lat, lon}
      └── ...

buses/
  ├── {busId}/
      ├── number
      ├── capacity
      ├── driverId
      ├── currentRoute
      └── ...

students/
  ├── {studentId}/
      ├── name
      ├── location {lat, lon}
      ├── parentId
      ├── busId
      └── ...

routes/
  ├── {routeId}/
      ├── busId
      ├── type (morning/evening)
      ├── stops []
      ├── geometry
      └── ...

tracking/
  ├── {busId}/
      ├── location {lat, lon}
      ├── timestamp
      ├── speed
      ├── status
      └── ...
```

## 🤝 المساهمة

نرحب بالمساهمات! يرجى:
1. عمل Fork للمشروع
2. إنشاء فرع جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push للفرع (`git push origin feature/amazing-feature`)
5. فتح Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت MIT License - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 الدعم

للأسئلة والدعم:
- افتح Issue على GitHub
- راسلنا على: support@example.com

## 🙏 شكر خاص

- OpenStreetMap للخرائط
- OSRM للملاحة
- Firebase لقاعدة البيانات
- Leaflet.js لمكتبة الخرائط

---

صُنع بـ ❤️ للمدارس العربية
