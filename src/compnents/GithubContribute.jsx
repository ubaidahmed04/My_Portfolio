import React from 'react'
import GitHubCalendar from 'react-github-calendar'

function GithubContribute() {
  return (
    <div className="p-8  w-full  lg:w-full flex justify-center">
    <GitHubCalendar
      username="ubaidahmed04"
      blockMargin={8}
      blockRadius={100}
      // style={{ backgroundColor: '#' }} 
      // blockSize={5}
      blockStyle={{
        backgroundColor: '#000', // This changes the color of the blocks (the squares)
      }}
      colorScheme={"dark"}
    />
  </div>
      )
}

export default GithubContribute