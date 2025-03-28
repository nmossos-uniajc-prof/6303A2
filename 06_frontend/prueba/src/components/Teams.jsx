import { useState, useEffect } from "react";

function Teams() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timer = setInterval(() => {
          setHora(new Date().toLocaleTimeString());
        }, 1000);
        console.log("*");
        console.log("-");
        return () => clearInterval(timer);
      }, []);


  return (
    <>
    <h1>Equipo {hora}</h1>

    <b>Jose:</b>
    <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis maiores quos est totam laudantium.</blockquote>
    <b>Manuel</b>
    <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laudantium sunt illo totam.</blockquote>
    </>
  )
}

export default Teams