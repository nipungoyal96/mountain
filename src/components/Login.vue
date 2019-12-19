<template>
<div class="a">
    <div id="firebaseui-auth-container"></div>
</div>
</template>
<script>

import * as firebaseui from 'firebaseui';
import firebase from 'firebase/app';
import 'firebase/auth';


export default {
  name: 'login',
  components: {

  },
  mounted(){
   var  config = {
    apiKey: "AIzaSyB-W7mhsGzy1k9V02TzKJyyCaNk2WYoNok",
    authDomain: "travel-dafb3.firebaseapp.com",
    databaseURL: "https://travel-dafb3.firebaseio.com",
    projectId: "travel-dafb3",
    storageBucket: "travel-dafb3.appspot.com",
    messagingSenderId: "1056922030060",
    appId: "1:1056922030060:web:eae8a90cd341d96f10bac9",
    measurementId: "G-357E0D0X3Z"
};


   
      var uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
      
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
         
         
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '/',
        // Privacy policy url/callback.
       
      };

      var app = firebase.initializeApp(config);
      var auth = app.auth();

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(auth);
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
  }
}
</script>

<style>
  div.a{
    padding:20%;
    text-align: center;
  }
</style>

