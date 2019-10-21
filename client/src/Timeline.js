import React, { Component } from "react";
import "./Timeline.css";
import { Row, Col} from "react-bootstrap";

class Timeline extends Component  {
  constructor(props) {
    super(props) 
    this.state = { 
      apiResponse: [],
      value: "" 
    };
    this.handleChange = this.handleChange.bind(this);
 }

 callTimelineApi() {
  fetch("http://192.168.0.6:3000/getTimeline")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }));
  }

  callDeleteApi(tweetid){
    fetch("http://192.168.0.6:3000/deleteTweet/"+tweetid)
      .then(res => res.json())
      .then(alert("Your tweet is deleted"));
  }

  callCreateApi(){
    var payload = {
      status: this.state.value
    };
    fetch("http://192.168.0.6:3000/addTweet/",
    {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify( payload )
    })
    .then(function(res){ return res.json(); })
  }

  componentWillMount() {
    this.callTimelineApi();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

renderTableData() {
  return this.state.apiResponse.map((response, index) => {
     const { id, created_at, text, user, name, screenName } = response 
     return (
        <tr key={id}>
           <td>{created_at}</td>
           <td>
            <Col>{response.user.name+" @"+response.user.screen_name}</Col>
            <Row>{text}</Row>
           </td>
           <td><button onClick={() => this.callDeleteApi(response.id)}>
                Delete
              </button>
            </td>
        </tr>
     )
  })
}

  render() {
    return (
      <form>
        <div className="GetTweets">
        <textarea
              rows="5"
              cols="100"
              placeholder="Tweet to the world!"
              value={this.state.value}
              onChange={this.handleChange}
            />
          <button onClick = {() => this.callCreateApi()}>
              Tweet
            </button>
      </div>
      <div className="Timeline">
        <div className="lander">
          <h1>Timeline</h1>
          <table>
            <col width="400"/>
            <col width="400"/>
                <tbody>
                  {this.renderTableData()}
                </tbody>
            </table>
        </div>
      </div>
      </form>
    );
  }
}

export default Timeline;