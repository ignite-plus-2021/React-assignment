import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import homeAnime from './../../assets/home_anime.gif'
import "./Home.css"

class Home extends Component{
    // maintain the state of the modal componanet
    // state={showModal:false};

    // Modal should be visible every time we load the home page
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({showModal:true});
    //     },1000
    //     );
    // }
    // close model 
    // closeModal=()=>{
    //     this.setState({showModal:false});
    // }

    render(){
        return (
            <div className="home-container">
                <div className="header-text">
                    <h1>Welcome to my portfolio!</h1>
                    <p>This is Shraddha Durge, a Web Developer and a programmer !</p>
                </div>
                <div className="head-btns">
                    <Link to="/about" className="btn btn-white">
                        <p className="btn-text">Know more about me</p>
                    </Link>
                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-text">Connect with me</p>
                    </Link>
                </div>
                <div className="splash-image">
                    <img
                    className="home-anime"
                    src={homeAnime}
                    alt="Anime">
                        
                    </img>
                    
                </div>
            </div>
        )
    }
}
export default Home;