import PropTypes from "prop-types";
const Section = ({children}) => {
    return (
        <section>
            <h2 className="feedbackTitle">Please leave feedback</h2>
            {children}
        </section>
    )
}

Section.propType = {
    children: PropTypes.node.isRequired,
}
export default Section;