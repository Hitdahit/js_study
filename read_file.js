//nodejs 파일 입출력
var fs = require('fs');
fs.readFile(
  'file_inout_nodejs/sample.txt',
  'utf8',
  function(err, data){
    console.log(err);
    console.log(data);
  }
);
