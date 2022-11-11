enum Grades {
  JUNIOR = "junior",
  MIDDLE = "middle",
  SENIOR = "senior",
}

interface IEmployee {
  name: string;
  level: Grades;
}

function upGrade(user: IEmployee) {
  switch (user.level) {
    case Grades.JUNIOR:
      return (user.level = Grades.MIDDLE);
    case Grades.MIDDLE:
      return (user.level = Grades.SENIOR);
    default:
      return "You are on the top Level";
  }
}
