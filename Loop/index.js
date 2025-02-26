let arry=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
arry.forEach((element) => {
    sum+=element;
})

console.log("sum",sum);

let arry1=[1,2,3,4,5,6,7,8,9,10];
let sum1=0;



for (let i =0,len=arry1.length;i<len;i++) {
    sum1+=arry1[i];
}
console.log("sum1",sum1);


let arry3=[10,20,30,40,50,60,70,80,90,100];
let sum3=0;


for(let num of arry3){
    sum3+=num;
}
console.log("sum3",sum3);
