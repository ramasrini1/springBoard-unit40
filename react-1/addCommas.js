function addCommas(num) {
  return (num.toLocaleString("en-US"));
}

module.exports = addCommas;

//Using regular expressions
// function addCommas(num) {
  //return (x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
// }