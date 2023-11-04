// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passLength = parseInt(prompt("How long do you want your password?"));
  
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Password length must be between 8 and 128 characters.");
    return getPasswordOptions();
  }

  var passLower = confirm("Do you want lowercase characters?");
  var passUpper = confirm("Do you want uppercase characters?");
  var passNum = confirm("Do you want numerical characters?");
  var passSpecial = confirm("Do you want special characters?");
  
  if (!passLower && !passUpper && !passNum && !passSpecial) {
    alert("You must select at least one character type.");
    return getPasswordOptions();
  }

  return {
    passLength,
    passLower,
    passUpper,
    passNum,
    passSpecial
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var n = Math.floor(Math.random() * arr.length);
  return arr[n];
}

// Function to generate password with user input
function generatePassword() {
  var passOptions = getPasswordOptions();
  var characters = [];
  
  if (passOptions.passLower) characters = characters.concat(lowerCasedCharacters);
  if (passOptions.passUpper) characters = characters.concat(upperCasedCharacters);
  if (passOptions.passNum) characters = characters.concat(numericCharacters);
  if (passOptions.passSpecial) characters = characters.concat(specialCharacters);
  
  var password = '';
  
  for (var i = 0; i < passOptions.passLength; i++) {
    password += getRandom(characters);
  }
  
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

