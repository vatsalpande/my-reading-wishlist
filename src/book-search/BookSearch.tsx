import React, {useEffect, useState} from "react";
import {getBooksByType} from "./book-search.service";


const BookSearch = () => {
  const [bookType, updateBookType] = useState("");
  async function requestBooks() {
    const { animals } = await getBooksByType(bookType);
    console.log("animals", animals);
  }

  useEffect(() => {
    console.info('Page Loaded');
  }, []);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestBooks();
        }}
      >
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BookSearch;