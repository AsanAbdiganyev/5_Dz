import React, { useState } from "react";

const MainPage = () => {
    const [inputValue, setInputValue] = useState("")
    const [names, setNames] = useState([])

    const handleAdd = () => {
        if (inputValue.trim()) {
            setNames([...names, inputValue])
            setInputValue("")
        }
    };

    const handleUpdate = (index) => {
        if (inputValue.trim()) {
            const updatedNames = names.map((name, i) =>
                i === index ? inputValue : name
            );
            setNames(updatedNames)
        }
    };

    return (
        <div>
            <h1>Список имен</h1>
            <input type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Введите имя"
            />
            <button
                onClick={handleAdd}  disabled={!inputValue.trim()}>Добавить
            </button>

            <div>{names.length === 0 ? (
                    <p>Список пуст</p>
                ) : (
                    <ul>
                        {names.map((name, index) => (
                            <li key={index}>
                                {name}
                                <button onClick={() =>
                                    handleUpdate(index)} disabled={!inputValue.trim()}>Поменять</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MainPage;
