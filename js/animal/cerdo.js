var Cerdo = (
	function () {
		function Cerdo(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion) {
                  Animal.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion)
                  this.precio = 200; 
                  this.cantidadDeProducto = 0;
			// this.velocidadDeProducion = 2 * this.FRAMERATE;
			this.tiempoDeProduction = 2 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
                  this.tipo = 'cerdo';
            /*this.nombre = pnombre;
            this.edad = pedad;
            this.altura = paltura;
            this.peso = ppeso;
            this.tamanno = ptamanno;*/
            }

            //Herencia
            Cerdo.prototype = Object.create(Animal.prototype);
            Cerdo.prototype.constructor = Animal;
            
		//Class Methods
            
            Cerdo.prototype.comer = function () {
			console.log(this.nombre + ': soy un cerdo & solo como alimento!');
        }

        Cerdo.prototype.caminar = function () {
			console.log(this.nombre + ': soy un cerdo & camino en el lodo!');
        }

        Cerdo.prototype.beber = function () {
			console.log(this.nombre + ': soy un cerdo & solo bebo agua!');
        }      

        Cerdo.prototype.producir = function () {
            
    };

       Cerdo.prototype.crearProducto = function () {
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

    Cerdo.prototype.update = function () {
          this.tiempo++;
          this.crearProducto();
    }

		return Cerdo;
	}
)();
