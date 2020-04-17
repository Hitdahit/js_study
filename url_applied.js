//this code is not full version

var http = require('http');
var fs = require('fs');
var url = require('url');   //url 라이브러리(모듈?)존재

var app = http.createServer(function(request, response){
  var queryData = url.parse(request.url, true).query;   //url.parse로 request의 url을 분리할 수 있음
  console.log(queryData);   //[Object: null prototype] { id: 'HTML' }나옴
  console.log(queryData.id);
  if(request.url=='/'){
    //title = 'Welcome';   처음 접속할때 뜨게끔 title태그에 적어두면 좋음
    request.url = '/index.html';
  }
  if(request.url == '/favicon.ico'){
    return response.writeHead(404);
  }
  response.writeHead(200);
  var template =`
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${queryData.id}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>   ///index.html
    <ol>
      <li><a href="/?id=HTML">HTML</a></li>
      <li><a href="/?id=CSS">CSS</a></li>
      <li><a href="/?id=javascript">JavaScript</a></li>
    </ol>
    <h2>${queryData.id}</h2>
    <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
    <img src="coding.jpg" width="100%">
    </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
    </p>
  </body>
  </html>

  `;
  response.end(template);
  //response.end(fs.readFileSync(__dirname+'//' +queryData.id+'.html'));
             //__dirname 변수는 항상 현재 디렉토리 정보를 가지는 듯
});
app.listen(3000);
