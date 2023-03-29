const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg');

let load = 0;

//setting the function to increment in milliseconds
let int = setInterval(blurring, 30);

function blurring () {
  load++

  if(load > 99){
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  //in this case, we are mapping out opacity 1 to 0 with the help of the scale method
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`


}

//this is to mapp out a number range
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
