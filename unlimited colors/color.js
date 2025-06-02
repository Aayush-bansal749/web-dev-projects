const randomColor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for(let i = 0; i<6; i++){
    color += hex[Math.floor((Math.random() * 16))]
  }
  return color
}

function changebgcolor(){
  let color = randomColor()
  document.body.style.backgroundColor = color
  document.querySelector('.tag').innerHTML = `${color}`
}

let intervalId

const startChangingColor = function(){
  if(!intervalId){
  intervalId = setInterval(changebgcolor,1000)
  }
}
const stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null
}



document.getElementById('start').addEventListener('click',startChangingColor)
document.getElementById('stop').addEventListener('click',stopChangingColor)
