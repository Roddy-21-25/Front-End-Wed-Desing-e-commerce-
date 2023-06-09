console.log("hola mundo")

// agregar un evento para cuando inicie la pagina
window.addEventListener('load', function () {

    // instancia de la libreria del carousel
    new Glider(
        //especificar a que lista de elemento le agregaremos el efecto carousel, atraves del nombre de la clase
        document.querySelector('.carousel__lista'), {
        // opciones que trae el constructor Glider para el carousel, para dispositivos moviles

        // fotos a mostrar por defecto de movil
        slidesToShow: 1,

        // foto a mostrar cuando se haga scroll de movil
        slidesToScroll: 1,

        // si se puede agarrar con el mouse
        draggable: true,

        // AQUI VA EL DIV DE INDICADORES QUE CREAMOS EN EL HTML
        dots: '.carousel__indicadores',

        // configurar los botones que creamos en el html atraves de las clases
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },

        // despues de esta parte vamos a configurar lo responsive
        responsive: [
            {
                // screens greater than >= 450px
                breakpoint: 450,
                settings: {
                    // despues de 450px de pantalla de la ventana, se mostraran: 
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }, {
                // screens greater than >= 800px
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }]
    }
    )
})


// este codigo es para darle funcionalidad al boton de ir a la tienda.
function redirectToShop() {
    window.location.href = "shop.html";
}


// esto es para la funcionalidad de los botones azules que dicen buy o buy now

// este es de la pagina que dice buy
function buyBtn(){
    window.location.href = "buy.html";
    alert("Has Comprado este producto, :) Tal vez no Llegue")
}

// este es del carusel de la home page
function buyBtn2(){
    window.location.href = "buy.html";
}