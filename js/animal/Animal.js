var Animal = (
	function () {
		function Animal(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, ptipo) {
			this.nombre = pnombre;
			this.edad = pedad;
			this.altura = paltura;
			this.peso = ppeso;
			this.capacidadEstomago = pcapacidadEstomago;
			this.capacidaConsumoAgua = pcapacidadConsumoAgua;
			this.capacidadConsumoAlimento = pcapacidadConsumoAlimento;
			this.capacidadProduccion = pcapacidadProduccion;
			this.tipoDeProduccion = ptipoDeProduccion;
			this.felicidad = pfelicidad;
			this.price = 0;
			this.animalKind = ptipo;
			this.tiempo = 0;
			this.FRAMERATE = 60;
			this.cantidadDeProducto = 0;
			this.tiempoDeProduction = 2 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
			this.cantComida = 0;
			this.cantAgua = 0;
			this.onClick = null;
		}
		//Class Methods
		Animal.prototype.comer = function () {};
		Animal.prototype.beber = function () {};
		
		Animal.prototype.acariciar = function () {
			console.log(this.nombre + ' Acariciame.');
			if (this.felicidad <= 100) {
				this.felicidad++;
				this.updateCard();
			}
		};

		Animal.prototype.producir = function () {
			// console.log('Este animal no produce nada!');
		};

		Animal.prototype.crearProducto = function () {}

		Animal.prototype.update = function () {}

		Animal.prototype.addCard = function () {}
		Animal.prototype.updateCard = function () {}

		return Animal;
	}
)();