import CreatedContext from "../CardContext"
import {useContext} from "react"
import Table from 'react-bootstrap/Table';
import {FaStar} from "react-icons/fa"


export default function CheckOut(){
    const {items} = useContext(CreatedContext)
   
    return(
        <section className="container">
            <h2 className="my-5">Check Out</h2>

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Clothing</th>
          <th>Amount</th>
          
        </tr>
      </thead>
      <tbody>
       {items.map((item)=>
       <tr>
       <td><FaStar size={10} /></td>
       <td>{item.clothing}</td>
       <td>{item.amount}</td>
     </tr>
       ) }
        
      </tbody>
    </Table>

        </section>
    )
}