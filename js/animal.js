var Animal = (
	function () {
		function Animal(pNombre, pEdad, pAltura, pPeso, pTamanno, pCapEstomago, pCapConsumoAgua, pCapConsumoAlimento, pCapProd, pTipoProd) {
            this.nombre = pNombre;
            this.edad = pEdad;
            this.altura = pAltura;
            this.peso = pPeso;
            this.tamanno = pTamanno;
            this.capacidadEstomago = pCapEstomago;
            this.capacidadConsumoAgua = pCapConsumoAgua;
            this.capacidadConsumoAlimento = pCapConsumoAlimento;
            this.capacidadProduccion = pCapProd;
            this.tipoProduccion = pTipoProd;
		}
		
		//Class Methods
		Animal.prototype.comer = function () {
			console.log(this.nombre + ' soy una animal y estoy comiendo.');
		}

        Animal.prototype.caminar = function () {
			console.log(this.nombre + ' soy una animal y estoy caminando.');
        }
        
        Animal.prototype.beber = function () {
			console.log(this.nombre + ' soy una animal y estoy bebiendo.');
        }
        
        Animal.prototype.producir = function () {
			console.log(this.nombre + ' soy una animal y estoy produciendo.');
        }
        
		return Animal;
	}
)();