const training = {
  lunes: {
    "Calentamiento": [
      "40 seg Air Bike",
      "10 Cossack Squats",
      "12 Banded Monster Walk",
      "8 Inchworms"
    ],
    "Pre Fatiga": [
      "Leg Extension 2x20",
      "Tibialis Raises 2x20"
    ],
    "Bodybuilding": [
      "Back Squat 5x8-10",
      "Walking Lunges 4x12 por pierna"
    ],
    "Superserie": [
      "Goblet Squat tempo 3x12",
      "L-Sit Hold 3x30 seg"
    ],
    "Accesorios": [
      "Seated Leg Curl 3x15",
      "Standing Calf Raise 4x20"
    ],
    "WOD": [
      "12 Wallballs",
      "10 Box Step Over",
      "12 Sit Ups"
    ]
  },

  martes: {
    "Calentamiento": [
      "Band Pull Apart 3x15",
      "Scap Push Ups 3x12",
      "Face Pull liviano 3x15"
    ],
    "Pre Fatiga": [
      "DB Lateral Raise 2x20",
      "Face Pull 2x20"
    ],
    "Bodybuilding": [
      "Bench Press 5x8-10",
      "Push Press 4x10"
    ],
    "Superserie": [
      "Incline DB Press 3x12",
      "Arnold Press 3x12"
    ],
    "Accesorios": [
      "Fondos 3x15",
      "Triceps cuerda 3x15"
    ],
    "WOD": [
      "21-15-9 Thrusters + Push Ups"
    ]
  },

  jueves: {
    "Calentamiento": [
      "Glute Bridge Hold 1 min",
      "Hamstring Stretch",
      "T-Spine Rotation"
    ],
    "Pre Fatiga": [
      "Hip Thrust liviano 2x20",
      "Banded RDL 2x15"
    ],
    "Bodybuilding": [
      "Deadlift 5x5",
      "Hip Thrust 4x12"
    ],
    "Superserie": [
      "DB Romanian Deadlift 3x12",
      "Nordic Curl asistido 3x8"
    ],
    "Accesorios": [
      "Lying Leg Curl 3x15",
      "Seated Calf Raise 4x20"
    ],
    "WOD": [
      "14 KB Swings",
      "10 Burpees",
      "200m Run"
    ]
  },

  viernes: {
    "Calentamiento": [
      "Wall Angels 3x10",
      "Band Pull Apart 3x15",
      "Ring Rows 3x10"
    ],
    "Pre Fatiga": [
      "Straight Arm Pulldown 2x20",
      "Scap Pull Ups 2x12"
    ],
    "Bodybuilding": [
      "Strict Pull Up 4x10",
      "Barbell Row 4x10"
    ],
    "Superserie": [
      "Chest Supported Row 3x12",
      "Incline DB Curl 3x12"
    ],
    "Accesorios": [
      "Face Pull 3x20",
      "Hammer Curl 3x15",
      "Farmer Carry 4x30m"
    ],
    "WOD": [
      "8 Pull Ups",
      "10 DB Push Press",
      "12 Box Push Ups"
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

    blocks[block].forEach((ex) => {
      const key = day + block + ex;
      const savedWeight = localStorage.getItem(key) || "";

      div.innerHTML += `
        <div class="exercise">
          <input type="checkbox">
          ${ex}
          Peso: <input value="${savedWeight}" 
          onchange="saveWeight('${key}', this.value)">
        </div>
      `;
    });

    content.appendChild(div);
  }
}

function saveWeight(key, value) {
  localStorage.setItem(key, value);
}
