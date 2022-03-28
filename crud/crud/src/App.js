import React from "react";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import {Home} from "./components/Home";
  import {AddUser} from "./components/AddUser";
  import {EditUser} from "./components/EditUser";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import{GlobalProvider} from './context/GlobalState';


  const App = () => {
    return (
      <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
        {/* <Home />
        <AddUser />
        <EditUser /> */}
         {/* <GlobalProvider> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add" element={<AddUser/>} />
            <Route exact path="/edit/:id" element={<EditUser />} />
          </Routes>
        {/* </GlobalProvider>  */}
  
      </div>
    );
  }
  

  export default App;