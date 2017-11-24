var Pato = (
	function () {
		function Pato(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion) {
                  Ave.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion)
                  // this.velocidadDeProducion = 2 * this.FRAMERATE;
                  this.tiempoDeProduction = 2 * this.FRAMERATE;
                  this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
                  this.tipo = 'pato';
            /*this.nombre = pnombre;
            this.edad = pedad;
            this.altura = paltura;
            this.peso = ppeso;
            this.tamanno = ptamanno;*/
            }

            Pato.prototype = Object.create(Ave.prototype);
            Pato.prototype.constructor = Ave;
            
		//Class Methods
            
        Pato.prototype.comer = function () {
			console.log(this.nombre + ': soy un pato & como lo que sea!');
        }

        Pato.prototype.caminar = function () {
			console.log(this.nombre + ': soy un pato & camino gracioso!');
        }

        Pato.prototype.beber = function () {
			console.log(this.nombre + ': soy un pato & solo bebo agua!');
        }      

        Pato.prototype.producir = function () {
            
    };

    Pato.prototype.crearProducto = function () {
          //this.capacidadProduccion
          //this.cantidadDeProducto = 0;
          //this.velocidadDeProducion = 0

          if (this.capacidadProduccion >= this.cantidadDeProducto) {
                if (this.tiempo <= this.tiempoDeProduction) {
                      this.cantidadDeProducto += this.cantidadDeProductoPorTiempo;
                      this.tiempo = 0;
                      console.log(this.nombre + ' tiene ' + this.cantidadDeProducto + ' de producto!');
                }
          } else {
                //Vace llena
          }

    }

    Pato.prototype.update = function () {
          this.tiempo++;
          this.crearProducto();
    }


		return Pato;
	}
)();
