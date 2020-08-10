import React from 'react';
import {Link} from "@reach/router";
import './styles/App.scss';
import BookSearch from "./book-search/BookSearch";

function App() {
    return (
        <div>
            <header>
                <Link to="/">My Wishlist!</Link>
            </header>
            <BookSearch></BookSearch>
        </div>
    );
}

export default App;
