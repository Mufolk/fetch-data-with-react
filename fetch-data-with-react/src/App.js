import axios from 'axios';
import {useState} from 'react';
import './App.css';

const App = () => {

  const [books, setBooks] = useState(null);
  const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';

  const fetchData = async () => {
    const response = await axios.get(apiURL)

    setBooks(response.data) 
  }
  
  // const getBooks = async () => {
  //   try {
  //     const result = await axios.get(apiURL);
  //     return result;
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // try {
  //   const books = await getBooks();
  //   console.log(books);
  // } catch (e) {
  //   console.error(e);
  // }
  

  

  return (
    <div className="App">
      <h1>Game of thrones books</h1>
      <h2>Fetch a list from an API and display it</h2>

      <div>
        <button className="fetch-button" onClick={fetchData}>Fetch Data</button>
      </div>

      <div className="books">
        {books && books.map((book, index) => {
          const cleanedDate = new Date(book.released).toDateString();
          const authors = book.authors.join(', ');

          return(
            <div className="book" key={index}>
              <h3>Book Number {index + 1}</h3>
              <h2>{book.name}</h2>

              <div className="details">
                <p>👨: {authors}</p>
                <p>📖: {book.numberOfPages}</p>
                <p>🏘️: {book.country}</p>
                <p>⏰: {cleanedDate}</p>
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default App;
