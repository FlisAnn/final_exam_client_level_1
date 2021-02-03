import React, {useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import getShowsData from '../modules/shows'
import ShowCards from './ShowsCard'

const ShowIndex = () => {
  const dispatch = useDispatch
  const shows = useSelector(state => state.showsFeed)

  useEffect(() => {
    showsFeed.index(dispatch)
  }, [])

  let displayShows = shows.map((show) => {
    return <ShowsCard show={show} />
  })

  return (
    <div>
      {displayShows}
    </div>
  )
}

export default ShowIndex
