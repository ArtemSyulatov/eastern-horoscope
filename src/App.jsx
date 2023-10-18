import './styles/App.css'
import {Input} from "./components/ui/Input";
import {Button} from "./components/ui/Button";
import {useEffect, useState} from "react";
import {dates} from "./animals/animals.js";


function App() {
    const [date, setDate] = useState('')
    const [animal, setAnimal] = useState({
        animal: '',
        compatibility: '',
        sign: '',
        luckNumbers: '',
        luckColors: '',
        years: [],
        description: ''
    })
    const [year, setYear] = useState(null)
    const [month, setMonth] = useState(null)
    const [day, setDay] = useState(null)
    const [innerBeast, setInnerBeast] = useState('')
    const [lastNumOfYear, setLastNumOfYear] = useState(null)
    const [element, setElement] = useState('')
    const handleClick = (e) => {
        e.preventDefault()
        dates.forEach((elem) => {
            elem.years.forEach((years) => {
                if (year === years) {
                    setAnimal(elem)
                }
            })
        })
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
        }
        switch (month) {
            case 1:
                setInnerBeast('Ваше внутреннее животное: Бык')
                break;
            case 2:
                setInnerBeast('Ваше внутреннее животное: Тигр')
                break;
            case 3:
                setInnerBeast('Ваше внутреннее животное: Кролик')
                break;
            case 4:
                setInnerBeast('Ваше внутреннее животное: Дракон')
                break;
            case 5:
                setInnerBeast('Ваше внутреннее животное: Змея')
                break;
            case 6:
                setInnerBeast('Ваше внутреннее животное: Лошадь')
                break;
            case 7:
                setInnerBeast('Ваше внутреннее животное: Коза')
                break;
            case 8:
                setInnerBeast('Ваше внутреннее животное: Обезьяна')
                break;
            case 9:
                setInnerBeast('Ваше внутреннее животное: Петух')
                break;
            case 10:
                setInnerBeast('Ваше внутреннее животное: Собака')
                break;
            case 11:
                setInnerBeast('Ваше внутреннее животное: Свинья')
                break;
            case 12:
                setInnerBeast('Ваше внутреннее животное: Крыса')
                break;
        }
    }
    const handleChange = (e) => {
        setYear(Number(e.target.value.slice(0, 4)))
        setMonth(Number(e.target.value.slice(5, 7)))
        setDay(Number(e.target.value.slice(8, 10)))
        setLastNumOfYear(year % 10)
        setDate(e.target.value)
    }

    return (
        <>
            <div className={'info'}><p className={'animal'}>{animal.animal}</p>
                <div>{element}</div>
                <img src={''}/>
                <p className={'compatibility'}>{animal.compatibility}</p>
                <p className={'sign'}>{animal.sign}</p>
                <p className={'luckNumbers'}>{animal.luckNumbers}</p>
                <p className={'luckColors'}>{animal.luckColors}</p>
                <p>{animal.description}</p>
                <p>{innerBeast}</p>
            </div>
            <div className={'input'}>
                <form>
                    <Input min="1900-00-00" max="2007-12-12" type={'date'} onChange={(e) => handleChange(e)}/>
                    <Button onClick={(e) => handleClick(e)}>Submit</Button>
                </form>
            </div>
        </>
    )
}

export default App
