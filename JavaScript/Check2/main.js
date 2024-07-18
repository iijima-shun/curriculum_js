//プルダウン選択時のdisplayが挙動しないのを防ぐ
document.getElementById('Alltable').style.display = "block";
function changeLang() {
    //selectのID取得
    var langueage = document.getElementById('selectLanguages');
    var value = langueage.value;
    //tableのID取得
    var japanese = document.querySelectorAll('#Jpnlang');
    var english = document.querySelectorAll('#Enlang');
    var all_langueage = document.querySelectorAll('#Alltable');

    //選択に応じて表示を変更するためのif文
    //「日本語」が選択された場合
    if (value === 'jpn') {
        japanese.forEach(function(Jpnlang) {
            Jpnlang.style.display == "block";
            Enlang.style.display = "none";
        });
    //「English」が選択された場合
    } else if (value === 'en') {
        japanese.forEach(function(Jpnlang){
            Jpnlang.style.display = "none";
            Enlang.style.display = "block";
        });
    //「全て表示」が選択された場合
    } else if (value === 'all') {
        all_langueage.forEach(function(Alltable){
            Jpnlang.style.display = "block";
            Enlang.style.display = "block";
        });
    //どのプルダウンも選択されてない場合
    } else {
        Jpnlang.style.display = "block";
        Enlang.style.display = "block";
    }
}
