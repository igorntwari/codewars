function findHack(records) {
    const hackedNames = [];
  
    for (const record of records) {
      const [name, totalScore, grades] = record;
      let score = 0;
  
      for (const grade of grades) {
        if (grade === "A") {
          score += 30;
        } else if (grade === "B") {
          score += 20;
        } else if (grade === "C") {
          score += 10;
        } else if (grade === "D") {
          score += 5;
        }
      }
  
      if (grades.length >= 5 && grades.every(grade => grade === "A" || grade === "B")) {
        score += 20;
      }
  
      score = Math.min(score, 200);
  
      if (score !== totalScore) {
        hackedNames.push(name);
      }
    }
  
    return hackedNames;
  }