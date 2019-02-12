$(function() {
  //$("#name").val()=getCookie("name");
  setTodayFocus();
  setName();
    startTime();
    setInterval(startTime, 1000);
});

if(navigator.onLine) { // true|false
	console.log("online");
}

function random()
{
  return Math.floor(Math.random() * 99);
}
/*
$.ajax({
    type: "GET",
    beforeSend: function(request) {
      request.setRequestHeader("Authorization", "563492ad6f917000010000013fe9ad1584da4b8a8280aef2d8a6250a");
    },
    //url: "https://api.pexels.com/v1/curated?per_page=1&page=1",
    url: "https://api.pexels.com/v1/search?query=white&per_page="+random()+"&page="+random(),
    processData: false,
    success: function(msg) {
      $("#results").append("The result =" + syntaxHighlight(msg.photos[0].src.large2x));
     // eraseCookie("wallpaper");
      if(getCookie("wallpaper")==""){
      setCookie("wallpaper",msg.photos[0].src.large2x,1);
      }
      else
      {
      $('#body').css("background-image", "url("+getCookie("wallpaper")+")"); 
      
      }
    }
  });
  */


 $(function () {
  $("#name").click(function (e) {
    console.log("onclick");
      if($(event.target).attr('class')!="thVal")
          {
            var ele=document.getElementById('name');
           // var temp_value=ele.innerHTML; 
            //ele.innerHTML=""; 
            //ele.innerHTML=temp_value;
            console.log(ele);
          
              e.stopPropagation();
              var currentEle = $(this);
              var value = $(this).html();
             // console.log(currentEle);
              updateVal(currentEle, value);
      }
  });
});


$(function () {
  $("#id_focusTxtBox").click(function (e) {
    console.log("onclick");
      if($(event.target).attr('class')!="thVal")
          {
            var ele=document.getElementById('id_focusTxtBox');
           // var temp_value=ele.innerHTML; 
            //ele.innerHTML=""; 
            //ele.innerHTML=temp_value;
            console.log(ele);
          
              e.stopPropagation();
              var currentEle = $(this);
              var value = $(this).html();
             // console.log(currentEle);
              updateVal(currentEle, value);
      }
  });
});




function setName()
{
  //eraseCookie("name");
  console.log("Get cookie name "+getCookie("name"));
  var valuefromHTML=document.getElementById('name').value;
  console.log("setname"+valuefromHTML); 
  if(valuefromHTML=="" && (getCookie("name")==null))
  {
    console.log("setnameinsideif");
  document.getElementById('name').value="Enter your name.."
  }
  else
  {
    //$("#name").val()=getCookie("name");
    document.getElementById('name').value=getCookie("name");
    //console.log("elses"+getCookie("name"));
  }
  
}

function setTodayFocus()
{
 // eraseCookie("focus");
  var valuefromHTML=document.getElementById('id_focusTxtBox').value;
  console.log("setfocustoday cookie == "+getCookie("focus")); 
  
  if(valuefromHTML=="" && (getCookie("focus")==null))
  {
  document.getElementById('id_focusTxtBox').value=""
  }
  else
  {
    document.getElementById('id_focusTxtBox').value=getCookie("focus");
  }
}
/*
function setName()
{
  //eraseCookie("name");
  var namefromHTML=document.getElementById('name'); 
  if(namefromHTML.value=="Enter your name.." && (getCookie("name")==null))
  {
        
    console.log("inside if enter your name");
   // updateVal(namefromHTML,'<p>Enter your name..</p>');
  }
  else{
    console.log("name cookie");
    var nameFromCookie=getCookie("name")
    //namefromHTML.innerHTML="hello";
    $('#name').html(nameFromCookie);
    $('#name').append(".");
    
        
    console.log(nameFromCookie);
  }
}*/



