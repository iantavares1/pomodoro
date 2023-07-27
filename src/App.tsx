import { usePomodoro } from './hooks/usePomodoro'

import { Button } from './components/Button'
import { Timer } from './components/Timer'

function App() {
  const {
    isWorking,
    isPaused,
    seconds,
    workingTime,
    cyclesCounter,
    bgColor,
    handleIsPaused,
    handleIsWorking,
  } = usePomodoro()

  return (
    <div
      className={`bg-${bgColor} h-screen font-fira_code md:pt-12 lg:pt-16 2xl:pt-24 4xl:pt-48 5xl:pt-[360px]`}
    >
      <div
        className={`bg-${bgColor} w-full h-full pt-12 pb-8 px-2 xs:px-8 flex flex-col justify-between items-center text-white
         md:bg-white md:w-3/4 md:m-auto md:h-3/4 md:text-black md:rounded-2xl  md:shadow-2xl 
         2xl:h-5/6 2xl:gap-0 2xl:p-20
         3xl:w-2/5 3xl:h-5/6
         4xl:scale-125
         5xl:scale-150`}
      >
        <h1 className="text-4xl font-medium xl:text-6xl">
          {isWorking ? 'Working' : 'Resting'}
        </h1>
        <span className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl xl:text-[160px]">
          <Timer seconds={seconds} />
        </span>

        <span className="p-4 grid grid-cols-2 grid-c gap-4 text-lg xs:flex xs:justify-around md:w-full ">
          <span className="col-span-2 flex justify-center">
            <Button color={bgColor} onClick={() => handleIsPaused()}>
              {isPaused ? 'Play' : 'Pause'}
            </Button>
          </span>

          <Button
            color={bgColor}
            onClick={() => {
              handleIsWorking(true)
            }}
          >
            Work
          </Button>
          <Button
            color={bgColor}
            onClick={() => {
              handleIsWorking(false)
            }}
          >
            Rest
          </Button>
        </span>
        <span className="w-full flex flex-col gap-2 text-xl xl:text-2xl">
          <span>Cycles: {Math.floor(cyclesCounter)}</span>
          <span>
            Working Time: <Timer seconds={workingTime} />
          </span>
        </span>
      </div>
    </div>
  )
}

export default App
