import React, { Component } from "react";
import "./Timeline.css";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Row, Col, FormGroup,ControlLabel,FormControl} from "react-bootstrap";

class Timeline extends Component  {
  constructor(props) {
    super(props) 
    this.state = { 
      apiResponse: [],
      text: "" 
    };
 }

 callTimelineApi() {
  fetch("http://192.168.0.6:3000/getTimeline")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }));
  }

  callDeleteApi(tweetid){
    fetch("http://192.168.0.6:3000/deleteTweet/"+tweetid)
      .then(res => res.json());
  }

  componentWillMount() {
    this.callTimelineApi();
  }

 renderTableData() {
  return this.state.apiResponse.map((response, index) => {
     const { id, created_at, text } = response 

     return (
        <tr key={id}>
           <td>{created_at}</td>
           <td>
            <Col>{text}</Col>
            <Row>{id}</Row>
           </td>
           <td><button onClick={() => this.callDeleteApi(response.id)}>
              Delete
              </button>
            </td>
        </tr>
     )
  })
}
delete(){
  alert("checking");
}
  render() {
    return (
      <form>
        <div className="GetTweets">
        <textarea
              rows="5"
              cols="60"
              type="text"
              name="text"
              placeholder="Tweet to the world!"
              value={this.state.text}
            />
          <button>
              Tweet
            </button>
      </div>
      <div className="Timeline">
        <div className="lander">
          <h1>Timeline</h1>
          <table>
            <col width="250"/>
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