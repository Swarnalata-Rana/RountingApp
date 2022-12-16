import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Nav extends Component{
    render(){
        return(
            <div>
                <nav >
                    <Link to="/">App</Link> &nbsp;&nbsp;
                    <Link to="/home">Home</Link> &nbsp;&nbsp;
                    <Link to="/aboutus">Aboutus</Link> &nbsp;&nbsp;
                    <Link to="/login">Login</Link> &nbsp;&nbsp;
                    <Link to="/product">Product</Link> &nbsp;&nbsp;
                    <Link to="/employee">Employee</Link> &nbsp;&nbsp;
                </nav>
            </div>
        )
    }
}
export default Nav;