import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header.js'
import pic from '../images/phone-book.png'
import pic2 from '../images/seo.png'

function Home() {
    return(
        <div className="home_grid-container">
        <div className="header">
        <Header />
        </div>
        
        <div className="main">
           
        <div className="main_container">
            <Link to="/main" id="link">
            <div className="list_display">
                    <h1>Contact List</h1>
                    <img className="img" src={pic}></img>
                    
            </div>
            </Link>
            <Link to="/search" id="link">
            <div className="search_display">
                    <h1>Search Contacts</h1>
                    <img className="img" src={pic2}></img>
            </div>
            </Link>
        </div>
        </div>
        
        <div className="footer">FSW-140 Capstone Project: Full Stack Crossover <br></br>2021</div>
        </div>

    )
}


export default Home