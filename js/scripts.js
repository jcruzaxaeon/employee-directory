
/*
------------------------------------------------------------------------------------------------100
# Public API Requests                                                                              [//](#title)
- scripts.js                                                                                       [//](#filename)
- main                                                                                             [//](#branch)
- Team Treehouse project for Unit 5                                                                [//](#description)
- axis                                                                                             [//](#author)
- seraeonic.com `git submodule`                                                                    [//](#detail)
- Team Treehouse Unit 5 Project                                                                    [//](#category)
- 5_tth-project                                                                                    [//](#codename)
*/





/*
## Global Variables 
----------------------------------------------------------------------------------------------100*/
const numOfUsers = 12;
const randomUserURL = `https://randomuser.me/api/?results=${numOfUsers}`;

const searchDiv  = document.getElementsByClassName('search-container')[0];                          //#(!!!) Note: method returns a collection
const galleryDiv = document.getElementById('gallery');

const formHTML = `
<form action="#" method="get">
   <input type="search" id="search-input" class="search-input" placeholder="Search...">
   <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>
`;

/*
const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');
let iFailed = 0;
let lostAstros = [];
let errHTML = ';
//const list = getJSON(astrosUrl);
*/





/*
## Static HTML Update
----------------------------------------------------------------------------------------------100*/
searchDiv.insertAdjacentHTML('beforeend', formHTML);





/*
## Fetch Request
----------------------------------------------------------------------------------------------100*/
// Promise-chain is the equivalent of the *`guard-clause`* conditional-statement technique
fetch(randomUserURL)
   .then( response => response.json() )
   .then( generateHTML );




/*
## Dynamic HTML Update
----------------------------------------------------------------------------------------------100*/
function generateHTML(json) {
   let   galleryHTML = '';
   const data = json.results;
   console.log(data);

   for(let i=0; i<data.length; i++) {
      galleryHTML += `
      <div class="card">
         <div class="card-img-container">
            <img class="card-img" src="${data[i].picture.large}" alt="profile picture">
         </div>
         <div class="card-info-container">
            <h3 id="name" class="card-name cap">${data[i].name.title} ${data[i].name.first} 
               ${data[i].name.last}</h3>
            <p class="card-text">${data[i].email}</p>
            <p class="card-text cap">${data[i].location.city}, ${data[i].location.state}</p>
         </div>
      </div>
      `;
   }

   galleryDiv.insertAdjacentHTML('beforeend', galleryHTML);
}