require('./server')

startStop = function() {
  let curr = document.getElementById("serverbtn").innerHTML
  if (curr === "Start") {
    // Start
    startServer()
    document.getElementById("serverbtn").innerHTML = "Stop"
    document.getElementById("servermsg").innerHTML = "Server running..."

  } else if (curr === "Stop") {
    // Stop
    stopServer()
    document.getElementById("serverbtn").innerHTML = "Start"
    document.getElementById("servermsg").innerHTML = "Server stopped."
  }
}