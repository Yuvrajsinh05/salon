// import React from "react";
// import Home from "./pages/home/home"


// const Routing=()=>{
//     <Home/>
// }


// export default Routing;


import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import home from '../src/component/home/home'

const Routing = () => {
    return(
        <BrowserRouter>
                <Route exact path="/" component={home}/>
            {/* <Footer/> */}
        </BrowserRouter>
    )
}

export default Routing