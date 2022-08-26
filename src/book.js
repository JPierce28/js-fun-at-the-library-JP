function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns){
  return{
     name: name,
     age: age,
     pronouns: pronouns
   }
}
function saveReview(statement, listOfReviews){
  if (listOfReviews.includes(statement) === false){
    return listOfReviews.push(statement)
  }
}

function calculatePageCount(title){
  return title.length * 20
}

function writeBook(bookTitle, bookCharacter, genre){
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: bookTitle.length * 20,
    genre: genre
  }
}

function editBook(book){
  book.pageCount = book.pageCount * .75
  return book
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
