const addPromise = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num < 3) {
        resolve(num + 1);
      } else {
        reject('4以上です');
      }
    }, 100);
  });
};

asyncAwaitExec = async () => {
  let num = await addPromise(0);
  num = await addPromise(num).catch(error => console.error(error));
  num = await addPromise(num).catch(error => console.error(error));
  num = await addPromise(num).catch(error => console.error(error));
  console.log(num);
};

asyncAwaitExec();
