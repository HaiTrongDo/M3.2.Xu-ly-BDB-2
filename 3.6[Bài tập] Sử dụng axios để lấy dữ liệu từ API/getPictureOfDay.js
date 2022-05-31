const axios = require("axios");

// function getAPI(){
//     return new Promise(function (resolve){
//         axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//             .then((json)=>{
//                 resolve(json.data)
//             })
//     })
// }
//
// getAPI().then(result => {
//     console.log(result);
// })


async function getAPIAsync(){
    let json = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        return json.data
}

getAPIAsync().then((result)=>{console.log(result)})