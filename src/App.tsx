import './App.css'

function App() {
  return (
    <div className="bg-zinc-200">
      <nav className="sticky top-0 bg-gradient-to-r  from-gray-900 via-gray-800 to-gray-700 shadow-md">
        <div className="flex items-center p-2 gap-2">
            <img src = "./src/assets/go_icon.png" width={50}/>
            <div className="text-2xl font-bold inline-flex items-center">
              欢迎来到
              <img src = "./src/assets/looksaw_icon.png" width={100} />
              <span className="text-sky-400 italic">深度学习体验</span>
            </div>
            <div className="flex flex-1 justify-end items-center">
              <div className="relative flex h-full">Home</div>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default App
