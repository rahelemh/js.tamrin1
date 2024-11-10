let asami=["mohammad","saghar","ahmad","kobra","nazi","mani","soghra","hana","rahele"];

function getname(){
let names=prompt("give me aname:");
asami[asami.length]=names
console.log(asami)

}


let nums=[0]

for(let i=1;i<10;i++){
    let addad=parseFloat(prompt("give me a number"));

    nums.push(+addad)
}

function bozorgi(){
let maxnum=Math.max(...nums);
let minnum=Math.min(...nums);
console.log("the biggest number is:"+maxnum+ "   and the smallest number is:" + minnum) ;

}
bozorgi()
