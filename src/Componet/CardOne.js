import React, { Component } from "react";

class CardOne extends Component {
    render() {
        return (
            <React.Fragment>
                <div >
                <div style={{ display: "block", padding: "10px", marginLeft: "6px" }}>
                    <h4>Hello Resident Admin Please Post</h4>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyItems: "center", flexWrap: "wrap", width: "85%", margin: "1px auto", padding: "auto" }}>
                    <input style={{ textTransform: "capitalize",width:"300px",fontWeight:"400",padding:"2px 0", wordSpacing: "2px", fontSize: "15px", color: "silver" }} placeholder="Whats on your Mind ?"/>
                </div>
                <div style={{ display: "flex", float: "right", alignItems: "center", flexWrap: "wrap", margin: "10px", top: "40px", padding: "5px 10px", background: "#616D2F", borderRadius: "6px" }}>
                    <p style={{ bottom: "10px",color:"white",fontSize:"12px" }}>Post Now</p>
                </div>
                </div>
            </React.Fragment>
        );
    }
}
export default CardOne