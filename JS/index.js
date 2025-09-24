// console.log("Hello World");

// var a;
// console.log("a="+a);
// var a=16;

// var a=40;
// if(a>10){
//     var a=100;
//     console.log("a Inside:"+a);
// }
// else{
//     console.log("else condition");
// }
// console.log("a Outside:"+a);

// let a='20';
// if (a==20) {//Works on the value
//     console.log("Equal Data");
// }
// else{
//     console.log("NOt Equal");
    
// }
// if (a===20) {//Works on type of value
//     console.log("Equal Data");
// }
// else{
//     console.log("NOt Equal");
    
// }
// const myname="Aryan";
// console.log("Hiiiii....."+myname);
// const data=`Hello...${myname}`;
// console.log(data);

// function msg(name) {
//     return name+", Welcome to JS";
// }
// const data1=msg("Aryan");
// console.log(data);

// const data=function msg(name){
//     return name+", Welcome to JS";
// }
// const msg=data("Aryan");
// console.log(msg);

// const data=(myname)=>{
//     // console.log("Hiiii... Helllooo "+myname);
//     return "Hiiii... Helllooo "+myname;
// }
// // data("Aryan")
// const result=data("Aryan");
// console.log(result);

// const data=msg=>msg;
// console.log(data("Greetings..."));

// (function () {
//     console.log("welcome to JS");
// })();

// (()=>{
//     console.log("Welcome to JS");
// })();

// setTimeout(()=>{
// console.log("Hiii... I am using Timeout");

// },1000);

// setInterval(()=>{
//     console.log("How r u");
// },1000);

// function greetings(msg="Welcome") {
//     console.log("Hiii... "+msg);
// }
// greetings();

function selectlanguage(lang) {
    let data;
    if (lang=='Java') {
        function javaCompiler() {
            console.log("Java Compiler selected");
            
        }
        data=javaCompiler();
    }
    else if (lang=='C') {
        function cCompiler(){
            console.log("C Compiler selected");
            
        }
        data=cCompiler();
    }
    else{
        console.log("No such compiler available");
    }
}
selectlanguage('Python');