import React,{useState} from "react";

const DisplayResult = (props) => {
    return(
        <div>
            <p>DisplayResult</p>
            <p>name:{props.studentData.name}</p>
            <p>Id:{props.studentData.id}</p>
            <p>eng:{props.studentData.eng}</p>
            <p>math:{props.studentData.math}</p>
            <p>com:{props.studentData.com}</p>
            <p>TotalMarks:{props.studentData.totalMarks}</p>
            <p>Average;{props.studentData.average}</p>
            <p>Result:{props.studentData.result}</p>
        </div>
    )
};

export default DisplayResult;