import React from 'react'
import Container from './container'

export default function Footer() {
    return (
        <footer>
            <Container className=" px-10 " >
                <div>
                    <img src='images/logo.png' className=" w-55 select-none " />
                    <p className=' w-80 ml-7 mt-4 font-satoshiBold ' >We craft world-class digital products that help startups and Fortune 500 companies not just succeed, but create meaningful,
                        memorable experiences that people truly love and engage with.</p>
                </div>

            </Container>
        </footer>
    )
}
