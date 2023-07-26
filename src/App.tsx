import { useEffect, useState } from 'react'

import { Button } from './components/Button'

const WORK_SECONDS = 30 * 60
const REST_SECONDS = 5 * 60

function App() {
  const [isWorking, setIsWorking] = useState(true)
  const [isPaused, setIsPaused] = useState(true)

  const [seconds, setSeconds] = useState(WORK_SECONDS)

  const [totalTime, setTotalTime] = useState(0)
  const [workingTime, setWorkingTime] = useState(0)
  const [cyclesCounter, setCyclesCounter] = useState(0)

  const handleIsWorking = (boolean: boolean) => {
    setIsWorking(boolean)
    setSeconds(boolean ? WORK_SECONDS : REST_SECONDS)
  }

  const handleIsPaused = (boolean?: boolean) =>
    setIsPaused((previous) => boolean || !previous)

  useEffect(() => {
    if (seconds === 0) {
      if (isWorking) {
        handleIsWorking(false)
      } else {
        handleIsWorking(true)
      }
    }
    if (!isPaused) {
      const interval = setInterval(() => {
        setSeconds((previous) => previous - 1)
        setTotalTime((previous) => previous + 1)
        if (isWorking) setWorkingTime((previous) => previous + 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [seconds, isWorking, isPaused])

  useEffect(() => {
    totalTime % (WORK_SECONDS + REST_SECONDS) === 0 &&
      setCyclesCounter((previous) => (totalTime > 0 ? previous + 1 : previous))
  }, [totalTime])

  return (
    <div className="bg-secondary p-28 h-screen font-fira_code">
      <div className="bg-white w-fit px-8 py-12 m-auto rounded-xl shadow-2xl flex flex-col gap-12 items-center">
        <h1 className="text-4xl font-medium">
          {isWorking ? 'Working' : 'Resting'}
        </h1>
        <span className="text-9xl">
          <span>{String(Math.floor(seconds / 60)).padStart(2, '0')}</span>
          <span>:</span>
          <span>{String(seconds % 60).padStart(2, '0')}</span>
        </span>
        <span className="px-12 flex gap-32 text-lg">
          <Button
            onClick={() => {
              handleIsWorking(true)
              setIsPaused(true)
            }}
          >
            Work
          </Button>
          <Button
            onClick={() => {
              handleIsWorking(false)
              setIsPaused(true)
            }}
          >
            Rest
          </Button>
          <Button onClick={() => handleIsPaused()}>
            {isPaused ? 'Play' : 'Pause'}
          </Button>
        </span>
        <span className="w-full flex flex-col gap-2 text-xl">
          <span>Cycles: {Math.floor(cyclesCounter)}</span>
          <span>
            <span>Working Time: </span>
            {Math.floor(workingTime / 60) < 60 && (
              <>
                <span>
                  {String(Math.floor(workingTime / 60)).padStart(2, '0')}
                </span>
                :<span>{String(workingTime % 60).padStart(2, '0')}</span>
              </>
            )}
            {Math.floor(workingTime / 60) >= 60 && (
              <>
                <span>
                  {String(Math.floor(workingTime / 3600)).padStart(2, '0')}
                </span>
                :
                <span>
                  {String(Math.floor((workingTime % 3600) / 60)).padStart(
                    2,
                    '0',
                  )}
                </span>
                :<span>{String(workingTime % 60).padStart(2, '0')}</span>
              </>
            )}
          </span>
        </span>
      </div>
    </div>
  )
}

export default App
