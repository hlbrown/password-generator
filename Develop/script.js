var generateBtn = document.querySelector("#generate");

var pwdReq = {

  //Length of password
  pwdLength: 0,

   //array to hold lowercase letters
   pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
   "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

 //array to hold uppercase letters
 pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
   "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

 //array to hold numbers
 pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

 //array to hold special characters
 pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
   "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]

}


// Write password to the #password input
function writePassword() {
  //calling the generatePassword function
  var password = generatePassword();

  //set passwordText to the textArea with the id="#password" on the html page
  var passwordText = document.querySelector("#password");

  //updating the value to the new password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//make a function to generate the password
function generatePassword() {

    //holds the password to be generated and returned
  var result ="";

  ///variable to collect the input from the user
  var passwordLength = 0;
  var uppercase;
  var lowercase;
  var numbers;
  var specialChar;

  //initialize characters
  passwordLength = 0;
  pwdReq.pwdLength = 0;
  result = "";

  //check password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");

    //if user presses cancel
    if (passwordLength === null) {
      return "your secure password";
    }
    else{
      //validating integar entered
      if(!isFinite(passwordLength)) {
        alert("You did not enter a number");
        return "Your Secure Password";
      }else {
        //check password meets length criteria
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {

          //call the internal function to show prompts for criteria
          showPrompts();
          //keep adding characters based on criteria until pwdLength is = to the length the user set
          while (pwdReq.pwdLength < passwordLength) {
            //if statement to make sure the user selects at least one of the criteria  
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
              //if the user selected lowercase and there is still room to add characters then
              //randomly grab a lowercase letter from the array and add it to the end of result 
              //update pwdLength by 1
              if (lowerCase === true && pwdReq.pwdLength < passwordLength) {
                var lc = pwdReq.pwdLowerCase[Math.floor(Math.random() * 26)]
                result = result + lc;
                pwdReq.pwdLength++;
              }

              //if the user selected a special character and there is still room to add characters then
              //randomly grab a apecial character from the array and add it to the end of result 
              //update pwdLength by 1              
              if (specialChar === true && pwdReq.pwdLength < passwordLength) {
                var sc = pwdReq.pwdCharacter[Math.floor(Math.random() * 32)]
                result = result + sc;
                pwdReq.pwdLength++;
              }

              //if the user selected an uppercase letter and there is still room to add characters then
              //randomly grab an uppercase letter from the array and add it to the end of result 
              //update pwdLength by 1
              if (upperCase === true && pwdReq.pwdLength < passwordLength) {
                var uc = pwdReq.pwdUpperCase[Math.floor(Math.random() * 26)]
                result = result + uc;
                pwdReq.pwdLength++;
              }

              //if the user selected a number and there is still room to add characters then
              //randomly grab a number from the array and add it to the end of result 
              //update pwdLength by 1
              if (numbers === true && pwdReq.pwdLength < passwordLength) {
                var num = pwdReq.pwdNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                pwdReq.pwdLength++;
              }
            }
          }
        }
      }
    }
     //return the generated password back to the calling function
  return result;

    //internal function to prompt the user for criteria
    function showPrompts() {
      lowerCase = confirm("Do you want to use lower case letters?");
      upperCase = confirm("Do you want to use upper case letters?");
      numbers = confirm("Do you want to use numbers?");
      specialChar = confirm("Do you want to use any special characters?");
    }
  }
}
  
   
