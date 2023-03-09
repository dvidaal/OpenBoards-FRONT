# DATA

## DATA LAYER

- List of games
  - Name
  - Image
  - Description for the party
  - Number of players
  - Time
  - Day
- List of games
- isLoading (boolean)
- Error 404
- Error can't handle the request

## DATA MODIFICATIONS

- Create new game
- Modify a game
- Delete a game
- set isLoading
- unset isLoading

# COMPONENTS

## REDUX STORE

- Contains the list of games
- Contains the list of created games
- Contains the function to add a game
- Contains the function to modify a game
- Contains the function to delete a game

## UI REDUX STORE (UI STATE)

- Contains isLoading
- Contains Error 404
- Contains set isLoading function
- Contains unset isLoading function
- Contains the activate error function
- Contains the deactivate error function

## APP

## NAVIGATION

- Shows the navigation pages
- Receives the action from user to go to a page

## GAME LIST

- Shows the list of games
- Sends a game to Game Detail

## GAME DETAIL

- Receives a game
- Shows the game details

## GAME FORM

- Receives the function to create a game
- Receives the function to modify a game

## LAYOUT

- Shows the navigation bar

## HOME PAGE

- Shows the list of games

## LOADING PAGE

- Shows the loader depending on isLoading

## ERROR PAGE

- Shows the error when there is an error
