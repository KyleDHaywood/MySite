import { useState } from "react";

const ToDo = () => {
  //   const [name, setName] = useState("");

  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleToDo = () => {
    let allToDos = [...list];
    allToDos.push(text);
    setList(allToDos);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="to-do-list">
      <input id="toDoItem" onChange={handleText} type="text"></input>
      <button className="btn btn-lg" onClick={handleToDo}>
        Click Add
      </button>
      <div className="todo-list">
        {list.map((todo) => (
          <h6 key={todo}>{todo}</h6>
        ))}
      </div>
    </div>
  );
};
//
//

export default ToDo;
