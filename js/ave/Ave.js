var Ave = (
	function () {
		function Ave(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion) {
            this.nombre = pnombre;
            this.edad = pedad;
            this.altura = paltura;
            this.peso = ppeso;
            this.tamanno = ptamanno;
            this.capacidadEstomago = pcapacidadEstomago;
            this.capacidadConsumoAgua = pcapacidadConsumoAgua;
            this.capacidadConsumoAlimento = pcapacidadConsumoAlimento;
            this.capacidadProduccion = pcapacidadProduccion;
            this.tipoDeProduccion = ptipodeProduccion;
            this.felicidad = 50;
            this.tiempo = 0;
            this.FRAMERATE = 60;
            this.cantidadDeProducto = 0;
            this.tiempoDeProduction = 2 * this.FRAMERATE;
            this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
		}
		//Class Methods
		Ave.prototype.comer = function () {
			console.log('Cada animal come a su manera.');
        }

        Ave.prototype.caminar = function () {
			console.log('Cada animal camina a su manera.');
        }

        Ave.prototype.beber = function () {
			console.log('Cada ave bebe a su manera.');
        } 
        
        Ave.prototype.producir = function () {
            // console.log('Este animal no produce nada!');
      };

      Ave.prototype.crearProducto = function () {

      }

      Ave.prototype.update = function () {

      }


		return Ave;
	}
)();
