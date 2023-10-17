import './styles/App.css'
import {Input} from "./components/ui/Input";
import {Button} from "./components/ui/Button";
import {useState} from "react";


const dates = [{
    animal:'КРЫСА',
    years:[1900, 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996]
},{
    animal:'БЫК',
    years:[1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997]
},{
    animal:'ТИГР',
    years:[1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998]
},
]


function App() {
    const [date, setDate] = useState('null')
    const [animal,setAnimal] = useState('')
    const handleClick = (e) => {
        e.preventDefault()
        dates.forEach((elem)=>{
            elem.years.forEach((year)=>{
                if(Number(date.slice(0,4)) === year){
                    console.log(elem.animal)
                    setAnimal(elem.animal)
                }
            })
        })
    }
    const handleChange = (e) => {
        setDate(e.target.value)
    }
    return (
        <>
            <div><p className={'animal'}>{animal}</p></div>
            <form>
                <Input type={'date'} onChange={(e) => handleChange(e)}/>
                <Button onClick={(e) => handleClick(e)}>Submit</Button>
            </form>
        </>
    )
}

export default App
