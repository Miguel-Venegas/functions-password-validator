// Write a isValidPassword function

// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false


function isValidPassword(password, username){

    if(password.length <= 7){
        return 'invalid password! Your password cannot be less than 8 character long';
    }
    if(password.includes(username)){
        return `invalid password! Your password must not include ${username}`;
    }
    if(password.includes(' ')){
        return `invalid password! Your password cannot have spaces`;
    }    
        
    return 'valid password';
}

// INVALID: password contains username
console.log(isValidPassword('dogLuvr123!', 'dogLuvr'));
// INVALID: password has a space
console.log(isValidPassword('hel lo1', 'dogLuvr'));
// INVALID: password is less than 8 characters
console.log(isValidPassword('hello1', 'dogLuvr'));
// VALID password
console.log(isValidPassword('Valid123', 'DifferentUserName'));


