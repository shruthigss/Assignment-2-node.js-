let reline = require("readline");

const rl = reline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("What is ur name",(ans)=>{
    console.log("Hello"+" "+ans);
    rl.close();
})