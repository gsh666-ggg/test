import React,{Component} from "react";
import getNewsList from "../api/NewsList";
import "../css/style.css";
import homepageImage from "../images/all.png"
import {Link} from "react-router-dom";

export default class Index extends Component{
    state={
        allList:[],
        todayList:[],
        completeList:[],
        orgData:[],
        listData:[],
        list:[],
    }
    async getAllData(){
        let res= await getNewsList("/item/getAll","get")
        this.setState({allList:res.data.msg});
    }
    async getTodayData(){
        let res = await getNewsList("/item/getToday","get")
        this.setState({todayList:res.data.msg})
    }
    async getCompleteData(){
        let res = await getNewsList("/item/getComplete","get")
        this.setState({completeList:res.data.msg})
    }
    // async getOraganizeData(){
    //     let res = await getNewsList("/list/getOrg","get")
    //     this.setState({orgData:res.data.msg})
    // }
    async getListData(){
        let res = await getNewsList("/list/getAll","get")
        this.setState({listData:res.data.msg})
    }
    async getListOneData(id=null){
        let res = await getNewsList("/list/getOneList/"+id,"get")
        this.setState({list:res.data.msg})
    }
    componentDidMount() {
        this.getAllData();
        this.getTodayData();
        this.getCompleteData();
        // this.getOraganizeData();
        this.getListData();
    }

    render() {
        const element=[];
        
        this.state.listData.forEach((item,index)=>{
            const backgroundColor={backgroundColor:item.bgColor};
            element.push(
                <Link className="listManagement-item" to={{
                    pathname:"/list",
                }} key={index} style={backgroundColor} onClick={()=>{
                    localStorage.listName=item.name;
                    localStorage.listId=item.id;
                }}>
                    <div className="listManagement-item-top">
                        <img src={item.icon} alt="all" className="list-manage-img"/>
                        <p className="list-manage-p">{item.name}</p>    
                    </div>
                </Link>
            )
        })
        return (
            <div>
                <div className="homePage">
                    <Link className="today item" to={{
                        pathname:"/today",
                    }} onClick={()=>{
                        localStorage.todayList=JSON.stringify(this.state.todayList);
                    }}>
                        <div className="itemTop">
                            <div className="i-t-left">
                                <div className="logo td-bg">
                                    <img src={homepageImage} alt="all" className="homePageImage"/>
                                </div>
                                <span className="ftSize">今天</span>
                            </div>
                            <span className="ftSize">{this.state.todayList.length}</span>
                        </div>
                    </Link>
                    <Link to={{
                        pathname:"/all",
                    }} className="all item" onClick={()=>{
                        localStorage.allList=JSON.stringify(this.state.allList);
                    }}>
                        <div className="itemTop">
                            <div className="i-t-left">
                                <div className="logo all-bg">
                                    <img src={homepageImage} alt="all" className="homePageImage"/>
                                </div>
                                <span className="ftSize">全部</span>
                            </div>
                            <span className="ftSize">{this.state.allList.length}</span>
                        </div>
                    </Link>
                    <Link to={{
                        pathname:"/complete",
                    }} className="complete item" onClick={()=>{
                        localStorage.completeList=JSON.stringify(this.state.completeList);
                    }}>
                        <div className="itemTop">
                            <div className="i-t-left">
                                <div className="logo cmp-bg">
                                    <img src={homepageImage} alt="all" className="homePageImage"/>
                                </div>
                                <span className="ftSize">已完成</span>
                            </div>
                            <span className="ftSize">{this.state.completeList.length}</span>
                        </div>
                    </Link>
                </div>
                <div className="listManagement">
                    <h1>列表管理</h1>
                    {element}
                </div>
                <div className="reminderManagement">
                    <Link className="reminderManagement-item-btn" to={{
                        pathname:"/createReminder",
                    }}><p>Create Reminder</p></Link>
                    <Link className="reminderManagement-item-btn" to={{
                        pathname:"/createList",
                    }}><p>Create List</p></Link>
                </div>
            </div>
        )
    }
}
