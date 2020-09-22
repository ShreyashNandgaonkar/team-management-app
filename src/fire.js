import firebase from 'firebase';
var firebaseConfig = {
            apiKey: "AIzaSyC3HFxEZREO1zvrLba6C781vo-XbMZdeVE",
            authDomain: "team-management-app-62109.firebaseapp.com",
            databaseURL: "https://team-management-app-62109.firebaseio.com",
            projectId: "team-management-app-62109",
            storageBucket: "team-management-app-62109.appspot.com",
            messagingSenderId: "370286113631",
            appId: "1:370286113631:web:9c280106e32b8daa243cea",
            measurementId: "G-FH54EVQ944"
        };
        // Initialize Firebase
        const fire = firebase.initializeApp(firebaseConfig);
        fire.analytics();
        export default fire;