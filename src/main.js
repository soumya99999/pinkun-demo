 
        // import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
//         import { initializeApp } from "/firebase/app.js";
// import { getFirestore, doc, setDoc } from "/firebase/firestore/lite.js";
// import { getDatabase, ref, child, get, set, update, remove } from "/firebase/database.js";

//         const firebaseConfig = {
//             apiKey: "AIzaSyCdRdFKAZ9zosNn_z5ufaphS3z5hm5478g",
//             authDomain: "new-project-13458.firebaseapp.com",
//             databaseURL: "https://new-project-13458-default-rtdb.firebaseio.com",
//             projectId: "new-project-13458",
//             storageBucket: "new-project-13458.appspot.com",
//             messagingSenderId: "877739511546",
//             appId: "1:877739511546:web:28a8fe9d800f6793c00343",
//             measurementId: "G-8H8XY45L61"
//         };

        
//         const app = initializeApp(firebaseConfig);

        
//         const db = getDatabase();
//         let username =  document.getElementById('username');
//         let gmailId =  document.getElementById('gmail');
//         let password = document.getElementById('password');
//         let submitButton = document.querySelector('#submit');

//         //ADD DATA
//         function AddData()
//         {
//             set(ref(db,'Sign-In/'+password.value),{
//                 nameOfUser:username.value,
//                 email:gmailId.value,
//                 Password:password.value
//             }).then(()=>{
//                 alert("Account Created Successfully");
//             }).catch((error)=>{
//                 alert("Unsuccessful");
//                 console.log(error);
//             })
//         }

//          //get data
//          function GetData(){
//             const dbRef = ref(db);
//             get(child(dbRef,'Sign-In/'+password.value)).then((snapshot) => {
//                 if(snapshot.exists()){
//                     username.value = snapshot.val().username;
//                     gmailId.value= snapshot.val().email;
//                 }
//                 else{
//                     alert("No Data Found!");
//                 }
//             })
//          }

//          function UpdateData()
//         {
//             update(ref(db,'Sign-In/'+password.value),{
//                 nameOfUser:username.value,
//                 email:gmailId.value,
//                 Password:password.value
//             }).then(()=>{
//                 alert("Data updated Successfully");
//             }).catch((error)=>{
//                 alert("Unsuccessful");
//                 console.log(error);
//             })
//         }

//         function DeleteData()
//         {
//             remove(ref(db,'Sign-In/'+password.value)).then(()=>{
//                 alert("Data Deleted Successfully");
//             }).catch((error)=>{
//                 alert("Unsuccessful");
//                 console.log(error);
//             })
//         }

//         AddBtn.addEventlistener('click',AddData);
//         AddBtn.addEventlistener('click',GetData);
//         AddBtn.addEventlistener('click',UpdateData);
//         AddBtn.addEventlistener('click',DeleteData);





//         document.getElementById("submitButton").addEventListener('click', function (e) {
//     e.preventDefault();
//     const name = document.getElementById("name").value;
//     const gmail = document.getElementById("gmail").value;
//     const password = document.getElementById("password").value;

//     const userDocRef = doc(db, "user", name);

//     setDoc(userDocRef, {
//         username: name,
//         gmail: gmail,
//         password: password
//     })
//     .then(() => {
//         alert("Login Successful");
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//         alert("Error: Login Failed");
//     });
// });

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdRdFKAZ9zosNn_z5ufaphS3z5hm5478g",
  authDomain: "new-project-13458.firebaseapp.com",
  databaseURL: "https://new-project-13458-default-rtdb.firebaseio.com",
  projectId: "new-project-13458",
  storageBucket: "new-project-13458.appspot.com",
  messagingSenderId: "877739511546",
  appId: "1:877739511546:web:28a8fe9d800f6793c00343",
  measurementId: "G-8H8XY45L61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase, ref, child, get, set, update, remove } from "/firebase/database.js";
    const db = getDatabase();
    let username =  document.getElementById('username');
    let gmailId =  document.getElementById('gmail');
    let password = document.getElementById('password');
    let submitButton = document.querySelector('#submit');

    //ADD DATA
    function AddData()
    {
        set(ref(db,'Sign-In/'+password.value),{
            nameOfUser:username.value,
            email:gmailId.value,
            Password:password.value
        }).then(()=>{
            alert("Account Created Successfully");
        }).catch((error)=>{
            alert("Unsuccessful");
            console.log(error);
        })
    }

     //get data
     function GetData(){
        const dbRef = ref(db);
        get(child(dbRef,'Sign-In/'+password.value)).then((snapshot) => {
            if(snapshot.exists()){
                username.value = snapshot.val().username;
                gmailId.value= snapshot.val().email;
            }
            else{
                alert("No Data Found!");
            }
        })
     }

     function UpdateData()
    {
        update(ref(db,'Sign-In/'+password.value),{
            nameOfUser:username.value,
            email:gmailId.value,
            Password:password.value
        }).then(()=>{
            alert("Data updated Successfully");
        }).catch((error)=>{
            alert("Unsuccessful");
            console.log(error);
        })
    }

    function DeleteData()
    {
        remove(ref(db,'Sign-In/'+password.value)).then(()=>{
            alert("Data Deleted Successfully");
        }).catch((error)=>{
            alert("Unsuccessful");
            console.log(error);
        })
    }

    AddBtn.addEventListener('click',AddData);
    AddBtn.addEventListener('click',GetData);
    AddBtn.addEventListener('click',UpdateData);
    AddBtn.addEventListener('click',DeleteData);