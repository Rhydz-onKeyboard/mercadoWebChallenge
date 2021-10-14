const toggleMenu = () => {
    const menuToggle = document.querySelector('.butn');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

};

//Funcion para obtener nombre del producto, el nombre lo envio por el metodo post al backend para hacer el arreglo del carrito de compras
const postItemCart = async (productoHtml) => {
    const producto = productoHtml;
    //console.log(producto);
    const addItem = await fetch(`http://localhost:3000/${ producto }`, {
        method: 'POST'
    });
    console.log(addItem.statusText)
};

const getCart = async () => {
    const item = await fetch(`http://localhost:3000/carrito`);
}



