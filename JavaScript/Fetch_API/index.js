
const Addrecipe = async (resipe)=>{
    let options = {
        method: 'POST',
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify(resipe)
    }
    let p = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/S83UAltkfWmJPSLpFDoC/scores/",options);
    let response = await p.json();
    return response;
};
const getRecipe = async (_id)=>{
  
    let p = await fetch("https://usman-fake-api.herokuapp.com/api/recipes"+_id);
    let response = await p.json();
    return response;
}

const mainFunc = async ()=>{
    let resipe = {
        user:"Shan Masood",
        score: "159"
    };
    let recipe=await Addrecipe(resipe);
    console.log(recipe);
}
mainFunc();