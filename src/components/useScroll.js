import {useInView} from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


export const UseScroll = () => {
    const controls = useAnimation();
    const [element, view] = useInView({threshold: 0.4});
    if(view){
        controls.start('show');
        console.log(view);
    } else {
        controls.start('hidden');
    }
    return [element, controls];
}