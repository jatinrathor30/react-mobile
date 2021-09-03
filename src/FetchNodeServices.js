var ServerURL="http://localhost:5000"
var axios=require("axios")


const getData = async (url) => {
    try {
      const response = await fetch(`${ServerURL}/${url}`);
      const result = await response.json();
      return result;
    } catch (e) {
      return null;
    }
  };

  const postData=async(url,body)=>{
    try{
      const response=await fetch(`${ServerURL}/${url}`,
      {method:"POST",mode:"cors",
       headers:{"Content-Type":"application/json;charset=utf-8"},
       body:JSON.stringify(body)
      })
      const result=await response.json()
      
      return result
      
    }catch(e){
         console.log(e)
     return null
   
    }
}
const postDataAndImage=async(url,formData,config)=>{
  try{
     var response=await axios.post(`${ServerURL}/${url}`,formData,config)
     
     const result=await response.data.RESULT 
     return (result)
    
  }
  catch(e){
    
    return null
  }}




  export{ServerURL,getData,postData,postDataAndImage}