import React from 'react';
import styled from 'styled-components';
import {About} from "../style";

const FaqSection = () => {
    return(
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="questions">
                <div className="answer">
                    <h4>How do I Start ?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ex quidem amet, sequi aliquid ab.</p>
                </div>
                <div className="faq-line"></div>
                <div className="answer">
                    <h4>Daily Schedule</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ex quidem amet, sequi aliquid ab.</p>
                </div>
                <div className="faq-line"></div>
                <div className="answer">
                    <h4>Different Payment Method</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ex quidem amet, sequi aliquid ab.</p>
                </div>
                <div className="faq-line"></div>
                <div className="answer">
                    <h4>What product do you offer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ex quidem amet, sequi aliquid ab.</p>
                </div>
            </div>
        </Faq>
    )
};

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%auto;
    }
    .question{
        padding: 3rem 0rem;
        cursos: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection;