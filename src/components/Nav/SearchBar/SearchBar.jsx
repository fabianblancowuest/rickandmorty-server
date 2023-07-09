import styles from "./SearchBar.module.css"
import React, { useState } from "react";


export default function SearchBar(props) {
   // **Estado local
   const [id, setId] = useState("");

   //** Función para limpiar el input
   // function cleanInputValue() {
   //    setInputValue("");
   // }

   function handleChange(event) {
      // console.log("funciona el handle", event)
      setId(event.target.value)
   }
   // Captura del valor del input usando javascript puro
   const input = document.getElementById("input");

   const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         // Lógica que se ejecuta al presionar Enter
         // console.log('Se presionó la tecla Enter');
         setId(event.target.value)
         props.onSearch(id);
         input.value = "";
      }
   };
   // Función para limpiar el valor del input con js puro
   function cleanInput() {
      props.onSearch(id);
      input.value = "";
   }
   function random() {
      return Math.round(Math.random() * (826 - 1) + 1);
   }
   function handleRandom() {
      console.log(random())
      console.log("Estamos en random");
      const result = random();
      setId(result)
      props.onSearch(id);
      input.value = "";
   }

   return (
      <>
         <div className={styles.div}>
            <input id="input" className={styles.input} type='search' title="Escriba el id del personaje y presione la tecla ENTER" placeholder="Buscar un personaje..." onChange={handleChange} onKeyDown={handleKeyPress} />
            <input type="submit" value="Agregar" className={styles.button} onClick={cleanInput}></input>
            <input type="submit" value="Agregar Random" className={styles.button} onClick={handleRandom}></input>
            <input type="submit" value="Limpiar Pantalla" className={styles.button} onClick={props.handleCleanScreen}></input>
         </div>
      </>
   );
}
