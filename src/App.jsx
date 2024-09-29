import ApiCall from "./components/ApiCall.jsx";

function App() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-[100vh]">
        <div className="flex flex-col items-center justify-center p-4 rounded-md bg-white border border-black">
            <span>GrapQL</span>
            <ApiCall/>
        </div>
    </div>
  )
}

export default App
