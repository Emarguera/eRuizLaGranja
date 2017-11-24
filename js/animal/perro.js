var Perro = (
	function () {
		function Perro(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion) {
                  Animal.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion)
                  
                  this.tipo = 'perro';
            /*this.nombre = pnombre;
            this.edad = pedad;
            this.altura = paltura;
            this.peso = ppeso;
            this.tamanno = ptamanno;*/
            }

            Perro.prototype = Object.create(Animal.prototype);
            Perro.prototype.constructor = Animal;
            
		//Class Methods
            
        Perro.prototype.comer = function () {
			console.log(this.nombre + ': soy un perro & como lo que sea!');
        }

        Perro.prototype.caminar = function () {
			console.log(this.nombre + ': soy un perro & camino gracioso!');
        }

        Perro.prototype.beber = function () {
			console.log(this.nombre + ': soy un perro & solo bebo agua!');
        }      

		return Perro;
	}
)();
