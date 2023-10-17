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
},{
    animal:'КРОЛИК',
    years:[1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999]
},{
    animal:'ДРАКОН',
    years:[1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000]
},{
    animal:'ЗМЕЯ',
    years:[1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001]
},{
    animal:'ЛОШАДЬ',
    years:[1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002]
},{
    animal:'КОЗА',
    years:[1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003]
},{
    animal:'ОБЕЗЬЯНА',
    years:[1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004]
},{
    animal:'ПЕТУХ',
    years:[1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005]
},{
    animal:'СОБАКА',
    years:[1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 20068]
},{
    animal:'СВИНЬЯ',
    years:[1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007]
},
]


function App() {
    const [date, setDate] = useState('')
    const [animal,setAnimal] = useState('')
    const [year,setYear] = useState(null)
    const [month,setMonth] = useState(null)
    const [day,setDay] = useState(null)
    const handleClick = (e) => {
        e.preventDefault()
        console.log(year,typeof year)
        console.log(month,typeof month)
        console.log(day,typeof day)
        dates.forEach((elem,index,array)=>{
            elem.years.forEach((years)=>{
                console.log(date.slice(4))
                if(year === years){
                    if(month === 2 && day <= 4){
                        setAnimal(array[index - 1].animal)
                    }
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
