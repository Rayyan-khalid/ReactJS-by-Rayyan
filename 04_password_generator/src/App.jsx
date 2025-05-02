import { useCallback, useState, useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  // we do not write the password in the state,bcz we just generate it and show it 
  const [password, setPassword] = useState("");

  // Use Ref Hook
  const passwordRef = useRef(null);
  // we can use the useRef hook to get the value of the password input

  // CallBack Hook
  const passwordGenerator = useCallback(() => {
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";   
    if(charAllowed) str+="!@#$%^&*()_+-=[]{}|;':\",.<>?/";
    // we can use str.length to get the length of the string
    for(let i=0; i<=length; i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length));
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed,setPassword]);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current.select(); // we can use the select method to select the text in the password input
    // we can use the setSelectionRange method to set the selection range of the password input
    passwordRef.current.setSelectionRange(0, 99);
    // we can use the navigator.clipboard API to copy the password to the clipboard
    navigator.clipboard.writeText(password)
    .then(() => {
      alert("Password copied to clipboard");
    })
    .catch((err) => {
      console.log(err);
    });
  },[password])

  // we can use the useEffect hook to call the passwordGenerator function when the length, numberAllowed, or charAllowed changes
  useEffect(() => {
    passwordGenerator();
  }
  , [length, numberAllowed, charAllowed,passwordGenerator]);

  return (
    <>
    <h1 className="text-3xl font-bold underline bg-blue-400 text-center p-3 ">
      Password Generator!
    </h1>
    <div className="w-full max-w-md mx-auto mt-10 shadow-md bg-blue-400 rounded-lg p-6 text-blue-900">
      <div className='flex shadow rounded-lg  overflow-hidden p-6 bg-blue-300'>
        <input 
        type="text"
        value={password}
        className='outline-none border-none w-full p-2'
        placeholder='Generated Password'
        readOnly
        ref={passwordRef} // we can use the useRef hook to get the value of the password input
        />
        <button className='bg-blue-500 text-white p-2 rounded-lg ml-2' onClick={copyToClipBoard}>
          Copy
        </button>
      </div>
        <div className='flex flex-col mt-4'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            />
            <label>Length:{length}</label>

            <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            // onChange={(e) => setNumberAllowed(e.target.checked)}
            onChange={()=>{
              setNumberAllowed((prev) => !prev);
            }} // we can use the event object to get the value of the checkbox
            className='cursor-pointer ml-3'
            />
            <label htmlFor="numberInput">Numbers</label>

            {/* Characters */}
            <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            // onChange={(e) => setNumberAllowed(e.target.checked)}
            onChange={()=>{
              setNumberAllowed((prev) => !prev);
            }} // we can use the event object to get the value of the checkbox
            className='cursor-pointer ml-3'
            />
            <label htmlFor="numberInput">Characters</label>
          </div>
          {/* <div className='flex items-center gap-x-1'> 
           
          </div> */}
        </div>
        
    </div>
    </>
  )
}

export default App
