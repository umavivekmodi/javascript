// for loop

for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if (element == 5) {
        // console.log("five is best number");
    }
    // console.log(element);
    
}



// for (let index = 0; index <= 10 ; index++) {
//     const element = index;
//     console.log(element);
    
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j < 10; j++) {
//     console.log(`inner loop value : ${j} and inner loop :${i}`);
        
//     }
    
// }




for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value : ${j} and inner loop :${i}`);
    // console.log(i + `*` + j + '=' + i*j);
        
    }
    
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// key words 
// break and continue

// for (let i = 1; i <= 20 ; i++) {
//     if (i ==5) {
//         console.log(`Detected 5`);
//         break;        
//     }
//     console.log(`value of i is ${i}`);
    
// }




//continue
for (let i = 1; i <= 20 ; i++) {
    if (i ==5 || i==10 || i==15 || i==20) {
        console.log(`value is detected ${i}`);
        continue;        
    }
    console.log(`value of i is ${i}`);
    
}



