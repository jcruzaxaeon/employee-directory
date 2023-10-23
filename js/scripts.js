
/*
---------------------------------------------------------------------------------------------------
# Public API Requests                                                                              [//](#title) 
- scripts.js                                                                                       [//](#filename)
- main                                                                                             [//](#branch)
- Team Treehouse project for Unit 5                                                                [//](#description)
- axis                                                                                             [//](#author)
- seraeonic.com `git submodule`                                                                    [//](#detail)
- Team Treehouse Unit 5 Project                                                                    [//](#category)
- 5_tth-project / 5tthp                                                                            [//](#codename)*/



/*
Initialization and Global Variables
-------------------------------------------------------------------------------------------------*/

// Constants
const numOfUsers      = 12;
const nationality     ='us';
const randomUserURL   = `https://randomuser.me/api/?results=${numOfUsers}&nat=${nationality}`;

// Initializations
let iniUserAoO        = []; // Initial Array of User-Objects
let liveUserAoO       = []; // Filtered (by search) Array of User-Objects
let iniNameAoS        = []; // Array of User-Name Strings
let iniState          = true;

/** 
 * Global index value of data for modal-window
 * @param {number} gIndex
 */
let gIndex            = 0; // Global index

/*
Initial Element Declarations
- (!!!) *`m-m`*: `.getElementsByClassName()[]`; method returns a collection*/
const searchDiv       = document.getElementsByClassName('search-container')[0];
const galleryDiv      = document.getElementById('gallery');
const bodyElem        = document.getElementsByTagName('body')[0];

// Static HTML Update
const formHTML = `
<form action="#" method="get">
   <input type="search" id="search-input" class="search-input" placeholder="Search...">
   <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>
`;
searchDiv.insertAdjacentHTML('beforeend', formHTML);

// Follow-Up Element Declarations
const searchForm      = document.getElementsByTagName('form')[0];





/**
 * ## Fetch Request
 * - (!!!) Promise-chain similar to *`guard-clause`* technique
 */
//-------------------------------------------------------------------------------------------------
fetch(randomUserURL)
   .then( response => response.json() )
   .then( dat => {
      iniUserAoO = dat.results;
      embedHTML(iniUserAoO);
   })
   .catch( err => {
      const errHTML = `
         <h2>Ecountered Commuication Error</h2>
         <p><strong>Error Message:</strong> ${err}</p>
      `;
      galleryDiv.insertAdjacentHTML('afterend', errHTML);
});





/**
 * ## embedHTML(array of user-objects)
 * - Display Set of Users in `userAoO`
 * - Set, embed HTML for provided array of user-objects
 * @param {Array.Object} userAoO - Contains set of users to be displayed
 */
//-------------------------------------------------------------------------------------------------
function embedHTML(userAoO) {
   let galleryHTML = '';
   let ua = liveUserAoO = userAoO; //(***) Sometimes assigns liveUserAoO to itself

   /*
   Write, Embed HTML
   (!!!)Classlist index-value re-indexed on every embedHTML()-call */
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

      if(iniState === true) iniNameAoS.push(`${ua[i].name.first} ${ua[i].name.last}`.toLowerCase());
   }

   iniState = false;
   galleryDiv.insertAdjacentHTML('beforeend', galleryHTML);
}





/**
 * ## User Details: Modal-Window Event-Listener
 * - (!!!) Guard-clause implementation
 * @param {clickEvent} e - Click registered within <body>
 */
//-------------------------------------------------------------------------------------------------
bodyElem.addEventListener('click', e => {

   let stepDirection    = 0;

   if(e.target.classList.contains('clickable')) {
      setGlobalIndex(e, 'card'); 
      loadModal(gIndex);
   }

   // Check for click on close-button elements
   if( e.target.classList.contains('close') )
      document.getElementsByClassName('modal-container')[0].remove();

   // Handle modal-toggle buttons (prev, next)
   if( e.target.classList.contains('modal-prev') ) stepDirection = -1;
   if( e.target.classList.contains('modal-next') ) stepDirection = 1;

   // Recalculate gIndex
   gIndex = gIndex + stepDirection;
   if( gIndex < 0 ) gIndex = liveUserAoO.length-1;
   if( gIndex > liveUserAoO.length-1 ) gIndex = 0;
   
   // On modal-toggle-click, reset modal
   if( stepDirection !== 0) {
      document.getElementsByClassName('modal-container')[0].remove();
      loadModal(gIndex);
   }
});





/**
 * ## setGlobalIndex(clickEvent, string)
 * - Set global index on click inside click-target-area with internal hierarchy
 * - `containerName` as lead classname ( e.g. .classList[0] ) pseudo-sets click-area boundary
 * @param {clickEvent} click - (clickEvent)
 * @param {string} containerName - (string) Class codename to id parent-container of ALL clickables
 */
