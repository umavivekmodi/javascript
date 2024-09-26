
// fetch is a exciting feacture of javascript ,  js before its in browser but
//  in node js we use fatch all paradime are changed..


fetch('https://github.com/hiteshchoudhary')
.then((response)=>{
return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))