import '../static/index.css'

const Message = ({message, messageStyle}) => {
  if (message != null) {
    return (
      <div className={messageStyle}>
        {message}
      </div>
    )
  } else {
    return <></>;
  }
}

export default Message
