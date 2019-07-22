// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyD_wH0oJT-UGHC0q5Z3vTmFYcH2Won2iy8",
    authDomain: "authone-a62ed.firebaseapp.com",
    databaseURL: "https://authone-a62ed.firebaseio.com",
    projectId: "authone-a62ed",
    storageBucket: "",
    messagingSenderId: "319046258167",
    appId: "1:319046258167:web:d2a4b6a05835ebab"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var list = getInputVal('list');
  var location = getInputVal('location');
  var age = getInputVal('age');
  var email = getInputVal('email');
  var message = is_checked();

  // Save message
  saveMessage(fname, lname, location, age, email, message, list);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, location, age, email, message, list){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    first_name: fname,
    last_name: lname,
    location:location,
    age: age,
    email:email,
    gender: list,
    message:message
  });
}

function getSelectValue(){
  var selectedValue = document.getElementById("list").value;
}

function is_checked(){
  var word = "";

  var blue = document.getElementById("blue").checked;
  if(blue==true){word=word + "blue ";}

  var red = document.getElementById("red").checked;
  if(red==true){word=word + "red ";}

  var yellow = document.getElementById("yellow").checked;
  if(yellow==true){word=word + "yellow ";}

  var grey = document.getElementById("grey").checked;
  if(grey==true){word=word + "grey ";}

  var green = document.getElementById("green").checked;
  if(green==true){word=word + "green ";}

  var none = document.getElementById("none").checked;
  if(none==true){word=word+ "none "}


  return word;
}