function updateVal(currentEle, value) {
  $(document).off('click');
  $(currentEle).html('<input class="thVal format" type="text" value="' + value + '" />');
  console.log($(currentEle));
  $(document).off('#name');
  $(".thVal").focus();
  $(".thVal").keyup(function (event) {
      if (event.keyCode == 13) {
        var c=$("#name").val();
         // $(currentEle).val($(".thVal").val()+".");
         //$(currentEle).val($("#name").val()+".");
           
          setCookie("name",c,1000);
          $(document).off('click');
           
         
      }
  });

  $(document).click(function () {
    console.log($("#name"));
          if($(event.target).attr('class')!="thVal")
          {
            var c=$("#name").val();
            if(c==getCookie("name"))
            {
              c=$("#name").val();
            }
            else
            {
              document.getElementById('name').value+=".";
              c=document.getElementById('name').value;
              
            }
            console.log("console"+c);
            //  $(currentEle).html($(".thVal").val()+".");
           // $(currentEle).val($("#name").val()+".");
              setCookie("name",c,1000);
              $(document).off('click');
            }
            var focus=document.getElementById('id_focusTxtBox').value;
            console.log("focus at last "+focus);
            setCookieMidnightDelete("focus",focus);
          // setCookie("focus",focus,1);
           
            
  });

}
  
 function startTime() {
  var today = new Date();
  var h = today.getHours();
  var h1 = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  getSalutations(h);
  //var h,h1;
  //h=h1=1;
  if(h==0)
  {
    h=12;
  }
  if(h>12){
  h=checkTime(h-12);
}
else{
  h=checkTime(h);
}
  m = checkTime(m);
  s = checkTime(s);
  //document.getElementById('txt').innerHTML =
  //h + ":" + m + ":" + s;
  $('#time').html((h) + ":" + m);
  if(h1>=0&&h1<12){  $('#time').append('<span id="timeSubscript" class="timeSubs">AM</span>');
}
else{
  $('#time').append('<span id="timeSubscript" class="timeSubs">PM</span>');
}
 // var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


var serverTime = new Date();
function updateTime() {
    /// Increment serverTime by 1 second and update the html for '#time'
    //serverTime = new Date(serverTime.getTime() + 1000);
    
    var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes();
$('#time').html(time);

}

function getSalutations(hours)
{
  if(hours>=04 && hours<12)
  {
    console.log("Good Morning");
    document.getElementById("salu").innerHTML="Good Morning,";
  }
  else if(hours>=12 && hours<15){
    console.log("Good Afternoon");
    document.getElementById("salu").innerHTML="Good Afternoon,";
  }
  else if(hours>=15 && hours<22){
    console.log("Good Evening");
    document.getElementById("salu").innerHTML="Good Evening,";
  
  }
  else{
    console.log("Good Night");
    //console.log(hours);
    document.getElementById("salu").innerHTML="Good Night,";
  }
}



function wallpaperChange()
{
  console.log("wallpaperchange func");
  if(navigator.onLine) {
    console.log("Online");
    $.ajax({
      type: "GET",
      url: "https://pixabay.com/api/?key=11539462-ceb223426b7e2e65b3aaf606f&q=landscape&orientation=horizontal&image_type=photo&pretty=true&min_width=1280&min_height=720&per_page=100",
      processData: false,
      success: function(msg) {
        console.log("API Called");
       // $("#results").append("The result =" + msg.hits[random()].largeImageURL);
        console.log(getCookie("wallpaper"));
        setCookie("wallpaper",msg.hits[random()].largeImageURL,0.2);
        $('#body').css("background-image", "url("+getCookie("wallpaper")+")"); 
       // $('#body').css("background", "url("+getCookie("wallpaper")+") center no-repeat cover;"); 
       $('#body').css("background-size", "cover"); 
      
      }
    });
  }
  else{
    console.log("offline");
   
    $('#body').css("background-image", 'url("offline.jpg")'); 
       
  }
  
}

$(function() {
  //eraseCookie("wallpaper");
  
  console.log(getCookie("wallpaper"));
  if(getCookie("wallpaper")==null)
  {
     console.log("wallpaper change func call");
  wallpaperChange();
}
else{
  $('#body').css("background-image", "url("+getCookie("wallpaper")+")"); 
  //$('#body').css("background", "url("+getCookie("wallpaper")+") center no-repeat cover;"); 
  $('#body').css("background-size", "cover"); 
  $('#body').css("background-repeat", "no-repeat"); 
  $('#body').css("height", "100%"); 
      
        
}
  });
  
  $(function() {
  $("#wallpaperChangebtn").dblclick(function(){
    wallpaperChange();
   });
  });
  
//quote
  $(function() {
    //eraseCookie("quote");
       if(getCookie("quote")==null)
    {
      $.ajax({
        type: "GET",
        url: "https://api.adviceslip.com/advice",
        processData: false,
        success: function(msg) {
          console.log("API Called");
          var obj = JSON.parse(msg);
          $("#quote").html(obj.slip.advice);
          console.log(obj.slip.advice);
          setCookie("quote",obj.slip.advice,0.01);
         
        }
      });
  
    }
    else{
     // $('#body').css("background-image", "url("+getCookie("wallpaper")+")"); 
     $("#quote").html(getCookie("quote"));
          
    }
    });


/*
  $.ajax({

    url : 'https://pixabay.com/api/?key=11539462-ceb223426b7e2e65b3aaf606f&orientation=horizontal&image_type=photo&pretty=true&min_width=1280',
    type : 'GET',
    beforeSend: function(request) {
      request.setRequestHeader("Authorization", "563492ad6f917000010000013fe9ad1584da4b8a8280aef2d8a6250a");
    },
    data : {
        'numberOfWords' : 10
    },
    dataType:'json',
    success : function(data) {              
        alert('Data: '+data);
    },
    error : function(request,error)
    {
        alert("Request: "+JSON.stringify(request));
    }
});*/













function setCookie(name,value,days) {
  console.log("called name:"+name+"  value:"+value);
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  //document.cookie = name + "=" +value+"; path=/";
  
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {   
  document.cookie = name+'=; Max-Age=-99999999;';  
}

function setCookieMidnightDelete(name, value)
{
  console.log("called name:"+name+"  value:"+value);
  
  var now = new Date();
  var expire = new Date();
  expire.setFullYear(now.getFullYear());
  expire.setMonth(now.getMonth());
  expire.setDate(now.getDate()+2);
  //console.log(now.getDate()+1);
  expire.setHours(0);
  expire.setMinutes(0);
  document.cookie = name+"="+(value || "")+"; expires=" + expire.toString() +"; path=/";
}