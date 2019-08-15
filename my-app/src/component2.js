import React from 'react';
import './component1.css';
import './component2.css';
import image1 from './docplanner2.png';
import image2 from './docplanner1.png';

const Component2 = () =>
{

    return <div>
    
    
    <div className="banniere_image">

                   
    <img src="  https://www.docplanner.com/img/sygnet.png" height="50px" width="50px"></img>
   </div>
   <div className="banniere_description">
   <h1>Making the healthcare experience more human</h1>
   </div>
   <div className="paragraphe">
         {
             words.map( item=>
              <div key={item.id}>
                
                <p className="parag">{item.p}</p>
              </div>



             )


         }  


        </div>

       <div className ="banniere">

       {words_details.map(item => 
          {  if (item.id === 1)     {  
              return (
                <div className="animated slideInUp"key={item.id}>
                 <div  className="forpatients" >
                 <div className="animated fadeInRight">
                 <h1>For Patients</h1>
                 <h2>{item.title2} </h2>
                 <h1>{item.title1} </h1>
                 <select >
                <option>Choose country</option>
                <option value="http://www.doctoraliar.com">Argentina</option>
                <option value="http://www.doctoralia.com.au">Australia</option>
                <option value="http://www.doctoralia.com.br">Brazil</option>
                <option value="http://www.doctoralia.cl">Chile</option>
                <option value="http://www.doctoralia.co">Colombia</option>
            </select>
            <br />
            <img alt="img-details" src={item.image}/>
            </div>      </div>   </div>
            ) } 
                return ( 
                    <div className="animated slideInUp" key={item.id}><div  className="forpatients"  style={{background: '#3d83df',  height: '450px'}}>
                  <div className="animated fadeInRight">
                  <h1>For Doctors</h1>
                  <h2>{item.title2} </h2>
                  <h1>{item.title1} </h1>
              <br /><br />  
              <img alt="img-details" src={item.image}/>
              </div>    </div> </div> 
              ) } 
       
            
   
            
            
            )} 

       </div>
















 </div>







}

const words=[
{id:1,p: "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."},
{id:2,p:"We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."}


];

const words_details=[
{id:1,title2:"Find a doctor, book a visit and solve any health-related doubt",image: image1},
{id:2,title2:"Save time managing visits and cut no-shows by half",image: image2}

];
export default Component2;