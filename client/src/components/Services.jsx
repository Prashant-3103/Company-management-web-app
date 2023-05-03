import "../components/css/Services.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Services() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [showFullDescriptions, setShowFullDescriptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => {
        setData(res.data.data);
        setShowFullDescriptions(new Array(res.data.data.length).fill(false));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleDescription = (index) => {
    const newShowFullDescriptions = [...showFullDescriptions];
    newShowFullDescriptions[index] = !newShowFullDescriptions[index];
    setShowFullDescriptions(newShowFullDescriptions);
  };

  return (
    <>
      <input
        value={filter}
        className="filter"
        onChange={(e) => setFilter(e.target.value)}
        placeholder="search"
      />
      <div className="flex">
        {data.length > 0 ? (
          data
            .sort((a, b) => (a.title < b.title ? -1 : 1))
            .filter((item) => {
              return item.title.includes(filter)
            })
            .map((serviceItem, serviceIndex) => {
              const shortDescription = serviceItem.description
                .split(" ")
                .slice(0, 25)
                .join(" ");
              const fullDescription = serviceItem.description;

              return (
                <div className="card" key={serviceIndex}>
                  <div className="card-content">
                    <div className="title">{serviceItem.title}</div>
                    <div className="description">
                      {showFullDescriptions[serviceIndex]
                        ? fullDescription
                        : shortDescription}
                      {!showFullDescriptions[serviceIndex] && (
                        <button
                          className="button"
                          onClick={() => toggleDescription(serviceIndex)}
                        >
                          Description
                        </button>
                      )}
                    </div>
                    <div className="info-container">
                      <div className="info">
                        <div className="info-label">Role:</div>
                        <div className="info-value">{serviceItem.role}</div>
                      </div>
                      <div className="info">
                        <div className="info-label">Package:</div>
                        <div className="info-value">{serviceItem.package}</div>
                      </div>
                      <div className="info">
                        <div className="info-label">POC:</div>
                        <div className="info-value">{serviceItem.poc}</div>
                      </div>
                      <div className="info">
                        <div className="info-label">Active:</div>
                        <div className="info-value">{serviceItem.active}</div>
                      </div>
                      <div className="info">
                        <div className="info-label">Branch:</div>
                        <div className="info-value">{serviceItem.branch}</div>
                      </div>
                      <div className="info">
                        <div className="info-label">CGPA:</div>
                        <div className="info-value">{serviceItem.cgpa}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })


        ) : (
          "no data found"
        )}
      </div>
    </>
  );
}

export default Services;


//fetch the same list in user dashboard
