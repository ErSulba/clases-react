import './PokeType.css'

const PokeType = ({ types }) => {
    return (
        <div className='text'>
            <p>Types</p>
            <div className='types'>
                <button className='typeA'>Ghost</button>
                <button className='typeB'>Steel</button>
            </div>
        </div>
    )
}

export default PokeType