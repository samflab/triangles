const radio1 = document.getElementById("base-height-radio");
const radio2 = document.getElementById("three-sides");
const radio3 = document.getElementById("angle");

function openCity(evt, eventName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
          console.log(i);
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(eventName).style.display = "block";
        evt.currentTarget.className += " active";
      }

      document.getElementById("Angles").style.display = "block";
