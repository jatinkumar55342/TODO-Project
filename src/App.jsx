import { useState } from "react";

const App = () => {
  const [detail, setdetail] = useState("");
  const [heading, setheading] = useState("");
  const [task, settask] = useState([]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white text-3xl gap-2 overflow-hidden">
      <form
        className="left flex  flex-col min-w-[50vw] gap-8 min-h-[50vh] justify-center items-center m-4 lg:w-screen"
        onSubmit={(e) => {
          e.preventDefault();
          const newtask = [...task];
          newtask.push({ heading, detail });
          settask(newtask);
          setdetail("");
          setheading("");
        }}
      >
        <h1 className="text-5xl">Add Notes</h1>
        <input
          type="text"
          className="text w-[40%] bg-white text-black rounded-2xl p-4"
          placeholder="Enter Notes Heading "
          value={heading}
          onChange={(e) => {
            setheading(e.target.value);
          }}
        />
        <textarea
          type="text"
          value={detail}
          className="text w-[40%] bg-white text-black rounded-2xl p-4"
          placeholder="Write Detail Here"
          onChange={(e) => {
            setdetail(e.target.value);
          }}
        />
        <button className="text-black bg-white w-[40%] p-4 rounded-3xl hover:scale-110 ">
          Submit
        </button>
      </form>
      <div className="right bg-black min-w-[50%]  text-white">
        <h1 className="text-5xl text-center">Recent Notes</h1>
        <div className="flex flex-row flex-wrap gap-3 m-4 ">
          {task.map((ele, index) => {
            return (
              <div className="bg-white text-black flex flex-col min-w-[20%] h-60 rounded-3xl bg-[url('https://template.canva.com/EAFy0Dt_K-k/1/0/1131w-gOyPWxb9UyI.jpg')]  bg-cover w-xs">
                <h1 className="relative top-6 left-6 pt-6">{ele.heading}</h1>
                <p className=" p-6">{ele.detail}</p>
                <button
                  className="bg-red-600 w-30 rounded-3xl p-2 relative -bottom-8 left-7"
                  onClick={(e) => {
                    const nt = [...task];
                    nt.splice(index, 1);
                    settask(nt);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
