
//let bookIdCounter = 0

let nameElement = document.getElementById('book-name')
let authorElement = document.getElementById('book-author')
let priceElement = document.getElementById('book-price')

let bookContainerElement = document.getElementById('books-container')

const addNewBook = () => {

    //condition when one of the inputs is invalid or empty
    if (nameElement.value === " " || authorElement.value === " ") {
        alert("Name or Author field is empty. Please try try again")
        return //stops the condition
    }
  //изза того что в локал стор нужно сохранить с айди, а букайдикаунтер++  будет все время обновляться после сохранения, лучше всего использовать формулу рандом
    let newId = Math.floor(Math.random() *100000)

   //save to obj
    let newBook = {
        id: newId,
        name: nameElement.value,
        author: authorElement.value,
        price: Number(priceElement.value)
    }
    //когда проверили, что при загрузке массив в локал пустой, т0гда первый раз загружаем в новый массив в локал, при условии, что массив не пустой 
    //get from local storage

    let jsonArray = localStorage.getItem('books-list')
    booksList = JSON.parse(jsonArray)
    //если массив пустой нужно сделать новый массив
    if(booksList === null) {
        booksList = []
    }

    //add to arr
    booksList.push(newBook)
    //console.log(booksList);


    //set to local storage
    let toJson = JSON.stringify (booksList)
    localStorage.setItem('books-list', toJson)


   //load the table
    loadBooks()

    //clean the input
    nameElement.value = " "
    authorElement.value=" "
    priceElement.value=" "
}

const loadBooks = () => {
    // get from localstorage 
    let jsonArray = localStorage.getItem('books-list')
    //convert to js from json
    let booksList = JSON.parse(jsonArray)

 // check if array is empry, and if empty, don't load 
    if(booksList===null) {
        return
    }


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

    // get from local storage
    let jsonArray = localStorage.getItem('books-list')
    booksList = JSON.parse(jsonArray)

    let filteredBookList = booksList.filter(el => el.id !== id)
    booksList = filteredBookList

    //set to local storage(updated list)
    let toJson = JSON.stringify (booksList)
    localStorage.setItem('books-list', toJson)

    //console.log(filteredBookList);
    loadBooks()
}
