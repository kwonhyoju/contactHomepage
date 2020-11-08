import React,{Component} from "react";
import {inject,observer} from "mobx-react";
import axios from "axios";

@inject("contactStore")
@observer
class Button extends Component{
    //버튼을 누르면 stores/contactStore.js 안에 있는 ApiTest함수를 불러와 실행 시킨다.
    apiTestBtn=()=>{
        this.props.contactStore.ApiTest();
    } 

    testApi = async()=>{
        try{
            const apiData = await axios.get('http://localhost:8081/springMVCXml/');
            return console.log(apiData);
        }catch(error){  
            console.log(":::error::::",error);
        }
    }
    componentDidMount(){
        this.testApi();
    }

    

    render(){

        return(
            <div>
                <button onClick={this.apiTestBtn}>API button</button>
            </div>
        );
    }
}

export default Button;