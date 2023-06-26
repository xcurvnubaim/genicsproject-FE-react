import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [list, setList] = useState(["Hit the gym"]);
  function changeMode() {
    let ht = window.document.documentElement;
    ht.classList.toggle("dark");
  }

  function checkList(e) {
    e.target.classList.toggle("check");
    e.target.classList.toggle("uncheck");
  }

  function hideList(e) {
    e.target.parentElement.classList.toggle("hidden");
  }

  function handleChange(e) {
    setTitle(e.target.value);
    // console.log(title);
  }

  function add(event) {
    event.preventDefault();
    if (title != "" && title.length <= 20) {
      setList([...list, title]);
    } else if (title.length == 0) {
      alert("Ga boleh kosong");
    } else {
      alert("Maksimum 20 karakter");
    }
    setTitle('');
  }


  return (
    <div>
      <div className="flex justify-center">
        <div className="mt-5 relative flex flex-col rounded-xl bg-clip-border shadow-none border-4 border-light-2 bg-light-6 w-80 lg:w-[600px] dark:bg-dark-4 dark:border-dark-1">
          <div className="absolute right-5 mt-5 bg-transparent rounded-lg">
            <div className="inline-flex items-center">
              <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
                <input
                  id="switch-mode"
                  type="checkbox"
                  className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-gray-200 transition-colors duration-300 checked:bg-dark-1 peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
                  onClick={changeMode}
                />
                <label
                  htmlFor="switch-mode"
                  className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
                ></label>
              </div>
            </div>
          </div>
          <h4 className="mt-3 font-sans text-2xl font-bold justify-center flex dark:text-white">
            To do list
          </h4>
          <form className="mx-5 mt-5 mb-2 min-w-[200px]" onSubmit={add}>
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative h-11">
                <input
                  id="title"
                  type="text"
                  className="px-3 font-sans bg-white border shadow-sm border-light-4 focus:outline-none focus:border-light-2 focus:ring-light-2 block h-full w-full rounded-md sm:text-sm focus:ring-1
                              dark:bg-dark-4 dark:border-white dark:border-t dark:text-white dark:placeholder:text-white"
                  placeholder="Tittle"
                  value={title}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              className="block w-full py-2 bg-light-2 rounded-md text-white font-sans font-bold hover:shadow-gray-400 hover:shadow-lg
                          dark:bg-dark-2 dark:shadow-none"
              type="submit"
            >
              Add
            </button>
          </form>

          <div className="mt-6 mx-5 flex justify-center h-full bg-light-2 rounded-md font-bold border text-white dark:bg-dark-2">
            To Do List
          </div>
          <div className="mx-5 mt-0 mb-5  ">
            <ul className="font-sans cursor-pointer " id="ToDoList">
              {list.map((act, index) => (
                <li
                  key={index}
                  className="relative uncheck py-3 hover:bg-slate-300 pl-5 rounded-lg"
                  onClick={checkList}
                >
                  {act}
                  <span
                    key={index}
                    className="absolute right-5 hover:bg-red-400 px-5"
                    onClick={hideList}
                  >
                    X
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
