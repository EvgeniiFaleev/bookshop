
const bcrypt = require('bcrypt');


const getPasswordForAdmin = (password) => {
  const passwordHash = bcrypt.hash(password, 11);
  console.log(`Password was ${password}`);
  passwordHash.then((res)=> console.log(res))
};

getPasswordForAdmin(process.argv[2]);
