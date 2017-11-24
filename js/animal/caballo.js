var Caballo = (
	function () {

		function Caballo(pnombre) {
			Animal.call(this, pnombre);
			this.color;
		}

		//Heredar los metodos definidos en Animal (prototype)
		Caballo.prototype = Object.create(Animal.prototype);
		Caballo.prototype.constructor = Animal;

		//Class Methods
		Caballo.prototype.comer = function () {
			console.log(this.nombre + ' soy un caballo y estoy comiendo.');
		}

		Caballo.prototype.brincar = function () {
			console.log(this.nombre + ' soy un caballo y estoy brincando.');
		}

		return Caballo;
	}
)();