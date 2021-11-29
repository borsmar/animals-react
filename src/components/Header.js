import React, {Component} from "react";
import Nav from "./Nav";

class Header extends Component{


    render(){
        return(
        <div class="header">
            <h1>Animals Task</h1>
            <Nav />
        </div>
        )
    }
}

export default Header;