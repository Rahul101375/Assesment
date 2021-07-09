import React,{ Component } from "react";
import {HiOutlineDotsVertical} from 'react-icons/hi'

class Card extends Component{
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
            <div style={{display:"flex",justifyContent:"space-between",padding:"5px"}}>
                <div style={{display:"block",padding:"5px",marginLeft:"3px"}}>
                    <h4>Retirment Community</h4>
                    <small>Today {this.state.currentTime}</small>
                </div>
                <p style={{color:"red",fontSize:"20px"}}><HiOutlineDotsVertical/></p>
            </div>

            <div style={{display:"flex",justifyContent:"center",textAlign:"center",justifyItems:"center",flexWrap:"wrap",width:"85%",margin:"5px auto",padding:"auto"}}>
                 <h5 style={{textTransform:"capitalize",wordSpacing:"2px",fontSize:"15px"}}>Covid visitationos hours have been extended this week</h5>
            </div>

            <div style={{display:"flex",justifyContent:"center",textAlign:"center",justifyItems:"center",flexWrap:"wrap",margin:"10px",padding:"auto",background:"#f26b27",borderRadius:"6px"}}>
                 <p style={{wordSpacing:"2px",fontSize:"13px", color:"white",padding:"7px"}}>Please book your visitation appointments with your loved ones Today</p>
            </div>
            </React.Fragment>
        );
    }
}
export default Card