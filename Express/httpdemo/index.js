const http= require("http");

http.createServer((req,res) =>{

    switch (req.url)
    {
        case "/":
            res.write("<h1>Home Page</h1>");
            break;
        case "/hobbies":
            res.write("<h1>My Hobbies</h1>");
            break;
        default:
            res.write("<h1>404<br>page not found</h1>");
        break;
    }
    res.end();
    }).listen(8080);


//we will not code with http module
//we will use express in place of this