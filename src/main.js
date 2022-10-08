import data from '../data.json' assert { type: "json" };
const suculents = data.suculents;

const container = document.getElementById("container")
// const list1 = suculents1.map((product) => `${product.name}`)
// const list2 = suculents1.map((product) => `${product.price}`)
// list.innerHTML = `${list1}`+`${list2}`

const listSuculents = suculents.map((product) => {
    return (product = `<div id="table-products">
    <div id="card" class="card h-100">
    <img class="card-img-top" src=${product.img}></img>
    <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <div class="card-footer">
    <small class="text-muted">Imagen de <a href="www.clara.es">www.clara.es</a></small>
    </div>
    </div>
    </div>
    </div>
    </div>`)
})

container.innerHTML = `${listSuculents}`