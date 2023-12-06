
const Addrecipe = async (resipe)=>{
    let options = {
        method: 'POST',
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify(resipe)
    }
    let p = await fetch("https://usman-fake-api.herokuapp.com/api/recipes",options);
    let response = await p.json();
    return response;
};
const getRecipe = async (_id)=>{
  
    let p = await fetch("https://usman-fake-api.herokuapp.com/api/recipes"+_id);
    let response = await p.json();
    return response;
}
const mainFunc = async ()=>{
    /* let resipe = {
        title:"How to make Coffee",
        body: "Add hot milk to cup and add coffe and mix it for 2 min"
    };
    let recipe=await Addrecipe(resipe);
    console.log(recipe); */
   console.log(getRecipe("65708b18b06efd0014dee8ba"));
}
mainFunc();