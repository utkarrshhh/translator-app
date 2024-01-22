// let textFrom = document.getElementById("textFrom");
let option = document.getElementById("textFrom")
let option2 = document.getElementById("textTo")
let translate = document.getElementById("translate");
let toTranslate = document.getElementById("textToTranslate")
let after = document.getElementById("textAfter")
let i = 0;
const addLang = (value) => {
  let x = value
  for (key in x) {
    if (i == 32) {
      option2.innerHTML += `
    <option value="${key}" selected>${x[key]}</option>
    `
      option.innerHTML += `
    <option value="${key}">${x[key]}</option>
    `
    }
    if (i == 19) {
      option.innerHTML += `
    <option value="${key}" selected>${x[key]}</option>
    `
      option2.innerHTML += `
    <option value="${key}">${x[key]}</option>
    `
    }
    else {

      option2.innerHTML += `
    <option value="${key}">${x[key]}</option>
    `
    option.innerHTML += `
    <option value="${key}">${x[key]}</option>
    `
    }
    i++;
  }
}
addLang(countries)
translate.onclick = () => {
  console.log("this is working")
  let initialText = toTranslate.value
  if (!initialText) {
    alert("you need to enter some text")
  }
  let lanFrom = option.value
  let lanTo = option2.value
  console.log(initialText)
  console.log(lanFrom)
  console.log(lanTo)
  let url = `https://api.mymemory.translated.net/get?q=${initialText}&langpair=${lanFrom}|${lanTo}`
  fetch(url).then((value) => {
    return value.json()
  }).then((value) => {
    console.log(value)
    after.innerHTML = `${value.responseData.translatedText}`
  })
}




