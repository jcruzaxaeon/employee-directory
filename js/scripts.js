

/*
# Public API Requests                                                                              [//](#title) 
---------------------------------------------------------------------------------------------------
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
const numOfUsers    = 12;
const nationality   ='us';
const randomUserURL = `https://randomuser.me/api/?results=${numOfUsers}&nat=${nationality}`;

// Initializations
let initialUserArr = [];
let filteredUserArr = [];
let nameArr = [];
let iniState = true;

const searchDiv     = document.getElementsByClassName('search-container')[0];                      //#(!!!) Note: method returns a collection
const galleryDiv    = document.getElementById('gallery');
const bodyElem      = document.getElementsByTagName('body')[0];

const formHTML = `
<form action="#" method="get">
   <input type="search" id="search-input" class="search-input" placeholder="Search...">
   <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>
`;

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
   .then( dat => {
      initialUserArr = dat.results;
      generateHTML(initialUserArr);
   });

/*
## Dynamic HTML Update
----------------------------------------------------------------------------------------------100*/
function generateHTML(userArr) {
   let galleryHTML = '';

   ua = filteredUserArr = userArr;

   for(let i=0; i<ua.length; i++) {
      galleryHTML += `
      <div class="card clickable ${i}">
         <div class="card-img-container clickable">
            <img class="card-img clickable" src="${ua[i].picture.large}" alt="profile picture">
         </div>
         <div class="card-info-container clickable">
            <h3 id="name" class="card-name cap clickable">${ua[i].name.first} 
               ${ua[i].name.last}</h3>
            <p class="card-text clickable">${ua[i].email}</p>
            <p class="card-text cap clickable">${ua[i].location.city}, 
               ${ua[i].location.state}</p>
         </div>
      </div>
      `;

      if(iniState === true) nameArr.push(`${ua[i].name.first} ${ua[i].name.last}`.toLowerCase());
   }

   iniState = false;
   galleryDiv.insertAdjacentHTML('beforeend', galleryHTML);
}

/*
## User Details Modal-Window (Event Listener)
---------------------------------------------------------------------------------------------------
*/
bodyElem.addEventListener('click', e => {

   let elemArr = [];
   let i, index = 0;
   
   elemArr.push(e.target);
   let classArr = [].slice.call(elemArr[0].classList);

   // Check for click on user-card
   if( elemArr[0].classList.contains('clickable') ) {
      let year = month = day ='';

      for( i=0; classArr[0]!='card' && i<numOfUsers; i++ ) { 
         elemArr.push(elemArr[i].parentNode);
         classArr = [].slice.call(elemArr[i+1].classList);
      }
      index = classArr[classArr.length-1];

      let ua = filteredUserArr[index];
      const name = `${ua.name.title} ${ua.name.first} ${ua.name.last}`;
      const loc = ua.location;
      const addr = `${loc.street.number} ${loc.street.name}, ${loc.city}, ${loc.state} ${loc.postcode}`;
      
      for(i=0; i<4; i++) year  += [...ua.dob.date][i];
      for(i=5; i<7; i++) month += [...ua.dob.date][i];
      for(i=8; i<10; i++) day  += [...ua.dob.date][i];

      let modalHTML = `
         <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn close"><strong class="close">X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${ua.picture.large}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${name}</h3>
                    <p class="modal-text">${ua.email}</p>
                    <p class="modal-text cap">${ua.location.city}</p>
                    <hr>
                    <p class="modal-text">${ua.phone}</p>
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

/*
## Search Function
- Form implementation
   - *`form`*: <form>
   - *`search`*: <input type='search'>
   - *`submit`*: <input type='submit'> 
---------------------------------------------------------------------------------------------------
*/
const searchForm = document.getElementsByTagName('form')[0];

searchForm.addEventListener('submit', e => {
   e.preventDefault();

   let substring = e.target.firstElementChild.value;
   let na = nameArr;
   let indexArr = [];
   let temp = [];
   let i, j, k;
   i = j = k = 0;

   substring = substring.toLowerCase();

   do {
      i = na.findIndex( x => x.includes(substring) );

      if(i !== -1 && substring !== '') {
         temp.push(na[i]);
         indexArr.push(i+k);
         na = na.slice(i+1);
         k=i+k+1;
      }
      j++;
   } while (i !== -1 && j < numOfUsers);

   galleryDiv.innerHTML='';

   if(indexArr.length >= 1) {
      filteredUserArr = [];
      for(i=0; i<indexArr.length; i++) {
         filteredUserArr.push( initialUserArr[indexArr[i]] );
      }
      generateHTML(filteredUserArr);
   } 
   
   // Restore initial user array on an empty('') `submit`-event
   else if(substring === '') {
      galleryDiv.innerHTML='';
      generateHTML(initialUserArr);
   }
});

const searchTextbox = document.querySelector('#search-input');

searchTextbox.addEventListener('search', e => {
   if(e.target.value === '') {
      galleryDiv.innerHTML='';
      generateHTML(initialUserArr);
   }
});

searchTextbox.addEventListener('keyup', e => {
   if( e.key === 'Backspace' && e.target.value === '') {
      galleryDiv.innerHTML='';
      generateHTML(initialUserArr);
   }
});

/*
# Helper Functions
*/
function clog(x) { console.log(x); }





/*
## Search Function
- `keyup` implementation
---------------------------------------------------------------------------------------------------
*/
/*
searchTextbox.addEventListener('keyup', e => {

   let na = nameArr;
   let indexArr = [];
   let temp = [];
   let i = 0;
   let j = 0;
   let k = 0;

   if( e.key === 'Backspace' && e.target.value === '') {
      galleryDiv.innerHTML='';
      generateHTML(initialUserArr);
   }

   if(e.key === 'Enter') {
      do {
         i = na.findIndex( x => x.includes(e.target.value) );
         //l(i);
         if(i !== -1) {
            temp.push(na[i]);
            indexArr.push(i+k);
            na = na.slice(i+1);
            //l(na);
            k=i+k+1;
         }
         j++;
      } while (i !== -1 && j < numOfUsers);
      //l(temp);
      l(indexArr);
      galleryDiv.innerHTML='';
   
      if(indexArr.length >= 1) {
         filteredUserArr = [];
         for(i=0; i<indexArr.length; i++) {
            filteredUserArr.push( initialUserArr[indexArr[i]] );
         }
         generateHTML(filteredUserArr);
      }
   }
*/