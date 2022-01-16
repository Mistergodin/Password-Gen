// Assignment Code

alert("PaSsWoRd GeNeRaToR");
confirm("ALRIGHTY THEN...Okay or cancel?")
prompt("choose number between 8-128")
confirm("Lowercase Allowed")
confirm("Uppercase Allowed")
confirm("Numbers Allowed")
confirm("Symbols Allowed")

const password = document.querySelector('#password')
const button = document.querySelector('#button')

let characters = ('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()-_=+[{]};:,<.>/?');
let passwordlength = 128;
let passwordValue= '';



const createPassword = () => {
  passwordValue = '';
} 
generateBtn.addEventListener('click', () => {
  const length = +lengthEL.value;
  const hasLower = lower

for (let i = 0; i < passwordLength; i++) {
  let number = Math.floor(Math.random() * characters.length);
  passwordValue += characters.substring(number+ 1);

  password.value = passwordValue;
}
  console.log(length)
})

button.addEventListener('click', createPassword)
// Write password to the #password input


