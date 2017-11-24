var Gato = (
	function () {
		function Gato(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion) {
                  Animal.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion)
                  this.color;
                  this.tipo = 'gato';
            /*this.nombre = pnombre;
            this.edad = pedad;
            this.altura = paltura;
            this.peso = ppeso;
            this.tamanno = ptamanno;*/
            }

            //Herencia
            Gato.prototype = Object.create(Animal.prototype);
            Gato.prototype.constructor = Animal;
            
		//Class Methods
            
            Gato.prototype.comer = function () {
			console.log(this.nombre + ': soy un gato & solo como atún!');
        }

        Gato.prototype.caminar = function () {
			console.log(this.nombre + ': soy un gato & camino con estilo!');
        }

        Gato.prototype.beber = function () {
			console.log(this.nombre + ': soy un gato & solo bebo leche!');
        }      

		return Gato;
	}
)();
