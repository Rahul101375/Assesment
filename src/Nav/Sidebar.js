import React, { useState } from "react";
import { SidebarData } from "./Data";
import Menubar from "./Menubar";
import './sidebar.css'
import {Link} from 'react-router-dom'
import { IconContext } from "react-icons/lib";
import styled from 'styled-components'
import Logo from '../Assets/Logos.png'

const Nav=styled.div`
// background:red;
heigth:80px;
display:flex;
justify-content:flex-start;
align-item:center;
border:1px solid green;`;

const NavIcon=styled(Link)`
margin-left:2rem;
font-size:2rem;
height:80px;
display:flex;
justify-content:flex-start;
align-items:center
;`;

const SidebarNav = styled.nav`
// background:#616112;
// width:250px;
// height:100vh;
// display:flex;
// justify-content:center;
top:0;
left: ${({sidebar})=>(sidebar ? '0' : '-100')};
transition:350ms;
z-index:10
// border:1px solid green;
;`;

const SidebarWrap = styled.div`
width:100%
// border:1px solid green;
;`

const Sidebar=()=>{
    const [sidebar, setSidebar] = useState(false)
    const showSidebar=()=>setSidebar(!sidebar)

    return(
        // <>
        <div >
            <IconContext.Provider value={{color:"#fff"}}>
                <div style={{background:"#4f4f4c"}}>
                <div style={{width:"18",height:"15vh",display:"flex",flexDirection:"column",flexWrap:"wrap"}}>
                    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"25px"}}>
                        <div>
                        <img src={Logo} alt="Logo" style={{width:"50px",height:"40px"}}/>                            
                        </div>
                        <div>
                        <h2 style={{color:"#e6eaeb",margin:"12px 8px",fontFamily:"sans-serif"}}>ResidentNow</h2>
                        </div>
                    </div>
                    <small style={{display:"flex",flexWrap:"wrap",margin:"10px 0 0 60px",color:"#e6eaeb"}}>Admin Panel</small>
                </div>
                </div>
                <SidebarNav sidebar={sidebar} className="SidebarNav">
                    <SidebarWrap >
                        {SidebarData.map((item,index)=>{
                            return <Menubar item={item} key={index}/>
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </div>
        //  </> 
    )
}
export default Sidebar