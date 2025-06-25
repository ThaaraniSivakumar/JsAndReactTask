import {Table} from 'react-bootstrap';


export const AccountSummary = () =>{
  return(
    <div  className='m-4'>
   <Table  bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Account number</th>
          <th>Balance</th>
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