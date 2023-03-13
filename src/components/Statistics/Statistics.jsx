import PropTypes from 'prop-types' 
import { StatisticsList } from './Statistics.styled'

export default function Statistics({ good, neutral, bad, total, positive }) {
    return (
        <StatisticsList>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positive}%</li>
        </StatisticsList>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
}

