// 再帰処理の例
// r桁のルーレットがある。各桁は0〜9まである。桁の合計がtotalのケースは何パターンあるか？

const search = (r, total) => {
  if (r === 0) {
    if (total === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  let ans = 0;
  for (let i = 0; i < 10; i++) {
    ans += search(r - 1, total - i);
  }
  return ans;
};

console.log(search(5, 10));
