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

  //set passwordText to the textArea 
  var passwordText = document.querySelector("#password");

  //updating the value to the generated password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//make a function to generate the password
function generatePassword() {

    //saves an empty string to fill
  var result ="";

  ///variable to collect the input from the user
  var passwordLength = 0;
  var numbers;
  var specialChar;

  //initialize characters
  passwordLength = 0;
  pwdReq.pwdLength = 0;
  result = "";

  //check password length
  while (passwordLength < 8 || passwordLength > 128) { // \ n(new line character)
    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");

    //if user presses cancel
    if (passwordLength === null) {
      return "you did not complete password generation";
    }
    else{
      //validating integar entered
      if(!isFinite(passwordLength)) {
        alert("You did not enter a number");
        return generatePassword();//checks to make sure the user enters a number
      }else {
        //check password meets length criteria
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return generatePassword();//calls the generatePassword() function to restart if the wrong number was entered
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
              
              //if the user selected lowercase randomly grab a lowercase letter from the array and add it to the end of result 
             
              if (lowerCase === true && pwdReq.pwdLength < passwordLength) {
                var lc = pwdReq.pwdLowerCase[Math.floor(Math.random() * 26)]
                result = result + lc;
                pwdReq.pwdLength++; //update pwdLength by 1
              }

              //if the user selected a special character randomly grab a apecial character from the array and add it to the end of result 
                         
              if (specialChar === true && pwdReq.pwdLength < passwordLength) {
                var sc = pwdReq.pwdCharacter[Math.floor(Math.random() * 32)]
                result = result + sc;
                pwdReq.pwdLength++;//update pwdLength by 1  
              }

              //if the user selected an uppercase letter randomly grab an uppercase letter from the array and add it to the end of result 
             
              if (upperCase === true && pwdReq.pwdLength < passwordLength) {
                var uc = pwdReq.pwdUpperCase[Math.floor(Math.random() * 26)]
                result = result + uc;
                pwdReq.pwdLength++;//update pwdLength by 1
              }

              //if the user selected a number randomly grab a number from the array and add it to the end of result 
             
              if (numbers === true && pwdReq.pwdLength < passwordLength) {
                var num = pwdReq.pwdNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                pwdReq.pwdLength++;//update pwdLength by 1
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
  
   
