import React from 'react'

import heroes from 'app/helpers/constants/heroes'
import items from 'app/helpers/constants/items'
import gameModes from 'app/helpers/constants/gameModes'
import skillBrackets from 'app/helpers/constants/skillBrackets'
import lobbies from 'app/helpers/constants/lobbies'
import slotColors from 'app/helpers/constants/slotColors'

// TODO: split this file
// -------------
// js misc
export const isEmpty = obj =>
  !(Object.keys(obj).length > 0)

// -------------
// hero related
export const getHeroId = name =>
  heroes.find(hero => hero.localized_name === name).id

export const getHeroName = id =>
  heroes.find(hero => hero.id === parseInt(id)).name

export const getHeroLocalizedName = id =>
  heroes.find(hero => hero.id === parseInt(id)).localized_name

export const getHeroImage = id =>
`https://api.opendota.com/apps/dota2/images/heroes/${getHeroName(id)}_sb.png`

export const generateHeroesDatalist = () => {
  return (
    <datalist id='heroes'>
      {
        heroes.map(hero =>
          <option
            key={hero.id}
            value={hero.localized_name}
          />,
        )
      }
    </datalist>
  )
}

// -------------
// rank related
export const getStarImage = rank =>
  `https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_${rank.toString()[1]}.png`

export const getMedalImage = rank =>
  `https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${rank.toString()[0]}.png`

export const uncalibratedMedalImage =
  'https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_0.png'

// -------------
// match related
export const getRadiantHeroes = match =>
  match.players
    ? match.players
      .filter(player => player.isRadiant && player)
      .map(player => player.hero_id)
    : match.teama

export const getDireHeroes = match =>
  match.players
    ? match.players
      .filter(player => !player.isRadiant && player)
      .map(player => player.hero_id)
    : match.teamb

export const getRadiantPlayers = players =>
  players.filter(player => player.isRadiant && player)

export const getDirePlayers = players =>
  players.filter(player => !player.isRadiant && player)

export const getGameMode = id => {
  const mode = gameModes.find(mode => id === mode.id)
  return mode ? mode.name : 'Mode Unknown'
}

export const getSkillBracket = id => {
  const skill = skillBrackets.find(skill => id === skill.id)
  return skill ? skill.name : 'Skill Unknown'
}

export const getGameDuration = duration => {
  const minutes = Math.floor(duration / 60)
    .toLocaleString(undefined, { minimumIntegerDigits: 2 })
  const seconds = (duration - minutes * 60)
    .toLocaleString(undefined, { minimumIntegerDigits: 2 })

  return `${minutes}:${seconds}`
}

export const getLobbyType = id => {
  const lobby = lobbies.find(lobby => id === lobby.id)
  return lobby ? lobby.name : 'Lobby Unknown'
}

export const getSlotColor = id =>
  slotColors.find(slot => id === slot.id).color

export const getTimeElapsed = time => {
  // time comes in seconds from api
  const timeElapsed = Date.now() / 1000 - time
  const inMinutes = timeElapsed / 60
  const inHours = inMinutes / 60
  const inDays = inHours / 24
  const inMonths = inDays / 30
  const inYears = inMonths / 12

  return (
    inHours < 1
      ? `${Math.round(inMinutes)} minute(s) ago`
      : inDays < 1
        ? `${Math.round(inHours)} hour(s) ago`
        : inMonths < 1
          ? `${Math.round(inDays)} day(s) ago`
          : inYears < 1
            ? `${Math.round(inMonths)} month(s) ago`
            : `${Math.round(inYears)} year(s) ago`
  )
}

export const formatNumber = num => {
  // formats like 1100 to 1.1k
  if (num < 1000) return num

  const lastTwoDeleted = num.toString().slice(0, -2)
  const formatted = `${lastTwoDeleted.slice(0, -1)}.${lastTwoDeleted.slice(-1)}k`

  return formatted
}

// -------------
// item related
export const getItemName = id =>
  items.find(item => id === item.id).name

export const getItemImage = id => {
  const itemName = id ? getItemName(id) : null
  return itemName && `https://api.opendota.com/apps/dota2/images/items/${itemName}_lg.png`
}

export const getPlayerItems = player => {
  const item0 = getItemImage(player.item_0)
  const item1 = getItemImage(player.item_1)
  const item2 = getItemImage(player.item_2)
  const item3 = getItemImage(player.item_3)
  const item4 = getItemImage(player.item_4)
  const item5 = getItemImage(player.item_5)
  const itemNeutral = getItemImage(player.item_neutral)

  const backpack0 = getItemImage(player.backpack_0)
  const backpack1 = getItemImage(player.backpack_1)
  const backpack2 = getItemImage(player.backpack_2)
  const backpack3 = getItemImage(player.backpack_3)

  return {
    inventory: [item0, item1, item2, item3, item4, item5, itemNeutral],
    backpack: [backpack0, backpack1, backpack2, backpack3]
  }
}

// team related
export const getPlayerImage = id =>
  `https://www.opendota.com/assets/images/dota2/players/${id}.png`
