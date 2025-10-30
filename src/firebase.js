import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDFGz9ufPAmK3tTx6eGFvBzNDIzsUiilUw",
    authDomain: "mvxlogin.firebaseapp.com",
    projectId: "mvxlogin",
    storageBucket: "mvxlogin.firebasestorage.app",
    messagingSenderId: "1073813481757",
    appId: "1:1073813481757:web:01f4e0c9a2b22690f359f4",
    measurementId: "G-30Q8CRCE1D",
};

// Initialize Firebase (singleton)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let analytics;
if (typeof window !== "undefined") {
    isSupported().then((yes) => {
        if (yes) analytics = getAnalytics(app);
    });
}

// Inicializar auth somente no cliente (evita erros com SSR/Next.js)
let auth = null;
if (typeof window !== "undefined") {
    auth = getAuth(app);
}

const googleProvider = new GoogleAuthProvider();

export async function signInWithGooglePopup() {
    if (!auth) throw new Error("Auth não inicializado no ambiente atual");
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        console.error("Erro no login:", error);
        throw error;
    }
}

// Encerrar o login
export async function logout() {
    if (!auth) return;
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Erro ao sair:", error);
        throw error;
    }
}

export { auth, googleProvider, app, analytics };