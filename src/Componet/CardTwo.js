import React,{ Component } from "react";
import {HiOutlineDotsVertical} from 'react-icons/hi'
import Book from '../Assets/B.png'
import BookOne from '../Assets/B1.png'
import Michel from '../Assets/M.png'
import S from '../Assets/s.png'
import Like from '../Assets/like.png'
import Share from '../Assets/share.png'
import {Link} from 'react-router-dom'
class CardTwo extends Component{

    constructor(props){
        super(props);
        var today = new Date();
        var hx = today.getHours();
        var mx = today.getMinutes();
        var ampm = hx >= 12 ? 'PM':'AM';
         hx = hx % 12;
         hx = hx ? hx : 12;
         mx = mx < 10 ? '0'+mx :mx;
        var setTime = hx +':'+mx+' '+' '+ampm;
        this.state = {
          currentTime: setTime
        }
    }
    render(){
        return(
            <React.Fragment>
                <div style={{height:"auto"}}>
            <div style={{display:"flex",justifyContent:"space-between",padding:"5px",marginLeft:"3px"}}>
                <div style={{display:"flex",flexWrap:"wrap"}}>
                    <img src={Michel} alt="A"/>
                    <div style={{display:"block"}}>
                    <h4 style={{padding:"5px",marginLeft:"3px"}}>Michel Smith</h4>
                    <small style={{padding:"1px",marginLeft:"5px",color:"silver",fontSize:"12px"}}>Yesterday{ " "}{this.state.currentTime}</small>
                    </div> 
                </div>
                <p style={{color:"red",fontSize:"20px"}}><HiOutlineDotsVertical/></p>
            </div>

            <div style={{display:"block"}}>
                <p style={{margin:"10px"}}>Best recommend books by my friend <Link to=''>@johson Samuel</Link> to read</p> 
                <div style={{display:"flex",flexWrap:"wrap",marginLeft:"20px"}}>
                    <img src={Book} alt="Book" style={{width:"50px",height:"50px",margin:"0 5px"}}/>
                    <img src={BookOne} alt="One" style={{width:"50px",height:"50px"}}/>
                </div>
            </div>

            <div style={{display:"block"}}>
                <div style={{display:"flex",flexWrap:"wrap",margin:"7px",padding:"2px"}}>
                   <img src={S} alt="L" style={{margin:"3px"}}/>
                   <span style={{color:"silver",marginTop:"7px",fontSize:"14px"}}>Resident Admin</span>
                </div>
                <p style={{color:"silver",margin:"7px 0 4px 0",padding:"5px"}}>This is a greate book I love these book </p>
                <div style={{display:"flex",justifyContent:"space-between",margin:"7px 0 4px 0",padding:"5px"}}>
                    <input style={{color:"silver",marginBottom:"1px solid black",marginLeft:"5px"}} placeholder="Write Comment"/>
                    <button style={{background:"#616D2F",padding:"2px 10px",borderRadius:"4px",color:"white",outline:"none",border:"none"}}>Submit</button>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",margin:"7px 0 4px 0",padding:"5px"}}>
                    <p style={{color:"red",marginTop:"12px",fontSize:"12px"}}>2  Comment</p>
                    <div style={{display:"flex",justifyContent:"space-between",margin:"3px 4px 0 5px"}}>
                        <p style={{margin:"2px 5px 0px 0px",padding:"4px"}}>2</p>
                        <img src={Like} alt="a" style={{margin:"0 5px",padding:"4px",width:"25px",height:"25px"}}/>
                        <img src={Share} alt="b" style={{margin:"0 5px 0 5px",padding:"4px",width:"25px",height:"25px"}}/>
                    </div>
                </div>
                
            </div>
            </div>
            </React.Fragment>
        );
    }
}
export default CardTwo
