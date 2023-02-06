// // function arr(n){
// //     var arr=[];
// //     for(var i=1; i<n;i++){
// //         arr.push(i)
// //     }
// //     return arr
// // }

// // console.log(arr(8))

// function arr(n){
//     var arr = [];
//     for( var i = 1 ; i<=n ; i++){
//         arr.push(i)       
//     }
//     return arr
// }

// console.log(arr(8));

// function arr_evenn(arr){
//     var count=0
//     for(var i=0; i<arr.length;i++){
//         if(arr[i]%2==0){
//             console.log(arr[i])
//             count++
//         }   
//     }
//     return count
// }

// console.log(arr_evenn([5, 5, 1, 81, 141, 34,45, 76]))

// var str="hello classes this is a JS"
// var str1 = str.split(" ")
// var long_word=0
// for(var i=0; i<str1.length;i++){
//     if((str1[i].length)>long_word){
//         long_word=str1[i].length

//     }
// }
// console.log(long_word)

function word_len(arr){
    var arr1=arr.split(" ")
    console.log(arr1)
    var long_wrd=0;
    for(var i=0;i<arr1.length;i++){
        if((arr1[i].length)>long_wrd){
        long_wrd=arr1[i].length
    }
    }
    return long_wrd
}
var len=word_len("This is array class at the hacking school");
console.log(len)

