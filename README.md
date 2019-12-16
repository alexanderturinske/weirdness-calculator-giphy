Weirdness Calculator with GIPHY
======
**Weirdness Calculator with GIPHY** is a calculator for a user's weirdness based on GIFs. A user searches for GIFs from GIPHY and choooses ones they like. Once the user has favorited five GIFs, they can calculate their weirdness level!

## Usage
```bash
$ git clone https://github.com/alexanderturinske/weirdness-calculator-giphy
$ npm i
$ npm run start
```
## To Do
- Fix: Add more styling
- Fix: Do not allow more than one Like per search term
- Fix: Prompt user that only one Like per search term is allowed
- Fix: Disallow users to navigate to `/results` page if the user has not favorited five items
- Fix: Do not allow users to Like more than five items at a time
- Fix: When moving slider, the area for gif increases/decreases; add filler to prevent this
- Fix: As the user adds more gifs, scrolling is initiated and pushed search results area down
- Improv: Fix broken tests
- Improv: Add more tests
- Improv: This was created using react-boilerplate, which is good because the webpack settings were made by people who know more about it than I do, but I should audit the app and remove unnecessary portions of it
- Improv: Add error handling and states
- Improv: Add loading indicators for slower connections
- Improv: Add input validation for the search
- Improv: Prevent duplicate GIFs from showing up, if possible
