type TimerProps = {
  seconds: number
}

export const Timer = ({ seconds }: TimerProps) => {
  return (
    <span>
      {Math.floor(seconds / 60) < 60 && (
        <>
          <span>{String(Math.floor(seconds / 60)).padStart(2, '0')}</span>:
          <span>{String(seconds % 60).padStart(2, '0')}</span>
        </>
      )}
      {Math.floor(seconds / 60) >= 60 && (
        <>
          <span>{String(Math.floor(seconds / 3600)).padStart(2, '0')}</span>:
          <span>
            {String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')}
          </span>
          :<span>{String(seconds % 60).padStart(2, '0')}</span>
        </>
      )}
    </span>
  )
}
