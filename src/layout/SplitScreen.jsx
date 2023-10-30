import React from 'react'

const SplitScreen = ({children, leftSize, rightSize}) => {
  const [Left, Right] = children;
  return (
    <div className="flex h-full min-w-full">
      <div className={`basis-${leftSize}`}>
        {Left}
      </div>
      <div className={`basis-${rightSize}`}>
        {Right}
      </div>
    </div>
  )
}

export default SplitScreen