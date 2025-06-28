import {Table} from 'react-bootstrap';


export const AccountSummary = (props) =>{
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
          <td>Thaarani</td>
          <td>922122106110</td>
          <td>{props.amount}</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}