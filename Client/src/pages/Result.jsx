import { assets } from "../assets/assets";
import { useState } from "react";


const Buy = () => {
  const [Image,setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading,setLoading] = useState(false);
  const [input, setInput] = useState("")
  const onSubmitHandler = async(e)=>{}
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col min-h-[90vh] justify-center items-center">
      <div>
    <div className="relative">
      <img src={assets.sample_img_1} alt="" className="max-w-sm rounded" />
    <span className={"absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]: w-0} "}/>
    </div>

    <p className={!loading ? "hidden" : " "}>Loading.........</p>
    
  </div>
{!isImageLoaded &&
  <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-05 mt-10 rounded-full'>
    {/* 
    comments for the logic used below
    javascript
<input 
  onChange={(e) => setInput(e.target.value)}
  value={input}
  type="text" 
  placeholder="Describe what you want to generate" 
  className='flex-1'
/>
What's Happening Step-by-Step:

1. Two-way Data Binding

This creates a connection between the input field and React state:

value={input} → The input shows whatever is in input state
onChange={...} → When user types, it updates the input state
2. The Event Object (e)

When a user types, React gives you an event object:

javascript
onChange={(e) => setInput(e.target.value)}
//         ^                          ^
//         |                          |
//    Event object             The actual text typed
3. The Flow When User Types "CAT"

javascript
// Initial state
input = ""  // Empty string

// User types "C"
onChange fires → e.target.value = "C" → setInput("C") → input = "C"

// Input re-renders with value="C" (shows "C")

// User types "A" (now field has "CA")
onChange fires → e.target.value = "CA" → setInput("CA") → input = "CA"

// User types "T" (now field has "CAT")
onChange fires → e.target.value = "CAT" → setInput("CAT") → input = "CAT"
Visual Representation:

text
┌─────────────────────────────────────┐
│  React State: input = "cat"         │
└─────────────────────────────────────┘
                    ↑
                    │ setInput("cat")
                    │
┌─────────────────────────────────────┐
│  onChange={(e) =>                   │
│    setInput(e.target.value) ← "cat" │
│  }                                   │
└─────────────────────────────────────┘
                    ↑
                    │ User types "cat"
┌─────────────────────────────────────┐
│  <input value={input} />            │
│  ┌──────────────────────┐           │
│  │ cat                  │           │
│  └──────────────────────┘           │
└─────────────────────────────────────┘
Why This Pattern?

This is called a controlled component:

javascript
// Without this pattern (uncontrolled - BAD):
<input />  // React doesn't know what's in it

// With this pattern (controlled - GOOD):
<input 
  value={input}           // React controls what shows
  onChange={setInput}     // React knows every change
/>
Benefits:

React always knows the exact value in the input
You can validate or transform input as user types
You can reset the input by setting state to ""
You can react to changes instantly*/}
<input 
onChange={(e)=>setInput(e.target.value)}
value={input}
type="text" placeholder="Describe what you want to generate" className= 'flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color '/>
  <button type="submit" className="bg-black px-10 sm:px-16 py-3 rounded-full">
  Generate
   </button>
  </div> 
  }
  {isImageLoaded &&
  <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
    <p onClick={() => {setIsImageLoaded(false)}} className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer hover:bg-zinc-900 hover:text-white transition-all duration-200'>Generate Another</p>
    <a href={Image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>

  </div>
  }
  </form>
  
  )};

export default Buy;

