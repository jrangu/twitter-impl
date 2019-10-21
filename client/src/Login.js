import React,{Component} from "react";
import "./Login.css";
import { Button} from "react-bootstrap";

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