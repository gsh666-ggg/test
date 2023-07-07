import React, {Component} from "react";
import getNewsList from "../api/NewsList";
import "../css/style.css"
import postNewsList from "../api/Post";


export default class CreateReminder extends Component {

    state = {
        list: [],
    };
    async getListData() {
        let res = await getNewsList("/list/getAll","get")
        this.setState({list:res.data.msg})
    }
    componentDidMount(){
        this.getListData();
    }
    async create(params) {
        const formData = new FormData();
        formData.append('describe', params.describe);
        formData.append('date', params.date);
        formData.append('time', params.time);
        formData.append('list_id', params.listId);
        await postNewsList("/item/create", "post", formData);
    }
    render() {
        const element = [];
        console.log(this.state.list)
        this.state.list.forEach((item, index) => {
            element.push(
                <option value={item.id} key={index}>{item.name}</option>
            )
        })
        return (
            <div>
                <form action="" className="create-reminder-form" onSubmit={(e)=>{
                    e.preventDefault();
                    this.create({
                        describe:document.getElementById("describe").value ?? "null",
                        date:document.getElementById("date").value ?? "null",
                        time:document.getElementById("time").value ?? "null",
                        listId:document.getElementById("list").value ?? "null",
                    })
                }}>
                    <h1>Create Reminder</h1>
                    <div className="create-reminder-form-item">
                        <label htmlFor="describe">Describe</label>
                        <input type="text" id="describe" placeholder="Please enter the description"/>
                    </div>
                    <div className="create-reminder-form-item">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date"/>
                    </div>
                    <div className="create-reminder-form-item">
                        <label htmlFor="time">Time</label>
                        <input type="time" id="time"/>
                    </div>
                    <div className="create-reminder-form-item">
                        <label htmlFor="list">List</label>
                        <select name="" id="list">
                            {element}
                        </select>
                    </div>
                    <div className="create-reminder-form-item-btn">
                        <button className="create-reminder-form-btn" type="submit">Create</button>
                        <button className="create-reminder-form-btn" onClick={()=>{
                            window.location.href="/";
                        }}>Back</button>
                    </div>
                </form>
            </div>
        )
    }
}