//問1
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
//isEven指定
function isEven(num) {
//ifで偶数判定
    if (num % 2 === 0) {
        console.log(num + 'は偶数です');
    } 
}
//foreachで配列ループ
numbers.forEach(isEven);

//問2
//クラス作成
class car {
    constructor(gas,num){
        this.gas = gas;
        this.num = num;
    }

//出力関数
getNumGas(){
    console.log('ガソリンは'+this.gas+'です。ナンバーは'+this.num+'です');
}
}
//オブジェクト作成
let cardate = new car('10L','1234');
cardate.getNumGas();
