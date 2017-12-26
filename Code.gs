function convertURItoObject(url){
  
url = url.replace(/\+/g,' ')
url = decodeURIComponent(url)
var parts = url.split("&");
var paramsObj = {};
  parts.forEach(function(item){
     var keyAndValue = item.split("=");
     paramsObj[keyAndValue[0]] = keyAndValue[1]
  })  
 return paramsObj; // here's your object
}


function doPost(e) { 
 
  var data = e.postData.contents;
  data = convertURItoObject(data)
  var recipient = data.email;
  var body = data.message;
  var subject = data.subject;
  try {
   MailApp.sendEmail(recipient, subject, body)
  }
  catch(e){
   Logger.log(e)
  } 
  return ContentService.createTextOutput(JSON.stringify(e));
    
}
// CODE TO SEND THE INFO
//    var data = {
//     'name': 'Bob Smith',
//     'email': 'a@b.com',
//     'message': message,
//     'subject': subject, 
//    };
//    var options = {
//      'method' : 'post',
//      'contentType': 'application/json',
//      'payload' : data
//    };
//    var secondScriptID = 'ID'
//    var response = UrlFetchApp.fetch("https://script.google.com/macros/s/" + secondScriptID + "/exec", options);
//    Logger.log(response)  
