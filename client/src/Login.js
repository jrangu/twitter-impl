import React,{Component} from "react";
import "./Login.css";
import { LinkContainer } from "react-router-bootstrap";
import { Button} from "react-bootstrap";
import { link } from "fs";

class Login extends Component{
  handleSubmit = async event => {
    event.preventDefault();
  }
  render(){
    return (
      <div className="Login">
        <div className="lander">
          <form>          
              <Button
                block
                bsSize="small"
                type="submit"
                href = "/timeline">
                Login
              </Button>             
            </form>
        </div>
      </div>
    );
  }
}
export default Login;