//-------------------------------------------------------------------------------------------------
function setGlobalIndex (click, containerName) {
   let elemArr      = [];
   let classlistAoS = [].slice.call(click.target.classList); // Array of Class-Strings

   // Find index of click-target-area parent-element
   for(i=0, elemArr.push(click.target); classlistAoS[0]!==containerName && i<numOfUsers; i++) { 
      elemArr.push(elemArr[i].parentNode);
      classlistAoS = [].slice.call(elemArr[i+1].classList);
   }
   gIndex = Number(classlistAoS[classlistAoS.length-1]); // Note: Index wrt displayed list
}





/**
 * ## loadModal(index)
 * - Loads modal window
 * @param {integer} index - (integer) liveList index; index of (displayed / filtered) list
 */
//-------------------------------------------------------------------------------------------------
function loadModal(index) {
   let year = '';
   let month = '';
   let day = '';

   // Local Variable Codenames (used to keep lines short)
   let ua = liveUserAoO[index];
   const name = `${ua.name.title} ${ua.name.first} ${ua.name.last}`;
   const loc = ua.location;
   const addr = `${loc.street.number} ${loc.street.name}, ${loc.city}, ${loc.state} ${loc.postcode}`;
   
   // Extract date-values character-by-character
   for(i=0; i<4; i++) year  += [...ua.dob.date][i];
   for(i=5; i<7; i++) month += [...ua.dob.date][i];
   for(i=8; i<10; i++) day  += [...ua.dob.date][i];

   // Write, Embed Modal
   let modalHTML = `
      <div class="modal-container ${index}">
         <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn close">
               <strong class="close">X</strong>
            </button>
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
         <!-- IMPORTANT: Below is only for exceeds tasks -->
         <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn step">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn step">Next</button>
         </div>
      </div>
   `;
   galleryDiv.insertAdjacentHTML('afterend', modalHTML);
}





/**
 * ## Search Form Event-Listener
 * - Form-Implementation using (form / search / submit) vs. Keyup-Implementation
 *    - *keyup-implementation*: searchTextbox.addEventListener('keyup', e => {});
 * @param {submitEvent} e - Search-form submit-event
 */
//-------------------------------------------------------------------------------------------------
searchForm.addEventListener('submit', e => {
   e.preventDefault();
   let indexArr  = [];
   let i         = 0;
   let k         = 0;
   //let j         = 0; // [test-code-1]: In case of infinite-loop during testing

   let substring = e.target.firstElementChild.value;
   let na        = iniNameAoS; // Full-set of names

   substring = substring.toLowerCase();

   // Restore initial user-set on an empty('') `submit`-event
   if(substring === '') {
      galleryDiv.innerHTML='';
      embedHTML(iniUserAoO);
      return;
   }

   // Search through full-set of names
   do {
      
      // Find index of the first name that includes substring
      i = na.findIndex( name => name.includes(substring) );

      if(i !== -1) {
         indexArr.push(k+i);
         na = na.slice(i+1);
         k=k+i+1;
      }
      //j++; [test-code-1]
   } while (i !== -1 /*&& j < numOfUsers*/); // [test-code-1]

   galleryDiv.innerHTML='';

   if(indexArr.length >= 1) {
      liveUserAoO = [];
      for(i=0; i<indexArr.length; i++) {
         liveUserAoO.push( iniUserAoO[indexArr[i]] );
      }
      embedHTML(liveUserAoO);
   } 
});





const searchTextbox = document.querySelector('#search-input');

/**
 * Search Textbox Event-Listener
 * @param {searchEvent} e - Search-event at search-textbox
 */
//-------------------------------------------------------------------------------------------------
searchTextbox.addEventListener('search', e => {
   if(e.target.value === '') {
      galleryDiv.innerHTML='';
      embedHTML(iniUserAoO);
   }
});





/**
 * ## Search Textbox Event-Listener for Backspace-Key
 * - Reset live-list when backspaceing to clear input
 * @param {keyupEvent} e - Keyup-event at search-textbox
 */
//-------------------------------------------------------------------------------------------------
searchTextbox.addEventListener('keyup', e => {
   if( e.key === 'Backspace' && e.target.value === '') {
      galleryDiv.innerHTML='';
      embedHTML(iniUserAoO);
   }
});





/**
 * ## clog(any)
 * - `console.log()` Shorthand
 * @param {any} x - Any single item to watch on console
 */
//-------------------------------------------------------------------------------------------------
function clog(x) { console.log(x); }

