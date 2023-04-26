import PropTypes from "prop-types";
import { Title } from "./Notification.styled";
const Notification = ({ message, total }) => {
    return (
        total === 0 && <Title>{message}</Title>
    )
}
Notification.propTypes = {
    message: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
}
export default Notification;
