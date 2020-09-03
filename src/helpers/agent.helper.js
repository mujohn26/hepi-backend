const generator = require('generate-password');

exports.passwordGenerator = () => {
  const password = generator.generate({
    length: 4,
    numbers: true,
  });
  return password;
};
