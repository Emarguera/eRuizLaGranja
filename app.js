window.addEventListener('load', init, false);

function init() {

    var animals = [];
    var currentAnimalSelected = null;

    var farm = new Granja(2000, 10, 10, 10, 50, 100, 100);
    var cowPrice = 100;
    var chickenPrice = 50;
    var pigPrice = 300;
    var duckPrice = 100;
    var horsePrice = 50;
    var catPrice = 15;
    var dogPrice = 25;
    var foodPrice = new Alimento().price;
    var grassPrice = new Pasto().price;
    var eggsPrice = new Huevos().price;
    var milkPrice = new Leche().price;
    var baconPrice = new Tocino().price;
    var cornPrice = new Maiz().price;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var respuesta = JSON.parse(xhttp.responseText);

            var objetoAnimal = respuesta.animales;

            for (var i = 0; i < objetoAnimal.length; i++) {
                switch (objetoAnimal[i].animalKind) {
                    case "vaca":
                        var nuevoAnimal = new Vaca(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadConsumoAlimento, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad, onAnimalCardClick);
                        animals.push(nuevoAnimal);
                        break;
                    case "gallina":
                        var nuevoAnimal = new Gallina(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadConsumoAlimento, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad, onAnimalCardClick);
                        animals.push(nuevoAnimal);
                        break;
                    case "pato":
                        var nuevoAnimal = new Pato(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadConsumoAlimento, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad, onAnimalCardClick);
                        animals.push(nuevoAnimal);
                        break;
                    case "cerdo":
                        var nuevoAnimal = new Cerdo(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadConsumoAlimento, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad, onAnimalCardClick);
                        animals.push(nuevoAnimal);
                        break;
                    case "caballo":
                        var nuevoAnimal = new Caballo(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadConsumoAlimento, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad, onAnimalCardClick);
                        animals.push(nuevoAnimal);
                        break;
                    case "perro":
                        var nuevoAnimal = new Perro(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadConsumoAlimento, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad, onAnimalCardClick);
                        animals.push(nuevoAnimal);
                        break;
                    case "gato":
                        var nuevoAnimal = new Gato(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadConsumoAlimento, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad, onAnimalCardClick);
                        animals.push(nuevoAnimal);
                }
            }
        }
    };

    xhttp.open("GET", "js/animal.json", false);
    xhttp.send();

    function update() {
        for (var i = 0; i < animals.length; i++) {
            animals[i].update();
            updateAnimalContainer();
        }
        window.requestAnimationFrame(update);
    }

    update();

    //Cargar informacion de la Granja

    var granjaDinero = document.getElementById('farmContainer_money');
    granjaDinero.innerHTML = "Dinero: " + "$" + farm.dinero;

    var granjaHuevos = document.getElementById('farmContainer_egg');
    granjaHuevos.innerHTML = "Huevos:" + farm.huevos;

    var granjaLeche = document.getElementById('farmContainer_milk');
    granjaLeche.innerHTML = "Leche:" + farm.leche;

    var granjaTocino = document.getElementById('farmContainer_bacon');
    granjaTocino.innerHTML = "Tocino:" + farm.tocino;

    var granjaMaiz = document.getElementById('farmContainer_corn');
    granjaMaiz.innerHTML = "Maiz: " + farm.maiz;

    var granjaAlimento = document.getElementById('farmContainer_food');
    granjaAlimento.innerHTML = "Alimento: " + farm.alimento;

    var granjaPasto = document.getElementById('farmContainer_grass');
    granjaPasto.innerHTML = "Pasto: " + farm.pasto;

    document.getElementById('comprarAnimal').addEventListener('click', btnBuyAnimals, false);
    document.getElementById('buyFood').addEventListener('click', btnBuyFood, false);
    document.getElementById('buyGrass').addEventListener('click', btnBuyGrass, false);
    document.getElementById('buyCorn').addEventListener('click', btnBuyCorn, false);
    document.getElementById('sellEgg').addEventListener('click', btnSellEgg, false);
    document.getElementById('sellMilk').addEventListener('click', btnSellMilk, false);
    document.getElementById('sellBacon').addEventListener('click', btnSellBacon, false);
    document.getElementById('comerBtn').addEventListener('click', comerBtnAction, false);
    document.getElementById('beberBtn').addEventListener('click', beberBtnAction, false);
    document.getElementById('producirBtn').addEventListener('click', producirBtnAction, false);
    document.getElementById('acariciarBtn').addEventListener('click', acariciarBtnAction, false);
    document.getElementById('recogerProductoBtn').addEventListener('click', recogerProductoBtnAction, false);

    var animalNombre = null;
    var animalEdad = null;
    var animalAltura = null;
    var animalPeso = null;
    var animalCapEstomago = null;
    var animalCapAgua = null;
    var animalCapAlimento = null;
    var animalTipoProduccion = null;
    var animalTipoProduccion = null;
    var animalFelicidad = null;
    var animalCapProduccion = null;

    //----------Cargar informacion Animal
    function onAnimalCardClick(event) {

        currentAnimalSelected = getAnimalByName(event.target);

        // console.log(currentAnimalSelected);
        if (currentAnimalSelected !== null) {
            animalNombre = window.document.getElementById('animalContainer_name');
            animalNombre.innerHTML = "Nombre: " + currentAnimalSelected.nombre;

            animalEdad = window.document.getElementById('animalContainer_age');
            animalEdad.innerHTML = "Edad: " + currentAnimalSelected.edad + " años";

            animalAltura = document.getElementById('animalContainer_height');
            animalAltura.innerHTML = "Altura: " + currentAnimalSelected.altura + " m";

            animalPeso = document.getElementById('animalContainer_weight');
            animalPeso.innerHTML = "Peso: " + currentAnimalSelected.peso + " kg";

            animalCapEstomago = document.getElementById('animalContainer_capStomage');
            animalCapEstomago.innerHTML = "Cap. de estomago: " + currentAnimalSelected.capacidadEstomago;

            animalCapAgua = document.getElementById('animalContainer_capWater');
            animalCapAgua.innerHTML = "Consumo de agua: " + currentAnimalSelected.capacidadConsumoAgua;

            animalCapAlimento = document.getElementById('animalContainer_capFood');
            animalCapAlimento.innerHTML = "Consumo de alimento: " + currentAnimalSelected.capacidadConsumoAlimento;

            animalCapProduccion = document.getElementById('animalContainer_capProduction');
            animalCapProduccion.innerHTML = "Cant. de producto: " + currentAnimalSelected.cantidadDeProducto;

            animalTipoProduccion = document.getElementById('animalContainer_kindProduction');
            animalTipoProduccion.innerHTML = "Tipo de Producción: " + currentAnimalSelected.tipoDeProduccion;

            animalFelicidad = document.getElementById('animalContainer_hapiness');
            animalFelicidad.innerHTML = "Felicidad: " + currentAnimalSelected.felicidad + "%";

            var btnProducir = document.getElementById('producirBtn');
            var btnRecoger = document.getElementById('recogerProductoBtn');
            var accionProducir = determinarProduccion(currentAnimalSelected.animalKind)

            if (accionProducir) {
                btnProducir.classList.add('btnProduccion');
                btnProducir.classList.remove('btnOcultar');
            } else {
                btnProducir.classList.remove('btnProduccion');
                btnProducir.classList.add('btnOcultar');
            }
        }
    }

    function updateAnimalContainer() {
        if (currentAnimalSelected !== null) {
            animalFelicidad.innerHTML = "Felicidad: " + currentAnimalSelected.felicidad + "%";
            animalCapProduccion.innerHTML = "Cant. de producto: " + currentAnimalSelected.cantidadDeProducto;
            animalCapAgua.innerHTML = "Cant. de agua: " + currentAnimalSelected.capacidadConsumoAgua;
            animalCapAlimento.innerHTML = "Consumo de alimento: " + currentAnimalSelected.capacidadConsumoAlimento;
            animalCapEstomago.innerHTML = "Cap. de estomago: " + currentAnimalSelected.capacidadEstomago;
            animalPeso.innerHTML = "Peso: " + currentAnimalSelected.peso + " kg";         
        }
    }

    function getAnimalByName(target) {

        var animal = null;

        for (var i = 0; i < animals.length; i++) {
            if (animals[i].nombre === target.id) {
                animal = animals[i];
            }
        }

        if (animal === null && target.parentElement !== null) {
            return getAnimalByName(target.parentElement);
        } else if (animal !== null) {
            return animal;
        } else {
            return null;
        }
    }

    function determinarProduccion(panimal) {
        var procesoProduccion = "";

        if (panimal === 'Vaca') {
            procesoProduccion = "Ordeñar";
        } else {
            if (panimal === 'Gallina' || panimal === 'Pato') {
                procesoProduccion = "Huevos";
            } else {
                if (panimal === 'Cerdo') {
                    procesoProduccion = "Tocino";
                }
            }
        }
        return procesoProduccion;
    }

    //----------Comprar Animales
    function btnBuyAnimals(panimal) {
        var newName = document.getElementById('nameAnimal');
        newName = newName.value.toUpperCase();

        var animalSelected = document.getElementById('AnimalSelected').value;

        var newAnimal,
            priceAnimal;

        if (newName == "" && newName !== panimal.nombre) {
            console.log('Pongale nombre');
        } else {
            switch (animalSelected) {
                case 'Vaca':
                    priceAnimal = cowPrice;
                    newAnimal = new Vaca(newName, 1, 1.5, 80, 40, 54, 85, 0, "Leche", 100, onAnimalCardClick);
                    break;
                case 'Gallina':
                    priceAnimal = chickenPrice;
                    newAnimal = new Gallina(newName, 2, 0.6, 70, 96, 54, 40, 0, "Huevos", 80, onAnimalCardClick);
                    break;
                case 'Pato':
                    priceAnimal = cowPrice;
                    newAnimal = new Pato(newName, 2, 1.0, 60, 96, 54, 35, 0, "Huevos", 70, onAnimalCardClick);
                    break;
                case 'Caballo':
                    priceAnimal = cowPrice;
                    newAnimal = new Caballo(newName, 5, 1.7, 30, 96, 54, 84, "No", 'Ninguna', 90, onAnimalCardClick);
                    break;
                case 'Cerdo':
                    priceAnimal = pigPrice;
                    newAnimal = new Cerdo(newName, 2, 1.4, 40, 96, 54, 90, 0, "Tocino", 90, onAnimalCardClick);
                    break;
                case 'Gato':
                    priceAnimal = catPrice;
                    newAnimal = new Gato(newName, 8, 0.6, 3, 96, 54, 28, "No", 'Ninguna', 100, onAnimalCardClick);
                    break;
                case 'Perro':
                    priceAnimal = dogPrice;
                    newAnimal = new Perro(newName, 15, 0.9, 6, 96, 54, 30, "No", 'Ninguna', 70, onAnimalCardClick);
                    break;
            }
            if (farm.dinero >= priceAnimal) {
                farm.dinero -= priceAnimal;
                animals.push(newAnimal);
                document.getElementById('farmContainer_money').innerHTML = "Dinero: " + "$" + farm.dinero;
                modal.style.display = "none";
                modalAnimal.style.display = "none";
            }
        }
    }

    function acariciarBtnAction(animals) {

        if (currentAnimalSelected !== null) {
            currentAnimalSelected.acariciar();
        }
    }

    function comerBtnAction(panimal) {

        var haComido = false;
        switch (currentAnimalSelected.animalKind) {
            case 'Vaca':
                if (farm.pasto >= currentAnimalSelected.cantComida) {
                    haComido = true;
                }
                break;
            case 'Cerdo':
                if (farm.alimento >= currentAnimalSelected.cantComida) {
                    haComido = true;
                }
                break;
            case 'Gallina':
                if (farm.maiz >= currentAnimalSelected.cantComida) {
                    haComido = true;
                }
                break;
            case 'Pato':
                if (farm.maiz >= currentAnimalSelected.cantComida) {
                    haComido = true;
                }
                break;
            case 'Caballo':
                if (farm.pasto >= currentAnimalSelected.cantComida) {
                    haComido = true;
                }
                break;
            case 'Gato':
                if (farm.alimento >= currentAnimalSelected.cantComida) {
                    haComido = true;
                }
                break;
            case 'Perro':
                if (farm.alimento >= currentAnimalSelected.cantComida) {
                    haComido = true;
                }
                break;
            default:
                break;
        }

        if (haComido) {
            if (currentAnimalSelected.animalKind == 'Vaca' | currentAnimalSelected.animalKind == 'Caballo' && currentAnimalSelected.capacidadEstomago != 0) {
                farm.pasto -= currentAnimalSelected.cantComida;
                document.getElementById('farmContainer_grass').innerHTML = "Pasto: " + farm.pasto;
                currentAnimalSelected.comer();

            }
            if (currentAnimalSelected.animalKind == 'Perro' | currentAnimalSelected.animalKind == 'Gato' | currentAnimalSelected.animalKind == 'Cerdo' && currentAnimalSelected.capacidadEstomago != 0) {
                farm.alimento -= currentAnimalSelected.cantComida;
                currentAnimalSelected.comer();
                document.getElementById('farmContainer_food').innerHTML = "Alimento: " + farm.alimento;
            }
            if (currentAnimalSelected.animalKind == 'Gallina' | currentAnimalSelected.animalKind == 'Pato' && currentAnimalSelected.capacidadEstomago != 0) {
                farm.maiz -= currentAnimalSelected.cantComida;
                currentAnimalSelected.comer();
                document.getElementById('farmContainer_corn').innerHTML = "Maiz: " + farm.maiz;
            }
        }
    }

    function beberBtnAction() {
        currentAnimalSelected.beber();
    }

    function btnBuyFood() {

        console.log(farm.alimento);
        if (farm.dinero >= foodPrice) {
            farm.dinero -= foodPrice;

            var cantAlimento = farm.alimento += 1;

            document.getElementById('farmContainer_food').innerHTML = "Alimento: " + cantAlimento;
            document.getElementById('farmContainer_money').innerHTML = "Dinero: " + "$" + farm.dinero;
            modal.style.display = "none";

        }
        if (farm.dinero < foodPrice) {
            console.log("No tiene dinero para comprar mas animales o alimentos");
        }
    }

    function btnBuyGrass() {
        //1. Validar la comprar = dinero para comprar el alimento
        console.log(farm.alimento);
        if (farm.dinero >= grassPrice) {
            farm.dinero -= grassPrice;

            var cantPasto = farm.pasto + 1;
            farm.pasto += 1

            document.getElementById('farmContainer_grass').innerHTML = "Pasto: " + cantPasto;
            document.getElementById('farmContainer_money').innerHTML = "Dinero: " + "$" + farm.dinero;
            modal.style.display = "none";

        }
        if (farm.dinero < grassPrice) {
            console.log("No tiene dinero para comprar mas animales o alimentos");
        };
    };

    function btnBuyCorn() {
        //1. Validar la comprar = dinero para comprar el alimento
        console.log(farm.alimento);
        if (farm.dinero >= cornPrice) {
            farm.dinero -= cornPrice;

            var cantMaiz = farm.maiz + 1;
            farm.maiz += 1

            document.getElementById('farmContainer_corn').innerHTML = "Maiz: " + cantMaiz;
            document.getElementById('farmContainer_money').innerHTML = "Dinero: " + "$" + farm.dinero;
            modal.style.display = "none";

        }
        if (farm.dinero < cornPrice) {
            console.log("No tiene dinero para comprar mas animales o alimentos");
        };
    }

    //------------Vender productos
    function btnSellEgg() {
        //1. Validar la comprar = dinero para vender huevos
        console.log(farm.huevos);
        if (farm.huevos != 0) {

            var cantHuevos = farm.huevos - 1;
            farm.huevos -= 1

            farm.dinero += eggsPrice;
            document.getElementById('farmContainer_egg').innerHTML = "Huevos: " + cantHuevos.toFixed(1);
            document.getElementById('farmContainer_money').innerHTML = "Dinero: " + "$" + farm.dinero;
            modals.style.display = "none";

        }
        if (farm.huevos == 0) {
            console.log("No tiene huevos para vender");
        };
    };

    function btnSellMilk() {
        //1. Validar la comprar = dinero para vender huevos
        console.log(farm.leche);
        if (farm.leche != 0) {

            var cantLeche = farm.leche - 1;
            farm.leche -= 1

            farm.dinero += milkPrice;
            document.getElementById('farmContainer_milk').innerHTML = "Leche: " + cantLeche.toFixed(1);
            document.getElementById('farmContainer_money').innerHTML = "Dinero: " + "$" + farm.dinero;
            modals.style.display = "none";

        }
        if (farm.leche == 0) {
            console.log("No tiene leche para vender");
        };
    };

    function btnSellBacon() {
        //1. Validar la comprar = dinero para vender huevos
        console.log(farm.tocino);
        if (farm.tocino != 0) {

            var cantTocino = farm.tocino - 1;
            farm.tocino -= 1

            farm.dinero += milkPrice;
            document.getElementById('farmContainer_bacon').innerHTML = "Tocino: " + cantTocino.toFixed(1);
            document.getElementById('farmContainer_money').innerHTML = "Dinero: " + "$" + farm.dinero;
            modals.style.display = "none";


        }
        if (farm.tocino == 0) {
            console.log("No tiene tocino para vender");
        }
    }

    function crearAnimalUI(panimal) {

    }

    function producirBtnAction() {
        currentAnimalSelected.producir();
    }

    function recogerProductoBtnAction() {

        if (currentAnimalSelected.animalKind == 'Vaca') {
            var resultProducto = farm.leche += currentAnimalSelected.cantidadDeProducto
            resultProducto = Math.round(resultProducto * 100) / 100;
            resultProducto.toFixed(2);

            granjaLeche.innerHTML = "Leche: " + resultProducto;

            currentAnimalSelected.cantidadDeProducto = 0;
            document.getElementById('animalContainer_capProduction').innerHTML = "Cant. de producto: " + currentAnimalSelected.cantidadDeProducto;

        }
        if (currentAnimalSelected.animalKind == 'Pato' | currentAnimalSelected.animalKind == 'Gallina') {
            granjaHuevos.innerHTML = "Huevos: " + Math.round(farm.huevos += currentAnimalSelected.cantidadDeProducto).toFixed(1);

            currentAnimalSelected.cantidadDeProducto = 0;
            document.getElementById('animalContainer_capProduction').innerHTML = "Cant. de producto: " + currentAnimalSelected.cantidadDeProducto;

        }
        if (currentAnimalSelected.animalKind == 'Cerdo') {
            granjaTocino.innerHTML = "Tocino: " + Math.round(farm.tocino += currentAnimalSelected.cantidadDeProducto).toFixed(1);;

            currentAnimalSelected.cantidadDeProducto = 0;
            document.getElementById('animalContainer_capProduction').innerHTML = "Cant. de producto: " + currentAnimalSelected.cantidadDeProducto;
        }
    }

    // Get the modalBuy
    var modal = document.getElementById('myModal');
    var btnB = document.getElementById("myBtn");
    var span = document.getElementsByClassName("closes")[0];

    btnB.onclick = function () {
        modal.style.display = "block";
        modal.style.backgroundColor = "rgba(0,0,0,0.7)";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    // Get the modalSell
    var modals = document.getElementById('myModalSell');
    var btnS = document.getElementById("myBtnSell");
    var spans = document.getElementsByClassName("close")[0];

    btnS.onclick = function () {
        modals.style.display = "block";
        modals.style.backgroundColor = "rgba(0,0,0,0.7)";
    };

    spans.onclick = function () {
        modals.style.display = "none";
    }

    //Get modal comprar animales
    var modalAnimal = document.getElementById('myModalbuyAnimals');
    var btnA = document.getElementById("btnBuyAnimals");
    var spanA = document.getElementsByClassName("closeA")[0];

    btnA.onclick = function () {
        modalAnimal.style.display = "block";
        modalAnimal.style.backgroundColor = "rgba(0,0,0,0.7)";
    };

    spanA.onclick = function () {
        modalAnimal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modals) {
            modals.style.display = "none";
        }
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == modalAnimal) {
            modalAnimal.style.display = "none"
        }
    }
}