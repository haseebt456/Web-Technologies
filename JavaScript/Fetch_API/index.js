
const Addrecipe = async ()=>{
    let options = {
        method: 'POST',
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify({
            title: "How to make tea",
            body: "Add milk then tea and sugar and cook untill it boils"
        })
    }
    let p = await fetch("https://usman-fake-api.herokuapp.com/api/recipes",options);
    let response = await p.json();
    return response;
};

const mainFunc = async ()=>{
    let recipe=await Addrecipe();
    console.log(recipe);
}
mainFunc();