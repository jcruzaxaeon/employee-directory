

---------------------------------------------------------------------------------------------------
# Public API Requests                                                                              [//](#title)
- readme.md                                                                                        [//](#filename)
- main                                                                                             [//](#branch)
- Team Treehouse project for Unit 5                                                                [//](#description)
- axis                                                                                             [//](#author)
- seraeonic.com `git submodule`                                                                    [//](#detail)
- Team Treehouse Unit 5 Project                                                                    [//](#category)
- 5_tth-project / 5tthp                                                                            [//](#codename)

---------------------------------------------------------------------------------------------------
## Table of Contents
1. [Notable](#notable)
1. [Externalities](#externalities)
1. [Devlog](#devlog)
1. [Reference](#reference)
1. [Task Roster](#task-roster)

---------------------------------------------------------------------------------------------------
## Notable
- Changed the font-schema to meet `Exceeds Expectations` criteria.  See commit-description below:
```
### modify font schema
   - [x] add `Seaford`, and `Hadassah Friedlaender` true-type fonts to CSS
   - [x] add and link associated `.ttf`-files
   - [x] find changes to CSS with `Ctrl-F`: EEC
```

[ToC](#table-of-contents)

---------------------------------------------------------------------------------------------------
## Externalities
- [ ] (???) should i test, extract, and reformat `phone` if failure? ask tth-staff.
- [ ] Add font change to "project submission notes"
- [ ] Develop testing workflow <= correct set of bugs in a single-refactor commit

[ToC](#table-of-contents)

---------------------------------------------------------------------------------------------------
## Devlog

- October 23, 2023
   - add light JSDoc comments                                                                      [//](#commit-description)
   - fix comment error in modalHTML                                                                [//](#commit-description)
   - remove unused index var (j) from search-listener                                              [//](#commit-description)
   - refactor 0                                                                                    [//](#commit-description)

- October 21, 2023
   - correct link-font
      - [x] add `<a>`-element to CSS-file
      - [x] set font from schema
   - modify font schema, handle fetch errors                                                       [//](#commit-description)
      - [x] add `Seaford`, and `Hadassah Friedlaender` true-type fonts to CSS
      - [x] add and link associated `.ttf`-files
      - [x] find changes to CSS with `Ctrl-F`: ECC
      - [x] add `.catch( err => {})` to `fetch()` promise-chain
   - step-through employee modal-windows                                                           [//](#commit-description)
      - [x] cycle through employee modal-windows by clicking (`prev`, `next`)-buttons
   - implement search                                                                              [//](#commit-description)
      - [x] implement `form`-search on (`submit` / `search`)-events

- October 20, 2023
   - fix phone format                                                                              [//](#commit-description)
      - [x] filtering for nationality as url/nat=us returns phone numbers in the requested format

- October 19, 2023
   - add modal window                                                                              [//](#commit-description)
      - [x] create modal-like window on card-click displaying user details
      - [x] 'close' modal-like window on close-button-click
   - api-request 12 users, display                                                                 [//](#commit-description)
      - [x] initialize `js/scripts.js`                                                                   
      - [x] make a *single* API request to `randomuser.me/` for `12`-users
      - [x] display: (1) image, (2) first and last name, (3) email, (4) city or location

- October 17, 2023
   - staging                                                                                     
      - [x] stage default project-files from TTH                                                      [//](#commit-description)
         - `index.html`
         - `styles.css`
         - `normalize.css`
      - [x] stage project (onto `seraeonic.com`): html, git                                           [//](#commit-description)

[ToC](#table-of-contents)

---------------------------------------------------------------------------------------------------
## Reference Section

### Reference Table:
| Code         | Description                      |
| ------------ | -------------------------------- |
| `TTH`        | Team Treehouse (Code Academy)    |

[ToC](#table-of-contents)

---------------------------------------------------------------------------------------------------
## Task Roster
- [x] complete refactor-1
   - [x] add 2-spaces to EoFs for proper Linux display with `$ cat {filename}.md`
   - [x] refactor JSDoc comments in `script.js`

[ToC](#table-of-contents)

