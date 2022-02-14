const root = document.getElementById('root');
const buttonStart = document.getElementById('button-start');
const buttonNext = document.getElementById('button-next');
const buttonPrev = document.getElementById('button-prev');

currentPage = 1;

function Planet(data) {
  this.name = data.name;
  this.population = data.population;
  this.climate = data.climate;
  this.gravity = data.gravity;
}

async function fetchData(page = 1) {
  try {
    const usePage = page < 1 ? 1 : page;
    const result = await fetch('https://swapi.dev/api/planets/?page=' + usePage);
    const universe = await result.json();
    const planets = universe.results;
    const filteredPlanets = [];

    for (const planet of planets) {
      const star = new Planet(planet);

      filteredPlanets.push(star);
    }

    return filteredPlanets;
  } catch (error) {
      console.log(`Something went wrong ${error}`);
  }
}

function renderData(data = []) {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  const thead = document.createElement('thead');

  data.forEach(planet => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    td1.textContent = planet.name;
    td2.textContent = planet.population;
    td3.textContent = planet.climate;
    td4.textContent = planet.gravity;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  root.innerHTML = null;
  root.appendChild(table);
}

buttonStart.addEventListener('click', async () => {
  const data = await fetchData(currentPage);
  
  buttonStart.style.display = 'none';
  renderData(data);
});

buttonNext.addEventListener('click', async () => {
  const data = await fetchData(++currentPage);

  renderData(data);
});

buttonPrev.addEventListener('click', async () => {
  const data = await fetchData(--currentPage);

  renderData(data);
});
