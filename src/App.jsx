import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [uzText, setUzText] = useState("");
  const [engText, setEngText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (uzText && engText) {
      const newTodos = [...todos];
      newTodos.push({
        uzText,
        engText,
        completed: false,
        del: false,
      });
      setTodos(newTodos);
      setEngText("");
      setUzText("");
    }
  }
  // function uzHandle(e){
  //   console.log(e);
  // }
  function engHandle(e) {
    setEngText(e.target.value);
  }
  function uzHandle(e) {
    setUzText(e.target.value);
  }
  function yodlanganSozlardan(i) {
    const newTodos = [...todos];
    newTodos[i].completed = !newTodos[i].completed;

    setTodos(newTodos);
  }
  function ochiribTashla(i) {
    const newT = [];
    const newTodos = [...todos];
    newTodos[i].del = !newTodos[i].del;

    newTodos.forEach((todo) => {
      if (!todo.del) {
        newT.push(todo);
      }
    });
    setTodos(newT);
  }

  return (
    <div className=" grid grid-rows-2 grid-cols-2 h-full divide-x divide-y ">
      {/* {imputlar malumot olish uchun} */}

      <div className="flex flex-col justify-center items-center gap-3 px-1">
        <h2 className=" text-[20px] font-bold">Yangi so'z</h2>
        <form
          className="flex flex-col w-full items-center gap-3"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="ENG"
            className="input input-bordered w-full max-w-xs"
            value={engText}
            onChange={engHandle}
          />
          <input
            type="text"
            placeholder="UZ"
            className="input input-bordered w-full max-w-xs"
            value={uzText}
            onChange={uzHandle}
          />
          <button type="submit" className="btn btn-accent w-full max-w-xs">
            Saqlash
          </button>
        </form>
      </div>

      <div className=""></div>

      {/* yangi suzlar */}
      <div className=" px-3">
        <h2 className=" text-center mt-3 pb-5 text-[20px] font-bold">
          Yangi so'z
        </h2>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>ENG</th>
                <th>UZ</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {todos.map((e, i) => {
                return e.completed ? (
                  ""
                ) : (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{e.engText}</td>
                    <td>{e.uzText}</td>
                    <td className=" flex justify-start gap-4">
                      <img
                        onClick={() => yodlanganSozlardan(i)}
                        className="w-[20px] cursor-pointer"
                        src={e.completed ? "src/replay.svg" : "src/check.svg"}
                        alt="./del.svg"
                      />
                      <img
                        onClick={() => ochiribTashla(i)}
                        className="w-[20px] cursor-pointer"
                        src="src/del.svg"
                        alt="./del.svg"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* yodlangan suzlar */}
      <div className=" px-3 ">
        <h2 className=" text-center mt-3 pb-5 text-[20px] font-bold">
          Yodlangan so'zlar
        </h2>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>ENG</th>
                <th>UZ</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {todos.map((e, i) => {
                return e.completed ? (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{e.engText}</td>
                    <td>{e.uzText}</td>
                    <td className=" flex justify-start gap-4">
                      <img
                        onClick={() => yodlanganSozlardan(i)}
                        className="w-[20px] cursor-pointer"
                        src={e.completed ? "src/replay.svg" : "src/check.svg"}
                        alt="./del.svg"
                      />
                      <img
                        onClick={() => ochiribTashla(i)}
                        className="w-[20px] cursor-pointer"
                        src="src/del.svg"
                        alt="./del.svg"
                      />
                    </td>
                  </tr>
                ) : (
                  ""
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
