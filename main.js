const resolveSample = async () => {
  if (Math.random() < 0.5) {
    throw new Error('reject!!');
  }
  return 'resolve!!';
};

resolveSample()
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log(err);
  });
