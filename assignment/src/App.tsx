import { useEffect, useState } from "react";

function App() {
  const [values, setValues] = useState<string[]>([]);
  const [actives, setActives] = useState<boolean[]>(new Array(9).fill(false));
  const [green, setGreen] = useState<boolean>(false);

  const handlerChange = (e: any) => {
    const curr = e.currentTarget.value;
    const index = Number(curr) - 1;

    setValues((prev) => {
      if (prev.includes(curr)) {
        return prev.filter((val) => val !== curr);
      } else {
        return [...prev, curr];
      }
    });

    setActives((prev) => {
      const newActives = [...prev];
      newActives[index] = !newActives[index];
      return newActives;
    });
  };

  useEffect(() => {
    if (values.length === 9 && actives.every((istrue) => istrue)) {
      setGreen(true);
    }
  }, [values, actives]);

  useEffect(() => {
    if (green) {
      values.forEach((no, idx) => {
        setTimeout(() => {
          setActives((prev) => {
            const newActives = [...prev];
            newActives[Number(no) - 1] = false;
            return newActives;
          });
        }, idx * 500);
      });
    }
  }, [green]);

  const buttonClass = (index: number) => {
    if (green) {
      return `p-6 border border-black ${
        actives[index] ? "bg-green-500" : "bg-orange-500"
      }`;
    } else {
      return `p-6 border border-black ${
        actives[index] ? "bg-green-500" : "bg-white"
      }`;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center gap-[1px]">
        <button
          value="1"
          onClick={handlerChange}
          className={buttonClass(0)}
        ></button>
        <button
          value="2"
          onClick={handlerChange}
          className={buttonClass(1)}
        ></button>
        <button
          value="3"
          onClick={handlerChange}
          className={buttonClass(2)}
        ></button>
      </div>
      <div className="flex justify-center gap-[1px] m-[1px]">
        <button
          value="4"
          onClick={handlerChange}
          className={buttonClass(3)}
        ></button>
        <button
          value="5"
          onClick={handlerChange}
          className={buttonClass(4)}
        ></button>
        <button
          value="6"
          onClick={handlerChange}
          className={buttonClass(5)}
        ></button>
      </div>
      <div className="flex justify-center gap-[1px]">
        <button
          value="7"
          onClick={handlerChange}
          className={buttonClass(6)}
        ></button>
        <button
          value="8"
          onClick={handlerChange}
          className={buttonClass(7)}
        ></button>
        <button
          value="9"
          onClick={handlerChange}
          className={buttonClass(8)}
        ></button>
      </div>
    </div>
  );
}

export default App;
