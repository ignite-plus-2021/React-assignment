import React from 'react'
import CardItem from './CardItem';

const Projects = () => {
    return (
        <>
            <div className='cards' id="work">
                <br></br>
                <br></br>
                <h1>Checkout My Work</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                    
                    <ul className='cards__items'>
                        <CardItem
                        src='images/blogg.jpg'
                        text='My blogging site, "The Story Behind" to read few random interesting experiences.'
                        label='My Blog'
                        path='https://unlockingdoor.blogspot.com/?m=1'
                        />
                        <CardItem
                        src='images/pianoo.jpg'
                        text='Mini-Piono that can be played using computer keyboard.'
                        label='Mini-Piano'
                        path='https://mini-piano-9.netlify.app/'
                        />
                        <CardItem
                        src='images/e-commerce.jpg'
                        text='"Stuffs For Free", an E-commerce site for selling and buying used stuffs for free.'
                        label='E-Commerce'
                        path='#'
                        />
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects