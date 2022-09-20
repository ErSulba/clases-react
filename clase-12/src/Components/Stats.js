const Stats = ({ stats }) => {

    return (
        <div>
            <span>
                {stats.map((el) => {
                    return (
                        <p>{`${el.stat.name}: ${el.base_stat}`} </p>
                    )
                })}
            </span>
        </div>
    )
}

export default Stats