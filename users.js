let num1 =4
let num2 =12
document.getElementById("numone").textContent = num1
document.getElementById("numtwo").textContent = num2
let sumEl=document.getElementById("sum-el")

function add(){
let result=num1+num2
sumEl.textContent = "Sum:" + result

    
}
function multiply(){
    let result=num1*num2
    sumEl.textContent = "Sum:" + result
    
        
    }
function subtract(){
        let result=num1-num2
        sumEl.textContent = "Sum:" +result
        
            
        }
function divide(){
            let result=num1/num2
            sumEl.textContent = "Sum:" + result
            }
    let problemError=document.getElementById("problem-prompt")
    let problemSolution=document.getElementById("solution-prompt")
            function problem(){
                console.log("button clicked")
                problemError.textContent="Oops guess this one causes issues?!?!?!?"
            }
            function noproblem(){
                console.log("test")
                problemSolution.textContent="Oops guess this one doesnt do anything!?!?!?!?!?! :)"
            }
           