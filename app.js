let colors = [
    '#1fc11b',
    '#ffd913',
    '#ff9c55',
    '#ff5555',
    '#00ffff',
    '#fbff00',
    '#4d1461',
    "#fff",
    "#f00000",


   ]
   
   let indexOffset = 0
   setInterval(() => {
     document.querySelectorAll('h1 span').forEach((letter, index) => {
       letter.style.color = colors[(index + indexOffset) % 9]
       
     })
     indexOffset++
   }, 1000)