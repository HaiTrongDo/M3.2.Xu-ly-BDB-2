let iDontHaveAGirlfriend = "I Don't have a girlfriend";
let goGetAGirlfriend = "Go get a girlfriend first"
let iHaveAGirlfriend = "I have a girlfriend";
let iHaveMarriedMyGirlfriend = "I have married my girlfriend";
let weHaveTheFirstChild = "we have the first child";
let weHaveSecondChild = "we have second child";

/*
 function haveAGirlfriend(string) {
    return new Promise(((resolve, reject) => {
        if (string === iHaveAGirlfriend) {
            console.log(iHaveAGirlfriend)
            resolve(iHaveMarriedMyGirlfriend)
        } else {
            console.log(iDontHaveAGirlfriend);
            reject(goGetAGirlfriend)
        }

    }))
}

haveAGirlfriend(iHaveAGirlfriend).then((result) => {
    console.log(result);
    return weHaveTheFirstChild
}).then((result) => {
    console.log(result);
    return weHaveSecondChild
}).then((result) => {
    console.log(result);
}).catch(err => {
    console.log(err)
})
*/


haveAGirlfriendUsingAsync(iDontHaveAGirlfriend)
async function haveAGirlfriendUsingAsync(string) {
    try{
        if (string === iHaveAGirlfriend ){
            await showInConsole(iHaveAGirlfriend)
            await showInConsole(iHaveMarriedMyGirlfriend)
            await showInConsole(weHaveTheFirstChild)
            await showInConsole(weHaveSecondChild)
        } else {
            await showInConsole(iDontHaveAGirlfriend)
            throw new Error(goGetAGirlfriend)
        }
     } catch(e){
        console.log(e.message)
    }
}

function showInConsole(input){
    console.log(input)
}

