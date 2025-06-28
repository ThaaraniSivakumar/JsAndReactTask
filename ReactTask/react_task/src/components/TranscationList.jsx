import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { AccountSummary } from "./AccountSummary"
import { AddTransaction } from "./AddTransaction"

 export const  TranscationList =()=>{
  const[data,setData]=useState([]) 

  let  totalAmount = []
  for(const amount of data){
    if(amount.type === "credit"){
      totalAmount += amount.amount
    }
    else{
      totalAmount -= amount.amount
    }
  }
  console.log(totalAmount) 

  useEffect(()=>{
          fetch("https://mocki.io/v1/3bd581b2-0757-4de7-82b2-0bd333fc8816")
         .then(res=> res.json())
         .then(data =>setData(data))   
  },[])
    return(
      <div>
    <AccountSummary amount={totalAmount}/>
    <AddTransaction/>
    <div  className='m-4'>
   <Table  bordered>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        { data.map((getData)=>(
          <tr key={getData.id}>
          <td>{getData.date}</td>
          <td>{getData.description}</td>
          <td>{getData.amount}</td>
          <td>{getData.type}</td>
        </tr>
        ))
          
        }
      </tbody>
    </Table>
    </div>
    </div>
    )
}
