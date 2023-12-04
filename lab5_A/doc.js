//#1
function max1(a1,a2){
    if(a1>a2){
    console.log(a1);
    }
    else
    console.log(a2)
    }
    max1(2,3);




    //#2
    function max(arg3,arg4,arg5){
    if(arg3>arg4&&arg3>arg5){
    console.log(arg3);
    }
    if(arg4>arg3&&arg4>arg5){
    console.log(arg4);
    }
    else{
    console.log(arg5);
    }
    }
    max(2,3,4);


    //#3
    function vowel(arg6){
    if(arg6.length=1 )
    if(arg6=="a"||arg6=="e"||arg6=="o"||arg6=="i"||arg6=="u")
    return true;
    return false;
    }
    console.log(vowel('aj'));



    //#4
    console.log(vowel('e'));
    function sumadd(arg7){
    let sum=0;
    let mulipty=1;
    for (let index = 0; index < arg7.length; index++) {
    sum+=arg7[index];
    //if(index<arg7.length-1){
    //mulipty*=arg7[index]*arg7[index+1];}
    mulipty*=arg7[index];
    }
    console.log(sum);
    console.log(mulipty);
    }
    arg7=[1,2];
    sumadd(arg7);



    //#5
    function reverse(arg8){
    let str='';
    for(let i=arg8.length-1;i>=0;i--){
    str+=arg8[i];
    }
    return str;
    }
    console.log(reverse('name'));



    //#6
    function maxlength(arg9){
    let max=arg9[0].length
    for(let i=1;i<arg9.length;i++){
    max=arg9[i].length;
    }
    return max;
    }
    let arg9=['adonay','misg','nahomaa'];
    console.log(maxlength(arg9));



    //#7
    function filterlongwords(arg,num){
    let newarray=[];
    for(let i=0;i<arg.length;i++){
    if(arg[i].length>num){
    newarray+=arg[i]+" ";
    }
    }
    return newarray;
    }
    let arg=['ado','misg','df']
    let num=2;
    console.log(filterlongwords(arg,num));



    //#8
    function computeSumOfSquares(numbers) {
    return numbers.reduce((sum, num) => sum + num ** 2, 0);
    }
    const result = computeSumOfSquares([1, 2, 3]);
    console.log(result); 




    //#9
    function printoddnymbers(arr){
    let reultArr=[];
    for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
    reultArr.push(arr[i]);
    }
    }
    return reultArr;
    }
    let arr=[2,3,4,5];
    console.log(printoddnymbers(arr));




    //#10
    function computeSumOfSquaresOfEvens(array){
    let reultArr1=[];
    for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
    reultArr1.push(array[i]);
    }
    }
    return reultArr1.reduce((sum,index)=>sum+index**2,0);
    }
    let array=[1,2,3,4];
    console.log(computeSumOfSquaresOfEvens(array)); 



    //#11
    function sum(ag){
    return ag.reduce((sum,index)=>sum+index,0);
    }
    function multipty(ag1){
    return ag1.reduce((product,index)=>product*index,1);
    }
    let ag=[2,3,4];
    let ag1=[2,3,4];
    console.log(sum(ag));
    console.log(multipty(ag1));



    //#12
    function printFibo(n, a, b) {
    let fib = [a, b];
    for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib.join(", "));
    }
    printFibo(6,0,1)

