import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const ApplicationForm = () => {
    const navigate=useNavigate();
  const [formValues, setFormValues] = useState({
    candidateName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    age: "",

    mark1: "",
    mark2: "",
    aadhar: "",

    marksObtained: "",

    rankSecured: "",

    headmasterName: "",
    schoolName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const { mutate, isLoading } = useMutation({
    mutationFn:()=> fetch("http://localhost:5000/application/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    }).then((res) => res.json()),
    onSuccess: () => {
      alert("Application submitted successfully");
        navigate("/allforms");
    },
  });

  return (
    <form
      className="application-form mx-auto max-w-md px-4 py-6 shadow-lg rounded-lg bg-white"
      onSubmit={handleSubmit}
    >
      {/* The rest of the form HTML remains the same */}
      <li className="form-field list-none">
        <label htmlFor="candidate-name">Name of Candidate:</label>
        <input
          type="text"
          id="candidate-name"
          name="candidateName"
          value={formValues.candidateName}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </li>
      <li className="form-field list-none">
        <label htmlFor="candidate-name">Date of birth</label>
        <input
          type="text"
          id="age"
          name="dob"
          value={formValues.dob}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </li>
      <li className="form-field list-none">
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="candidate-name"
          name="age"
          value={formValues.age}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </li>
      <li className="form-field list-none">
        <label htmlFor="father-name">Name of Father:</label>
        <input
          type="text"
          id="father-name"
          name="fatherName"
          value={formValues.fatherName}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </li>
      <li className="form-field list-none">
        <label htmlFor="mother-name">Name of Mother:</label>
        <input
          type="text"
          id="mother-name"
          name="motherName"
          value={formValues.motherName}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </li>
      <li className="form-field list-none">
        <label htmlFor="mark1">Identification Mark 1:</label>
        <input
          type="text"
          id="mark1"
          name="mark1"
          placeholder="Identification Mark 1"
          value={formValues.mark1}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </li>
      <li className="form-field list-none">
        <label htmlFor="mark2">Identification Mark 2:</label>
        <input
          type="text"
          id="mark2"
          name="mark2"
          placeholder="Identification Mark 2"
          value={formValues.mark2}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </li>
      <li className="form-field list-none">
        <label htmlFor="aadhar">Student Aadhar (UID No):</label>
        <input
          type="text"
          id="aadhar"
          name="aadhar"
          value={formValues.aadhar}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </li>
      <li className="form-field list-none">
        <fieldset>
          <legend className="form-legend text-xl font-bold mb-2">
            Eamcet Details:
          </legend>
          <ol>
            <li className="form-field list-none">
              <label htmlFor="hall-ticket">
                HallTicket Number Eamcet/ECET:
              </label>
              <input
                type="text"
                id="hall-ticket"
                name="hallTicket"
                value={formValues.hallTicket}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </li>
            <li className="form-field list-none">
              <label htmlFor="marks-obtained">
                Marks Obtained in Eamcet/ECET:
              </label>
              <input
                type="text"
                id="marks-obtained"
                name="marksObtained"
                value={formValues.marksObtained}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </li>
            <li className="form-field list-none">
              <label htmlFor="rank-secured">Rank Secured in Eamcet/ECET:</label>
              <input
                type="text"
                id="rank-secured"
                name="rankSecured"
                value={formValues.rankSecured}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </li>
          </ol>
        </fieldset>
      </li>
      <li className="form-field list-none">
        <fieldset>
          <legend className="form-legend text-xl font-bold mb-2">
            Details of Intermediate / Polytechnic or its Equivalent:
          </legend>
          <ol></ol>
        </fieldset>
      </li>
      <li className="form-field list-none">
        <fieldset>
          <legend className="form-legend text-xl font-bold mb-2">
            Minority Certificate
          </legend>
          <ol>
            <li className="form-field list-none">
              <label htmlFor="headmaster-name">Headmaster name:</label>
              <input
                type="text"
                id="headmaster-name"
                name="headmasterName"
                value={formValues.headmasterName}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </li>
            <li className="form-field list-none">
              <label htmlFor="school-name">School Name:</label>
              <input
                type="text"
                id="school-name"
                name="schoolName"
                value={formValues.schoolName}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </li>
          </ol>
        </fieldset>
      </li>

      <button
        type="button"
        value="Submit"
        className="w-full py-3 mt-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
        onClick={() => mutate()}
      >
        {isLoading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default ApplicationForm;
