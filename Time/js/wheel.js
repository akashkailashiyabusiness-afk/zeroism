/**
 * Concentric life wheel — adapted from rotating clock-face pattern.
 */

export function drawClockFaces(life) {
  const faces = document.querySelectorAll(".clock-face");

  faces.forEach((face) => {
    face.innerHTML = "";
    const type = face.getAttribute("data-clock");
    const numbers = parseInt(face.getAttribute("data-numbers"), 10);
    const radius = face.offsetWidth / 2 - 14;
    const center = face.offsetWidth / 2;

    const { valueSet, currentIndex, pastUntil } = getRingData(type, life, numbers);

    valueSet.forEach((value, i) => {
      const angle = i * (360 / numbers);
      const rad = (angle * Math.PI) / 180;
      const x = center + radius * Math.cos(rad);
      const y = center + radius * Math.sin(rad);

      const el = document.createElement("span");
      el.classList.add("number");
      el.textContent = value;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

      if (i === currentIndex) el.classList.add("active");
      if (pastUntil !== null && i < pastUntil) el.classList.add("past-life");

      face.appendChild(el);
    });

    const rotation = -((currentIndex / numbers) * 360);
    face.style.transform = `rotate(${rotation}deg)`;
  });
}

function getRingData(type, life, numbers) {
  switch (type) {
    case "life-years": {
      const labels = life.lifeYearsLabels;
      const idx = Math.min(life.lifeYearIndex, labels.length - 1);
      return {
        valueSet: labels,
        currentIndex: idx,
        pastUntil: idx,
      };
    }
    case "seasons":
      return {
        valueSet: life.seasons,
        currentIndex: life.seasonIndex,
        pastUntil: null,
      };
    case "months":
      return {
        valueSet: life.months,
        currentIndex: life.monthIndex,
        pastUntil: null,
      };
    case "weeks": {
      const weeks = Array.from({ length: 52 }, (_, i) => String(i + 1));
      return {
        valueSet: weeks,
        currentIndex: life.weekOfYear,
        pastUntil: null,
      };
    }
    case "days":
      return {
        valueSet: life.weekdays,
        currentIndex: life.dayOfWeek,
        pastUntil: null,
      };
    case "hours": {
      const hrs = Array.from({ length: 24 }, (_, i) =>
        String(i).padStart(2, "0")
      );
      return {
        valueSet: hrs,
        currentIndex: life.hour,
        pastUntil: null,
      };
    }
    case "minutes": {
      const mins = Array.from({ length: 60 }, (_, i) =>
        String(i).padStart(2, "0")
      );
      return {
        valueSet: mins,
        currentIndex: life.minute,
        pastUntil: null,
      };
    }
    default:
      return { valueSet: [], currentIndex: 0, pastUntil: null };
  }
}

export function startWheelAnimation(getLife) {
  const lastAngles = {};

  function tick() {
    const life = getLife();
    const faces = document.querySelectorAll(".clock-face");

    faces.forEach((face) => {
      const type = face.getAttribute("data-clock");
      const total = parseInt(face.getAttribute("data-numbers"), 10);
      let current = 0;

      switch (type) {
        case "life-years":
          current = life.lifeYearIndex;
          break;
        case "seasons":
          current = life.seasonIndex;
          break;
        case "months":
          current = life.monthIndex;
          break;
        case "weeks":
          current = life.weekOfYear;
          break;
        case "days":
          current = life.dayOfWeek;
          break;
        case "hours":
          current = life.hour;
          break;
        case "minutes":
          current = life.minute;
          break;
        default:
          return;
      }

      const target = (360 / total) * current;
      const id = type;
      const last = lastAngles[id] ?? target;
      let delta = target - last;
      delta = ((delta + 540) % 360) - 180;
      const next = last + delta;
      lastAngles[id] = next;
      face.style.transform = `rotate(${next * -1}deg)`;

      const nums = face.querySelectorAll(".number");
      nums.forEach((n, i) => {
        n.classList.toggle("active", i === current);
      });
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}
