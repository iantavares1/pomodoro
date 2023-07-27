import { useEffect, useState } from 'react'

const WORK_SECONDS = 30 * 60
const REST_SECONDS = 5 * 60

export const usePomodoro = () => {
  const [isWorking, setIsWorking] = useState(true)
  const [isPaused, setIsPaused] = useState(true)

  const [seconds, setSeconds] = useState(WORK_SECONDS)

  const [totalTime, setTotalTime] = useState(0)
  const [workingTime, setWorkingTime] = useState(0)
  const [cyclesCounter, setCyclesCounter] = useState(0)

  const [bgColor, setBgColor] = useState<'secondary' | 'primary'>()

  const handleIsWorking = (boolean: boolean) => {
    if (boolean !== isWorking) {
      setIsWorking(boolean)
      setSeconds(boolean ? WORK_SECONDS : REST_SECONDS)
      setIsPaused(true)
    }
  }

  const handleIsPaused = (boolean?: boolean) =>
    setIsPaused((previous) => boolean || !previous)

  useEffect(() => {
    if (seconds === 0) {
      if (isWorking) {
        setIsWorking(false)
      } else {
        setIsWorking(true)
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

  useEffect(() => {
    setBgColor(isWorking ? 'primary' : 'secondary')
  }, [isWorking])

  return {
    isWorking,
    isPaused,
    seconds,
    workingTime,
    cyclesCounter,
    bgColor,
    handleIsPaused,
    handleIsWorking,
  }
}
