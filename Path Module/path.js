const path = require('path');
const filename = path.basename('/users/john/documents/file.txt');
console.log(filename);

const dirname = path.dirname('/users/john/documents/file.txt');
console.log(dirname);

const ext = path.extname('/users/john/documents/file.txt');
console.log(ext);

if (ext == ".txt") {
    console.log("its txt file....");
} else {
    console.log("its not txt file...");
}


const fullPath = path.join('/users', 'john', 'documents', 'file.txt');
console.log(fullPath); // Output: /users/john/documents/file.txt


const absolutePath = path.resolve('users/john', 'documents', 'file.txt');
console.log(absolutePath);

const parsed = path.parse('/users/john/documents/file.txt');
console.log(parsed); //returned object


const formatted = path.format({
    root: '/',
    dir: '/users/john/documents',
    base: 'file.txt'
});
console.log(formatted); // Output: /users/john/documents/file.txt