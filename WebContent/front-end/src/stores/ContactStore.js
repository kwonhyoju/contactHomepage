import { observable, action } from "mobx";
import axios from "axios";

class ContactStore{
    // @observable
    
    // api = axios.create({
    //   baseURL: "http://localhost:8080",
    //   timeout: 30000,
    // });


    @action 
    ApiTest(){
      let test = 'http://localhost:8081/springMVCXml/api';
      axios.get(test).then((data)=>{
        console.log(":::DATA 확인::::",data);
      }).catch(error=>{
        console.log(":::A:::",error);
        
      })
    }
}

export default ContactStore;