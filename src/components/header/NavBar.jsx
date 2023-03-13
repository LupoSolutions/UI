import React from 'react';
import '../../../css/app.scss';

const NavBar = () => {
    return (

        <div className="top-navigation">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            {/*<div className="search-container">*/}
            {/*    <SearchBar/>*/}
            {/*</div>*/}
        </div>


        // <div className="navBar">
        //     <AppRouter />
        //     <ul>
        //         <li><a href="home">Home</a></li>
        //         <li><a href="events">Contact</a></li>
        //         <li><a href="about">About</a></li>
        //         <li><SearchBar className="try"/></li>
        //     </ul>
        // </div>
    )
}

export default NavBar



