import { Button } from "react-bootstrap"
import { AddTransactionForm } from "./AddTransactionForm"
import { useState } from "react"


export const AddTransaction =()=>{
    const[showCustomerModal , setShowCustomerModal]=useState(false)

    const addCustomer = ()=>{
      setShowCustomerModal(true)
    }
    return(
        <div>
            
        <div className="flex">
            <div className="d-flex justify-content-center m-2 ">
                <Button variant="success" className="p-2 w-50"  onClick={addCustomer}>Add Transaction</Button>
            </div>
        </div>
       {showCustomerModal && (
         <AddTransactionForm      
             hide={()=>setShowCustomerModal(false)} 
             />
       )}
        </div>
    )
}
