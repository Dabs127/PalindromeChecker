const inputElement = document.getElementById("text-input")
const buttonElement = document.getElementById("check-btn")


const allowedAlphanumericCharacters = [
  'a', 'b', 'c', 'd', 
  'e', 'f', 'g', 'h', 
  'i', 'j', 'k', 'l', 
  'm', 'n', 'o', 'p', 
  'q', 'r', 's', 't', 
  'u', 'v', 'w', 'x', 
  'y', 'z', '0', '1', 
  '2', '3', '4', '5', 
  '6', '7', '8', '9'
]

const removeNonAlphaNumericCharacters = (word) => {
  word = word.split("")

  return word.filter(character => allowedAlphanumericCharacters.includes(character))
}

buttonElement.addEventListener("click", () => {
  const word = inputElement.value.toLowerCase();
  const filteredWord = removeNonAlphaNumericCharacters(word).join("");
  const reverseWord = filteredWord.split("").reverse().join("")

  if(!word) {
    alert("Please input a value")
    return
  }


  if(filteredWord === reverseWord) {
    const resultDiv = document.getElementById("result")
    resultDiv.innerHTML = `<strong>${word}</strong> is a palindrome.`
  } else { 
    const resultDiv = document.getElementById("result")
    resultDiv.innerHTML = `<strong>${word}</strong> is not a palindrome.`
  }

})