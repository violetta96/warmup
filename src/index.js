module.exports = function warmup(temperature) {
  var c = temperature;
  var f = (c * 9 + (32 * 5)) / 5;
  return f;
};
