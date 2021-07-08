import './App.css';
import React,{useState} from 'react'
import StudentForm from './Component/studentForm';
import DisplayResult from './Component/displayResult';
import Table from './Component/table';

const App = () => {
  const [student , setStudent]=useState([]);
  const [studentData ,setStudentData] =useState();
  const [abc ,setAbc] =useState();

  const getResult = (data,mode) => {
    if(mode === true){
        const updateStudent = student.map((student) => {
          return student.id === data.id ? {...data,'totalMarks':TotalMarks(data),'average':Average(data),'result':finalResult(data)} : student;
        });
    setStudentData({...data,'totalMarks':TotalMarks(data),'average':Average(data),'result':finalResult(data),});
    setStudent(updateStudent);
  }else{
    setStudentData({...data,'totalMarks':TotalMarks(data),'average':Average(data),'result':finalResult(data),});
  }
  }
  

  const deleteHandler = (index) => {
    student.splice(index,1); 
    setStudent([...student]) 
  }

  const editHandler = (value) => {
    setAbc(value);
    // console.log(abc)
    
  };

  const TotalMarks = (data) => {
    return parseInt(data.eng)+parseInt(data.math)+parseInt(data.com);
  }
  const Average = (data) => {
    return (TotalMarks(data)/3);
  }
  const finalResult = (data) => {
    if (Average(data)>35){
      return 'pass';
    }else {
      return "fail";
    }
  }
  const allData = () => {
    setStudent([...student,studentData]);
  }
  
  

  return (
    <div>
      <StudentForm getResult={getResult} abc={abc}/>
      {studentData && (<DisplayResult studentData={studentData}/> )}   
      {studentData && (<button onClick={allData}>save</button>)}
     
      {/* {console.log(student)} */}
       <Table table={student} deleteHandler={deleteHandler} editHandler={editHandler}/>
    </div>
    )

  };


export default App;
