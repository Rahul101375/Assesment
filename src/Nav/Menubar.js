import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FiPlus } from 'react-icons/fi'

const SidebarLink = styled(Link)`
display:flex;
color:white;
justify-content:space-between;
align-item:center;
padding:20px;
list-style:none;
height:60px;
text-decoration:none;
font-size:18px;
background: linear-gradient(45deg,#4f4f4c,#4f4f4c);
// border:1px solid black;

&:hover{
    background:green";
    // border-left:4px solid blue;
    cursor:pointer;
}`;

const SidebarLabel = styled.span`
margin-left:16px;`;

const DropdownLink = styled(Link)`
// background:#4f4f4c;
  height:60px;
  padding-left:3rem;
  display:flex;
  align-items:center;
  text-decoration:none;
  color:white;
  font-size:18px;
//   border:1px solid yellow;

  &:hover{
      background:yellow;
      cursor:pointer;
  }
`;

const Menubar = ({ item ,key}) => {
    const [subnav, setSubnav] = useState(false)
    const [col, setcol] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
    const changecolor=(key)=> setcol(!col)
    return (
        <React.Fragment>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav} >
                <NavLink to={item.path} activeClassName="active" className="hover_sidebar" style={{color:"white",textDecoration:"none", background:col?"#616d2f":"#grey",borderTopLeftRadius:"8px", display: "flex",justifyContent:"space-between", width: "100%", minHeight: "50px", flexDirection: "row", marginTop: "-10px", padding: "10px 5px" }}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{margin:"0 12px "}}>
                        {item.image}
                    </div>
                    <div>
                        {item.title}
                    </div>
                </div>
                <div>
                 <div style={{background:"rgba(0,0,0,.5)",borderRadius:"20px",paddingTop: "3px",paddingLeft:"3px",paddingRight:"3px"}}>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : <div ><FiPlus /></div>
                    }
                </div>
                 </div>
                </NavLink>
              
            </SidebarLink>
            <div style={{background:"#3c3e40"}}>
            {subnav && item.subNav.map((items, index) => {
                return (
                    <DropdownLink to={items.path} key={index} style={{background:"transparent"}}>
                        <div className="hover_inner_class" style={{ background: "#616d2f",padding:"8px 5px",width:"87%",margin:"0 auto",color:"white",textDecoration:"none" }}>
                            <span style={{ marginLeft: "30px" }}>{items.icon}{" "}{items.title}</span>
                        </div>    
                        </DropdownLink>
                )
            })
            }
                        </div>
        </React.Fragment>
    );

}
export default Menubar;