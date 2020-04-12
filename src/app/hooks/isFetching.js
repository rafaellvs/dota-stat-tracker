import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useFetching = () => {
  const {
    players,
    matches
  } = useSelector(state => state)

  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    (players.isFetching || matches.isFetching)
      ? setIsFetching(true)
      : setIsFetching(false)
  }, [players.isFetching, matches.isFetching])

  return isFetching
}
