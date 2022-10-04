const getStatColorRank = (stat) => {
  if (stat >= 150) {
    return "#00c2b8"
  } else if (stat >= 90) {
    return "#23cd5e"
  } else if (stat >= 60) {
    return "#ffdd57"
  } else if (stat >= 40) {
    return "#ff7f0f"
  }
  return "#f34444"
}

const getBarWidth = (stat) => {
  const width = (stat / 255) * 100
  return width + "%"
}

function formatStatName(stat) {
  switch (stat) {
    case "hp":
      return "HP"

    case "attack":
      return "Attack"

    case "defense":
      return "Defense"

    case "special-attack":
      return "Sp. Atk"

    case "special-defense":
      return "Sp. Def"

    case "speed":
      return "Speed"

    default:
      return stat
  }
}

export {
  getStatColorRank,
  getBarWidth,
  formatStatName
}