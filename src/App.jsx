import './styles/App.css'
import {Input} from "./components/ui/Input";
import {Button} from "./components/ui/Button";
import {useState} from "react";
import {dates} from "./animals/animals.js";

function App() {
    const [date, setDate] = useState('')
    const [animal,setAnimal] = useState('')
    const [year,setYear] = useState(null)
    const [month,setMonth] = useState(null)
    const [day,setDay] = useState(null)
    const handleClick = (e) => {
        e.preventDefault()
        dates.forEach((elem,index,array)=>{
            elem.years.forEach((years)=>{
                console.log(date.slice(4))
                if(year === years){
                    // if(month === 2 && day <= 4){
                    //     setAnimal(array[index - 1].animal) //TODO Не забывайте считать по китайскому календарю. Новый год припадает на или почти на 4 февраля. Если вы родились до нового года, то, фактически, вы родились в предыдущем году. Проверьте, когда наступил новый год для вашего знака.
                    // }
                    setAnimal(elem.animal)
                }
            })
        })
    }
    const handleChange = (e) => {
        setYear(Number(e.target.value.slice(0,4)))
        setMonth(Number(e.target.value.slice(5,7)))
        setDay(Number(e.target.value.slice(8,10)))
        setDate(e.target.value)
    }
    return (
        <>
            <div><p className={'animal'}>{animal}</p></div>
            <form>
                <Input min="1900-00-00" max="2007-12-12" type={'date'} onChange={(e) => handleChange(e)}/>
                <Button onClick={(e) => handleClick(e)}>Submit</Button>
            </form>
        </>
    )
}

export default App
