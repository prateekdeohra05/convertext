import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutPage from './components/AboutPage';
import React, { useState } from 'react'
import Alert from './components/Alert';



function App() {
  const aboutPage=()=>{
    document.getElementsByClassName('colorContainer')[0].style.display='none';
    document.getElementsByClassName('textFormContainer')[0].style.display='none';
    document.getElementsByClassName('textFormContainer')[1].style.display='none';
    document.getElementsByClassName('btnContainer')[0].style.display='none';
    document.getElementsByClassName('aboutPageContainer')[0].style.display='block';
    document.title='Correctext-About';
   
  }
  const homePage =()=>{
   document.getElementsByClassName('colorContainer')[0].style.display='flex';
   document.getElementsByClassName('textFormContainer')[0].style.display='block';
   document.getElementsByClassName('textFormContainer')[1].style.display='block';
   document.getElementsByClassName('btnContainer')[0].style.display='flex';
   document.getElementsByClassName('aboutPageContainer')[0].style.display='none';
   document.title='Correctext-Home';
  }

  const [mode, setMode]= useState('light');
  const back_black =()=>{
     setMode('dark')
     document.body.style.backgroundColor='#171616';
     document.getElementsByClassName('navbar')[0].style.backgroundColor='black';
     document.getElementById('myBox').style.backgroundColor='#171616';
     document.getElementById('myBox').style.border='2px solid white';
     for(let i=0;i<12;i++){
      document.getElementsByClassName('btn')[i].style.backgroundColor='black';
      document.getElementsByClassName('btn')[i].style.borderColor='white';
      }
  }
  const back_blue =()=>{
     setMode('dark')
     document.body.style.backgroundColor='#1871db';
     document.getElementsByClassName('navbar')[0].style.backgroundColor='blue';
     document.getElementById('myBox').style.backgroundColor='#1871db';
     document.getElementById('myBox').style.border='2px solid white';
     for(let i=0;i<12;i++){
      document.getElementsByClassName('btn')[i].style.backgroundColor='blue';
      document.getElementsByClassName('btn')[i].style.borderColor='white';
      }
  }
  const back_red =()=>{
    setMode('dark')
    document.body.style.backgroundColor='red';
    document.getElementsByClassName('navbar')[0].style.backgroundColor='#65020c';
    document.getElementById('myBox').style.backgroundColor='red';
    document.getElementById('myBox').style.border='2px solid white';
    for(let i=0;i<12;i++){
      document.getElementsByClassName('btn')[i].style.backgroundColor='#65020c';
      document.getElementsByClassName('btn')[i].style.borderColor='white';
      }
  }
  const back_green =()=>{
    setMode('dark')
    document.body.style.backgroundColor='green';
    document.getElementsByClassName('navbar')[0].style.backgroundColor='#023c0b';
    document.getElementById('myBox').style.backgroundColor='green';
    document.getElementById('myBox').style.border='2px solid white';
    for(let i=0;i<12;i++){
      document.getElementsByClassName('btn')[i].style.backgroundColor='#023c0b';
      document.getElementsByClassName('btn')[i].style.borderColor='white';
      }
  }
  const back_yellow =()=>{
    setMode('light')
    document.body.style.backgroundColor='yellow';
    document.getElementsByClassName('navbar')[0].style.backgroundColor='#b0bf0b';
    document.getElementById('myBox').style.backgroundColor='yellow';
    document.getElementById('myBox').style.border='2px solid black';
    for(let i=0;i<12;i++){
      document.getElementsByClassName('btn')[i].style.backgroundColor='#b0bf0b';
      document.getElementsByClassName('btn')[i].style.borderColor='black';
      }
  }
  const back_white =()=>{
    setMode('light')
    document.body.style.backgroundColor='white';
    document.getElementsByClassName('navbar')[0].style.backgroundColor='grey';
    document.getElementById('myBox').style.backgroundColor='white';
    document.getElementById('myBox').style.border='2px solid black';
    for(let i=0;i<12;i++){
    document.getElementsByClassName('btn')[i].style.backgroundColor='grey';
    document.getElementsByClassName('btn')[i].style.borderColor='black';
    }
  }
  const [alert,setAlert]= useState('Light Mode Enabled');
  setTimeout(() => {
    document.getElementById('alertContainer').style.display='none';
  }, 1500);
 const showAlert = (message)=>{
  document.getElementById('alertContainer').style.display='block';
   setAlert(message);
   setTimeout(() => {
     hideAlertContainer()
   }, 1500);
 }
 const hideAlertContainer=()=>{
   document.getElementById('alertContainer').style.display='none';
 }

  
  return (
   <>
  
   <Navbar title='Correctext' mode={mode} homePage={homePage} aboutPage={aboutPage} back_black={back_black} back_blue={back_blue} back_red={back_red} back_green={back_green} back_yellow={back_yellow} back_white={back_white}  />
   <div className="container my-3">
     <Alert alert={alert} />
   </div>
    
   <TextForm showAlert={showAlert} mode={mode} heading= 'Enter Your Text Below'/>

      <div>
      <AboutPage mode={mode} />
     </div>
   </>
  );
}

export default App;
