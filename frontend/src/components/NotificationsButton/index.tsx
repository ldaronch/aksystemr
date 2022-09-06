import icon from '../../assets/imgs/notification-icon.svg'

function NotificationsButton() {
    return (
      <div className="dsmeta-red-btn-container">
        <div className="dsmeta-red-btn">
          <img src={icon} alt="Notificar" />
        </div>
      </div>
    )
}
  
export default NotificationsButton