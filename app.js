const radio1 = document.getElementById("base-height-radio");
const radio2 = document.getElementById("three-sides");
const radio3 = document.getElementById("angle");

function openCity(evt, eventName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(eventName).style.display = "block";
        evt.currentTarget.className += " active";
      }

      document.getElementById("Angles").style.display = "block";

      // document.getElementById("base-height").style.display ="none";
      // document.getElementById("three-lengths-area").style.display ="none";

      if(document.getElementById("base-height-radio").checked === true){
        console.log("radio1 is checked");
      }

      if(radio2.checked === true){
        console.log("radio2 is checked");
      }

      if(document.getElementById("three-sides").checked){
        console.log("radio3 is checked");
      }