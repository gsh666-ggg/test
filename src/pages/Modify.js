import React , {Component} from "react";
import getNewsList from "../api/NewsList";
import postNewsList from "../api/Post";
import "../css/style.css";

export default class Modify extends Component{
    state = {
        reminderData: {
          describe: '',
          date: '',
          time: ''
        }
      };

    
    async getReminderData(){
        let res = await getNewsList("/item/getOne/"+localStorage.modifyId,"get")
        this.setState({reminderData:res.data.msg})
    }
    async modify(params) {
        const formData = new FormData();
        formData.append('describe', params.describe);
        formData.append('date', params.date);
        const timeValue = params.time.split(':').slice(0, 2).join(':');
        formData.append('time', timeValue);
        await postNewsList("/item/modify/"+localStorage.modifyId, "post", formData);
    }
    componentDidMount(){
        this.getReminderData();
    }
    render(){

        return (
            <div>
                <form action="" className="create-reminder-form" onSubmit={(e)=>{
                    e.preventDefault();
                    this.modify({
                        describe:document.getElementById("describe").value ?? "null",
                        date:document.getElementById("date").value ?? "null",
                        time:document.getElementById("time").value ?? "null",
                    })
                }}>
                    <h1>Modify Reminder</h1>
                    <div className="create-reminder-form-item">
                        <label htmlFor="describe">Describe</label>
                        <input type="text" id="describe" placeholder="Please enter the description" value={this.state.reminderData.describe}
                        onChange={(e) => {
                            this.setState({
                                reminderData: {
                                    ...this.state.reminderData,
                                    describe: e.target.value,
                                },
                            });
                        }}
                        />
                    </div>
                    <div className="create-reminder-form-item">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" value={this.state.reminderData.date} 
                        onChange={(e) => {
                            this.setState({
                                reminderData: {
                                    ...this.state.reminderData,
                                    date: e.target.value,
                                },
                            });
                        }}
                        />
                    </div>
                    <div className="create-reminder-form-item">
                        <label htmlFor="time">Time</label>
                        <input type="time" id="time" value={this.state.reminderData.time} 
                        onChange={(e) => {
                            this.setState({
                                reminderData: {
                                    ...this.state.reminderData,
                                    time: e.target.value,
                                },
                            });
                        }}
                        pattern="^(?:[01]\d|2[0-3]):(?:[0-5]\d)$"
                        />
                    </div>

                    <div className="create-reminder-form-item-btn">
                        <button className="create-reminder-form-btn" type="submit">Modify</button>
                        <button className="create-reminder-form-btn" onClick={()=>{
                            window.location.href="/list";
                        }}>Back</button>
                    </div>
                </form>
            </div>
        )
    }
}