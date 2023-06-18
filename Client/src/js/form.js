
  function updateFare() {
    var fareInput = document.getElementById("fare");
    var trainType = document.querySelector('input[name="trainType"]:checked').value;
    
    if (trainType === "AC") {
      fareInput.value = "500";
    } else if (trainType === "General") {
      fareInput.value = "300";
    }
  }
