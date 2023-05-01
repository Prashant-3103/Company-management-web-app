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
  const [cgpa, setCgpa] = useState(0);
  const [branch, setBranch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/profile", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
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
    const filtered = services.filter(
      (service) => service.cgpa <= cgpa && service.branch === branch
    );
    setFilteredServices(filtered);
  }, [services, cgpa, branch]);

  const handleLogout = () => {
    axios
      .post(
        "http://localhost:5000/user/logout",
        {},
        { withCredentials: true }
      )
      .then(() => {
        setIsAuthenticated(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome {user.name}!</h1>
          <button onClick={handleLogout}>Logout</button>
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
