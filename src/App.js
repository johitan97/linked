import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets  from "./Widgets";

function App() {
  return (
     <div className="app">
        
         {/* header */}
           <Header />
         {/* app body */}
         <div className="app_body"> 
             <Sidebar />
              {/* feed */}
            < Feed />
              {/* widgets */}
              < Widgets />
         </div>
     </div>
  );
}

export default App;
