const training = {
  lunes: {
    "Bodybuilding": [
      "Back Squat 5x8-10",
      "Walking Lunges 4x12"
    ],
    "WOD": [
      "12 Wallballs",
      "10 Box Step Over",
      "12 Sit Ups"
    ]
  },
  martes: {
    "Bodybuilding": [
      "Bench Press 5x8-10",
      "Push Press 4x10"
    ],
    "WOD": [
      "21-15-9 Thrusters + Pushups"
    ]
  }
};

function loadDay(day) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const blocks = training[day];

  for (let block in blocks) {
    const div = document.createElement("div");
    div.className = "block";
    div.innerHTML = `<h3>${block}</h3>`;

    blocks[block].forEach((ex, i) => {
      const savedWeight = localStorage.getItem(day + ex) || "";

      div.innerHTML += `
        <div class="exercise">
          <input type="checkbox">
          ${ex}
          Peso: <input value="${savedWeight}" 
          onchange="saveWeight('${day + ex}', this.value)">
        </div>
      `;
    });

    content.appendChild(div);
  }
}

function saveWeight(key, value) {
  localStorage.setItem(key, value);
}

