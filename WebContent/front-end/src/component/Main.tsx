import React, { Component } from "react";
import developer from "../images/developer.jpg";
import "../scss/Main.scss";

class Main extends Component{
    render(){
        return(
            <div className="main-container">
                <div className="main">
                    <p className="subtitle">Frontend Developer</p>
                    <p className="title">Hong gildong</p>
                    <div className="content-container">
                        <div className="image">
                            <img src={developer} alt="developer image"/>
                        </div>
                        <div className="btn-list">
                            <div className="btn"><p className="btn-title">About me</p></div>
                            <div className="btn"><p className="btn-title">Potfolio</p></div>
                            <div className="btn active">
                                <p className="btn-title">Skills</p>
                                <p className="btn-description">2019-2020동안 배워왔던 주요기술과 툴들을 정리한 카테고리</p>
                                <button>Go to Page
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22ZM11 20C15.9706 20 20 15.9705 20 11C20 6.02941 15.9706 1.99997 11 1.99997C6.02943 1.99997 1.99999 6.02941 1.99999 11C1.99999 15.9705 6.02943 20 11 20ZM6 12H12.5858L10.2929 14.2929L11.7071 15.7071L16.4142 11L11.7071 6.29289L10.2929 7.70711L12.5858 10H6V12Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="btn"><p className="btn-title">Contact</p></div>
                            <div className="btn"><p className="btn-title">Blog/Notion</p></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;