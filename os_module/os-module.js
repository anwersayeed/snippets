
// here, os module is a built in module hence no './' kind of location needed
const os = require('os');

// used to check free memory inside the computer
console.log(os.freemem());

// homedir for our user, eg: C:\Users\deeya
console.log(os.homedir());

// prints hostname for our computer eg: DESKTOP-9674EA4
console.log(os.hostname());

// for me, it is win32
console.log(os.platform());

// OS  build release eg: 10.0.19044
console.log(os.release());

// kabse system chaalu hai
console.log(os.uptime());

// C:\Users\deeya\AppData\Local\Temp
console.log(os.tmpdir());

// Windows_NT
console.log(os.type());