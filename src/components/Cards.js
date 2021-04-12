import React from 'react';
import  CardItem  from './CardItem';


export default function Cards() {

    return(
        <div className="cards" id='cards'>
            <h1>Check out these EPIC! Destinations</h1>
            
            <div className="cards__container">
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                         <CardItem
                            src={process.env.PUBLIC_URL + '/img/img-9.jpg'}
                            text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            path='/gallery'
                            label='Adventure'
                         />
                          <CardItem
                            src={process.env.PUBLIC_URL + '/img/img-6.jpg'}
                            text = 'Thank you, accepting your answer when i can. Can i do this as many times as i want and can i put other things in here aswell?'
                            path='/gallery'
                            label='Interesting'
                         />
                            <CardItem
                            src={process.env.PUBLIC_URL + '/img/img-7.jpg'}
                            text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            path='/gallery'
                            label='Adventure'
                            />
                             <CardItem
                            src={process.env.PUBLIC_URL + '/img/img-8.jpg'}
                            text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            path='/gallery'
                            label='Adventure'
                         />
                          <CardItem
                            src={process.env.PUBLIC_URL + '/img/img-5.jpg'}
                            text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            path='/gallery'
                            label='Adventure'
                         />
                             <CardItem
                            src={process.env.PUBLIC_URL + '/img/img-2.jpg'}
                            text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            path='/gallery'
                            label='Adventure'
                         />
                          
                    </ul>
                 </div>
            </div>
        </div>
    )

}
