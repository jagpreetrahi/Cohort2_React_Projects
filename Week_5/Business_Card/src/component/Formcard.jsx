
import { useNavigate } from 'react-router-dom'
import '../App.css'
import CardComponent from './Creatcard'

export default function Formcard(){


    const navigate = useNavigate();
    
 

   return <div className='container'>
       <form>
            <label htmlFor="" className="label">Name</label>
            <input type="text" name='name' placeholder="Enter Your Name" className='inp' />
            <label htmlFor="" className="label">Description</label>
            <input type="text" name='description' placeholder="Enter Your Description" className='inp'/>
            <label htmlFor="" className="label">Interests</label>
            <select name="interest" id="interest" style={{border : "none" , marginLeft : "15px", padding : "10px"}}>
                <option value="interest">Ionic</option>
                <option value="interest">Actors</option>
                <option value="interest">Open Source</option>
                <option value="interest">Developer</option>
                <option value="interest">Sports</option>
            </select>
            <label htmlFor="social" className='label'>Social Media</label>
            <select name="icons" id="icons"  style={{border : "none" , marginLeft : "15px", padding : "10px"}}>
                <option value="x">Twitter</option>
                <option value="insta">InstaGram</option>
                <option value="Linked">LinkedIn</option>
            </select>
            <div>
                <button style={{border : "none" , padding : "10px 30px", background : "blue" , color : "white" , marginTop : "30px", marginLeft : "100px"}} onClick={() => navigate('/card' , {state : {name : "Jagpreet Signh"}})}> Submit</button>
            </div>
       </form>
    
   </div>
} 