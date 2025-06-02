function trafficLight() {
    let red = document.querySelector(".red-btn");
    let yellow = document.querySelector(".yellow-btn");
    let green = document.querySelector(".green-btn");
    
  
    red.style.backgroundColor = "rgb(162, 161, 161)";
    yellow.style.backgroundColor = "rgb(162, 161, 161)";
    green.style.backgroundColor = "rgb(162, 161, 161)";
    
    // Red light
    setTimeout(() => {
        red.style.backgroundColor = "red";
        yellow.style.backgroundColor = "rgb(162, 161, 161)";
        green.style.backgroundColor = "rgb(162, 161, 161)";
        
        // Yellow light
        setTimeout(() => {
            red.style.backgroundColor = "rgb(162, 161, 161)";
            yellow.style.backgroundColor = "yellow";
            green.style.backgroundColor = "rgb(162, 161, 161)";
            
            // Green light
            setTimeout(() => {
                red.style.backgroundColor = "rgb(162, 161, 161)";
                yellow.style.backgroundColor = "rgb(162, 161, 161)";
                green.style.backgroundColor = "rgb(15, 219, 19)";
            }, 2000); // Green after 2 seconds
            
        }, 2000); // Yellow after 2 seconds
        
    }, 2000); // Red after 2 seconds
}

// Function to start the traffic light cycle
function startTrafficLight() {
    trafficLight();
    // Repeat the cycle every 6 seconds (2s for each color)
    setInterval(trafficLight, 6000);
}

let trafficLightInterval;

function startTrafficLight() {
    if (!trafficLightInterval) {  // Only start if not already running
        trafficLight();
        trafficLightInterval = setInterval(trafficLight, 6000);
    }
}

function stopTrafficLight() {
    clearInterval(trafficLightInterval);
    trafficLightInterval = null;
    // Reset all lights to gray
    let red = document.querySelector(".red-btn");
    let yellow = document.querySelector(".yellow-btn");
    let green = document.querySelector(".green-btn");
    red.style.backgroundColor = "rgb(162, 161, 161)";
    yellow.style.backgroundColor = "rgb(162, 161, 161)";
    green.style.backgroundColor = "rgb(162, 161, 161)";
}
