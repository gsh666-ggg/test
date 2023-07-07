import React,{Component}from "react";
import { useLocation } from "react-router";

import "../css/style.css";



class Today extends Component{
    state={
        todayList:JSON.parse(localStorage.todayList)
    }
    componentDidMount(){
        console.log(this.state.todayList)
        // const {todayList}=this.props.location.state;
        // this.setState({todayList:JSON.parse(todayList)});
        // const {location}=this.props;
        // const data=location.state.todayList;
    }
    
    render(){    
        const element=[];
        this.state.todayList.forEach((item,index)=>{
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
                <h1 className="today-title">Today</h1>
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
export default Today;