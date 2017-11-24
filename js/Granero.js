var Granero = (
	function () {
		function Granero(pdinero, pmaiz, pleche, pagua, ppasto, phuevos, palimento, ptocino) {
                  this.cantidadDinero = pdinero;
                  this.cantidadMaiz = pmaiz;
                  this.cantidadLeche = pleche;
                  this.cantidadAgua = pagua;
                  this.cantidadPasto = ppasto;
                  this.cantidadHuevos = phuevos;
                  this.cantidadAlimento = palimento;
                  this.cantidadTocino = ptocino;
		}
		//Class Methods
		Granero.prototype.reportarInventario = function () {
                  var mensaje = '<strong>Dinero: </strong>' + this.cantidadDinero + '<br>' + '<strong>Maíz: </strong>' + this.cantidadMaiz + '<br>' + '<strong>Leche: </strong>' + this.cantidadLeche + '<br>' + '<strong>Agua: </strong>' + this.cantidadAgua + '<br>' + '<strong>Pasto: </strong>' + this.cantidadPasto + '<br>' + '<strong>Huevos: </strong>' + this.cantidadHuevos + '<br>' + '<strong>Alimento: </strong>' + this.cantidadAlimento + '<br>' + '<strong>Tocino: </strong>' + this.cantidadTocino;

                  return mensaje;
		}

		return Granero;
	}
)();
