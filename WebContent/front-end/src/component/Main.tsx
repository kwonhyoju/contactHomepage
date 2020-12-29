import React,{Component} from 'react';
import backImg from "../images/image 11.png";

type Props ={

};

class Main extends Component<Props,{}>{
    render(){
        return(
            <div>
                <div className="all-wrap">
                    <div className="main_container">
                        <div className="title">
                            <p>Frontend Developer</p>
                            <p>Kwonhyoju</p>
                        </div>
                        <div className="contents">
                            <div>
                                <img src={backImg} alt="FrontEnd-Kwonhyoju"/>
                            </div>
                            <div>
                                <div>
                                    <p>About me</p>
                                    <p>this is description</p>
                                    <button>Go To Page</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;