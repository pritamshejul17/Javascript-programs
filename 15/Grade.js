function calculateGrade(score) {
    if (score >= 80 && score <= 100) {
      return "A";
    } else if (score >= 70 && score < 80) {
      return "B";
    } else if (score >= 60 && score < 70) {
      return "C";
    } else if (score >= 50 && score < 60) {
      return "D";
    } else if (score >= 0 && score < 50) {
      return "F";
    } else {
      return "Invalid score. Score must be between 0 and 100.";
    }
  }
  
  console.log(calculateGrade(85)); 
  console.log(calculateGrade(62)); 
  console.log(calculateGrade(45)); 
  