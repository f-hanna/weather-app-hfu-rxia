function colorUpdate(temp) {

    var colArr = [];
    //   https://stackoverflow.com/questions/27297824/setting-radial-gradient-with-javascript 
    var color;
    var bg;

    if (temp > 80) {

        color = "#FD9415"
        bg = "#E23201"



    } else if (temp > 70) {

        color = "#EE92C2"
        bg = "#B6174B"


    }
    else if (temp > 60) {

        color = "#F0DA5D"
        bg = "#7B145F"

        // backg = document.getElementById("containerhelp"
        // backg.style.backgroundColor = "#7B145F"
        // bg = "background: radial-gradient(ellipse at bottom, rgb(123, 20, 95),rgb(70, 11, 55))";
        // backg.style = bg;
        // document.documentElement.style.setProperty("--clr", "rgba(240, 218, 93,0.9)"
        // for(var i = 0; i < blobz.length; i++) {
        //   blobz[i].style.backgroundColor = "#F0DA5D"
        // }
    }
    else if (temp > 50) {

        color = "#FF1493"
        bg = "#CC9900"


        // backg = document.getElementById("containerhelp"
        // backg.style.backgroundColor = "#CC9900"
        // bg = "background: radial-gradient(ellipse at bottom, rgb(255, 192, 0),rgb(204, 153, 0))";
        // backg.style = bg;
        // document.documentElement.style.setProperty("--clr", "rgba(255,20,147,0.9)"
        // for(var i = 0; i < blobz.length; i++) {
        //   blobz[i].style.backgroundColor = "#FF1493"
        // }
    }
    else if (temp > 40) {

        color = "#E8630A"
        bg = "#8AC1C1"



        // backg = document.getElementById("containerhelp"
        // backg.style.backgroundColor = "#8AC1C1"
        // bg = "background: radial-gradient(ellipse at bottom, rgb(138, 193, 193),rgb(138, 193, 193))";
        // backg.style = bg;
        // document.documentElement.style.setProperty("--clr", "rgba(232, 99, 10,0.9)"
        // for(var i = 0; i < blobz.length; i++) {
        //   blobz[i].style.backgroundColor = "#E8630A"
        // }
    }
    else if (temp > 30) {

        color = "#A3CEF1"
        bg = "#2364AA"



        // backg = document.getElementById("containerhelp"
        // backg.style.backgroundColor = "#2364AA"
        // bg = "background: radial-gradient(ellipse at bottom, rgb(35, 100, 170),rgb(24, 70, 119))";
        // backg.style = bg;
        //  document.documentElement.style.setProperty("--clr", "rgba(163, 206, 241,0.9)"
        // for(var i = 0; i < blobz.length; i++) {
        //   blobz[i].style.backgroundColor = "#A3CEF1"
        // }
    }
    else if (temp > 20) {

        color = "#CEF2F2"
        bg = "#012E40"

    }
    else {

        color = "#2364AA"
        bg = "#0F084B"

    }

    colArr[0] = color;
    colArr[1] = bg


    return colArr;
}

function colorFunction(temp) {

    var HSVcol = map(temp, -20, 110, 0, 360)

    return HSVcol;

}