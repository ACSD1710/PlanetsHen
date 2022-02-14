////// EVERYTHING WORK BUT I ONLY HAVE PROBLEM WITH REPLACE TABLES I CLICK BUTTON =>
////// => ITS SHOW FIRST TABLE WHEN I CLICK BUTTON NEXT HAVE TO SECOND TABLE REPLACE FIRST =>
////// =>AND WHEN TO CLICK PREVERIOUS BUTTON HAVE TO SHOW FIRST TABLE WICH REPLACE SECOND TABLE =>////
/////=> ONLY NEED ME CODE, FUNCITON... WHO REPLACE ELEMENT WITH DELETE PREVEUSLY ELEMENT///



let body = document.getElementsByTagName("body")[0];
let button = document.getElementById("button");
let table = document.createElement("table");
let tbody = document.createElement("tbody");
let thead = document.createElement("thead");
let buttonNext = document.getElementById("button1");
let buttonPriverius = document.getElementById("button2");
console.log(tbody);

function Planet(data) {
  this.name = data.name;
  this.population = data.population;
  this.climate = data.climate;
  this.gravity = data.gravity;
}
/////////////////////1////////////////////////////////
async function getPlanet() {
  try {
    let result = await fetch("https://swapi.dev/api/planets/?page=1");
    let universe = await result.json();
    let planets = universe.results;

    let filteredPlanets = [];
    for (const planet of planets) {
      const star = new Planet(planet);
      filteredPlanets.push(star);
    }

    return filteredPlanets;
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  }
}

//////////////////////////// 2 /////////////////////////////////////
async function getPlanet2() {
  try {
    let result = await fetch("https://swapi.dev/api/planets/?page=2");
    let universe = await result.json();
    let planets = universe.results;

    let filteredPlanets = [];
    for (const planet of planets) {
      const star = new Planet(planet);
      filteredPlanets.push(star);
    }

    return filteredPlanets;
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  }
}


button.addEventListener("click", async () => {
  let data = await getPlanet();
  button.style.display = "none";
  buttonPriverius.style.display = "none";
  data.forEach((x) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    td1.textContent = x.name;
    td2.textContent = x.population;
    td3.textContent = x.climate;
    td4.textContent = x.gravity;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    console.log(tr);
    tbody.appendChild(tr);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  body.appendChild(table);
});

buttonNext.addEventListener("click", async () => {
  let data = await getPlanet2();
  button.style.display = "none";
  buttonNext.style.display = "none";
  buttonPriverius.style.display = "inline";
  data.forEach((x) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    td1.textContent = x.name;
    td2.textContent = x.population;
    td3.textContent = x.climate;
    td4.textContent = x.gravity;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    console.log(tr);
    tbody.appendChild(tr);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  body.appendChild(table);
  table.replaceWith(table);
});

buttonPriverius.addEventListener("click", async () => {
  let data = await getPlanet();
  button.style.display = "none";
  buttonNext.style.display = "inline";
  buttonPriverius.style.display = "none";
  
  data.forEach((x) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    td1.textContent = x.name;
    td2.textContent = x.population;
    td3.textContent = x.climate;
    td4.textContent = x.gravity;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    console.log(tr);
    tbody.appendChild(tr);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  body.appendChild(table);
  table.replaceWith(table);
});
