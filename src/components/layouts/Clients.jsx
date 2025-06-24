import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import client1 from '../../assets/client1.png'
import client2 from '../../assets/client2.png'
import client3 from '../../assets/client3.png'
import client4 from '../../assets/client4.png'

const Clients = () => {
  return (
    <section className='py-3'>
        <Container>
            <Flex className={'justify-between'}>
                <Image imgSrc={client1}/>
                <Image imgSrc={client2}/>
                <Image imgSrc={client3}/>
                <Image imgSrc={client4}/>

            </Flex>

        </Container>
      
    </section>
  )
}

export default Clients
