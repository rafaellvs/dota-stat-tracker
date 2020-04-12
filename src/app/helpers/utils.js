import React from 'react'
import heroes from './heroes'

export const isEmpty = obj =>
  !(Object.keys(obj).length > 0)

export const getHeroId = name =>
  heroes.find(hero => hero.localized_name === name).id

export const getHeroName = id =>
  heroes.find(hero => hero.id === parseInt(id)).name

export const getHeroImage = id =>
  `https://api.opendota.com/apps/dota2/images/heroes/${getHeroName(id)}_sb.png`

export const getStarImage = rank =>
  `https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_${rank.toString()[1]}.png`

export const getMedalImage = rank =>
  `https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${rank.toString()[0]}.png`

export const uncalibratedMedalImage =
  'https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_0.png'

export const generateHeroesDatalist = () => {
  return (
    <datalist id='heroes'>
      {
        heroes.map(hero =>
          <option
            key={hero.id}
            value={hero.localized_name}
          />
        )
      }
    </datalist>
  )
}

export const getRadiantHeroes = match =>
  match.players
    ? match.players
      .filter((player, index) => index < 5)
      .map(player => player.hero_id)
    : match.teama

export const getDireHeroes = match =>
  match.players
    ? match.players
      .filter((player, index) => index > 4)
      .map(player => player.hero_id)
    : match.teamb
