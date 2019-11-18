var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('How many lines are we going to query ', (answer) => {
    if (Number.isInteger(parseInt(answer))){
        var inputArray =[]
        for(var i =0; i<parseInt(answer);i++){
            console.log(i)
            rl.question('enter your string', (reply) =>{
                console.log("the reply is",reply)
                inputArray.push[reply]
            });
        }
        console.log(inputArray)
    }else
    rl.close();
  });
// rl.setPrompt('how many lines are we going to query');
// rl.prompt();
// var nbrOfLine = 0
// var inputArray =[]
// rl.on('line', function(line) {
//     if (Number.isInteger(parseInt(line))){
//         nbrOfLine =line;
//         for(var i =0; i<nbrOfLine;i++){
//             console.log(i)
//             rl.setPrompt("enter your string");
//             rl.prompt();
//             rl.on('line',()=>{
//                 inputArray.push[line]
//             })

//         }
//         console.log(inputArray)
//     }
//     else rl.close();
// }).on('close',function(){
//     process.exit(0);
// });