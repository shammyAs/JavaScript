const duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function(a){ return "the name of this duck is " + this.name + a + "."}
}
console.log(duck.sayName(" "))