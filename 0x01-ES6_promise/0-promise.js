function getResponseFromAPI()
	return new promise((resolve, reject) => {
     //simulating an asynchronous API call
   setTimeout(() => {
  //assuming API call is successfull

  const response = "this is the API response";
  resolve(response);
  
     // Assuming there was an error in the API call
      // const error = "Error occurred during API call";
      // reject(error);
    }, 2000); // Simulating a 2-second delay
  });
}
