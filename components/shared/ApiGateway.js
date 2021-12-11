import React from 'react';

export default class RestApi{
   
    
    fetchDataByPost = async(url, data) => {
        let response = await fetch(url, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        
        var resultSet;
        (response.ok) 
         ? resultSet = await response.json()
         : resultSet = "HTTP-Error: " + response.status;
        return resultSet;

      }


  fetchDataByGet = async(url, data) => {
     var submittedData;
     (data.length > 0)
     ? submittedData = JSON.stringify(data)
     : submittedData = {};
      const response = await fetch(url, {
          method:'GET',
          data:submittedData,
        });
        return await response.json();
 
     }

  

      render(){
          return null;
      }



}