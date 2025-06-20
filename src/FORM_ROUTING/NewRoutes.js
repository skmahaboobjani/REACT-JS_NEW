import React from 'react';
import Form from './Form';
import Result from './Result';
import { BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';

function NewRoutes() {
  return (
    <div>
        {/* <Form/>
        <Result/> */}

        <Router>
            <nav>
                <div>
                    
                    <Link to={"/"}>home</Link><br/>
                    <Link to={"/results"}>results</Link>

                    <Routes>

                        <Route path="/"  Component={Form}/>
                        <Route path="/results" Component={Result}/>
                    </Routes>
                </div>
            </nav>
        </Router>
      
    </div>
  );
}

export default NewRoutes;
