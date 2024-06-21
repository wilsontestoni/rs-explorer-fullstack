class Student {
  constructor(name, gradeTestOne, gradeTestTwo) {
    this.name = name;
    this.gradeTestOne = gradeTestOne;
    this.gradeTestTwo = gradeTestTwo;
  }
}

const averageOfSchool = 7;

const studentOne = new Student("João", 6.0, 6.0);
const studentTwo = new Student("Leticia", 9.0, 9.5);
const studentThree = new Student("Diego", 9.0, 9.8);
const studentFour = new Student("Julia", 5.0, 6.0);

const listOfStudents = [studentOne, studentTwo, studentThree, studentFour];

const calculateGradeAverage = (gradeOne, gradeTwo) => {
  const average = ((gradeOne + gradeTwo) / 2).toFixed(1);
  return average;
};

listOfStudents.forEach((student) => {
  const studentGradeAverage = calculateGradeAverage(
    student.gradeTestOne,
    student.gradeTestTwo
  );
  const pass = studentGradeAverage >= averageOfSchool;

  if (pass) {
    alert(
      `A média do(a) aluno(a) ${student.name} é: ${studentGradeAverage} \n Parabéns ${student.name}, Voce foi aprovado(a) no concurso!`
    );
  } else {
    alert(
      `A média do(a) aluno(a) ${student.name} é: ${studentGradeAverage} \n Não foi dessa vez ${student.name}! Tente novamente!`
    );
  }
});
