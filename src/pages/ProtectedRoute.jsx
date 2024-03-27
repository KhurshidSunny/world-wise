/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeUserAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
