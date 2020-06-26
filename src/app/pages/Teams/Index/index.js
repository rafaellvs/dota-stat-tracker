import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTeams } from 'app/redux/actions/teams'

import { isEmpty } from 'app/helpers/utils'

import TeamsIndex from 'app/components/Teams/Index'

const Index = () => {
  const dispatch = useDispatch()
  const teams = useSelector(state => state.teams.items)

  useEffect(() => {
    dispatch(fetchTeams())
  }, [])

  return !isEmpty(teams) &&
    <TeamsIndex />
}

export default Index
