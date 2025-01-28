import { useEffect, useState } from "react"
import Form from "./Form"

export default function Usercard(){

    const [showForm , setShowForm] = useState(false) // track the  visibility
    const [cardData , setCardData] = useState(null) // card data


    const handleData  = (data) => {
        setCardData(data),
       setShowForm(false)
    }

    



    return <div style={styles.container}>
        <h3>Welcome to the card creator</h3>
        <h4>Do you want to create it ?</h4>
        {!showForm && !cardData &&(
            <button onClick={() => setShowForm(true)}>Create a Card</button>
        )}
        {showForm && (
            <Form onSubmit = {handleData}></Form>
        )}
       
    </div>
}


const styles = {

    container : {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f8f9fa',
        position : 'absolute'
    }
}