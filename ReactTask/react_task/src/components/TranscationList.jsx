import { Table } from "react-bootstrap"

export const  TranscationList =()=>{
    return(
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    </div>
    )
}