document.addEventListener("DOMContentLoaded", function () {
  // Create circular progress bars using ProgressBar.js
  var circle1 = new ProgressBar.Circle("#circle-comm", {
    color: "#a7adba", // Progress bar color
    trailColor: "#1f2730", // Circle body color
    strokeWidth: 10, // Increased thickness
    trailWidth: 10, // Increased thickness
    duration: 1400,
    from: { color: "#a7adba", width: 10 }, // Progress bar color and thickness
    to: { color: "#a7adba", width: 10 },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value + "%");
      }
      circle.text.style.fill = "#f6f5f5"; // Text color
    },
  });
  circle1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  circle1.text.style.fontSize = "2rem";
  circle1.animate(0.76); // Number from 0.0 to 1.0

  var circle2 = new ProgressBar.Circle("#circle-eng", {
    color: "#a7adba", // Progress bar color
    trailColor: "#1f2730", // Circle body color
    strokeWidth: 0, // Increased thickness
    trailWidth: 10, // Increased thickness
    duration: 1400,
    from: { color: "#a7adba", width: 10 }, // Progress bar color and thickness
    to: { color: "#a7adba", width: 10 },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value + "%");
      }
      circle.text.style.fill = "#f6f5f5"; // Text color
    },
  });
  circle2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  circle2.text.style.fontSize = "2rem";
  circle2.animate(0.41);

  var circle3 = new ProgressBar.Circle("#circle-time", {
    color: "#a7adba", // Progress bar color
    trailColor: "#1f2730", // Circle body color
    strokeWidth: 10, // Increased thickness
    trailWidth: 10, // Increased thickness
    duration: 1400,
    from: { color: "#a7adba", width: 10 }, // Progress bar color and thickness
    to: { color: "#a7adba", width: 10 },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value + "%");
      }
      circle.text.style.fill = "#f6f5f5"; // Text color
    },
  });
  circle3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  circle3.text.style.fontSize = "2rem";
  circle3.animate(0.51);

  var circle4 = new ProgressBar.Circle("#circle-typing", {
    color: "#a7adba", // Progress bar color
    trailColor: "#1f2730", // Circle body color
    strokeWidth: 10, // Increased thickness
    trailWidth: 10, // Increased thickness
    duration: 1400,
    from: { color: "#a7adba", width: 10 }, // Progress bar color and thickness
    to: { color: "#a7adba", width: 10 },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value + "%");
      }
      circle.text.style.fill = "#f6f5f5"; // Text color
    },
  });
  circle4.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  circle4.text.style.fontSize = "2rem";
  circle4.animate(0.94);

  var circle5 = new ProgressBar.Circle("#circle-team", {
    color: "#a7adba", // Progress bar color
    trailColor: "#1f2730", // Circle body color
    strokeWidth: 10, // Increased thickness
    trailWidth: 10, // Increased thickness
    duration: 1400,
    from: { color: "#a7adba", width: 10 }, // Progress bar color and thickness
    to: { color: "#a7adba", width: 10 },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value + "%");
      }
      circle.text.style.fill = "#f6f5f5"; // Text color
    },
  });
  circle5.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  circle5.text.style.fontSize = "2rem";
  circle5.animate(0.63);
});

// --------------------------------------------------------------------------

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var formData = {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value,
  };

  fetch(
    "https://script.google.com/macros/s/AKfycbwrxPdOrnzjg_WcdCtw_RMPRAl8UYMe1nDAZsoQiui_kM1P3iGWTN-9SpCyrM7Oz37O/exec",
    {
      method: "POST",
      body: JSON.stringify(formData),
    }
  )
    .then((response) => response.text())
    .then((result) => alert("Form submitted successfully: " + result))
    .catch((error) => console.error("Error:", error));
});

