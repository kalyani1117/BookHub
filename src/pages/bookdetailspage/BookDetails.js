import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar"
import DetailsSection from "../../components/layouts/details-section/DetailsSection";
import Footer from "../../components/layouts/footer/footer"

const BookDetailsPage = ()=> {
    return (
        <section>
            <Navbar darkTheme={true}/>
            <DetailsSection />
            <Footer/>
        </section>
    )
}
export default BookDetailsPage ;