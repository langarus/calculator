function splitStringByNum(a){
    finalArr = []
    tempString = ""

    for(let x in a){
        if(!isNaN(a[x]) || a[x] == "." ){
            // finalArr.push(a[x])
            tempString += a[x]
        }else{
            if(tempString){
            finalArr.push(tempString)
            tempString = ""
        }}
        }
    if (tempString){
        finalArr.push(tempString)
    }
return finalArr[finalArr.length -1]
}

function splitStringByNumAll(a){
    finalArr = []
    tempString = ""

    for(let x in a){
        if(!isNaN(a[x]) || a[x] == "." ){
            // finalArr.push(a[x])
            tempString += a[x]


        }else{
            if(tempString){
            finalArr.push(Number(tempString))
            finalArr.push(a[x])
            tempString = ""
        }}
        }
    if (tempString){
        finalArr.push(Number(tempString))
    }
return finalArr
}

function calculate(operator, tempIndex, myArray){
    let tempNum = 0
    if (operator == "*"){
        tempNum = myArray[tempIndex-1] * myArray[tempIndex+1]
    }
    else if (operator == "/"){
        tempNum = myArray[tempIndex-1] / myArray[tempIndex+1] 
    }
    else if (operator == "+"){
        tempNum = myArray[tempIndex-1] + myArray[tempIndex+1]
    }else{
        tempNum = myArray[tempIndex-1] - myArray[tempIndex+1]
    }
    return tempNum      
}

function finalCalculation (myArray){
    const length = parseInt(myArray.length/2) - 1
    for (i = 0; i <= length; i++){
        const indexOp1 = myArray.indexOf("*")
        const indexOp2 = myArray.indexOf("/")
        const indexOp3 = myArray.indexOf("+")
        const indexOp4 = myArray.indexOf("-")
        let tempIndex = 0
        let operator = ""
        let tempNum = 0
    
        //check to see if I have both of them
        //check who is myArray
        if (myArray.includes("*") && myArray.includes("/")){
            if (indexOp1 == Math.min(indexOp1, indexOp2)){
                operator = "*"
                tempNum = calculate(operator, indexOp1, myArray)
                myArray.splice(indexOp1 -1, 3)
                myArray.splice(indexOp1 -1, 0, tempNum)
                //document.write(myArray, "<br>")
    
            }else{
                operator = "/"
                tempNum = calculate(operator, indexOp2, myArray)
                myArray.splice(indexOp2 -1, 3)
                myArray.splice(indexOp2 -1, 0, tempNum)
                //document.write(myArray, "<br>")
    
    
            }
    
        }else if(myArray.includes("*")){
            operator = "*"
            tempNum = calculate(operator, indexOp1, myArray)
            myArray.splice(indexOp1 -1, 3)
            myArray.splice(indexOp1 -1, 0, tempNum)
            //document.write(myArray, "<br>")
    
        }else if(myArray.includes("/")){
            operator = "/"
            tempNum = calculate(operator, indexOp2, myArray)
            myArray.splice(indexOp2 -1, 3)
            myArray.splice(indexOp2 -1, 0, tempNum)
            //document.write(myArray, "<br>")
    
        }else if (myArray.includes("+") && myArray.includes("-")){
            if (indexOp3 == Math.min(indexOp3, indexOp4)){
                operator = "+"
                tempNum = calculate(operator, indexOp3, myArray)
                myArray.splice(indexOp3 -1, 3)
                myArray.splice(indexOp3 -1, 0, tempNum)
                //document.write(myArray, "<br>")
            }else{
                operator = "-"
                tempNum = calculate(operator, indexOp4, myArray)
                myArray.splice(indexOp4 -1, 3)
                myArray.splice(indexOp4 -1, 0, tempNum)
                //document.write(myArray, "<br>")
    
    
            }
        }else if(myArray.includes("+")){
            operator = "+"
            tempNum = calculate(operator, indexOp3, myArray)
            myArray.splice(indexOp3 -1, 3)
            myArray.splice(indexOp3 -1, 0, tempNum)
            //document.write(myArray, "<br>")
        }else{
            operator = "-"
            tempNum = calculate(operator, indexOp4, myArray)
            myArray.splice(indexOp4 -1, 3)
            myArray.splice(indexOp4 -1, 0, tempNum)
            //document.write(myArray, "<br>")
    
        }
    
    }
    return myArray
    }
    
function convert(myArray){
    let changed = []

    for(let j = 0; j < myArray.length; j++) {
    if (!isNaN(myArray[j])){
    changed.push(Number(myArray[j]))
    }
    else{changed.push(myArray[j])}
    
    }
    return changed
    }

document.addEventListener("DOMContentLoaded", (event) => {
    const button = document.querySelectorAll("button");
    const screen = document.querySelector(".calculator-screen");
    screen.value = "0"


    button.forEach(btn => {
        btn.addEventListener("click", function(){
            if (btn.value == "all-clear"){
                screen.value = "0"

            }else if (btn.value == "."){
                if (!isNaN(screen.value.slice(-1)) && 
                !splitStringByNum(screen.value).includes(".") ){
                    screen.value += btn.value
                }else if("-+*/".includes(screen.value.slice(-1))){
                    screen.value += "0."
                }

            

            }else if (screen.value == "0" && btn.classList == "operator"){
                        return;
                        
            
            }else if(btn.value == "="){
                // screen.value = finalCalculation(screen.value)
                let myArray = splitStringByNumAll(screen.value)
                // screen.value = 0
                screen.value = finalCalculation(myArray)
            
            
            }else if ("-+*/".includes(screen.value.slice(-1)) && "-+*/".includes(btn.value)){ 
                return;
            

            }else if (screen.value == "0"){
                screen.value = btn.value

            }else{
                    screen.value += btn.value;

                }              
                
                
            })   


        })



    })