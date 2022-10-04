import { formatStatName } from '../utils'
import Bar from './Bar'
import './PokeStatsData.css'


const PokeStatsData = ({ stats }) => (
    <table>
        <tbody>
            {stats && stats.map((el) => (
                <tr key={el.stat.name}>
                    <th> {formatStatName(el.stat.name)} </th>
                    <td style={{ width: 100, minWidth: "150px" }}>
                        <Bar baseStat={el.base_stat} />
                    </td>
                    <td> {el.base_stat} </td>
                </tr>
            ))}
        </tbody>
    </table>
)

export default PokeStatsData