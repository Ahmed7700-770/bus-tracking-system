# 📤 دليل رفع المشروع على GitHub

## الطريقة الأولى: عبر واجهة GitHub (الأسهل)

### الخطوات:

#### 1️⃣ إنشاء Repository جديد

1. اذهب إلى [GitHub](https://github.com)
2. سجل دخول أو أنشئ حساب جديد
3. اضغط على زر **"+"** في الأعلى ← **"New repository"**
4. املأ المعلومات:
   - **Repository name**: `bus-tracking-system`
   - **Description**: نظام تتبع الباصات المدرسية - School Bus Tracking System
   - **Public** أو **Private** (اختر حسب رغبتك)
   - ✅ **لا تختر** "Add a README file" (لدينا واحد بالفعل)
   - ✅ **لا تختر** "Add .gitignore" (لدينا واحد بالفعل)
   - اختر **License**: MIT License
5. اضغط على **"Create repository"**

#### 2️⃣ تحميل الملف المضغوط

1. حمّل ملف `bus-tracking-system.zip` من المرفقات
2. فك الضغط على جهازك

#### 3️⃣ رفع الملفات

**الطريقة أ: السحب والإفلات (Drag & Drop)**

1. في صفحة Repository الفارغة، اضغط على **"uploading an existing file"**
2. اسحب **جميع الملفات والمجلدات** من مجلد المشروع
3. اكتب رسالة commit: `Initial commit: Complete bus tracking system`
4. اضغط على **"Commit changes"**

**الطريقة ب: رفع الملفات يدوياً**

1. اضغط على **"Add file"** ← **"Upload files"**
2. اسحب الملفات أو اضغط **"choose your files"**
3. حدد جميع الملفات والمجلدات
4. اكتب رسالة commit
5. اضغط على **"Commit changes"**

---

## الطريقة الثانية: عبر Git Command Line (للمتقدمين)

### المتطلبات:
- Git مثبت على جهازك
- حساب GitHub

### الخطوات:

#### 1️⃣ إنشاء Repository على GitHub

اتبع نفس خطوات الطريقة الأولى (الخطوة 1)

#### 2️⃣ إعداد Git محلياً

افتح Terminal/Command Prompt في مجلد المشروع:

```bash
# الانتقال إلى مجلد المشروع
cd bus-tracking-system

# تهيئة Git
git init

# إضافة جميع الملفات
git add .

# عمل Commit
git commit -m "Initial commit: Complete bus tracking system"

# تغيير اسم الفرع إلى main
git branch -M main
```

#### 3️⃣ ربط المشروع بـ GitHub

```bash
# استبدل YOUR_USERNAME باسم المستخدم الخاص بك
git remote add origin https://github.com/YOUR_USERNAME/bus-tracking-system.git

# رفع الملفات
git push -u origin main
```

**ملاحظة:** قد يطلب منك إدخال:
- اسم المستخدم (Username)
- Personal Access Token (ليس كلمة المرور!)

#### 4️⃣ إنشاء Personal Access Token (إذا لزم الأمر)

1. اذهب إلى GitHub → **Settings** → **Developer settings**
2. **Personal access tokens** → **Tokens (classic)**
3. **Generate new token** → **Generate new token (classic)**
4. اختر الصلاحيات: ✅ **repo** (جميع الخيارات تحتها)
5. اضغط **Generate token**
6. **انسخ** الـ Token (لن تراه مرة أخرى!)
7. استخدمه بدلاً من كلمة المرور

---

## الطريقة الثالثة: عبر GitHub Desktop (الأسهل للمبتدئين)

### الخطوات:

#### 1️⃣ تحميل GitHub Desktop

1. حمّل من [desktop.github.com](https://desktop.github.com/)
2. ثبّته وسجل دخول بحسابك

#### 2️⃣ إضافة المشروع

1. **File** → **Add Local Repository**
2. اختر مجلد `bus-tracking-system`
3. إذا ظهر "This directory does not appear to be a Git repository":
   - اضغط **"create a repository"**
   - اختر المجلد
   - اضغط **Create Repository**

#### 3️⃣ رفع المشروع

1. ستظهر جميع الملفات في قائمة Changes
2. اكتب رسالة Commit في الأسفل
3. اضغط **"Commit to main"**
4. اضغط **"Publish repository"**
5. اختر الاسم والوصف
6. اضغط **"Publish Repository"**

---

## 🌐 تفعيل GitHub Pages (لنشر الموقع)

بعد رفع المشروع:

### الخطوات:

1. اذهب إلى Repository على GitHub
2. **Settings** → **Pages** (من القائمة الجانبية)
3. تحت **Source**:
   - Branch: اختر **main**
   - Folder: اختر **/ (root)**
4. اضغط **Save**
5. انتظر 1-2 دقيقة
6. سيظهر رابط الموقع:
   ```
   https://YOUR_USERNAME.github.io/bus-tracking-system/
   ```
7. احفظ هذا الرابط!

### تحديث رابط الموقع في README

1. افتح ملف `README.md` على GitHub
2. اضغط على أيقونة القلم (Edit)
3. أضف في الأعلى:
   ```markdown
   ## 🌐 الموقع المباشر
   
   [افتح النظام](https://YOUR_USERNAME.github.io/bus-tracking-system/)
   ```
4. احفظ التغييرات

---

## ✅ التحقق من النجاح

بعد الرفع، تأكد من:

- ✅ جميع الملفات موجودة في Repository
- ✅ هيكل المجلدات صحيح:
  ```
  bus-tracking-system/
  ├── admin/
  ├── driver/
  ├── parent/
  ├── assets/
  ├── index.html
  ├── README.md
  └── ...
  ```
- ✅ الموقع يعمل على GitHub Pages
- ✅ يمكن فتح `index.html` بدون أخطاء

---

## 🔄 تحديث المشروع لاحقاً

### عبر واجهة GitHub:
1. اذهب إلى الملف المراد تعديله
2. اضغط على أيقونة القلم
3. عدّل واحفظ

### عبر Git:
```bash
# بعد التعديل
git add .
git commit -m "وصف التحديث"
git push origin main
```

### عبر GitHub Desktop:
1. عدّل الملفات محلياً
2. افتح GitHub Desktop
3. ستظهر التغييرات تلقائياً
4. اكتب رسالة Commit
5. اضغط **Commit** ثم **Push origin**

---

## ❓ حل المشاكل الشائعة

### المشكلة: "Permission denied"
**الحل:**
- استخدم Personal Access Token بدلاً من كلمة المرور
- تأكد من صلاحيات الـ Token

### المشكلة: "Repository not found"
**الحل:**
- تأكد من اسم المستخدم واسم Repository
- تأكد من أن Repository موجود على GitHub

### المشكلة: الموقع لا يعمل على GitHub Pages
**الحل:**
- تأكد من أن ملف `index.html` في الجذر
- انتظر 5 دقائق بعد التفعيل
- تحقق من Console في المتصفح

### المشكلة: ملفات كبيرة جداً
**الحل:**
- GitHub يقبل ملفات حتى 100 MB
- استخدم Git LFS للملفات الكبيرة
- أو استضف الملفات الكبيرة خارجياً

---

## 🎉 تم بنجاح!

الآن مشروعك:
- ✅ موجود على GitHub
- ✅ يمكن مشاركته مع الآخرين
- ✅ منشور على الإنترنت (إذا فعّلت Pages)
- ✅ يمكن تحديثه بسهولة

**رابط Repository:**
```
https://github.com/YOUR_USERNAME/bus-tracking-system
```

**رابط الموقع المباشر:**
```
https://YOUR_USERNAME.github.io/bus-tracking-system/
```

---

**محتاج مساعدة؟** افتح Issue على GitHub أو راجع [GitHub Docs](https://docs.github.com)
