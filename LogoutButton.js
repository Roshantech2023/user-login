import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user authentication state (e.g., remove token from local storage)
    localStorage.removeItem('userToken');

    // Redirect to the home page
    navigate('/home');
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
