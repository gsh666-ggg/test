import React, { Component } from "react";
import getNewsList from "../api/NewsList";
import postNewsList from "../api/Post";
import { Link } from "react-router-dom";
import "../css/style.css";

class List extends Component {
    state = {
        list:[] ,
    };
    async getListData(){
        let res = await getNewsList("/list/getOneList/"+localStorage.listId,"get")
        this.setState({list:res.data.msg});
    }
    async deleteList(id=null){
        let res = await getNewsList("/item/delete/"+id,"delete")
        this.getListData();
    }
    async completeList(id=null){
        let res = await postNewsList("/item/complete/"+id,"post")
        this.getListData();
    }
    componentDidMount(){
        this.getListData();
    }
    render(){    
        const element=[];
        this.state.list.forEach((item,index)=>{
            
            element.push(
                <div className="today-item" key={index}>
                    <div className="today-item-top">
                        {item.describe}
                        <button className="td-btn btn-mod" onClick={()=>{
                            localStorage.modifyId=item.id;
                            window.location.href="/modify";
                        }}>Modify</button>

                    </div>
                    <div className="today-item-top com-btn">
                        <button className="td-btn btn-mod com-btn" onClick={()=>{
                            this.completeList(item.id);
                            
                        }}>Complete</button>

                    </div>
                    <div className="today-item-bottom">
                        <div className="today-item-bottom-left">
                            <span className="today-item-bottom-left-text">{item.date} {item.time.split(':').slice(0, 2).join(':')}</span>
                        </div>
                        <div className="today-item-bottom-right">
                            <button className="td-btn btn-del" onClick={()=>{
                                this.deleteList(item.id);
                            }}>Delete</button>
                        
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="today-content">
                <h1 className="today-title">{localStorage.listName}</h1>
                {
                    element
                }
                <div className="list-content-in">
                    <div className="list-content">
                        <Link to={{
                            pathname:"/ModifyList",
                        }}  className="td-btn btn-mody" onClick={()=>{
                            localStorage.modifyListId=localStorage.listId;
                        }}>Modify List</Link>
                    </div>
                    <div className="list-content">
                        <Link to={{
                            pathname:"/",
                        }}  className="td-btn btn-back">Back</Link>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default List;