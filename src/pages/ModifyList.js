import React,{Component} from "react";
import {Link} from "react-router-dom";
import getNewsList from "../api/NewsList";
import postNewsList from "../api/Post";

export default class ModifyList extends Component{
    state = {
        listData: {
          name: '',
          bgColor: '',
          icon: ''
        }
      };
    async getListData(){
        let res = await getNewsList("/list/getOne/"+localStorage.modifyListId,"get")
        this.setState({listData:res.data.msg})
    }
    async modify(params) {
        const formData = new FormData();
        formData.append('name', params.name);
        formData.append('bgColor', params.bgColor);
        if(document.getElementById('listIcon').files[0]!==undefined){
            formData.append('icon', document.getElementById('listIcon').files[0]);

        }
        else{
        formData.append('icon', "null");

        }
        await postNewsList("/list/modify/"+localStorage.modifyListId, "post", formData);
    }
    componentDidMount(){
        this.getListData();
    }
    render() {
        return (
            <form  className="createList">
                <h1 className="createList-title">Modify List</h1>
                <div className="createList-content">
                    <div className="createList-content-item">
                        <span className="createList-content-item-text">Name ：</span>
                        <input type="text" className="createList-content-item-input" id="listName" value={this.state.listData.name}
                            onChange={(e) => {
                                this.setState({
                                    listData: {
                                        ...this.state.listData,
                                        name: e.target.value,
                                    },
                                });
                            }}
                        />
                    </div>
                    <div className="createList-content-item">
                        <span className="createList-content-item-text">Color ：</span>
                        <input type="color" className="createList-content-item-input" id="listColor" value={this.state.listData.bgColor}
                        onChange={(e) => {
                            this.setState({
                                listData: {
                                    ...this.state.listData,
                                    bgColor: e.target.value,
                                },
                            });
                        }}
                        />
                    </div>
                    <div className="createList-content-item">
                        <span className="createList-content-item-text">image ：</span>
                        <input type="file" className="createList-content-item-input" id="listIcon"/>
                    </div>
                    <div className="createList-btn">
                        <Link to={{pathname:"/"}} className="createList-btn-create create-btn" onClick={(e)=>{
                            e.preventDefault();
                            this.modify({
                            name:document.getElementById("listName").value ?? "null",
                            bgColor:document.getElementById("listColor").value ?? "null",
                            
                        })}
                        }>Modify</Link>
                        <Link to={{pathname:"/"}} className="createList-btn-back create-btn" onClick={()=>{
                            this.props.history.push("/");
                        }}>back</Link>

                    </div>
                </div>
            </form>
        )
    }
}