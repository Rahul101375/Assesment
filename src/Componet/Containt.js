import React, { Component, useState } from "react";
import '../Componet/Containt.css'
import Card from "./Card";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import {MdDeveloperBoard} from 'react-icons/md'
import {AiFillCaretDown}  from 'react-icons/ai'
import { IoCaretUpSharp}  from 'react-icons/io'
import dp from '../Assets/dd.png';
import l1 from '../Assets/1l.png'
import a1 from '../Assets/aone.png'
import women from '../Assets/women.png'
import  x from '../Assets/x.jpg'
import news from '../Assets/news.png'
import CardThree from "./CardThree";

function Containt() {
    const [visiblet,set]=useState(false)
    const chngetoogle=()=>set(!visiblet)
        return(
        <div className="containt-0" >
            <div className="containt-1">
                <div className="containt-10">
                    <div className="" style={{display:"block"}}>
                    <h3 className="contain-10-height">social Feed</h3>
                    <div style={{maxHeight:"480px",marginTop:"20px",overflow:"scroll"}}>
                    <div className="Card-1" style={{minHeight:"180px",overflow:"hidden"}}>
                        <Card/>
                    </div>

                     <div className="Card-2" style={{minHeight:"80px !important",overflow:"hidden"}}>
                        <CardOne/>
                    </div>
                   
                    <div className="Card-3" style={{overflow:"hidden"}}>
                        <CardTwo/>
                    </div>

                    <div className="Card-4" style={{overflow:"hidden"}}>
                        <CardThree/>
                    </div>

                    <div className="Card-1">
                        Card-5
                    </div>
                    
                    </div>
                    </div>
                </div>

                <div className="containt-11">
                  <div className="containt-11-item">
                    <h3 className="contain-10-height">culinary orders</h3>
                    <div style={{overflow:"scroll",height:"28vh"}}>
                    <div style={{display:"block",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto"}}>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"14px",fontWeight:"bold"}}>Order ID:45525</span></div>
                            <div><span style={{color:"grey",fontSize:"12px"}}>Saturday Jan 04, 12:30 PM</span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> <span style={{fontSize:"12px", color:"red"}}>Lobester mac and cheese</span></div>
                            <div><span style={{color:"green",fontWeight:"bold",fontSize:"13px"}}>Processing</span></div>
                        </div>
                        <p style={{margin:"2px 0 0 5px",padding:"1px",color:"grey",fontSize:"12px"}}>Mr Adersan</p>
                    </div>
                    <div style={{display:"block",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto"}}>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"14px",fontWeight:"bold"}}>Order ID:45525</span></div>
                            <div><span style={{color:"grey",fontSize:"12px"}}>Saturday Jan 04, 12:30 PM</span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> <span style={{fontSize:"12px", color:"red"}}>Lobester mac and cheese</span></div>
                            <div><span style={{color:"green",fontWeight:"bold",fontSize:"13px"}}>Processing</span></div>
                        </div>
                        <p style={{margin:"2px 0 0 5px",padding:"1px",color:"grey",fontSize:"12px"}}>Mr Adersan</p>
                    </div>
                    <div style={{display:"block",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto"}}>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"14px",fontWeight:"bold"}}>Order ID:45525</span></div>
                            <div><span style={{color:"grey",fontSize:"12px"}}>Saturday Jan 04, 12:30 PM</span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> <span style={{fontSize:"12px", color:"red"}}>Lobester mac and cheese</span></div>
                            <div><span style={{color:"green",fontWeight:"bold",fontSize:"13px"}}>Processing</span></div>
                        </div>
                        <p style={{margin:"2px 0 0 5px",padding:"1px",color:"grey",fontSize:"12px"}}>Mr Adersan</p>
                    </div>
                    <div style={{display:"block",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto"}}>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"14px",fontWeight:"bold"}}>Order ID:45525</span></div>
                            <div><span style={{color:"grey",fontSize:"12px"}}>Saturday Jan 04, 12:30 PM</span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> <span style={{fontSize:"12px", color:"red"}}>Lobester mac and cheese</span></div>
                            <div><span style={{color:"green",fontWeight:"bold",fontSize:"13px"}}>Processing</span></div>
                        </div>
                        <p style={{margin:"2px 0 0 5px",padding:"1px",color:"grey",fontSize:"12px"}}>Mr Adersan</p>
                    </div>
                    <div style={{display:"block",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto"}}>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"14px",fontWeight:"bold"}}>Order ID:45525</span></div>
                            <div><span style={{color:"grey",fontSize:"12px"}}>Saturday Jan 04, 12:30 PM</span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> <span style={{fontSize:"12px", color:"red"}}>Lobester mac and cheese</span></div>
                            <div><span style={{color:"green",fontWeight:"bold",fontSize:"13px"}}>Processing</span></div>
                        </div>
                        <p style={{margin:"2px 0 0 5px",padding:"1px",color:"grey",fontSize:"12px"}}>Mr Adersan</p>
                    </div>

                  </div>
                    </div>
                  <div className="containt-11-item">
                    <h3 className="contain-10-height">shopping hub orders</h3>
                    <div style={{overflow:"scroll",height:"28vh"}}>
                    <div style={{display:"block",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto"}}>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"14px",fontWeight:"bold"}}>Order ID:45525</span></div>
                            <div><span style={{color:"grey",fontSize:"12px"}}>Saturday Jan 04, 12:30 PM</span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> <span style={{fontSize:"12px", color:"red"}}>Lobester mac and cheese</span></div>
                            <div><span style={{color:"green",fontWeight:"bold",fontSize:"13px"}}>Processing</span></div>
                        </div>
                        <p style={{margin:"2px 0 0 5px",padding:"1px",color:"grey",fontSize:"12px"}}>Mr Adersan</p>
                    </div>
                    <div style={{display:"block",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto"}}>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"14px",fontWeight:"bold"}}>Order ID:45525</span></div>
                            <div><span style={{color:"grey",fontSize:"12px"}}>Saturday Jan 04, 12:30 PM</span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> <span style={{fontSize:"12px", color:"red"}}>Lobester mac and cheese</span></div>
                            <div><span style={{color:"green",fontWeight:"bold",fontSize:"13px"}}>Processing</span></div>
                        </div>
                        <p style={{margin:"2px 0 0 5px",padding:"1px",color:"grey",fontSize:"12px"}}>Mr Adersan</p>
                    </div>
                    <div style={{display:"block",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto"}}>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"14px",fontWeight:"bold"}}>Order ID:45525</span></div>
                            <div><span style={{color:"grey",fontSize:"12px"}}>Saturday Jan 04, 12:30 PM</span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> <span style={{fontSize:"12px", color:"red"}}>Lobester mac and cheese</span></div>
                            <div><span style={{color:"green",fontWeight:"bold",fontSize:"13px"}}>Processing</span></div>
                        </div>
                        <p style={{margin:"2px 0 0 5px",padding:"1px",color:"grey",fontSize:"12px"}}>Mr Adersan</p>
                    </div>
                    <div style={{display:"block",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto"}}>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"14px",fontWeight:"bold"}}>Order ID:45525</span></div>
                            <div><span style={{color:"grey",fontSize:"12px"}}>Saturday Jan 04, 12:30 PM</span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> <span style={{fontSize:"12px", color:"red"}}>Lobester mac and cheese</span></div>
                            <div><span style={{color:"green",fontWeight:"bold",fontSize:"13px"}}>Processing</span></div>
                        </div>
                        <p style={{margin:"2px 0 0 5px",padding:"1px",color:"grey",fontSize:"12px"}}>Mr Adersan</p>
                    </div>
                    <div style={{display:"block",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto"}}>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"14px",fontWeight:"bold"}}>Order ID:45525</span></div>
                            <div><span style={{color:"grey",fontSize:"12px"}}>Saturday Jan 04, 12:30 PM</span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> <span style={{fontSize:"12px", color:"red"}}>Lobester mac and cheese</span></div>
                            <div><span style={{color:"green",fontWeight:"bold",fontSize:"13px"}}>Processing</span></div>
                        </div>
                        <p style={{margin:"2px 0 0 5px",padding:"1px",color:"grey",fontSize:"12px"}}>Mr Adersan</p>
                    </div>

                  </div>
                  </div>
                </div>
                <div className="containt-12">
                <div className="containt-11-item">
                    <div className="contain-10-height" style={{position:"relative",display:"flex",justifyContent:"space-between"}} >
                    <span>
                    <h3 >upcoming event</h3>
                    </span>
                    <div style={{display:"flex",justifyContent:"right"}} >
                    <div className="img_cal" >
                    </div>
                    <div className="activee" onClick={chngetoogle}>
                    <div className="img_dp" > 
                    <img src={dp} width="18px"/>
                    </div>
                    <div className="pop_drop_list" style={{display:visiblet ? "block":"none"}}>
                        <ul>
                            <li className="active">All Events
                            </li>
                            <li>Provider Event</li>
                            <li>Member Event</li>
                        </ul>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="flex-1-center" style={{display:"flex",justifyContent:"center"}}>
                        <span className="spna_ocpn"><img src={l1} width="6px" className="left icon_arrow"/></span>
                        <span style={{marginTop:"8px"}}>February 2021 <span style={{color:"red"}}>(5 Events)</span> </span>
                        <span className="spna_ocpn"><img src={l1} width="6px" className="right icon_arrow"/></span>
                    </div>
                    <div>
                    <div style={{overflow:"scroll",height:"180px"}}>
                    <div className="hover_div_react firstactive" style={{display:"flex",flexDirection:"row", borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px",borderRadius:"8px", margin:"5px auto 5px auto"}}>
                    <div>
                        <img src={a1} style={{width:"40px",height:"40px",margin:"0 10px"}}/>
                    </div>
                        <div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"13px",fontWeight:"bold"}}>valentines Day</span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> 
                            <span style={{fontSize:"12px", color:"white"}}>Friday ,feb 14th-2021</span></div>
                        </div>
                        </div>
                    </div>
                    <div className="hover_div_react" style={{display:"flex",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto",borderRadius:"8px",background:"rgba(212, 212, 212, 0.856)"}}>
                    <div>
                        <img src={a1} style={{width:"40px",height:"40px",margin:"0 10px"}}/>
                    </div>
                    <div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"13px",fontWeight:"bold"}}>Memorial Day </span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> 
                            <span style={{fontSize:"12px", color:"grey"}}>Monday, May 31-2021</span></div>
                        </div>
                        </div>
                    </div>
                    <div className="hover_div_react" style={{display:"flex",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto",borderRadius:"8px",background:"rgba(212, 212, 212, 0.856)"}}>
                    <div>
                        <img src={women} style={{width:"40px",height:"40px",margin:"0 10px"}}/>
                    </div>
                    <div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"13px",fontWeight:"bold"}}>Women`s Day </span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> 
                            <span style={{fontSize:"12px", color:"grey"}}>Monday, Mar 8th-2021</span></div>
                        </div>
                        </div>
                    </div>
                    <div className="hover_div_react" style={{display:"flex",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto",borderRadius:"8px",background:"rgba(212, 212, 212, 0.856)"}}>
                    <div>
                        <img src={x} style={{width:"40px",height:"40px",margin:"0 10px"}}/>
                    </div>
                    <div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"13px",fontWeight:"bold"}}>Christmas Day </span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> 
                            <span style={{fontSize:"12px", color:"grey"}}>Friday Dec 24-2021</span></div>
                        </div>
                        </div>

                          
                        </div>
                    <div className="hover_div_react" style={{display:"flex",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto",borderRadius:"8px",background:"rgba(212, 212, 212, 0.856)"}}>
                    <div>
                        <img src={news} style={{width:"40px",height:"40px",margin:"0 10px"}}/>
                    </div>
                    <div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"13px",fontWeight:"bold"}}>New Year`s Day </span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> 
                            <span style={{fontSize:"12px", color:"grey"}}>Friday Dec 31-2021</span></div>
                        </div>
                        </div>

                    </div>
                
                  </div>
              
                    </div>

                </div>

                  <div className="containt-11-item">
                    <h3 className="contain-10-height">quick link</h3>
                    <div style={{overflow:"scroll",height:"28vh"}}>
                    <div className="hover_div_react firstactive" style={{display:"block",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto"}}>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"13px",fontWeight:"bold"}}>Visiter Sign In </span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> 
                            <span style={{fontSize:"12px", color:"white"}}>Link description</span></div>
                        </div>
                    </div>
                    <div className="hover_div_react" style={{display:"block",borderBottom:"2px solid whitesmoke",width:"95%",padding:"10px 0px", margin:"5px auto 5px auto"}}>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                            <div> <span style={{fontSize:"13px",fontWeight:"bold"}}>Visiter Sign In </span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",margin:"2px 0 0 5px",padding:"1px"}}>
                        <div> 
                            <span style={{fontSize:"12px", color:"grey"}}>Link description</span></div>
                        </div>
                    </div>
                 
                  </div>
              
                  </div>
                </div>
            </div>
        </div>
        )
}
export default Containt