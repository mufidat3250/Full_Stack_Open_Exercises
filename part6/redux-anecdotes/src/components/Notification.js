import { useDispatch, useSelector } from "react-redux";
import { notificationReducer } from "../reducers/anecdoteReducer";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  console.log(notification, "lotign");
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return <>{notification && <div style={style}>{notification}</div>}</>;
};

export default Notification;
