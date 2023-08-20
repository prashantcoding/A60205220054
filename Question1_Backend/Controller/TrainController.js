
const axios = require('axios');

const requestData = {
    "companyName":"Train Central",
    "ownerName":"Prashant Goswami",
    "rollNo":"A60205220054",
   
    "ownerEmail":"prashant.teachies@gmail.com",
    "clientID":"6d41c508-5e53-429e-890a-a2591855b50c",
    "clientSecret":"MYZTPdmDAVCuvQut"
};

const apiRequest = {
  method: 'post', // Change to the desired HTTP method (get, post, put, delete, etc.)
  url: 'http://20.244.56.144/train/auth',
  
  data: requestData,
};


  

const getData=async(token)=>{
    const GetTrainData = {
        method: 'get', // Change to the desired HTTP method (get, post, put, delete, etc.)
        url: 'http://20.244.56.144/train/trains',
        
        data: requestData,
        headers: {
            'Authorization': `Bearer ${token}`,
           
          },
      };
     
    const res=await axios(GetTrainData);
    const Tdata=res.data;
    return Tdata;
}

const Trains = async (req, res) => {
    const resData=await axios(apiRequest);
    let TrainData=await getData(resData.data.access_token);
    console.log(TrainData);
    res.json(TrainData)

    
};



module.exports = { Trains };
