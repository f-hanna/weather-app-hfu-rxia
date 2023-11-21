function colorUpdate() {
    //   https://stackoverflow.com/questions/27297824/setting-radial-gradient-with-javascript 
      var temp = weather.main.temp;
      var backg, bg;
      var blobz = document.getElementsByClassName("blob");
      print("temp " + temp);
      if (temp > 80) {
        backg = document.getElementById("containerhelp");
        backg.style.backgroundColor = color('#E23201');
        bg = 'background: radial-gradient(ellipse at bottom, rgb(226, 50, 1),rgb(183, 40, 1))';
        backg.style = bg;
        document.documentElement.style.setProperty('--clr', 'rgba(253, 148, 21, 0.9)');
        for(var i = 0; i < blobz.length; i++) {
          blobz[i].style.backgroundColor = color('#FD9415');
        }
        
      } else if (temp > 70) {
        backg = document.getElementById("containerhelp");
        backg.style.backgroundColor = color('#B6174B');
        bg = 'background: radial-gradient(ellipse at bottom, rgb(182,23,75),rgb(127,16,53))';
        backg.style = bg;
        document.documentElement.style.setProperty('--clr', 'rgba(238, 146, 194,0.9)');
        for(var i = 0; i < blobz.length; i++) {
          blobz[i].style.backgroundColor = color('#EE92C2');
        }
      }
      else if (temp > 60) {
        backg = document.getElementById("containerhelp");
        backg.style.backgroundColor = color('#7B145F');
        bg = 'background: radial-gradient(ellipse at bottom, rgb(123, 20, 95),rgb(70, 11, 55))';
        backg.style = bg;
        document.documentElement.style.setProperty('--clr', 'rgba(240, 218, 93,0.9)');
        for(var i = 0; i < blobz.length; i++) {
          blobz[i].style.backgroundColor = color('#F0DA5D');
        }
      }
      else if (temp > 50) {
        backg = document.getElementById("containerhelp");
        backg.style.backgroundColor = color('#CC9900');
        bg = 'background: radial-gradient(ellipse at bottom, rgb(255, 192, 0),rgb(204, 153, 0))';
        backg.style = bg;
        document.documentElement.style.setProperty('--clr', 'rgba(255,20,147,0.9)');
        for(var i = 0; i < blobz.length; i++) {
          blobz[i].style.backgroundColor = color('#FF1493');
        }
      }
      else if (temp > 40) {
        backg = document.getElementById("containerhelp");
        backg.style.backgroundColor = color('#8AC1C1');
        bg = 'background: radial-gradient(ellipse at bottom, rgb(138, 193, 193),rgb(138, 193, 193))';
        backg.style = bg;
        document.documentElement.style.setProperty('--clr', 'rgba(232, 99, 10,0.9)');
        for(var i = 0; i < blobz.length; i++) {
          blobz[i].style.backgroundColor = color('#E8630A');
        }
      }
      else if (temp > 30) {
        backg = document.getElementById("containerhelp");
        backg.style.backgroundColor = color('#2364AA');
        bg = 'background: radial-gradient(ellipse at bottom, rgb(35, 100, 170),rgb(24, 70, 119))';
        backg.style = bg;
         document.documentElement.style.setProperty('--clr', 'rgba(163, 206, 241,0.9)');
        for(var i = 0; i < blobz.length; i++) {
          blobz[i].style.backgroundColor = color('#A3CEF1');
        }
      }
      else if (temp > 20) {
        backg = document.getElementById("containerhelp");
        backg.style.backgroundColor = color('#012E40');
        bg = 'background: radial-gradient(ellipse at bottom, rgb(1,46,64),rgb(1,29,40))';
        backg.style = bg;
        document.documentElement.style.setProperty('--clr', 'rgba(206, 242, 242,0.9)');
        for(var i = 0; i < blobz.length; i++) {
          blobz[i].style.backgroundColor = color('#CEF2F2');
        }
      }
      else {
        backg = document.getElementById("containerhelp");
        backg.style.backgroundColor = color('#0F084B');
        bg = 'background: radial-gradient(ellipse at bottom, rgb(15,8,75),rgb(7,4,37))';
        backg.style = bg;
        document.documentElement.style.setProperty('--clr', 'rgba(35, 100, 170,0.9)');
        for(var i = 0; i < blobz.length; i++) {
          blobz[i].style.backgroundColor = color('#2364AA');
        }
      }
    }                                                                               

function colorFunction(temp) {

    var HSVcol = map(temp, -20, 110, 0, 360)

    return HSVcol;

}