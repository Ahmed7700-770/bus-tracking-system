// ============================================
// تكوين Firebase
// ============================================
// استبدل هذه القيم بإعدادات مشروعك من Firebase Console
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBv0aBgrG0Tz8LzIlPuuAuiVFDlFIP47d4",
    authDomain: "bus-tracking-system-da5b9.firebaseapp.com",
    databaseURL: "https://bus-tracking-system-da5b9-default-rtdb.firebaseio.com",
    projectId: "bus-tracking-system-da5b9",
    storageBucket: "bus-tracking-system-da5b9.firebasestorage.app",
    messagingSenderId: "21140582193",
    appId: "1:21140582193:web:f1614b8368165b3a9bca10",
    measurementId: "G-K5L5LKBLP3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
const firebaseConfig = {
  apiKey: "AIzaSyBv0aBgrG0Tz8LzIlPuuAuiVFDlFIP47d4",
  authDomain: "bus-tracking-system-da5b9.firebaseapp.com",
  projectId: "bus-tracking-system-da5b9",
  storageBucket: "bus-tracking-system-da5b9.firebasestorage.app",
  messagingSenderId: "21140582193",
  appId: "1:21140582193:web:f1614b8368165b3a9bca10",
  databaseURL: "https://bus-tracking-system-da5b9-default-rtdb.firebaseio.com"
};

// تهيئة Firebase
let app, auth, db, rtdb;

try {
  app = firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
  db = firebase.firestore();
  rtdb = firebase.database();
  
  console.log('✅ تم الاتصال بـ Firebase بنجاح');
} catch (error) {
  console.error('❌ خطأ في الاتصال بـ Firebase:', error);
}

// ============================================
// دوال مساعدة للمصادقة
// ============================================

// تسجيل الدخول
async function signIn(email, password) {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// تسجيل الخروج
async function signOut() {
  try {
    await auth.signOut();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// إنشاء مستخدم جديد
async function createUser(email, password, userData) {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const userId = userCredential.user.uid;
    
    // حفظ بيانات المستخدم في Firestore
    await db.collection('users').doc(userId).set({
      email: email,
      ...userData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    return { success: true, userId: userId };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// الحصول على المستخدم الحالي
function getCurrentUser() {
  return auth.currentUser;
}

// مراقبة حالة المصادقة
function onAuthStateChanged(callback) {
  auth.onAuthStateChanged(callback);
}

// ============================================
// دوال مساعدة لقاعدة البيانات
// ============================================

// إضافة وثيقة
async function addDocument(collection, data) {
  try {
    const docRef = await db.collection(collection).add({
      ...data,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// تحديث وثيقة
async function updateDocument(collection, docId, data) {
  try {
    await db.collection(collection).doc(docId).update({
      ...data,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// حذف وثيقة
async function deleteDocument(collection, docId) {
  try {
    await db.collection(collection).doc(docId).delete();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// الحصول على وثيقة
async function getDocument(collection, docId) {
  try {
    const doc = await db.collection(collection).doc(docId).get();
    if (doc.exists) {
      return { success: true, data: { id: doc.id, ...doc.data() } };
    } else {
      return { success: false, error: 'الوثيقة غير موجودة' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// الحصول على جميع الوثائق من مجموعة
async function getCollection(collection, queryConstraints = []) {
  try {
    let query = db.collection(collection);
    
    // تطبيق قيود الاستعلام
    queryConstraints.forEach(constraint => {
      query = query.where(constraint.field, constraint.operator, constraint.value);
    });
    
    const snapshot = await query.get();
    const documents = [];
    snapshot.forEach(doc => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, data: documents };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// مراقبة التغييرات في الوقت الفعلي
function watchCollection(collection, callback, queryConstraints = []) {
  let query = db.collection(collection);
  
  queryConstraints.forEach(constraint => {
    query = query.where(constraint.field, constraint.operator, constraint.value);
  });
  
  return query.onSnapshot(snapshot => {
    const documents = [];
    snapshot.forEach(doc => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    callback(documents);
  });
}

// ============================================
// دوال التتبع في الوقت الفعلي (Realtime Database)
// ============================================

// تحديث موقع الباص
async function updateBusLocation(busId, location) {
  try {
    await rtdb.ref(`tracking/${busId}`).set({
      location: location,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// مراقبة موقع الباص
function watchBusLocation(busId, callback) {
  const ref = rtdb.ref(`tracking/${busId}`);
  ref.on('value', snapshot => {
    const data = snapshot.val();
    callback(data);
  });
  return () => ref.off('value');
}

// مراقبة جميع الباصات
function watchAllBuses(callback) {
  const ref = rtdb.ref('tracking');
  ref.on('value', snapshot => {
    const buses = [];
    snapshot.forEach(child => {
      buses.push({
        busId: child.key,
        ...child.val()
      });
    });
    callback(buses);
  });
  return () => ref.off('value');
}

// ============================================
// التصدير
// ============================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    auth,
    db,
    rtdb,
    signIn,
    signOut,
    createUser,
    getCurrentUser,
    onAuthStateChanged,
    addDocument,
    updateDocument,
    deleteDocument,
    getDocument,
    getCollection,
    watchCollection,
    updateBusLocation,
    watchBusLocation,
    watchAllBuses
  };
}
