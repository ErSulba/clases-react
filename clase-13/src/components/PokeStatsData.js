import './PokeStatsData.css'


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

const PokeStatsData = ({ stats }) => {

    return (
        <>
            <div className='StatsText'>
                {stats && stats.map(el => (
                    <p>{formatStatName(el.stat.name)}:</p>
                ))}
            </div>
            <div>
                <span>
                    {stats && stats.map((el) => {
                        return (
                            <p className='number' key={el.stat.name}>{`${el.base_stat}`} </p>
                        )
                    })}
                </span>
            </div>
        </>
    )
}

export default PokeStatsData