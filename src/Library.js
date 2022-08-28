function createLibrary(name){
  var myLibrary = {
    name: name,
    shelves:{
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return myLibrary
}

function addBook(library, book){
  var genre = book.genre
  if (genre === 'fantasy'){
    library.shelves.fantasy.push(book)
  }
  if (genre === 'fiction'){
    library.shelves.fiction.push(book)
  }
  if (genre === 'nonFiction'){
    library.shelves.nonFiction.push(book)
  }
}

function checkoutBook(library, bookTitle, bookGenre){
  // if (bookGenre == "fantasy") {
  //   //for loop through fantasy shelf checking the titles to see if the bookTitle is there, if it is remove that array index from the shelf
  // }
  //
  // if (bookGenre == "fiction") {
  //   //for loop through fiction shelf checking the titles to see if the bookTitle is there, if it is remove that array index from the shelf
  // }
  //
  // if (bookGenre == "nonFiction") {
  //   //for loop through nonFiction shelf checking the titles to see if the bookTitle is there, if it is remove that array index from the shelf if it is not there then do nothing
  // }
for (var i = 0; i < bookGenre.length; i++){
  
}


  if (library.shelves.fantasy.length && library.shelves.fantasy[0].title === bookTitle){
    library.shelves.fantasy.shift()
    return `You have now checked out Dracula from the Denver Public Library`
  }
  if (library.shelves.nonFiction.length && library.shelves.nonFiction[0].title === bookTitle){
    library.shelves.nonFiction.shift()
    return `You have now checked out Born a Crime from the Denver Public Library`
  }
  if (library.shelves.fiction.length && library.shelves.fiction[0].title === bookTitle ){
    library.shelves.fiction.shift()
    return `You have now checked out Pride and Prejudice from the Denver Public Library`
  }
  else{
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
  }
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
