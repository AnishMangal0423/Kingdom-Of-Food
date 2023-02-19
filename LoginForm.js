
import { Formik ,Form,Field} from "formik"
import { Link } from "react-router-dom"
import React, { useContext } from "react";
import Person from "./Usercontext"
import { useState } from "react";
import Navbar from "./Navbar";

import Main_files from "./Main_files";



function LoginForm(){


let {user,setuser}=useContext(Person)
  let [valueobj,setvalueobj]=React?.useState();

  function f1(values){
    setvalueobj(values)
  }


// function f2(){
   
//     setcandidate({

//         name:valueobj?.name,
//         Email:valueobj?.email

//     })



function f2(values){

     setuser({

      ...user,
      name:values?.name,
    
     })
}

    return(




<div>
        <div>
            <h1 className="font-bold ml-8 text-2xl mt-3">Login Form</h1>
   <div className="ml-[400px] mt-10 py-4 w-60 bg-yellow-200 rounded-lg shadow-sm hover:shadow-2xl">
     <Formik initialValues={{name:"",email:"",phone:"",password:""}} onSubmit={(values)=>{
      
         
         f1(values);

            f2(values)
          

     }}>

   

        <Form >

          <label className="px-4">Name</label>
          <br />

          <div className="px-3 ">
           <Field  name="name" type="text"  />
</div>

          


           <label className="px-4">Email</label> <br></br>

           <div className="px-3">
           <Field name="email" type="Email"/> <br></br>
</div>


           <label className="px-3">Password</label><br></br>

           <div className="px-3">
           <Field name="password" type="password" /> <br></br></div>


<div className="flex">
      <div className="px-3"><button type="submit" className="px-2 mt-2 rounded-sm border-green-100 bg-green-200 hover:bg-pink-100  hover:border-pink-100"  >Lock</button></div>


      {  console.log(valueobj)}
           <Link to={{pathname:"/",state:{obj:{valueobj}}}}><div className="px-3 -ml-3"><button type="submit" className="px-2 mt-2 rounded-sm border-green-100 bg-green-200 hover:bg-pink-100  hover:border-pink-100">Submit</button></div></Link>
</div>
        </Form>
     </Formik>
</div>


</div>
</div>

    )
}

export default LoginForm;

