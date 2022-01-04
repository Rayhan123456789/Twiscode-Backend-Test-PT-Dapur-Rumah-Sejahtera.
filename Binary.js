function BinaryDes(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}
console.log(BinaryDes('1001'));
console.log(BinaryDes('19'));