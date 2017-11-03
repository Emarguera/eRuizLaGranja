var Animal = (
	function () {
		function Animal(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion) {
            this.nombre = pnombre;
            this.edad = pedad;
            this.altura = paltura;
            this.peso = ppeso;
            this.tamanno = ptamanno;
            this.capacidadEstomago = pcapacidadEstomago;
            this.capacidadConsumoAgua = pcapacidadConsumoAgua;
            this.capacidadCOnsumoAlimento = pcapacidadConsumoAlimento;
            this.capacidadProduccion = pcapacidadProduccion;
            this.tipodeProduccion = ptipodeProduccion;
		}
		//Class Methods
		Animal.prototype.comer = function () {
			console.log('Cada animal come a su manera.');
        }

        Animal.prototype.caminar = function () {
			console.log('Cada animal camina a su manera.');
        }

        Animal.prototype.beber = function () {
			console.log('Cada animal bebe a su manera.');
        } 
        
        Animal.prototype.producir = function () {
			console.log('Cada animal produce a su manera.');
        } 

		return Animal;
	}
)();