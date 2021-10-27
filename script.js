
// password criteria
var finalPassword = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function checkLength(){
  //ask for passLength
  var length = prompt("What character length do you want, between 8-128, for your password? ");
  // check to make sure password length is between 8-128 if not ask say invalid respnse and ask again
  if( length > 8 && length < 128){
    return length;
  }
  else {
    window.alert("Length has to be between 8-128, try again! ");
    return checkLength();
  }
}

function checkCase(){
  // ask if the want upper/lower/ or both letter cases in password
  var typeSize = prompt("Make password with only lowercase,uppercase, or both? Respond with only lowercase/uppercase/both/none");
  // for both adds upper to default lowercase list
  if (typeSize == "both" || typeSize == "BOTH"){
    finalPassword.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    finalPassword.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    return finalPassword;
  }
  //if only upper, changes the lowercase list to uppercase
  if (typeSize == "uppercase" || typeSize == "UPPERCASE"){
    finalPassword.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    return finalPassword;
  }
  // if lower returns default list
  if (typeSize == "lowercase" || typeSize == "LOWERCASE"){
    finalPassword.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    return finalPassword;
  }
  
  // incorrect response ask the question again
  if (typeSize == "none" || typeSize == "NONE"){
    return finalPassword;
  }

  else{
    window.alert("Must respond with uppercase/ lowercase/ both/ none");
    return checkCase();
  }

}

function checkNumber(){
  //ask numeric yes/ numeric true
  var addNumbers = prompt("Would you like your password to include numbers? yes/no");
    //if yes add numbers to main list
    if (addNumbers == "yes" || addNumbers == "YES"){
      finalPassword.push('1','2','3','4','5','6','7','8','9','0');
      return finalPassword;
    }
    // return wihtout numbers
    if (addNumbers == "no" || addNumbers == "NO" ){
      return finalPassword;
    }
    // Error message ask again
    else{
      window.alert("Response can only be yes/no");
      return checkNumber();
    }
}

function checkSpecialChar(){
  //ask special characters yes/ true
  var addSpecialChar = prompt("Would you like your password to include special characters? yes/no");
  //if yes add numbers to main list
  if (addSpecialChar == "yes" || addSpecialChar == "YES"){
    finalPassword.push('!','@','#','$','%','^','&','*','+');
    return finalPassword;
  }
  // if no returns default list
  if (addSpecialChar == "no" || addSpecialChar == "NO"){
    return finalPassword;
  }
  // error message ask again
  else {
    window.alert("Response can only be yes/no");
    return checkSpecialChar();
  }
}

function generatePassword(){
  var passLength = checkLength();
  checkCase();
  checkNumber();
  checkSpecialChar();

  //check to make sure at lease 1 condition is added
  if(finalPassword[0] == undefined){
    window.alert(" Must have either aphebetical charaters, numbers, or special characters in password");
    generatePassword();
  }
    //generate random list and print list
    var text = "";
    for (var i = 0; i < passLength; i++)
      text += finalPassword[Math.floor(Math.random() * finalPassword.length)];
    return text;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  finalPassword = [];

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
