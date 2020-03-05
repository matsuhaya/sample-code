const sampleResolve = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello');
    }, 1000);
  });
};

const runAsync = async () => {
  return await sampleResolve();
};

runAsync()
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log(err);
  });
