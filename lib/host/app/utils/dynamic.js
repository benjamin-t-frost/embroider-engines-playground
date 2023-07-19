function generate_random_data(size) {
  return new Blob([new ArrayBuffer(size)], {
    type: 'application/octet-stream',
  });
}

const junk = generate_random_data(9000000);

export default () => {
  console.log(junk);
};
