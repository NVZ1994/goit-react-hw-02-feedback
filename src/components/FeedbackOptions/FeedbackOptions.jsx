import PropTypes from 'prop-types'
import { ButtonsSection } from './FeedbackOptions.styled'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ButtonsSection>
            {Object.keys(options).map((item) => (
                <button
                    key={item}
                    id={item}
                    onClick={onLeaveFeedback}
                >{item}</button>
            ))}
        </ButtonsSection>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback: PropTypes.func.isRequired
}