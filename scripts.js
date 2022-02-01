// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function (event) {
    console.log("Window loaded");


    takeoff.addEventListener("click", function (event) {
        //confirm("Confirm that the shuttle is ready for takeoff.");


        if (confirm("Confirm that the shuttle is ready for takeoff.")) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;


        }
    });

    landing.addEventListener("click", function (event) {
        if (confirm("The shuttle is landing. Landing gear engaged.")) {
            document.getElementById("flightStatus").innerHTML = "The shuttle has landed. Landing gear engaged."
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    });

    missionAbort.addEventListener("click", function (event) {
        if (confirm("Confirm that you want to abort the mission.")) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    });



    const directionButtons = document.querySelectorAll("button");


    directionButtons[0].addEventListener("click", function (event) {
        document.getElementById("rocket").style.top = "-10px";
    });
    directionButtons[1].addEventListener("click", function (event) {
        document.getElementById("rocket").style.bottom = "-10px";
    });
    directionButtons[2].addEventListener("click", function (event) {
        document.getElementById("rocket").style.right = "-10px";
    });
    directionButtons[3].addEventListener("click", function (event) {
        document.getElementById("rocket").style.left = "-10px";
    });


});
