import React,{useState} from 'react'

const Box = (props) => {
    const [hide, setHide] = useState(true);
    
    const handletoggle = () => {
        // hide  ? setHide(false) : setHide(true);
        setHide(!hide)
    }


    return (
      <div>
        <div className="  grid grid-cols-3 gap-2 ">
          {/* <button
            onClick={() => {
              setHide(false);
            }}
            className="border border-emerald-600 px-5 py-2 bg-emerald-600 rounded-lg active:bg-emerald-500 duration-200 active:scale-75"
          >
            Open
          </button>
          <button
            onClick={() => {
              setHide(true);
            }}
            className="border border-emerald-600  px-5 py-2 bg-emerald-600 rounded-lg active:bg-emerald-500 duration-200 active:scale-75"
          >
            Close
          </button> */}

          <button
            onClick={handletoggle}
            className={`         border border-cyan-400 flex justify-between col-span-full
            px-5 py-2 mb-2 bg-cyan-400 rounded-lg active:bg-cyan-300 duration-200
            active:scale-75`}
          >
                    <span>{props.id} {props.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 duration-200 ${!hide && "rotate-180"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </button>

          {/* <h1 className="font-bold font-serif text-2xl">Box content</h1> */}

          <div
            className={` ${
              hide && `hidden`
            } px-10 py-3  mb-4 rounded-lg bg-gray-300  border  col-span-4`}
          >
            <p>
             {props.answer}
            </p>
          </div>
        </div>
      </div>
    );
}

export default Box