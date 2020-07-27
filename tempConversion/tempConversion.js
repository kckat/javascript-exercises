const ftoc = function(number) {
  let celcius = ((number - 32)*(5/9))
  console.log(celcius)
  celcius = Math.round(celcius * 10)/ 10
  return celcius;
}

const ctof = function(number) {
  let farenheight = ((number * (9/5))+ 32)
  farenheight = Math.round(farenheight * 10)/ 10
  return farenheight;
}

console.log(ftoc(32))

module.exports = {
  ftoc,
  ctof
}
