// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = function () {
  const button = document.getElementById("takeoff");
  const land = document.getElementById("landing");
  const abortMission = document.getElementById("missionAbort");
  const up = document.getElementById("up");
  const down = document.getElementById("down");
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  const rocket = document.getElementById("rocket");
  button.addEventListener("click", function () {
    if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
      document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
      document.getElementById("shuttleBackground").style.backgroundColor =
        "blue";
      document.getElementById("spaceShuttleHeight").innerHTML =
        Number(document.getElementById("spaceShuttleHeight").innerHTML) + 10000;
    }
  });
  land.addEventListener("click", function () {
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML =
      "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor =
      "green";
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
  });
  abortMission.addEventListener("click", function () {
    if (window.confirm("Confirm that you want to abort the mission.")) {
      document.getElementById("flightStatus").innerHTML = "Mission aborted.";
      document.getElementById("shuttleBackground").style.backgroundColor =
        "green";
      document.getElementById("spaceShuttleHeight").innerHTML = 0;
    }
  });
  up.addEventListener("click", function () {
    document.getElementById("spaceShuttleHeight").innerHTML =
      Number(document.getElementById("spaceShuttleHeight").innerHTML) + 10000;
    const currentTop = Number(rocket.style.top.slice(0, -2));
    rocket.style.top = currentTop - 10 + "px";
  });
  down.addEventListener("click", function () {
    document.getElementById("spaceShuttleHeight").innerHTML =
      Number(document.getElementById("spaceShuttleHeight").innerHTML) - 10000;
    const currentdown = Number(rocket.style.top.slice(0, -2));
    rocket.style.top = currentdown + 10 + "px";
  });
  left.addEventListener("click", function () {
    const currentleft = Number(rocket.style.left.slice(0, -2));
    rocket.style.left = currentleft - 10 + "px";
  });
  right.addEventListener("click", function () {
    const currentright = Number(rocket.style.left.slice(0, -2));
    rocket.style.left = currentright + 10 + "px";
  });
};
