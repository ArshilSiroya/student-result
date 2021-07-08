// import React from "react";

// const Table = (props) =>{
    
//     return(
//         <div>
//             <table>
//                 <tr>
//                     <th>name</th>
//                     <th>id</th>
//                     <th>eng</th>
//                     <th>math</th>
//                     <th>com</th>
//                     <th>total marks</th>
//                     <th>avrg</th>
//                     <th>result</th>
//                 </tr>
//                     {props.table.map((value,index)=>{
//                         return(
//                            <tr key={index}>
//                                <td> {value.name}</td>
//                                <td> {value.id}</td>
//                                <td> {value.eng}</td>
//                                <td> {value.math}</td>
//                                <td> {value.com}</td>
//                                <td> {value.totalMarks}</td>
//                                <td> {value.average}</td>
//                                <td> {value.result}</td>
//                                <td><button onClick={()=> props.deleteHandler(index)}>Delete</button></td>
//                                <td><button onClick={()=> props.editHandler(value)}>Edit</button></td>
                               
//                            </tr> 
//                         )
//                     })}
//             </table>
//         </div>
//     )

// };

// export default Table;