import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Nav/Sidebar'
import Containt from './Containt';

function Home({children}) {
  return (
    <div style={{display:"flex",flexDirection:"row",height:"120vh"}}>
        <div style={{width:"20%",height:"auto",background:"silver"}}>
            <Sidebar/>
        </div>
        <div style={{display:"block !important",width:"80%",background:"silver"}}>
            <div style={{width:"100%"}}>
            <Header/>
            </div>
            <div>
                {children}
            </div>
        </div>
    </div>    
  );
}

export default Home;
