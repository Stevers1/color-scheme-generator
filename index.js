const colorInput = document.getElementById('color-picker');
let selectedColor = colorInput.value;
selectedColor = selectedColor.replace("#","")
console.log(selectedColor)

const square = document.querySelectorAll(".color-square")

square[0].style.backgroundColor=`${selectedColor}`

fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=monochrome&count=4`)
.then(res => res.json())
.then(data => {
  const colors = data.colors.map(el => {return el.hex.value})
  console.log(colors)
})