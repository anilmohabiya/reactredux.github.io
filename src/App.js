import React, { useState } from 'react';
import {Field,reduxForm} from 'redux-form';
import Profile from './Profile';
import './App.css';
function App(props){
  const {handleSubmit} = props
  const [showProfile, setShowProfile] = useState(false)
  return(
  <div className="App">
   <h1>Form</h1>
   <form onSubmit={handleSubmit((formValues)=>{
    // console.log(formValues)
    setShowProfile(true)
   }
   )}>
   <label>Name</label>
   <Field type="text" name="name" component="input"/><br/> <br/><br/>
   <label>Birthday Date</label>
   <Field type="date" name="date" component="input"/><br/><br/>
   <button type="submit">submit it</button>
   <br/>
   {showProfile?<Profile /> :null}
  
   </form>
  </div>
  );
 
}
export default reduxForm({
  form:"myForm"
}) ( App);
