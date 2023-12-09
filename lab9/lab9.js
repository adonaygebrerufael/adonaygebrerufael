function Student(studentId) {
    this.studentId = studentId;
    this.answers = [];
  
    this.addAnswer = function (question) {
      this.answers.push(question);
    };
  }
  
  function Question(qid, answer) {
    this.qid = qid;
    this.answer = answer;
  
    this.checkAnswer = function (inputAnswer) {
      return this.answer === inputAnswer;
    };
  }
  
  function Quiz(questions, students) {
    this.questions = new Map(questions.map(q => [q.qid, q.answer]));
    this.students = students;
  
    this.scoreStudentBySid = function (sid) {
      const student = this.students.find(s => s.studentId === sid);
      return student.answers.reduce((score, answer) => {
        if (this.questions.get(answer.qid) === answer.answer) {
          return score + 1;
        }
        return score;
      }, 0);
    };
  
    this.getAverageScore = function () {
      const totalScore = this.students.reduce((total, student) => {
        return total + this.scoreStudentBySid(student.studentId);
      }, 0);
      return totalScore / this.students.length;
    };
  }
  
  
  const student1 = new Student(10);
  student1.addAnswer(new Question(2, 'a'));
  student1.addAnswer(new Question(3, 'b'));
  student1.addAnswer(new Question(1, 'b'));
  
  const student2 = new Student(11);
  student2.addAnswer(new Question(3, 'b'));
  student2.addAnswer(new Question(2, 'a'));
  student2.addAnswer(new Question(1, 'd'));
  
  const students = [student1, student2];
  const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
  const quiz = new Quiz(questions, students);
  
  let scoreForStudent10 = quiz.scoreStudentBySid(10);
  console.log(scoreForStudent10); // Expected Result: 3
  
  let scoreForStudent11 = quiz.scoreStudentBySid(11);
  console.log(scoreForStudent11); // Expected Result: 2
  
  let average = quiz.getAverageScore();
  console.log(average); // Expected Result: 2.5
  