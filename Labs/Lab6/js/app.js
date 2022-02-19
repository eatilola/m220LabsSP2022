
for(let x = 0; x < 11; x++){
    console.log("The #'s forwards:" + x);
}

for(let y = 10; y > 0; y--){
    console.log("The #'s backwards:" + y);
}

let i = 0;
fib1 = 0;
fib2 = 1;
while(i < 20){

    if(i == 0){
        fibS = 0;
        console.log("Fib Sequence:"+fibS);
    }
    else if(i == 1){
        fibS = 1;
        console.log("Fib Sequence:"+fibS);
    }
    else{
        fibS = fib1 + fib2;
        console.log("Fib Sequence:"+fibS);
        fib1 = fib2;
        fib2 = fibS;
    }
    i++;
}

let words1 = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ];

for(let q = words1.length; q>=0;q--){
    console.log(words1[q]);
}
let words2 = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ];

for(let z = 0; z<words2.length ;z++){
    console.log(words2[z].toUpperCase());
}

for(let v = 0; v<words2.length ;v++){
    console.log(words2[v]+" Yeah!");
}