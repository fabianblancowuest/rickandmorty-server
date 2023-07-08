import styles from "./SearchBar.module.css"
import React, { useState } from "react";


export default function SearchBar(props) {
   // **Estado local
   const [id, setId] = useState("");

   // **Estado inicial del input
   const [inputValue, setInputValue] = useState("");

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
   function cleanInput(event) {
      props.onSearch(id);
      setInputValue(event.target.value);
      input.value = "";

   }

   return (
      <>
         <div className={styles.div}>
            <input id="input" className={styles.input} type='search' title="Escriba el id del personaje y presione la tecla ENTER" placeholder="Buscar un personaje..." onChange={handleChange} onKeyDown={handleKeyPress} />
            <input type="submit" value="Agregar" className={styles.button} onClick={cleanInput}></input>
         </div>
      </>
   );
}
