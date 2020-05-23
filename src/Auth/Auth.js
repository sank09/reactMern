import Cookies from 'js-cookie'

export const Auth = {
  
  
    authenticate(cb,jwttoken) {
      const token=Cookies.get("token");
     
      if(!token){
        
        Cookies.set("token",jwttoken);  
        }
       cb(true)

    },
    signout(cb) {
    
      Cookies.remove("token");
      cb()
   
    }
  
};

