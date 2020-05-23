import {node_path} from '../Utility/constant';



export const LoginCall= async (data)=>{
   
     let user = {
        "email":data.email,
        "password":data.password
      };
      
     try{

        let response = await fetch(`${node_path}/api/users/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
          });
          
          let result = await response.json();

          return result;
     }
     catch(err){

        console.log(err)
        return 0;
     } 
    
  

}
export const RegisterCall=async (data)=>{

    let user = {
        "name":data.name,
        "email":data.email,
        "password":data.password
      };

      try{
            let response = await fetch(`${node_path}/api/users/register`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            });
            
            let result = await response.json();

            return result;
      }
      catch(err){
                console.log(err)
                return 0;
      }

      
}