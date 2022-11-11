let pwlen = document.getElementById('passwordlength');
let pw = document.getElementById('password');
let saveBut = document.getElementById('saveButton')

function generatePassword(len) {
    const data = '~!@#$%^&*()_+`1234567890-=|}{POIUYTREWQqwertyuiop[]\":LKJHGFDSAasdfghjkl;?><MNBVCXZzxcvbnm,./';
    let password = '';

    for (let i = 0; i < len; i++) {
        password += data[~~(Math.random() * data.length)];
    }
    return password
}

function getPassword() {
    pw.value = generatePassword(pwlen.value)
    setTimeout(() => {
        alert('Password has been created')
    }, 500)
}

function savePassword() {
    saveBut.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`My Password: ${pw.value}`))
    saveBut.setAttribute('download', 'MyPassword.txt')
    setTimeout(() => {
        alert('Password has been downloaded')
    }, 500)
}