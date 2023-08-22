const numbers = [];

for (let i = 0; i <= 1000; i++) {
    if(isEven(i)){
        numbers.push(i)
    }
}

function isEven(value){
    return value % 2 === 0;
}


const array = [];

for (let i = 0; i < numbers.length; i++ ){
    if(i % 3 === 0){;
    array.push(i)
    };
}


const stepen = array.map(function(value, index){
    return value ** 2;
   
});


const getIndex = stepen.indexOf(324);

console.log(getIndex);

// njbuibyuvqyub
