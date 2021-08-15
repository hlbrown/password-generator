var generateBtn = document.querySelector("#generate");

var reqForPass = {
  pwdLength:0,
  LC: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  UC: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  Nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  specChar: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
  "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var generated = "";

  var passLength = 0;
  var nums;
  var special;

  passLength = 0;
  reqForPass.pwdLength = 0;
  generated = "";

  var passLength = (prompt("How many characters do you want between 8 and 128?"));

  while(passLength <= 7 || passLength >= 129 ){
    
    var passLength = (prompt("How many characters do you want between 8 and 128?"));
  }
   
   if(passLength >= 8 || passLength <= 128){
    
    lowerCase = confirm("Click 'OK' if you want lowercase letters in your password.")

    upperCase = confirm("Click 'OK' if you want uppercase letters in your password.");

    nums = confirm("Click 'OK' if you want numbers in your password");

    special = confirm("Click 'OK' if you want special characters in your password");

    while(reqForPass.pwdLength < passLength){

    if(lowerCase ===true && reqForPass.pwdLength < passLength){
      var lowC = reqForPass.LC[Math.floor(Math.random() * 26)]
      generated = generated + lowC;
      reqForPass.pwdLength++;
    }
    if(special === true && reqForPass.pwdLength < passLength){
      var special = reqForPass.specChar[Math.floor(Math.random() * 32)]
      generated = generated + special;
      reqForPass.pwdLength++;
    }
    if(upperCase === true && reqForPass.pwdLength < passLength){
      var upperCase = reqForPass.UC[Math.floor(Math.random() * 26)]
      generated = generated + upperCase;
      reqForPass.pwdLength++;
    }
    if(nums === true && reqForPass.pwdLength < passLength){
      var nums = reqForPass.Nums[Math.floor(Math.random() * 10)]
      generated = generated + nums;
      reqForPass.pwdLength++;
    }
    
   }
   return generated;
  }
  
 }


  