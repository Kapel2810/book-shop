
let booksList = []

let nameElement = document.getElementById('book-name')
let authorElement = document.getElementById('book-author')
let priceElement = document.getElementById('book-price')

let bookContainerElement = document.getElementById('books-container')

const addNewBook = () => {

    if (nameElement.value === " " || authorElement.value === " ") {
        alert("Name or Author field is empty. Please try try again")
        return
    }


    let newBook = {
        name: nameElement.value,
        author: authorElement.value,
        price: Number(priceElement.value)
    }
    booksList.push(newBook)
    //console.log(booksList);

    loadBooks()
    nameElement.value = " "
    authorElement.value=" "
    priceElement.value=" "
}

const loadBooks = () => {

    let table = `
    <table> 
        <tr>
            <th> Book Name: </th> 
            <th> Book Author: </th> 
            <th> Book Price: </th> 
        </tr>`


    for (let book of booksList) {
        table += `  <tr>
                        <td>${book.name}</td> 
                        <td>${book.author}</td> 
                        <td>${book.price}</td> 
                    </tr>`
    }
    table += `</table>`

    bookContainerElement.innerHTML = table
}
