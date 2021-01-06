import React, { useState } from 'react';
import {connect} from 'react-redux';
import './App.css';
function Profile(props){
    return(
        <div className="App">
           <h1>profile</h1>
          { props.formdata.name}<br/>
          {props.formdata.date}
        </div>
    )
}
const mapStateToprops=(state)=>{
    return{
        formdata:state.form.myForm.values
    }

}
 export default connect(mapStateToprops)(Profile);