// import React from 'react';
// import '../../css/app.scss';
// import NavBar from './header/NavBar'
// import Header from "./header/Header";
//
// const App = () => {
//     return (
//         <div className="container">
//             <Header/>
//             <NavBar/>
//         </div>
//     )
// }
//
// export default App


import React from 'react';
import '../../css/app.scss';
import NavBar from './header/NavBar'
import Header from "./header/Header";
import AppRouter from "./header/AppRouter";
import SearchBar from "./containers/search/SearchBar";
import Content from "./containers/content/Content";
import Filter from "./containers/content/Facet";
import ShoppingCart from "./containers/cart/ShoppingCartTwo";

const App = () => {
    return (
        <div className="container">
            <Header/>
            <NavBar/>
            <SearchBar/>
            <div className="filler"/>
            <Filter/>
            <Content/>
            <ShoppingCart/>

        </div>
    )
}

export default App
