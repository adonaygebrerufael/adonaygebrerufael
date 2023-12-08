class student{
    studentId;
    answer=[];

student(studentId,answer){
    this.studentid;
    this.answers;

}

addanswer(question){
    return this.answers.push(this.studentIdid,answers);

}
}

class question{
    qid;
    answer;

question(qid,answer){
    this.qid;
    this.answer;

} 

checkanswer (provideranswer){
 if(this.answer===provideanswer){
    return true;
 }
 return false;


    }

    
}

class quiz {
    constructor(students,questions){
        this.students=[];
        this.questions= new Map(qid,answer);
    }
    
  Student(studentId){
        let student = this.students.find(student => student.studentId === studentId);
        let score = 0;
        for(let i = 0; i < this.questions.length; i++){
            if(this.questions[i].checkAnswer(student.answers[i])){
                score++;
            }
        }
        return score;
  }
  getAverageScore(){
    let sum=0;
for (let index = 0; index < student.lengtstudentdet; i++) {
sum+=student.score;

}
return sum/student.length;



}



    
}