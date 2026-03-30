// 1 - masala
// let number = prompt("son kiriting");
// // let number = 10;


// if (number / 2 +1 && number < 2 -2 ) {
//     alert("tog'ri son")
    
// } else {
//     alert(" no togri son")
// }
// console.log(number);


// let a = +prompt("son kiriting");

// if (a >0) {
//     alert( a +1)
    
// } else if (a < 0){
//     alert(a -2)
    
// }


// 2 - masala
// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let c = +prompt("c sonini kiriting");


// if ( a > 0 && b > 0 && c > 0 ) {
//     alert(" son musbat")
    
// } else if (a < 0 && b < 0 && c < 0){
//     alert("son manfiy")
    
// }





// 3 - masala
// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let c = +prompt("c sonini kiriting");


            // if (a <= b && a <= c) {
              
            // } 
            // else if (b <= a && b <= c) {
               
            // } 
            // else {
          
            // }

            
            // if (a >= b && a >= c) {
              
            // } 
            // else if (b >= a && b >= c) {
                
            // } 
            // else {

                // AI ishladi
              
            // }


            // if (a <= 10 && b <= 10 && c<= 10) {
            //     alert("kichik son")
                
            // } else if (a>= 10 && b >= 10 && c >= 10){
            //     alert("katta son") 

                // ozim ishladim 

            // }







// 4 - masala
// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let c = +prompt("c sonini kiriting");

// if (a=== b) {
//     alert(1)
    
// } else if (a===c){
//     alert(2)
    
// }
// else if (c === b){
//     alert(3)

// }
// else{
//     console.log(a , b ,c);
    
// }




// 5 - masala
// let x = +prompt("son kiriting");

// if (x < -2 || x > 2) {
//     alert(x * 2)
    
// } else {
//     alert(-3 * x)
    
// }

// 6-masala
// manfiy sonlar ishlamayapti

// let number = prompt("son kiriting");
//  if (number<=1) {
//     alert(" musbat toq")
    
//  } else if ( number  % 2 === 0){
//     alert("musbat juft")

    
//  }
//  else if (number === 0) {
//     alert("nol")

//  }
//  else if (number % -2 === 0 ){
//     alert("manfiy juft")

//  }
//  else if ( number % -1 === 0){
//     alert("manfiy toq")
//  }
    



// 7 - masala

// let hafta = +prompt("hafata kunini kiriting");

// switch (hafta) {
//     case 1:
//         hafta = " dushanba"
        
//         break;

//         case 2:
//             hafta = "seshanba"
//         break;

//         case 3:
//             hafta = "chorshanba"
//             break;
//             case 4:
//                 hafta = "payshanba"
//                 break;
//             case 5:
//                 hafta = "juma"
//                 break;
//                 case 6:
//                 hafta = "shanba"
//                 break;
//                 case 7:
//                     hafta = "yakshanba"
//                     break;



//                     console.log(hafta);
// }


// case 2 masala

// let amal = +prompt("son kiriting 1 dan 4 gacha bo'gan son kiriitng");

// let result;

// if (amal === 1) {
//   result = A + B;
// } else if (amal === 2) {
//   result = A - B;
// } else if (amal === 3) {
//   if (B === 0) {
//     console.log("0 ga bo‘lish mumkin emas");
//   } else {
//     result = A / B;
//   }
// } else if (amal === 4) {
//   result = A * B;
// } else {
//   console.log("Noto‘g‘ri amal kiritildi");
// }

// if (result !== undefined) {
//   console.log("Natija:", result);
// }



// let nyumber = +prompt("son kitriting");

// if (nyumber >= 0 ) {
//     alert( nyumber=nyumber +1)
    
// } else {
//     alert("ozgarmadi")
    
// }
// console.log();







// let a = +prompt("a sonini kiriting");

// if(a > 0){
//     a = a + 1;

// }
// console.log(a);


// let number = +prompt("son kiriting");

// if (number > 0) {
//     alert(number= number +1)
    
// } else if ( number < 0 ) {
//     alert( number = number -2)
    
// }
// else if (number = 0){
//     alert(10)

// }


// 3 - masala
// let a = +prompt("a sonini kiriting:");
// let b = +prompt("b sonini kiriting:");
// let c = +prompt("c sonini kiriting:");

// let musbat = 0;
// let manfiy = 0;

// // Har bir sonni alohida tekshiramiz
// if (a > 0) musbat++;
// else if (a < 0) manfiy++;

// if (b > 0) musbat++;
// else if (b < 0) manfiy++;

// if (c > 0) musbat++;
// else if (c < 0) manfiy++;

// // Natijani chiqarish
// console.log("Musbat sonlar:", musbat);
// console.log("Manfiy sonlar:", manfiy);

// alert(`Musbat: ${musbat} ta\nManfiy: ${manfiy} ta`);


//  let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let c = +prompt("c sonini kiriting");

// let count = 0;

// if(a > 0 )count++;
// if(b > 0 )count++;
// if(c > 0 )count++;

// console.log(count);




// 4 masala
// let a = +prompt(" a sonini kiriting");
// let b = +prompt(" b sonoini kiriting")
// console.log(Math.max(a,b));


// // 5 - masala
// let a = +prompt(" a sonini kiriting");
// let b = +prompt(" b sonoini kiriting")
// console.log(Math.min(a,b));



// 6 masala
let a = +prompt("a sonini kiriting");
let b = +prompt(" b sonuini kiriting");
let katta = Math.max(a , b); 
let kichik = Math.min(a , b);

console.log("katta son",katta);
console.log("kichik son",kichik);


