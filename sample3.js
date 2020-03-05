const addPromise = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num + 1), 100);
  });
};

asyncAwaitExec = async () => {
  let num = await addPromise(0);
  num = await addPromise(num);
  num = await addPromise(num);
  num = await addPromise(num);
  console.log(num);
};

asyncAwaitExec();
