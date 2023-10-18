import {useState} from "react";

export const useElement = (lastNumOfYear)=>{
    const [element, setElement] = useState('')
    switch (lastNumOfYear) {
        case 0:
        case 1:
            setElement('Металл')
            break;
        case 2:
        case 3:
            setElement('Вода')
            break;
        case 4:
        case 5:
            setElement('Дерево')
            break;
        case 6:
        case 7:
            setElement('Огонь')
            break;
        case 8:
        case 9:
            setElement('Земля')
            break;
        default:
            break;
    }
    return element
}