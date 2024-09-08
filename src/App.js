// import React, { createContext } from "react";
// import Footer from "./Components/Footer";
// export const login = createContext();
// import Home from "./Components/Home";
// function App() {
//   return (
//     <div>
//       <login.Provider value="king">
//         <Footer />
//       </login.Provider>
//       <Home/>
//     </div>
//   );
// }

// export default App;
//USEREF
// import React from 'react'
// import Home from './Components/Home'
// function App() {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App
//routers
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
<Navbar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Header/:id" element={<Header />} />
          <Route path="/Footer/:id" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
