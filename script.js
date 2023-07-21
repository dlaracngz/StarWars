const url = "https://swapi.dev/api/people/";

let favorites = [];
let data;
let pageCount = 0;
let pageSize = 10;

// Next butonuna Event handler ekle next tuşuna basılınca data'daki next'e getData fonksiyonunu çağırsın.

// Prev butonuna Event handler ekle prev tuşuna basılınca data'daki prev'e getData fonksiyonunu çağırsın.

async function getData(url) {
  const paginationNode = document.getElementById("pagination");
  const listDiv = document.getElementById("characters");

  const response = await fetch(url);
  data = await response.json();

  console.log(data);

  // Eğer previous null ise previous tuşu disable olsun.

  // Eğer next null ise next tuşu disable olsun.

  pageSize = data.count / pageSize;
  pageSize = Math.ceil(pageSize);

  // Geri Tuşunu Ekle
  for (let i = 0; i < pageSize; i++) {
    const liNode = document.createElement("li");
    const aNode = document.createElement("a");

    aNode.classList.add("list-item__link");
    aNode.innerHTML = i + 1;

    liNode.appendChild(aNode);
    paginationNode.appendChild(liNode);
  }
  // İleri Tuşunu Ekle

  for (const result of data.results) {
    const divNode = document.createElement("div");
    const textNode = document.createTextNode(result.name);
    divNode.innerHTML = textNode.textContent;
    divNode.classList.add("character-item");
    listDiv.appendChild(divNode);
  }
}

getData(url);
