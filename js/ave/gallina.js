var Gallina = (
	function () {
		function Gallina(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion) {
                  Ave.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion)
                  this.precio = 100;
                  // this.velocidadDeProducion = 2 * this.FRAMERATE;
                  this.tiempoDeProduction = 2 * this.FRAMERATE;
                  this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
                  this.tipo = 'gallina';
            /*this.nombre = pnombre;
            this.edad = pedad;
            this.altura = paltura;
            this.peso = ppeso;
            this.tamanno = ptamanno;*/
            }

            Gallina.prototype = Object.create(Ave.prototype);
            Gallina.prototype.constructor = Ave;
            
		//Class Methods
            
        Gallina.prototype.comer = function () {
			console.log(this.nombre + ': soy una gallina & como lo que sea!');
        }

        Gallina.prototype.caminar = function () {
			console.log(this.nombre + ': soy una gallina & camino gracioso!');
        }

        Gallina.prototype.beber = function () {
			console.log(this.nombre + ': soy una gallina & solo bebo agua!');
        }      

        Gallina.prototype.producir = function () {
            
    };

    Gallina.prototype.crearProducto = function () {
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

    Gallina.prototype.update = function () {
          this.tiempo++;
          this.crearProducto();
    }


		return Gallina;
	}
)();
