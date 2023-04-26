import PropTypes from "prop-types";
const Notification = ({ message, total }) => {
    console.log(total)
    return (
        total === 0 && <h4>{message}</h4>
    )
}
console.log(Notification.propTypes)
export default Notification;