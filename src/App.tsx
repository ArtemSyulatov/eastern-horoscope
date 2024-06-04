import "./styles/App.css";
import { ChangeEvent, useState } from "react";
import { innerBeasts } from "./animals/animals";
import { useAnimal } from "./hooks/useAnimal.js";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";

function App() {
  const [date, setDate] = useState<Date>(new Date());
  const [newDate, setNewDate] = useState<null | Date>(null);
  const [innerBeast, setInnerBeast] = useState<string>("");
  const [lastNumOfYear, setLastNumOfYear] = useState<null | number>(null);
  const [element, setElement] = useState("");
  const animal = useAnimal(newDate as Date);

  const handleClick = () => {
    setNewDate(date);
    switch (lastNumOfYear) {
      case 0:
      case 1:
        setElement("Металл");
        break;
      case 2:
      case 3:
        setElement("Вода");
        break;
      case 4:
      case 5:
        setElement("Дерево");
        break;
      case 6:
      case 7:
        setElement("Огонь");
        break;
      case 8:
      case 9:
        setElement("Земля");
        break;
    }

    setInnerBeast(innerBeasts[date.getMonth() + 1]);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setLastNumOfYear(date.getFullYear() % 10);
    setDate(date);
  };

  return (
    <>
      <div className={"info"}>
        <h1>Eastern Horoscope</h1>
        <p className={"animal"}>{animal.animal}</p>
        <div>{element}</div>
        <img alt="" className={"animal_img"} src={animal.img} />
        <p className={"compatibility"}>{animal.compatibility}</p>
        <p className={"sign"}>{animal.sign}</p>
        <p className={"luckNumbers"}>{animal.luckNumbers}</p>
        <p className={"luckColors"}>{animal.luckColors}</p>
        <p>{animal.description}</p>
        {innerBeast && <p>Ваше внутреннее животное: {innerBeast}</p>}
      </div>
      <div className={"input"}>
        <Input
          min="1900-00-00"
          max="2007-12-12"
          type={"date"}
          onChange={(e) => handleChange(e)}
        />
        <Button onClick={handleClick}>Submit</Button>
      </div>
    </>
  );
}

export default App;
