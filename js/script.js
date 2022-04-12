//CARDS
const cards = document.getElementById('cards')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const ubicacion = document.querySelector('.row').content
const productos =[]
const botones = document.getElementsByClassName("btn-compra")
const li = document.getElementById("listaCarrito")
const botonComprar = document.querySelector('.botonComprar')

//traer productos con fetch
const fetchData=async()=>{
    try{
        const res = await fetch("carrito.json")
        data = await res.json()
        pintarCards(data)
    }catch (error){
        console.log(error);
    }
}
document.addEventListener('DOMContentLoaded', e => { fetchData() });

//DIBUJAR PRODUCTOS EN EL HTML
const pintarCards=(data)=>{
    data.forEach(producto => {
        templateCard.querySelector("h4").textContent = producto.title
        templateCard.querySelector("p").textContent = producto.precio
        templateCard.querySelector("img").setAttribute("src", producto.thumbnailUrl)
        templateCard.querySelector(".btn").dataset.id = producto.id

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment);

//AGREGAR AL CARRITO
    for (let boton of botones){
        boton.addEventListener('click', (e) => {
          let info = e.target.attributes[1].nodeValue 
          let helado = (data.find((item)=>{
              return item.id==info;  
          }));
          
          productos.push(helado)
          guardarStorage(productos)

          //li.innerHTML = JSON.stringify(productos);
          
       for (let producto of productos) {
            li.innerHTML += `
            <div class="row shoppingCartItem">
                  <div class="col-6">
                      <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                          <img src=${producto.thumbnailUrl} class="shopping-cart-image">
                          <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${producto.title}</h6>
                      </div>
                  </div>
                  <div class="col-2">
                      <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                          <p class="item-price mb-0 shoppingCartItemPrice">${producto.precio}</p>
                      </div>
                  </div>
                  <div class="col-4">
                      <div
                          class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                          <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                              value="1">
                          <button class="btn btn-danger buttonDelete" type="button">Eliminar</button>
                      </div>
                  </div>
              </div>
            `
            console.log(producto) 
          }
          li.querySelector(".buttonDelete").addEventListener('click',removeShoppingCartItem)
        })
    }
}
botonComprar.addEventListener('click',() =>{
    swal({
        title: "Compra Realizada!",
        text: "Perfecto, tu pedido esta en camino!",
        icon: "success",
      });
})
function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
}

function guardarStorage(elemento) { localStorage.setItem('carrito', JSON.stringify(elemento)) }

function traerElementosStorage(){
    let coso = JSON.parse(localStorage.getItem('carrito'));        
    
}

