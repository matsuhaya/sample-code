// setIntervalの処理を、非同期を使って同期的に書く
// const addIteratePromise = (i) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(++i), 1000);
//   });
// };

// const asyncAwaitExec = async () => {
//   for (let i = 0; i < 3; ) {
//     i = await addIteratePromise(i);
//     console.log('i:', i);
//   }
// };

// asyncAwaitExec();

// 非同期に終了条件を設定する
const exec = () => {
  let index = 0;
  const count3 = setInterval(() => {
    if (index > 3) {
      clearInterval(count3);
    }
    console.log('index:', index);
    index++;
  }, 1000);
};
exec();
