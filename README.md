**passwordHasher**
The code hashes a password and saves it to a file (`password.txt`). Next time you run it, it compares a test password ("not_bacon") with the saved hash to check the security. 
If the passwords match, it displays "Password is correct". If not "Password is incorrect".

**How to start**
1. Download the bcrypt module:
   `npm i bcrypt`
2. Run the code in the console:
   `node hash.js` (replace hash.js with your file name)
