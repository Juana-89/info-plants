import data from '../data.json' assert { type: "json" };
const suculents = data.suculents;

const container = document.getElementById("container")
const listSuculents = suculents.map((product) => {
    return (product = `
    <div class="col">
    <div class="card shadow-sm" id=${product.id}>
    <img class="card-img-top" height="420em" src=${product.img} alt=${product.name}/>
    <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <div class="card-footer">
    <small class="text-muted">Imagen e info de <a href="www.clara.es">www.clara.es</a></small>
    </div>
    </div>
    </div>
    </div>`)
}).flat().join('')

container.innerHTML = `${listSuculents}`