import { useEffect, useState } from "react"

export const AccountSummary = () =>{
const[data,setData]=useState([]) 

    useEffect(()=>{
      
         fetch("https://mocki.io/v1/3bd581b2-0757-4de7-82b2-0bd333fc8816")
         .then(res=> res.json())
         .then(data =>setData(data))

    },[])


    return(
        <div>
            {
              data.map((getData)=>(
                <div key={getData.id}>
                    <h4>{getData.date}</h4>
                </div>
              ))
            }
        </div>
    )
}