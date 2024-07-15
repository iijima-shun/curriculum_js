//クラス作成
class Taiyaki {
    constructor(taste){
        this.taste = taste;
    }
    //出力内容
    inside(){
        console.log('中身は' + this.taste + 'です');
    };
}
//中身の味を作成
let anko = new Taiyaki('あんこ');
let cheese = new Taiyaki('クリーム');
let cream = new Taiyaki('チーズ');
anko.inside();
cheese.inside();
cream.inside();
