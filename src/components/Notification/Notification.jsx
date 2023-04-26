import PropTypes from "prop-types";
const Notification = ({ message, total }) => {
    console.log(total)
    return (
        total === 0 && <h4>{message}</h4>
    )
}
Notification.propTypes = {
    message: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
}
export default Notification;
