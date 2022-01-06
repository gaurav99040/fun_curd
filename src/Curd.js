import React,{useState,useEffect} from 'react'

export default function Curd() {
   let hobby= [
        {id:0,lable: 'cricket', value: false,key:1},
        {id:1,lable: 'singing', value: false,key:2},
        {id:2,lable: 'playing', value: false,key:3},
        {id:3,lable: 'swimming', value: false,key:4}
    ];
  const[err,seterr]= useState({
      err:"",
      err2:"",
      err3:"",
      err4:"",
      isNotValidated:true
  })
    const [array, setarray] = useState([]);
    const [obj,setobj]=useState({
        name1:"",
        email: "",
        mobile: "",
        gender: "",
        option:[],
        city:"",
        temp1:"",
        
    })
   
    

    const onValidate=async()=>{
        // let isNotValidated = true;
    //  seterr({isNotValidated:true})
        //  if(obj.name1===""){
        // return document.getElementById('err').innerHTML="name is requier"
        //  }else{ document.getElementById('err').innerHTML=""}
         
        
        //  if(obj.email===""){document.getElementById('err2').innerHTML="email is requier"}
            
        // else  document.getElementById('err2').innerHTML=""
        
        // if( obj.mobile==="")
        //     {document.getElementById('err3').innerHTML="mobile is requier"}
        //   else  document.getElementById('err3').innerHTML=""
            
        //     if( obj.gender==="")
        //     {document.getElementById('err4').innerHTML="gender is requier"}
        //  else   document.getElementById('err4').innerHTML=""
        // {
        //     err:"name is requier",
        //     isNotValidated:true err4:"gender is requier",   err3:"mobile is requier",  

      await  obj.name1==="" ?
      seterr((previos) => ({
                    ...previos,
                   err:"name is requier",
                    isNotValidated:true
      })) :
            seterr((previos) => ({
                ...previos,
               err:"",isNotValidated:false}))

          obj.email==="" ?seterr((previos) => ({
            ...previos,
            err2:"email is requier",
            isNotValidated:true
}))
 :
            seterr((previos) => ({
                ...previos,
               err2:"",isNotValidated:false}))

           obj.mobile==="" ? seterr((previos) => ({
            ...previos,
            err3:"mobile is requier",
            isNotValidated:true
}))
:
                seterr((previos) => ({
                    ...previos,
                   err3:"",isNotValidated:false}))

             obj.gender==="" ? seterr((previos) => ({
                ...previos,
                err4:"gender is requier",
                isNotValidated:true
  })) 
  : 
                    seterr((previos) => ({
                        ...previos,
                       err4:"",isNotValidated:false}))

        if((obj.name1!=="") && (obj.email!=="") && (obj.mobile!=="") && (obj.gender!=="")){
            
           seterr({isNotValidated:false})
        }
        
    }

    const onHandal=(e)=>{
        // onValidate();
        
        if((obj.name1!=="") && (obj.email!=="") && (obj.mobile!=="") && (obj.gender!=="")){
            
            seterr({isNotValidated:false})
         }
        setobj({
            ...obj,[e.target.name]:e.target.value
        })
    }

    const onHobby=(e)=>{
     let option=obj.option;
    
     if(e.target.checked){
         option.push(e.target.name);
     }
     else{
        let index=option.indexOf(e.target.name)
        option.splice(index,1)
     }
     setobj({
        ...obj,option:option
     })
    
    // else{
    //     if(e.target.checked){
    //         option.push(e.target.name);
    //     }
    //     else{
    //        let index=option.indexOf(e.target.name)
    //        option.splice(index,1)
    //     }
    //     setobj({
    //        ...obj,option:option[temp]
    //     })
    // }
    }

    const onObject= async ()=>{
     await onValidate();
     
        // if(temp===null){
            if(!err.isNotValidated){
                console.log('------------------------------------>');
                // if((obj.name1!=="") && (obj.email!=="") && (obj.mobile!=="") && (obj.gender!=="")){
        let pushobj={
            name1:obj.name1,
            email:obj.email,
               mobile: obj.mobile,
               gender: obj.gender,
               city:obj.city,
               option:obj.option
       }
       console.log(obj.temp1);
      
    
    //    if(obj.temp1===""){
        if(!err.isNotValidated){
        array.push(pushobj);
        setobj(pushobj)
       setarray(array)
        }
    //    }
    //    else{
    //        setobj(pushobj)
    //        setarray(array[obj.temp1]);
    //    }
       console.log(array)
    // }
    // else{
    //     console.log(array[temp])
    //     let userobj={
    //         name1:obj.name1,
    //         email:obj.email,
    //         mobile: obj.mobile,
    //         gender: obj.gender,
    //         city:obj.city,
    //         option:obj.option
    //     }
    //     setobj(userobj)
    //     setarray(array[temp])
    // }
       setobj({
        name1:"",
        email: "",
        mobile: "",
        gender: "",
        option:[],
        city:""
       })
    //    document.getElementById('male').checked=false;
    //    document.getElementById('female').checked=false;
       hobby.forEach((item)=>{
           document.getElementById(item.lable).checked=false;
       })
       seterr({isNotValidated:true})
    }  
    // else{
    //     onValidate();
    // }
    }
    
    let onDelete= async (id)=>{
        let temp = array;
        console.log(id);
        await temp.splice(id,1);
        // setarray((privious)=>([...privious,temp]))
        setarray([...temp]);
        // setarray([...array])
        console.log(temp);
    }

    const onUpdate=(id)=>{
        console.log(id)
        let user=array[id];
        setobj({
            name1:user.name1,
            email:user.email,
            mobile:user.mobile,
            gender:user.gender,
            option:user.option,
            city:user.city,
            temp1:id
        })
        // if(user.gender==='male'){
        //     document.getElementById('male').checked=true
        // }
        // if(user.gender==='female'){
        //     document.getElementById('female').checked=true 
        // }
        user.option.forEach((item)=>{
            document.getElementById(item).checked=true;
        })
        //    for(let i=0;i<=user.option.length;i++){
            //     if(user.option[i]==='playing'){
                //         document.getElementById('playing').checked=true
                //     }
                //    else if(user.option[i]==='singing'){
                    //         document.getElementById('singing').checked=true
                    //     }
                    //   else  if(user.option[i]==='swimming'){
                        //         document.getElementById('swimming').checked=true
                        //     }
                        //     else if(user.option[i]==='cricket'){
                            //         document.getElementById('cricket').checked=true
                            //     }
                            // }
                            array.splice(id,1);
                            setarray([...array]);
 
    }
    return (
        <center>
        <div>
            <div className="main_form">
                    <div className="form">
                        <div >
                            <div className="fild">
                                <label htmlFor="">Name:-</label><br />
                                <input type="text" id="name1" name="name1" onChange={(e)=>onHandal(e)} value={obj.name1} /><br />
                                <span id='err' style={{color:"red"}}>{err.err}</span>
                            </div>
                            <br />
                            <div className="fild">
                                <label htmlFor="">email:-</label><br />
                                <input type="text" id="email" name="email" onChange={(e)=>onHandal(e)} value={obj.email} /><br />
                                <span id='err2' style={{color:"red"}}>{err.err2}</span>
                            </div>
                            <br />
                            <div className="fild">
                                <label htmlFor="">mobile:-</label><br />
                                <input type="text" id="mobile" name="mobile" onChange={(e)=>onHandal(e)} value={obj.mobile} /><br />
                                <span id='err3' style={{color:"red"}}>{err.err3}</span>
                            </div>
                            <br />
                            <div className="fild">
                                <label htmlFor="">gender:-</label><br />
                                <input type="radio" name="gender" id="male" onChange={(e)=>onHandal(e)} value="male" checked={obj.gender == "male" ? true:false}/><label>male</label>
                                <input type="radio" name="gender" id="female"onChange={(e)=>onHandal(e)} value="female"checked={obj.gender == "female" ? true:false} /><label>female</label><br />
                                <span id='err4' style={{color:"red"}}>{err.err4}</span>
                            </div>
                            <br />

                            <div className="fild">
                                <label htmlFor="">city:-</label><br />
                                <select name="city" id="city" onChange={(e)=>onHandal(e)} value={obj.city}>
                                    <option value="surat">surat</option>
                                    <option value="bhavnager">bhavnager</option>
                                    <option value="rajkot">rajkot</option>
                                    <option value="botad">botad</option>
                                </select><br />
                                <span id='error5' style={{color:"red"}}></span>
                            </div>
                            <br />
                            <div className="fild">
                                <label htmlFor="">hobby:-</label><br />
                               




                                {hobby.length > 0 ?
                                   hobby.map((item, index) => {
                                       return(
                                        <div className="filds" key={index}>
                                            <input 
                                             key={index}
                                            //  id={item.label}
                                            id={`${item.lable}`}
                                            type="checkbox" 
                                            className="checkbox" 
                                            onChange={(e)=>onHobby(e)} 
                                            name={item.lable} 
                                            // value={this.state.hobby.filter((i)=>{
                                            //     return i===index? true:false
                                            // })}
                                            value={hobby[index].value}
                                           
                                            />
                                            <label>{item.lable}</label>
                                     </div>
                                        )
                                            
                                    })
                                :null
                                } 
                                </div>
                            <br />
                            <br />
                            <div className="submit">
                                <button 
                                onClick={()=>onObject()}
                                id="submit" 
                                className="submit"
                                >submit</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <table className="table" border="2">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>Mobile No</th>
                            <th>gender</th>
                            <th>city</th>
                            <th>hobby</th>
                        </tr>
                    </thead>
                    <tbody>
                        {array.length>0?
                            array.map((item, index) => {
                                console.log(item);
                                return <tr key={index}>
                                    <td>{item.name1}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.city}</td>
                                    <td>{item.option}</td>
                                    <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => onUpdate(index )}>
                                        upadate
                                    </button></td>
                                    <td><button onClick={() => onDelete( index )}>delete</button></td>
                                </tr>
                            }):null
                        }
                    </tbody>
                </table>
        </center>
    )
}
