function shelfBook(title, shelf){
  if (shelf.length < 3){
  return shelf.unshift(title)
  }
}

function unshelfBook(bookTitle, sciFiShelf){
  for (var i = 0; i < sciFiShelf.length; i++){
    if (sciFiShelf[i].title === bookTitle){
      sciFiShelf.splice(i, 1)
    }
  }
}

function listTitles(fantasyShelf){
  for (var i = 0; i < fantasyShelf.length; i++){
    return `${fantasyShelf[0].title}, ${fantasyShelf[1].title}, ${fantasyShelf[2].title}`
  }
}

function searchShelf(sciFiShelf, bookTitle){
  if (!sciFiShelf.length) return false
  for (var i = 0; i < sciFiShelf.length; i++){
    if (sciFiShelf[i].title === bookTitle){
      //if we ever find the title then we return true
      return true
    }
  }
  //if we looped through the entire array and didn't find the title then we want to retutrn false
  return false
}

module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
   searchShelf
};
