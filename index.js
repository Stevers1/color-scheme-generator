const colorInput = document.getElementById('color-picker');
let selectedColor = colorInput.value;
const square = document.querySelectorAll(".color-square")
const span = document.querySelectorAll("span")

square[0].style.backgroundColor=`${selectedColor}`

const btn = document.querySelector("#submit")

btn.addEventListener("click", () => {
  const colorValue = document.getElementById('color-picker').value;
  let colorForApi = colorValue.replace("#","")
  const modess = document.querySelector("#modes").value
  console.log(modess);

  let colorDisplay

  fetch(`https://www.thecolorapi.com/scheme?hex=${colorForApi}&mode=${modess}&count=5`)
  .then(res => res.json())
  .then(data => {
    colorDisplay = data.colors.map(el => {return el.hex.value})
    colorDisplay.forEach((element,index) => {
      square[index].style.backgroundColor=`${element}`
      span[index].innerText=`${element}`
    });    
  })

})
