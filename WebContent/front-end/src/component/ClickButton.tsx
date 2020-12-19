import React,{Component} from "react";
import {inject,observer} from "mobx-react";
import axios from "axios";
import { IContactStore } from "../stores/IContactStore";

type Props ={
    contactStore?:IContactStore;
}

@inject("contactStore")
@observer
class ClickButton extends Component<Props, {}>{
    apiTestBtn=()=>{
        //TODO 서버를 연결 시키고 나서 데이터를 받아오지 못할때 contactStore뒤에 ? 가 영향이 있는지 확인학기
        //contactStore뒤에 ? 가 무슨 동작을 하는건지 찾기
        this.props.contactStore?.ApiTest();
    } 

    // testApi = async()=>{
    //     try{
    //         const apiData = await axios.get('http://localhost:8081/springMVCXml/');
    //         return console.log(apiData);
    //     }catch(error){  
    //         console.log(":::error::::",error);
    //     }
    // }
    componentDidMount(){
        // this.testApi();
    }

    

    render(){

        return(
            <div>
                hyoju
                {/* <button onClick={this.apiTestBtn}>API button</button> */}
            </div>
        );
    }
}

export default ClickButton;