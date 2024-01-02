import React, { useState } from "react";
import Residents from "./Residents";
import Error from "./Error";
import "./Search.css";

export default function Search({ STUDENTS }) {
  const [searchName, setSearchName] = useState("");
  const [searchJoiningDate, setSearchJoiningDate] = useState("");
  const [error, setError] = useState("");
  const [residents, setResidents] = useState([]);

  const addResident = (student) => {
    setResidents([...residents, student]);
  };

  const handleSearch = () => {
    setError("");

    const foundStudent = STUDENTS.find(
      (student) => student.name.toLowerCase() === searchName.toLowerCase()
    );

    if (!foundStudent) {
      setError(`${searchName} is not a verified student`);
      setSearchName("");
      setSearchJoiningDate("");
      return;
    }

    const isValidDate = checkValidity(
      foundStudent.validityDate,
      searchJoiningDate
    );
    if (!isValidDate) {
      setError(`${searchName}'s joining date has passed`);
      setSearchName("");
      setSearchJoiningDate("");
      return;
    }

    addResident(foundStudent.name);
    setSearchName("");
    setSearchJoiningDate("");
  };

  const checkValidity = (studentValidityDate, searchJoiningDate) => {
    const currentDate = new Date();
    const studentDate = new Date(studentValidityDate);
    const inputDate = new Date(searchJoiningDate);
    currentDate.setHours(23, 59, 59, 999);
    return !isNaN(inputDate) && inputDate <= studentDate;
  };
  return (
    <div>
      <h2 className="form-title">Add a Resident</h2>
      <div>
        <label htmlFor="studentName">Student Name: </label>
        <input
          type="text"
          placeholder="Student name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="joiningDate">Joining Date: </label>
        <input
          type="date"
          value={searchJoiningDate}
          onChange={(e) => setSearchJoiningDate(e.target.value)}
          className="input"
        />
      </div>
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
      <Error error={error} />
      <Residents residents={residents} />
    </div>
  );
}
