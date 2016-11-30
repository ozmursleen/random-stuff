/**
 * Created by oz on 11/26/2016.
 */

define(['app'], function (app) {

    app.service('firebaseService', function(){
        this.init = function() {
            var config = {
                apiKey: "API_KEY",
                authDomain: "FIREBASE_DOMAIN",
                databaseURL: "FIREBASE_DB_URL",
                storageBucket: "FIREBASE_BUCKET_NAME",
                messagingSenderId: "MESSAGE_ID"
            };
            firebase.initializeApp(config);

            this.dbRef = firebase.database().ref();
            this.customersRef = this.dbRef.child('customers');
        };
    });
});

