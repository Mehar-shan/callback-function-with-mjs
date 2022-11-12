// grading system using call back fucntion
function unitedState(grade) {
  switch (true) {
    case grade === "A+":
      console.log("you got an", grade, ": Exelent");
      break;
    case grade === "A":
      console.log("you got an", grade, ": Good jobe");
      break;
    case grade === "B":
      console.log("you got an", grade, ": very Good");
      break;
    case grade === "C":
      console.log("you got an", grade, ": hard work");
      break;
    case grade === "D":
      console.log("you got an", grade, ": Not Good");
      break;
    default:
      console.log("your grade", grade, ": Oops");
  }
}
function pakistan(grade) {
  switch (true) {
    case grade === "A+":
      console.log("you got an", grade, ": MashaAllah");
      break;
    case grade === "A":
      console.log("you got an", grade, ": SubhanAllah");
      break;
    case grade === "B":
      console.log("you got an", grade, ": Bohat khoob");
      break;
    case grade === "C":
      console.log("you got an", grade, ": mehnat kro bhi");
      break;
    case grade === "D":
      console.log("you got an", grade, ": perh liya kro bhi");
      break;
    default:
      console.log("your grade", grade, ": fail ho gya to");
  }
}
function getGrade(percentage, callback) {
  let grade;
  switch (true) {
    case percentage >= 90:
      grade = "A+";
      break;
    case percentage >= 80:
      grade = "A";
      break;
    case percentage >= 70:
      grade = "B";
      break;
    case percentage >= 60:
      grade = "C";
      break;
    case percentage >= 50:
      grade = "D";
      break;
    default:
      grade = "F";
  }
  callback(grade);
}
getGrade(62, pakistan);
