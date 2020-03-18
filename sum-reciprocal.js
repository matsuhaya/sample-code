// 逆数の総和がNを超える項は何番目か
// 再帰関数で解くとスタックオーバーフローするので非同期処理で対応した例

let answer = 0;
let number = 1;
let N = 12;

const cal = answer => {
  if (answer > N) {
    console.log(answer);
    console.log(number - 1);
    return;
  } else {
    answer += 1 / number;
    number++;
    // Stack Overflowする
    // cal(answer);

    // Stack Overflowの回避策
    setTimeout(function() {
      cal(answer);
    }, 0);
  }
};

cal(answer);
