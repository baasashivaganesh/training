// import Main from ".components/Main";
// import Footer from ".components/Footer";
// import Navbar from "./Components/Navbar";
// import Sidebar from "./Components/Sidebar";
// // import sidebar1 from "./components/sidebar1";
// const App=()=>{
//     return(
//         <div className="app">
//             <Navbar></Navbar>
//             <Main></Main>
//             <div className="sidebar">
//                 <Sidebar></Sidebar>
//                 <sidebar1></sidebar1>
//                 </div>
//                 <Footer/>
//                 </div>
//     )
// }
// export default App;

// import React from 'react'
// import FBCPropex1 from './propsexample/FBCPropex1'

// const App = () => {
//     return (
//         <div>
//             <FBCPropex1
//             username="Tarun"
//             isLoggedIn={true}
//             hobbies={["Roaming" , "Watching movies" , "travel" , "studies"]}
//             />

//         </div>
//     )

// }
// export default App

import React from "react";
import PropsChildrenEx from './propsexample/PropsChildrenEx'
import ChildProps from "./propsexample/ChildProps";

const App = () => {
    return (
        <div>
            <PropsChildrenEx username="hemanth" company="gooogle">
                <h1> this data is passed as a props children</h1>
                <ChildProps/>
            </PropsChildrenEx>
        </div>
    )
}
export default App