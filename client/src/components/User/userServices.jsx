import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Services from "../Services";
import UserLogin from "./userLogin";
import AddUser from "./userRegister";

function UserServices() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [cgpa, setCgpa] = useState(null);
  const [branch, setBranch] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    axios
      .get("http://localhost:5000/user/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        console.log(res.data.data)
        console.log(res.data.name)
        setIsAuthenticated(true);
        setCgpa(res.data.cgpa);
        setBranch(res.data.branch);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => {
        setServices(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (cgpa && branch) {
      const filtered = services.filter(
        (service) => service.cgpa <= cgpa && service.branch === branch
      );
      setFilteredServices(filtered);
    }
  }, [services, cgpa, branch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cgpa");
    localStorage.removeItem("branch");
    setIsAuthenticated(false);
    navigate("/");
  };

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const handleRegister = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome {user.name}!</h1>
          <button onClick={handleLogout} className="logout_button">Logout</button>
          {filteredServices.length > 0 ? (
            <Services serviceItems={filteredServices} />
          ) : (
            <p>No services found that match your criteria.</p>
          )}
        </div>
      ) : (
        <div>
          <UserLogin onLogin={handleLogin} />
          <AddUser onRegister={handleRegister} />
        </div>
      )}
    </div>
  );
}

export default UserServices;

