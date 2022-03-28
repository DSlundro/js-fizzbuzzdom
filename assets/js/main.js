const myBox = document.getElementById('my_box');


for ( i = 1; i <= 100; i++){

    // multipli di 3 e di 5
    if(i % 15 == 0){
        console.log('FizzBuzz');
    } 
    // multipli di 5
    else if (i % 5 == 0){
        console.log('Buzz')
    } 
    // multipli di 3
    else if (i % 3 == 0 ){
        console.log("Fizz")
    } 
    // numeri da 1 a 100
    else {
        console.log(i)
    }


}




