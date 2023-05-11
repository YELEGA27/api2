let api = [];
let cardContainer = document.querySelector("#Cardcontainer");
let personajesConImagen = api.filter((personaje) => personaje.image !== "");


const Url = `https://hp-api.onrender.com/api/characters`;

async function obtenerDatos() {
  await fetch(Url)
    .then((datos) => datos.json())
    .then((datos) => api.push(...datos));

  console.log(api);
  imprimrCard(api);
}

let imprimrCard = (array) => {
  array.forEach((personaje) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div class="cars shadow-sm">
        <img class="mb-4" src=${personaje.image == "" ? "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2017/06/harry-potter-varita.jpg?fit=1200%2C675&quality=50&strip=all&ssl=1" : personaje.image}/>
        <h4 class="text-center">${personaje.name}</h4>
        <div class="card-body">
            <p class="text-center pb-3">
                <span class="fs-4">Casa</span>
                <br />
                <span class="fs-5">${personaje.house}</span>
            </p>
        </div>
        <div class="d-flex justify-content-center aling-items-center pb-5">
            <div class="btn-group">
                <button type="button" class=" fs-5 btn btn-sm btn-outline-dark">Ver mas</button>
            </div>
        </div>
      </div>
    `;
    cardContainer.appendChild(div);
  });
};

obtenerDatos();



