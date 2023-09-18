// パスワードを作成する関数
function createPassword() {
  // 桁数の要素を取得
  const numberElement = document.getElementById("number");
  const number = numberElement.value;

  if ((number < 8) || (20 < number)) {
    alert("桁数は8〜20の値を設定してください。");
    return;
  }

  // ランダムなパスワードを作成
  let result = "";
  do {
    result = "";
    for(let i = 0; i < number; i++) {
      result += getOneRandomStr(result);
    }
  } while (!isOkPass(result));

  // 作成したパスワードを表示
  const passDiv = document.getElementById("pass");
  passDiv.innerText = result;
}

// 
function getOneRandomStr(result) {
  // 使用文字の定義
  const passStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&=~/*-+?_";

  // 含まれていない文字を一文字取得
  let oneStr = "";
  do {
    oneStr = passStr.charAt(Math.floor(Math.random() * passStr.length));
  } while (result.indexOf(oneStr) >= 0);

  return oneStr;
}

// パスワードがOKかを判定する関数
function isOkPass(pass) {
  const existNumber = pass.search(/[0-9]/g);
  const existSmall  = pass.search(/[a-z]/g);
  const existBig    = pass.search(/[A-Z]/g);
  const existSymbol = pass.search(/[!#\$%&=~/\*\-\+\?_]/g);

  if ((existNumber >= 0) && (existSmall >= 0) && (existBig >= 0) && (existSymbol >= 0)) {
    return true;
  } else {
    return false;
  }
}