var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request, response){
  var url = request.url;
  if(request.url=='/'){
    url = '/index.html';
  }
  if(request.url == '/favicon.ico'){
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname+url));

});
app.listen(3000);




/*
라이브러리 로드하기
  require()메소드를 이용하여 로드
  ex. var http = require('http');
공식:
  var app = http.createServer(function(request, response){
    response.writeHead(코드);    //404 200 504 등
    나중에 필요한 처리들을 작성.
    
  });   -> http.Server 개체를 만듬.
  app.listen();서버를 대기상태로 만들고, 클라이언트에서 요청이오면 그것을 처리.  app.listen(포트번호, 호스트명, 백로그, 콜백함수);

  console.log()   listen이 실행 된 커서부터 메시지를 콘솔에 출력하는 메소드.


  response.writeHead(200, {'Content-Type': 'text/plain'});
    -> response객체의 메소드에서 헤더 정보를 응답에 작성해서 내보내는 것.    헤더 정보+응답 형태로 

  response.write('메시지'); -> 헤더 정보의 다음에 바디 부분의 콘텐츠를 내보냄.
  여러번 호출가능. 

  response.end(); 콘텐츠를 모두 내보내고 난후 콘텐츠 출력을 닫는 부분.

  즉 response.writeHead(); -> response.write(); -> response.end(); 순으로 만듬.


  response.write()로 모든 html을 써내려갈 필요 없다!
  fs라이브러리를 이용하여 미리 작성한 html문서를 불러오면 됨.
  var fs = require('fs');
  fs.readFile(파일 경로, 인코딩, 콜백함수);
  를 사용해서 불러오면 됨. 참고로 이 메소드는 반환값이 없음(파일 읽는 동작을 비동기 처리함.)


  즉, js를 이해서  html을 뽑는 동작은 아래와 같이 이뤄진다.
  function doReq(req, res){
    function(err, data){
      fs.readFile('파일경로.html', 'UTF-8',
        function(err, data){
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        }
      )
    }
  }
  

*/
