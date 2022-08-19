import React, { useState } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import Header from './Header'

function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "http://placehold.it/300x300?text=Samsung",
      name: "Samsung",
      price: 39999
    },
    {
      id: 2,
      image: "http://placehold.it/300x300?text=iPhone",
      name: "Apple",
      price: 39999
    },
    {
      id: 3,
      image: "http://placehold.it/300x300?text=onePlus",
      name: "OnePlus",
      price: 39999
    }
  ])
  return (
    <>
      <Header />
      <Container>
        <Row>
          {
            products.map((elem) => (
              <div className='col-lg-4 mt-3'>
                <Card className='my-3 p-3 rounded'>
                  <Card.Img src={elem.image} variant='top' />
                  <Card.Body>
                    <Card.Title as='div'>
                      <strong>{elem.name}</strong>
                    </Card.Title>
                    <Card.Text as='h3'>${elem.price}</Card.Text>
                  </Card.Body>
                  <Button
                    type='button'
                    varient='light'
                  >
                    Buy
                  </Button>
                </Card>
              </div>
            ))
          }
        </Row>
      </Container>
    </>
  )
}

export default Home