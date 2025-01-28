import { useState } from "react"

export default function Form(){

    const [form , setForm] = useState()

    return <div>

        <form action="" style={styles.form}>

            <label htmlFor="" style={styles.lab}>Name</label>
            <input type="text" name="Enter your name" id="" style={styles.inp}/>
            <label htmlFor="" style={styles.lab}>Description</label>
            <input type="text" name="Enter your description" id="" style={styles.inp}/>
            <label htmlFor="" style={styles.lab}>Interest</label>
             <select style={styles.slt}>
                <option value="">Business</option>
                <option value="">Jobs</option>
                <option value="">Music</option>
                <option value="">Sports</option>
             </select>
             <button style={styles.btn}>Submit</button>
            
        </form>
    </div>
}


const styles = {
    form : {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        margin: '100px',
        width : '200px',
        height : '250px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f8f9fa',
        position : 'absolute'
    },

    lab : {
         display : 'flex',
         justify_content : 'space-around',
         fontSize : "20px"
    },

    inp : {
        margin : "10px"
    },

    slt : {
        margin : "10px",
        borderRadius : "5px"
    },

    btn : {
        padding : "10px 20px",
        margin : "20px",
        borderRadius : "8px"
    }

}  