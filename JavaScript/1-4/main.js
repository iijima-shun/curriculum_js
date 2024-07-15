let number = 1;
while(number <= 100){
    if (number % 3 == 0 && number % 5 == 0) {
        console.log('FizzBizz!');
    } else if (number % 3 == 0){
        console.log('Fizz!');
    } else if (number % 5 == 0) {
        console.log('Buzz!');
    }
    console.log(number);
    number++;
}