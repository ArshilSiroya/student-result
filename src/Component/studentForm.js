import React,{useState} from 'react';

const StudentForm = (props) => {
    const [name ,setName] =useState();
    const [id ,setid] =useState();
    const [eng,setEng] =useState();
    const [math,setMath]=useState();
    const [com,setCom] = useState();
    const [edit,setEdit] = useState(false);

    // console.log(props.abc);s

    const onTextChange = (e) =>{
        if(e.target.name === 'name'){
            setName(e.target.value);
        }
        if(e.target.name === 'id'){
            setid(e.target.value);
        }
        if(e.target.name ==='eng'){
            setEng(e.target.value)
        }
        if(e.target.name === 'math'){
            setMath(e.target.value)
        }
        if(e.target.name === 'com'){
            setCom(e.target.value);
        }
    }
    const onUpdate = () =>{
        setEdit(true)
        setid(props.abc.id)
        setName(props.abc.name)
        setEng(props.abc.eng)
        setMath(props.abc.math)
        setCom(props.abc.com)
        

    };
    React.useEffect(()=>{
        if(props.abc){
            onUpdate();
        }
    },[props.abc])
    const saveData = () => {
        props.getResult({
            name:name,
            id:id,
            eng:eng,
            math:math,
            com:com

        } ,edit);

        setid("");
        setName("");
        setEng("");
        setMath("");
        setCom("");
        setEdit(false);
    }

    return(
        <div>
            <p>StudentForm</p>
            name:<input type="text" onChange={onTextChange}  value={name} name="name"></input><br/>
            id:<input type="text" onChange={onTextChange} disabled={edit} value={id} name="id"></input><br/>
            eng:<input type="text" value={eng} onChange={onTextChange} name="eng"></input><br/>
            math:<input type="text" value={math} onChange={onTextChange} name="math"></input><br/>
            com:<input type="text" value={com} onChange={onTextChange} name="com"></input><br/>
            <button onClick={saveData}>get result </button>
            
        </div>
    )
};
export default StudentForm;