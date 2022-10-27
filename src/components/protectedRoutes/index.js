import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { app, cookie } = useContext(AppContext);

  return cookie.user.id === app.currentUser.id ? children : navigate("/");
};

export default ProtectedRoutes;
