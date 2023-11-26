


# Employee Directory

## Readme
- Team Treehouse Project: Unit-5
- https://github.com/jcruzaxaeon/employee-directory.git
- Request 12 "users" from public API (randomuser.me)
- API Data > JSON > Array-of-Objects
- Display grid of user-summaries
- Show details on user-summary-click
- Implement search-for-name function

## Lead Task Roster
- [ ] Art-direct email-display for user-summary in mobile-view.  Most emails overflow.

## Development
- JavaScript only (No HTML, CSS)
- Promise-chain. Similar to guard-clause conditionals
- fetch().then().catch()

## Deployment
- Central GitHub Repo
- WSL2 > Debian 10 > Linux CLI
- GreenGeeks Hosting

## Data
- `note`: Card-catalog update
- `detail`: git submodule for `axaeon.com`
- `code`: 5t
- `description`: Simple employee directory with name-search function
- `author`: jcruz
- `centralRepo`: https://github.com/jcruzaxaeon/employee-directory.git
- `branch`: main
- `org`: Team Treehouse
- `orgType`: Code Academy
- `certification`: Fullstack JavaScript Techdegree
- `lesson`: Unit Project 5
- `topics`: Public API requests
- `text`: Team Treehouse Unit Project 5.  Employee Directory.  Practice with public API requests.

<br>



## Table of Contents
1. [Externalities](#externalities)
1. [Task Roster](#task-roster)
1. [Devlog](#devlog)
1. [Reference](#reference)
1. [Text](#text)
1. [Archive](#archive)

<br>



## Externalities
- [ ] metaActions

[ToC](#table-of-contents)

<br>



## Task Roster
- [ ] Art-direct email-display for user-summary in mobile-view.  Most emails overflow.

[ToC](#table-of-contents)

<br>



## Devlog
- `unknownDate`
   - Changed the font-schema to meet `Exceeds Expectations` criteria.  See commit-description below:
   - modify font schema
      - [x] add `Seaford`, and `Hadassah Friedlaender` true-type fonts to CSS
      - [x] add and link associated `.ttf`-files
      - [x] find changes to CSS with `Ctrl-F`: EEC

- `October 23, 2023`
   - add light JSDoc comments                        
   - fix comment error in modalHTML                  
   - remove unused index var (j) from search-listener
   - refactor-0

- `October 21, 2023`
   - correct link-font
      - [x] add `<a>`-element to CSS-file
      - [x] set font from schema
   - modify font schema, handle fetch errors
      - [x] add `Seaford`, and `Hadassah Friedlaender` true-type fonts to CSS
      - [x] add and link associated `.ttf`-files
      - [x] find changes to CSS with `Ctrl-F`: ECC
      - [x] add `.catch( err => {})` to `fetch()` promise-chain
   - step-through employee modal-windows
      - [x] cycle through employee modal-windows by clicking (`prev`, `next`)-buttons
   - implement search
      - [x] implement `form`-search on (`submit` / `search`)-events

- `October 20, 2023`
   - fix phone format
      - [x] filtering for nationality as url/nat=us returns phone numbers in the requested format

- `October 19, 2023`
   - add modal window
      - [x] create modal-like window on card-click displaying user details
      - [x] 'close' modal-like window on close-button-click
   - api-request 12 users, display
      - [x] initialize `js/scripts.js`                                                                   
      - [x] make a *single* API request to `randomuser.me/` for `12`-users
      - [x] display: (1) image, (2) first and last name, (3) email, (4) city or location

- `October 17, 2023`
   - staging                                                                                     
      - [x] stage default project-files from TTH
         - `index.html`
         - `styles.css`
         - `normalize.css`
      - [x] stage project (onto `seraeonic.com`): html, git

[ToC](#table-of-contents)

<br>



## Reference

### Reference Table
| Code         | Description                      |
| ------------ | -------------------------------- |
| `TTH`        | Team Treehouse (Code Academy)    |

[ToC](#table-of-contents)

<br>



## Text

[ToC](#table-of-contents)

<br>



## Archive

## Task Roster
- [x] complete refactor-1
   - [x] add 2-spaces to EoFs for proper Linux display with `$ cat {filename}.md`
   - [x] refactor JSDoc comments in `script.js`

### Externalities
- [x] (???) should i test, extract, and reformat `phone` if failure? ask tth-staff.
- [x] Add font change to "project submission notes"
- [<] Develop testing workflow <= correct set of bugs in a single-refactor commit

### Notes
- Changed the font-schema to meet `Exceeds Expectations` criteria.  See commit-description below:
```
### modify font schema
   - [x] add `Seaford`, and `Hadassah Friedlaender` true-type fonts to CSS
   - [x] add and link associated `.ttf`-files
   - [x] find changes to CSS with `Ctrl-F`: EEC
```

