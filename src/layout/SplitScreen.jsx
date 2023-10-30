import React from 'react'

const SplitScreen = ({children, leftSize, rightSize}) => {
  const [Left, Right] = children;
  return (
    <div className="flex">
      <div className={`bg-red basis-${leftSize}`}>
        {Left}
      </div>
      <div className={`h-20 basis-${rightSize}`}>
        {Right}
      </div>
    </div>
  )
}

export default SplitScreen