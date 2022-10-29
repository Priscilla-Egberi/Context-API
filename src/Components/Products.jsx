import {Row, Col, Container} from "react-bootstrap"
import {FaShoppingCart} from "react-icons/fa"
import CreatedContext from "../CardContext"
import {useContext} from "react"
export default function Products(){
    const {addToCart, items} = useContext(CreatedContext)
    const products = [
        {clothing: 'jeans', amount:'$5', url:"https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
        {clothing: 'sweat shirt', amount:'$10', url:"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
        {clothing: 'shirt', amount:'$7', url:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
        {clothing: 'blouse', amount:'$10', url:"https://media.istockphoto.com/photos/shirt-picture-id1415465448?b=1&k=20&m=1415465448&s=170667a&w=0&h=edXXCPEjxVh-kh4djUoaIi42ukStOEFYu-BQxcQO8xE="},
    ]
    console.log(items)
    return(
        <>
        <Container className="mt-5">
        <Row>
            {products.map((product)=>(
                <Col sm={6} md={4} lg={3}>
                <div className="card" onClick={()=>addToCart(product.clothing, product.amount)}>
                    <img src={product.url} alt="" width="100%" style={{objectFit:'cover', objectPosition:'center', height:'200px'}} />
                    <div className="px-2 pt-2">
                    <span className="fw-bold">{product.clothing}</span>
                    <FaShoppingCart className="float-end text-info" />
                    <p>{product.amount}</p>
                    </div>
                </div>
                </Col>
            ))}
        </Row>
        </Container>
        </>
    )
}