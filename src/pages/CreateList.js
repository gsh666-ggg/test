import React,{Component} from "react";
import { Link ,Navigate } from "react-router-dom";
import getNewsList from "../api/NewsList";
import postNewsList from "../api/Post";
import "../css/style.css";


export default class CreateList extends Component {
    async create(params) {
        const formData = new FormData();
        formData.append('name', params.name);
        formData.append('bgColor', params.bgColor);
        formData.append('icon', document.getElementById('listIcon').files[0]);
        await postNewsList("/list/create", "post", formData);
    }
    render() {
        return (
            <form  className="createList">
                <h1 className="createList-title">Create List</h1>
                <div className="createList-content">
                    <div className="createList-content-item">
                        <span className="createList-content-item-text">Name ：</span>
                        <input type="text" className="createList-content-item-input" id="listName"/>
                    </div>
                    <div className="createList-content-item">
                        <span className="createList-content-item-text">Color ：</span>
                        <input type="color" className="createList-content-item-input" id="listColor"/>
                    </div>
                    <div className="createList-content-item">
                        <span className="createList-content-item-text">image ：</span>
                        <input type="file" className="createList-content-item-input" id="listIcon"/>
                    </div>
                    <div className="createList-btn">
                        <Link to={{pathname:"/"}} className="createList-btn-create create-btn" onClick={(e)=>{
                            e.preventDefault();
                            this.create({
                            name:document.getElementById("listName").value ?? "null",
                            bgColor:document.getElementById("listColor").value ?? "null",
                            
                        })}
                        }>Create</Link>
                        <Link to={{pathname:"/"}} className="createList-btn-back create-btn" onClick={()=>{
                            this.props.history.push("/");
                        }}>back</Link>

                    </div>
                </div>
            </form>
        )
    }


                
}