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

//pintar productos
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

    const productos =[]
    const botones = document.getElementsByClassName("btn-compra")
    const li = document.getElementById("listaCarrito")
    
    for (let boton of botones){
        boton.addEventListener('click', (e) => {
          let info = e.target.attributes[1].nodeValue 
          let helado = (data.find((item)=>{
              return item.id==info;  
          }));
          productos.push(helado)

          //Funcion de guardar en storage dentro de la iteracion al evento click de agregar al carrito para que actualice el carrito
          guardarStorage(productos)


          li.innerHTML = JSON.stringify(productos);
          for (let producto of productos) {
            li.innerHTML = `
            <li class="loquesea">
                <p>${producto.title}</p>
                <p>Precio: ${producto.precio}</p>
                <img src="${producto.thumbnailUrl}/>"
            </li>
            `
            console.log(producto) 
          }
        })
    }


}

function guardarStorage(elemento) { localStorage.setItem('carrito', JSON.stringify(elemento)) }

function traerElementosStorage(){
    let coso = JSON.parse(localStorage.getItem('carrito'));        
    
}

