// استيراد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

// إعداد Firebase باستخدام معلومات المشروع
const firebaseConfig = {
  apiKey: "AIzaSyAxT8COg5sXyv6FUjQ_8o-P2REI1PBS7WQ",
  authDomain: "reflect-b604d.firebaseapp.com",
  projectId: "reflect-b604d",
  storageBucket: "reflect-b604d.firebasestorage.app",
  messagingSenderId: "279668724991",
  appId: "1:279668724991:web:d6eb096d05bc6a4375e8ca"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// إعداد تسجيل الدخول باستخدام Google
const provider = new GoogleAuthProvider();

document.getElementById("google-login-btn").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("تم تسجيل الدخول بنجاح:", user.displayName);

      // عرض معلومات المستخدم
      const userInfo = document.getElementById("user-info");
      userInfo.textContent = `مرحبًا ${user.displayName}!`;
      userInfo.classList.remove("hidden");
    })
    .catch((error) => {
      console.error("خطأ أثناء تسجيل الدخول:", error.message);
      alert("حدث خطأ أثناء تسجيل الدخول: " + error.message);
    });
});
