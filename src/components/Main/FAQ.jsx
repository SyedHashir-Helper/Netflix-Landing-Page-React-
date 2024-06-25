import React, { useState } from 'react';
import Accordion from '../UIComponents/Accordion';
import "../../styles/Faq.css"



const FAQ = () => {
    const faqs = [
        {
            question: "What is Netflix?",
            answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
            active: true,
        },
        {
            question: "How much does Netflix cost?",
            answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.",
            active: false
        },
        {
            question: "What can I watch on Netflix?",
            answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
            active: false
        },
    ]

  return (
    <section className='faq'>
        <div className='faq--title'>
        Frequently Asked Questions
        </div>
        <div className='container'>
            {
                faqs.map((element, index)=>{
                    return (
                        <Accordion key={index}
                                title={element.question}
                                content={element.answer}
                            />
                    )
                })
            }
            
        </div>
    </section>
  )
}

export default FAQ
