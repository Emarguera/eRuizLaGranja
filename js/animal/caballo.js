var Caballo = (
	function () {
		function Caballo(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion) {
                  Animal.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion)
                  this.color;
                  this.tipo = 'caballo';
            /*this.nombre = pnombre;
            this.edad = pedad;
            this.altura = paltura;
            this.peso = ppeso;
            this.tamanno = ptamanno;*/
            }

            //Herencia
            Caballo.prototype = Object.create(Animal.prototype);
            Caballo.prototype.constructor = Animal;
            
		//Class Methods
            
            Caballo.prototype.comer = function () {
			console.log(this.nombre + ': soy un caballo & solo como zanahorias!');
        }

        Caballo.prototype.caminar = function () {
			console.log(this.nombre + ': soy un caballo & camino con estilo!');
        }

        Caballo.prototype.beber = function () {
			console.log(this.nombre + ': soy un caballo & solo bebo agua!');
        }      

		return Caballo;
	}
)();
