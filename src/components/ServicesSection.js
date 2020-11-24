import React from 'react';
//Import Icons

import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

//Styles
import {About, Description, Image} from "../style";
import styled from 'styled-components';
import {scrollReveal} from '../animation';
import {UseScroll} from './useScroll';

const SericesSection = () => {
    const [element, controls] = UseScroll();
    return(
        <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={clock} />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={teamwork} />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={diaphragm} />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={money} />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img alt="video" src={home2}/>
            </Image>
        </Services>
    )
};
const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;
const Cards = styled.div`
    display:flex;
    flex-wrap: wrap;
    @media (max-width: 1300px){
        justify-content: center;
    }
`;
const Card= styled.div`
    flex-basis: 14rem;
    .icon{
        display:flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            padding: 1rem 0.5rem;
            color: black;
        }
    }
`

export default SericesSection;