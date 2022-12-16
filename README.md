# Recherche

A nerdy wordy game about finding rare synonyms, intended for English-speking lexicophiles.


[Find the game here](https://recherche-1.web.app/)
## Project description

Web application where you compete against friends to find the most obscure synonym of a given word within a timeframe. 

A word is presented, and each player writes synonyms to the given word. 

The players get points for each correct synonym based on how obscure it is (how infrequently it is used).

The player who wrote the most obscure word gets bonus points. 

After the time is up, the results are shown and a definition of the word is presented.

### Where we are now

We have deployed a first iteration of our game with all necessary functions for a single-player mode set.

The player can enter synonyms to the given word showed on screen and when the time is out points are
awarded for each correct synonym based on its rarity. 

This is done by fetching a random word from the WordAPI and then comparing all actual synonyms entered by the player
to their frequency in common English text.

### Our aim

We aim to make the game more enjoyable through better UX. For example, we intend to select more appropriate words for 
the random given word from the WordApi since these contain e.g. latin phrases and proper nouns.
We also intend to more clearly present which entered synonyms are actually correct or not, and sum the score up for comparison to other players. 

The biggest step is to add concurrent multiplayer versus mode. 

Other game modes like finding rhymes and antonyms, or speed rounds with only one word allowed, are possible additions.

These modes will be saved to a permanent leader board using the firebase realtime database. This will be presented
on a different page. Another page would contain the rules for the different game modes. 

## File structure (src)

`App.css` - Defines styles for our classes. 

`App.js` -  Renders the game within the `RecoilRoot`. Also defines routes to the different pages' URLs with React Route.

`index.css` - Defines styles for our classes.

`index.js` - Bootstraps our App within React.

### integration

**API**

`wordsApiCall.js` - Manages calls to WordsAPI. Requires `apiConfig.js`.

**Firebase**

`firebaseModel.js` - Initializes Firebase and our Realtime Database. Contains methods to edit the database. Requires `firebaseConfig.js`.

### model

`atoms.js` - Recoil handles our Application State from here.

`persistenceAtoms.js` : Contains those effects and atoms that are synced to persistence database.

### presenter

`aboutPresenter.js` - Passes props to `aboutView.js`.

`gamePresenter.js` - Wrapper for other sub-components and implements a third party component countdown timer `Countdown`.

`gameScorePresenter.js` - Passes props to `gameScoreView.js`.

`hamburgerMenuPresenter.js` - Renders `hamburgerMenuView.js`.

`highScorePresenter.js` - Passes props to`highScoreView.js`.

`loadingPresenter.js` - Renders `loadingView.js`.

`pageNotFoundPresenter.js` - Renders `pageNotFoundView.js`.

`rulesPresenter.js` - Passes props to `rulesView.js`.

`scoreBoardPresenter.js` - Passes props to `scoreBoardView.js`.

`startScreenPresenter.js` - Passes props to `startScreenView.js`.

`wordInputPresenter.js` - Passes props to `wordInputView.js`.


### utilities

`gameUtilities.js` - Utility methods concerning game logic.

`wordUtilities.js` - Utility methods concerning processing words.

### view

`aboutView.js` - Shows information about the game project and it's creators. 

`gameScoreView.js` - Shows the total score from the completed game.

`hamburgerMenuView.js` - Shows menu for navigation to the different pages' URLs.

`highScoreView.js` - Shows the all time high score.

`loadingView.js` - Temporary view that appears while we wait for other views to be rendered.

`PageNotFoundView.js` - Shows error page when user goes to a /path that doesn't exist

`rulesView.js` - Shows the rules of the game.

`scoreBoardView.js` - Shows our final score board. 

`startScreenView.js` - Shows the button that starts the game.

`wordInputView.js` - Shows the given word and takes input from user.

