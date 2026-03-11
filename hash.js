import bcrypt from "bcryptjs"
import { readFileSync, write, writeFileSync } from "fs";
const saltRounds = 10;
const myPlaintextPassword = process.argv[2] || 's0/\/\P4$$w0rD';

const testHashing = async () => {
    let data = '';
try {
    data = readFileSync('password.txt' , 'utf-8').trim();
} catch (error) {
    console.log(error.message);
}

if (!data) {
    const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
    writeFileSync('password.txt', hash);
    console.log('Password hashed and saved to password.txt');
} else {
    const isMatch = await bcrypt.compare(myPlaintextPassword, data);

    if (isMatch) {
        console.log('Password is correct');
    } else {
        console.log('Password is incorrect');
    }
}
};
testHashing();