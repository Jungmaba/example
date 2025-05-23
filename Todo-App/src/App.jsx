import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "공부하기" },
    { id: 1, content: "청소하기" },
    { id: 2, content: "밥먹기" },
    { id: 3, content: "괴롭히기" },
    { id: 4, content: "잠자기" },
    { id: 5, content: "운동하기" },
  ]);

  return (
    <>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        onClick={() => {
          const newTodo = { id: Number(new Date()), content: inputValue };
          const newTodoList = [...todoList, newTodo];
          setTodoList(newTodoList);
          setInputValue("");
        }}
      >추가하기</button>
    </>
  );
}

function TodoList({ todoList, setTodoList }) {
  return (
    <>
      <div className="todoList">
        <ul>
          {todoList.map((todo) => (
            <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
          ))}
        </ul>
      </div>
    </>
  );
}

function EditingInput({ setEditingIs, todo, inputValue, setTodoList, setInputValue }) {

  const handlediting = () => {
    setTodoList((prev) =>
      prev.map((el) =>
        el.id === todo.id ? { ...el, content: inputValue } : el
      )
    );
    setEditingIs(false);
  }
  return (
    <>
      <input className="todoInput" value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="opbtn" onClick={() => setEditingIs(false)}>취소</button>
      <button className="opbtn" onClick={handlediting}>변경</button>
    </>
  )
}

// setTodoList((prev) =>
//   prev.map((el) =>
//     el.id === todo.id ? { ...el, content: inputValue } : el
//   )
// );


function Todo({ todo, setTodoList }) {
  const [inputValue, setInputValue] = useState("");
  const [editingIs, setEditingIs] = useState(false);
  return (
    <>
      <li>
        <input type="checkbox" />
        {todo.content}
      </li>
      <div>

        {!editingIs && (
          <button className="opbtn" onClick={() => setEditingIs(true)}>수정</button>
        )}

        {editingIs && < EditingInput
          todo={todo} editingIs={editingIs}
          setEditingIs={setEditingIs}
          setInputValue={setInputValue}
          inputValue={inputValue}
          setTodoList={setTodoList} />}

        {!editingIs && (<button className="opbtn"
          onClick={() => {
            setTodoList((prev) => {
              return prev.filter((el) => el.id !== todo.id);
            });
          }}
        >삭제</button>)}
      </div>

    </>

  );
}

export default App;
