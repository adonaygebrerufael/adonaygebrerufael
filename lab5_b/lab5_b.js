let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
    ];
   

//1=A

    function addBook(title, author, libraryID) {
    const book = {
            title: title,
            author: author,
            libraryID: libraryID
        };
        libraryBooks.push(book);
        return book;
    }


    addBook("New Book Title", "Author Name", 1234);
    console.log(libraryBooks);
  

//1=B
function getTitles() {
    let titles = [];
    for (let index = 0; index < libraryBooks.length; index++) {
        titles.push(libraryBooks[index].title) 
    }
titles.sort();
    return titles;
}

console.log(getTitles());


function getTitles(){
    let titles=libraryBooks.map((book)=>book.title);
    titles.sort();
    return titles;
}



//1=c


// function findBooks(keyword) {
//     let books = [];
//     for (let index = 0; index < libraryBooks.length; index++) {
//         if (libraryBooks[index].title.includes(keyword)) {
//             books.push(libraryBooks[index].title);
//         }
//     };
//     return books.sort((a, b)=>{
//         if(a.author<b.author){
//             return -1;
//         }
//         if(a.author>b.author){
//             return 1;
//         }
//         return 0;
//     });
   
//1=c
    function findBooks(keyword) {
        return libraryBooks
            .filter(book => book.title.includes(keyword)) // Filter books containing the keyword in the title
            .sort((a, b) => a.author.localeCompare(b.author)); // Sort the filtered books by author
    }

    console.log(findBooks("The"));





//2

//// Define the double function
function double(x) {
    return x * 2;
  }

  // Define the myMap function
  function myMap(arr, fun) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      result.push(double(arr[i])); 
    }
  
    return result;
  }
  

  let numbers = [1, 2, 3, 4, 5];
  
  
  let doubledNumbers = myMap(numbers, double);
  
  console.log("Original array:", numbers);
  console.log("Doubled array:", doubledNumbers);
  






   


