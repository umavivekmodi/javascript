
// fetch is a exciting feacture of javascript ,  js before its in browser but
//  in node js we use fatch all paradime are changed..

// A fetch() promise only rejects when the request fails, for example,
//  because of a badly-formed request URL or a network error. 
// A fetch() promise does not reject if the server responds with HTTP status codes 
// that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.
// ok and/or Response.status properties.


fetch('https://github.com/hiteshchoudhary')
.then((response)=>{
return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))