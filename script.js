var btn = document.querySelector("#generate");
var collection = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=-{}[]:;';
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword(){
  //do something ask questions how many characters? want uppercase? want lowercase? want numbers?
  var length = prompt('How many characters would you like in your password?');
  var kyle = '';
  for (var i = 0; i < length; i++) {
    var character = collection[Math.floor(Math.random()*collection.length)];
    kyle = kyle + character;
  }
  return kyle
}

// Add event listener to generate butto
btn.addEventListener("click", writePassword);
