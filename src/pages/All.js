import React,{Component}from "react";
import { useLocation } from "react-router";

import "../css/style.css";



class All extends Component{
    state={
        allList:JSON.parse(localStorage.allList)
    }
    render(){    
        const element=[];
        this.state.allList.forEach((item,index)=>{
            element.push(
                <div className="today-item" key={index}>
                    <div className="today-item-top">
                        {item.describe}
                        {/* <button className="td-btn btn-mod" onClick={()=>{
                            
                        }}>Modify</button> */}

                    </div>
                    <div className="today-item-bottom">
                        <div className="today-item-bottom-left">
                            <span className="today-item-bottom-left-text">{item.date} {item.time}</span>
                        </div>
                        <div className="today-item-bottom-right">
                            {/* <button className="td-btn btn-del">Delete</button> */}
                        
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="today-content">
                <h1 className="today-title">All</h1>
                {
                    element
                }
                <button className="td-btn btn-back" onClick={()=>{
                    window.location.href="/";
                }}>back</button>
            </div>
        )
    }
}
export default All;