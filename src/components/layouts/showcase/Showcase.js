import React from "react";
import "./showcase.styles.css"
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../forms/searchInputForm/SearchInputForm";
const Showcase = ()=> {
    return (
        <section className="showcase-container">
            <Navbar darkTheme={ false }/>
            <div className="overlay"></div>
            <div className="showcase-content">
                <h1>Best <span class="text-primary">Books </span>Available </h1>
                <p>Buy Quality Books at Cheaper Price</p>
                <SearchInputForm darkTheme={true}/>
            </div>
            
        </section>
    )
}
export default Showcase ;