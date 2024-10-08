import React from 'react'

export function Timer({ time }) {
  return (
    <div className="timer">
      <span className="digits">
        {("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
      </span>
      <span className="digits mili-sec">
        {("0" + ((time / 10) % 100)).slice(-2)}
      </span>
    </div>
  )
}