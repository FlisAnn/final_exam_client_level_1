import React, {useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import getShowsData from '../modules/shows'
// import ShowsCard from './ShowsCard'
import { Card } from "semantic-ui-react";

const ShowIndex = () => {
  const dispatch = useDispatch()
  const shows = useSelector(state => state.showsFeed)

  useEffect(() => {
    getShowsData.index(dispatch)
  }, [])

  let displayShows = shows.map((show) => {
    return <ShowsCard show={show} />
  })

  return (
    <Card.Group>
      {displayShows}
    </Card.Group>
  )
}

export default ShowIndex
