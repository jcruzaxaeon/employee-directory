
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
let data;

const searchDiv     = document.getElementsByClassName('search-container')[0];                      //#(!!!) Note: method returns a collection
const galleryDiv    = document.getElementById('gallery');
const bodyElem      = document.getElementsByTagName('body')[0];
//const btn = document.querySelector('button');

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
   let galleryHTML = '';
   data = json.results;
   //console.log(data);

   for(let i=0; i<data.length; i++) {
      galleryHTML += `
      <div class="card clickable ${i}">
         <div class="card-img-container clickable">
            <img class="card-img clickable" src="${data[i].picture.large}" alt="profile picture">
         </div>
         <div class="card-info-container clickable">
            <h3 id="name" class="card-name cap clickable">${data[i].name.first} 
               ${data[i].name.last}</h3>
            <p class="card-text clickable">${data[i].email}</p>
            <p class="card-text cap clickable">${data[i].location.city}, 
               ${data[i].location.state}</p>
         </div>
      </div>
      `;
   }

   galleryDiv.insertAdjacentHTML('beforeend', galleryHTML);
}





/*
## User Details Modal-Window (Event Listener)
- [ ] create event listeners for each card?
----------------------------------------------------------------------------------------------100*/
//galleryDiv
bodyElem.addEventListener('click', e => {
   //classList.add("mystyle");

   let elemArr = [];
   let i, index = 0;
   const stop = 10; //In case of failing to find 'card' in for-loop
   
   elemArr.push(e.target);
   let classArr = [].slice.call(elemArr[0].classList);
   //var classArr = e.target.classList.toString();

   // Check for click on user-card
   if( elemArr[0].classList.contains('clickable') ) {
      let year = month = day ='';

      for( i=0; classArr[0]!='card' && i<stop; i++ ) { 
         elemArr.push(elemArr[i].parentNode);
         classArr = [].slice.call(elemArr[i+1].classList);
      }
      index = classArr[classArr.length-1];

      let dat = data[index];
      const name = `${dat.name.title} ${dat.name.first} ${dat.name.last}`;
      const loc = dat.location;
      const addr = `${loc.street.number} ${loc.street.name}, ${loc.city}, ${loc.state} ${loc.postcode}`;
      
      for(i=0; i<4; i++) year  += [...dat.dob.date][i];
      for(i=5; i<7; i++) month += [...dat.dob.date][i];
      for(i=8; i<10; i++) day  += [...dat.dob.date][i];

      let modalHTML = `
         <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn close"><strong class="close">X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${dat.picture.large}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${name}</h3>
                    <p class="modal-text">${dat.email}</p>
                    <p class="modal-text cap">${dat.location.city}</p>
                    <hr>
                    <p class="modal-text">${dat.phone}</p>
                    <p class="modal-text">${addr}</p>
                    <p class="modal-text">Birthday: ${month}/${day}/${year}</p>
                </div>
            </div>
            <!-- // IMPORTANT: Below is only for exceeds tasks 
            <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div> -->
         </div>
      `;

      galleryDiv.insertAdjacentHTML('afterend', modalHTML);
   }

   // Check for click on close-button elements
   if( e.target.classList.contains('close') )
      document.getElementsByClassName('modal-container')[0].remove();
});





