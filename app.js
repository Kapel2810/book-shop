
let booksList = []
let bookIdCounter = 0

let nameElement = document.getElementById('book-name')
let authorElement = document.getElementById('book-author')
let priceElement = document.getElementById('book-price')

let bookContainerElement = document.getElementById('books-container')

const addNewBook = () => {

    //condition when on of the inputs is invalid or empty
    if (nameElement.value === " " || authorElement.value === " ") {
        alert("Name or Author field is empty. Please try try again")
        return //stops the condition
    }

   //save to obj
    let newBook = {
        id: bookIdCounter++,
        name: nameElement.value,
        author: authorElement.value,
        price: Number(priceElement.value)
    }
    //add to arr
    booksList.push(newBook)
    console.log(booksList);

   //load the table
    loadBooks()

    //clean the input
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
            <th style="color:red;"> Delete: </th> 
        </tr>`


    for (let book of booksList) {
        table += `  <tr>
                        <td>${book.name}</td> 
                        <td>${book.author}</td> 
                        <td>${book.price}</td> 
                        <td>
                            <button onclick ="handleDeleteBookByID(${book.id})">x</button>
                        </td>
                    </tr>`
    }
    table += `</table>`

    bookContainerElement.innerHTML = table
}

const handleDeleteBookByID = (id) => {
    let filteredBookList = booksList.filter(el => el.id !== id)
    booksList = filteredBookList

    console.log(filteredBookList);
    loadBooks()
}
