function func() {
  print(10);
}
function another(x, y) {
  func();
}
function varr() {
  var x;
  var a = 5, b, c = func(a, b), d;
}
