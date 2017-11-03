var Granero = (
	function () {
		function Granero() {
            this.cantidadMaiz = 0;
            this.cantidadLeche = 0;
            this.cantidadAgua = 0;
            this.cantidadPasto = 0;
            this.cantidadHuevos = 0;
            this.cantidadAlimento = 0;
            this.cantidadTocino = 0;
		}
		//Class Methods
		Granero.prototype.reportarInventario = function (pcantidad) {
            console.log('Maíz existente: ' + cantidadMaiz);
            console.log('Leche existente: ' + cantidadLeche);
            console.log('Agua existente: ' + cantidadAgua);
            console.log('Pasto existente: ' + cantidadPasto);
            console.log('Huevos existente: ' + cantidadHuevos);
            console.log('Alimento existente: ' + cantidadAlimento);
            console.log('Tocino existente: ' + cantidadTocino);
		}

		return Granero;
	}
)();