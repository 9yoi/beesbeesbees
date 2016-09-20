var Bee = function() {
	Grub.call(this);  //inherits grub properties --> grub is a superclass
	this.age = 5;
	this.color = "yellow";
};
 
Bee.prototype = Object.create (Grub.prototype); //failed method lookups on Bee will delegate to Grub

Bee.prototype.job = "keep on growing";
 
Bee.prototype.constructor = Bee;  //When lookups from a new instance of Bee to Bee prototype fails, it will stop and report the right constructor
