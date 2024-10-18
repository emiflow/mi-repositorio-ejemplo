import os from 'os';
console.log('Arquitectura:',os.arch());
console.log('Plataforma:',os.platform());
console.log('Memoria total:',os.totalmem());
console.log('Memoria libre:',os.freemem());
console.log('Informacion de la CPU:',os.cpus());