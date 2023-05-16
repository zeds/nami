import data from './sp.json' assert { type: 'json' };
console.log(data);

// let name = data["squadName"];
// let home = data["homeTown"];
// const title = document.getElementById("header");
// const descript = document.querySelector("p");
// title.innerHTML = name;
// descript.innerHTML = home;

// async function populate() {

//   const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
//   const request = new Request(requestURL);

//   const response = await fetch(request);
//   const superHeroesText = await response.text();

//   const superHeroes = JSON.parse(superHeroesText);
//   populateHeader(superHeroes);
//   populateHeroes(superHeroes);

// }

function populateHeader(obj) {
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

function populateHeroes(obj) {
  const section = document.querySelector('section');
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = 'Superpowers:';

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement('li');
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

const output = document.querySelector("p");
// output.textContent = JSON.stringify(data);
populateHeader(data);
populateHeroes(data);

// populate();
  