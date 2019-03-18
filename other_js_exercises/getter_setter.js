var o = {
  a: 1,
  get b() { 
    return this.a + 12;

  },
  set c(x) {
    this.a = x -14;
    this.a = x * 5;
    this.a = x / 7;
    this.a = x ++;
    this.a = x --;
  }
};

console.log(o.a); 
console.log(o.b); 
o.c = 13;
console.log(o.a); 