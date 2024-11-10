// firebaseConfig.js

// Substitua com sua configuração do Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID",
    databaseURL: "SUA_DATABASE_URL"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
