const BuyerForm = ({ setBuyer, buyer, name, placeholder }) => {
    const handBuyerChange = (e) => {
        setBuyer({...buyer, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <input placeholder={placeholder} type='text' name={name} onChange={handBuyerChange}/>
        </div>
    )
}
export default BuyerForm;





// import { useState } from "react";

// const Form = () => {
//     const [ input, setInput ] = useState ([])

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(input)
//     }

//     const handleKeyDown = (e) => {
//         if(e.code === 'Space') {
//             e.preventDefault()
//         }

//     console.log(input)

//     }
//     return(



        
//         <form onSubmit={handleSubmit}>
//         <input type='text' placeholder="Nombre Completo"
//             onChange={(e) => setInput(e.target.value)}
//         />
//              <input type='email' placeholder="email"
//              onKeyDown={handleKeyDown} 
//         />
//              <input type='number' placeholder="Numero telefonico"
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={handleKeyDown} 
//         />

        
//         <button type='submit'>submit</button>
//         <button className='btn btn-dark' onClick={() => Form()}>AGREGAR</button>
//     </form>

//     )

// }
// export default Form;