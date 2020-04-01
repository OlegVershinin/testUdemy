// Импортировать библиотеки React и ReactDOM
import React from "react";
import ReactDOM from "react-dom";

const getTime = () => {
  return (new Date()).toLocaleTimeString();
}

// Cоздание компонента React
const App = () => {
  const ButtonText = 'нажми меня';

  return (
  <div>
    <label className="label" htmlFor="name">
      Введите имя:
    </label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: 'blue', color: 'white'}}>
      {ButtonText}
    </button>
    <p>Текущее время:</p>
    <h3>
      {getTime()}
    </h3>
  </div>
  );
};

// Взять реальный компонент и показать его на экране
ReactDOM.render(<App />, document.querySelector("#root"));
