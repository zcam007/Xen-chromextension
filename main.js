function random()
{
  return Math.floor(Math.random() * 20);
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
  $("#name").dblclick(function (e) {
      if($(event.target).attr('class')!="thVal")
          {
              e.stopPropagation();
              var currentEle = $(this);
              var value = $(this).html();
              updateVal(currentEle, value);
      }
  });
});
function setName()
{
  var namefromHTML=document.getElementById('name');
  if(namefromHTML="")
  {

    console.log("name enter your name");
    updateVal(namefromHTML,"Enter youra name");
  }
  else{
    console.log("name cookie");
    var nameFromCookie=getCookie("name")
    namefromHTML.innerHTML="hello";
    $('#name').html(nameFromCookie);
        
    console.log(nameFromCookie);
  }
  
}
function updateVal(currentEle, value) {
  $(document).off('click');
  $(currentEle).html('<input class="thVal format" onfocus="var temp_value=this.value; this.value=""; this.value=temp_value"  type="text" value="' + value + '" />');
  $(".thVal").focus();
  $(".thVal").keyup(function (event) {
      if (event.keyCode == 13) {
        var c=$(".thVal").val();
          $(currentEle).html($(".thVal").val()+".");
          setCookie("name",c,1000);
          $(document).off('click');
           
         
      }
  });

  $(document).click(function () {

          if($(event.target).attr('class')!="thVal")
          {
            var c=$(".thVal").val();
            console.log("hconsol"+c);
              $(currentEle).html($(".thVal").val()+".");
              setCookie("name",c,1000);
              $(document).off('click');
            }

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

$(function() {
  setName();
    startTime();
    setInterval(startTime, 1000);
});

function wallpaperChange()
{
  //eraseCookie("wallpaper");
  if(getCookie("wallpaper")==null)
  {
    $.ajax({
      type: "GET",
      url: "https://pixabay.com/api/?key=11539462-ceb223426b7e2e65b3aaf606f&q=landscape+beautiful&orientation=horizontal&image_type=photo&pretty=true&min_width=1280",
      processData: false,
      success: function(msg) {
        console.log("API Called");
        $("#results").append("The result =" + msg.hits[random()].largeImageURL);
        console.log(getCookie("wallpaper"));
        setCookie("wallpaper",msg.hits[random()].largeImageURL,1);
        $('#body').css("background-image", "url("+getCookie("wallpaper")+")"); 
       
      }
    });

  }
  else{
    $('#body').css("background-image", "url("+getCookie("wallpaper")+")"); 
  }
}

$(function() {
  wallpaperChange();
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
          $("#quote").append(obj.slip.advice);
          console.log(obj.slip.advice);
          setCookie("quote",obj.slip.advice,1);
         
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
