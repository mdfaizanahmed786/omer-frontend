import { useState } from "react";

const ApplicationForm = () => {
  const [formValues, setFormValues] = useState({
    candidateName: "",
    fatherName: "",
    motherName: "",
    profilePicture: null,
    dob: "",
    age: "",
    placeOfBirth: "",
    nationality: "",
    religion: "",
    motherTongue: "",
    profession: "",
    income: "",
    workPlace: "",
    presentAddress: "",
    pincode: "",
    fatherPhone: "",
    mark1: "",
    mark2: "",
    aadhar: "",
    hallTicket: "",
    marksObtained: "",
    rankSecured: "",
    college1: "",
    grade1: "",
    totalMarksLanguages1: "",
    totalMarksOptionals1: "",
    overallPercentage1: "",
    percentageOptionals1: "",
    yearPassing1: "",
    rollNo1: "",
    college2: "",
    grade2: "",
    totalMarksLanguages2: "",
    totalMarksOptionals2: "",
    overallPercentage2: "",
    percentageOptionals2: "",
    yearPassing2: "",
    rollNo2: "",
    headmasterName: "",
    schoolName: "",
    schoolLocation: "",
    studentName: "",
    studentFatherName: "",
    admissionNumber: "",
    academicYear: "",
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
    // Handle form submission logic here
    console.log(formValues);
  };

  return (
    <form className="application-form mx-auto max-w-md px-4 py-6 shadow-lg rounded-lg bg-white" onSubmit={handleSubmit}>
      {/* The rest of the form HTML remains the same */}
      <li className="form-field">
        <label htmlFor="candidate-name">Name of Candidate:</label>
        <input
          type="text"
          id="candidate-name"
          name="candidateName"
          value={formValues.candidateName}
          onChange={handleChange}
          required    className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </li>
      <li className="form-field">
        <label htmlFor="father-name">Name of Father:</label>
        <input
          type="text"
          id="father-name"
          name="fatherName"
          value={formValues.fatherName}
          onChange={handleChange}
          required    className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </li>
      <li className="form-field">
        <label htmlFor="mother-name">Name of Mother:</label>
        <input
          type="text"
          id="mother-name"
          name="motherName"
          value={formValues.motherName}
          onChange={handleChange}
          required    className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </li>
      <li className="form-field">
        <label htmlFor="mark1">Identification Mark 1:</label>
        <input
          type="text"
          id="mark1"
          name="mark1"
          placeholder="Identification Mark 1"
          value={formValues.mark1}
          onChange={handleChange}
          required    className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </li>
      <li className="form-field">
        <label htmlFor="mark2">Identification Mark 2:</label>
        <input
          type="text"
          id="mark2"
          name="mark2"
          placeholder="Identification Mark 2"
          value={formValues.mark2}
          onChange={handleChange}
          required    className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </li>
      <li className="form-field">
        <label htmlFor="aadhar">Student Aadhar (UID No):</label>
        <input
          type="text"
          id="aadhar"
          name="aadhar"
          value={formValues.aadhar}
          onChange={handleChange}
          required    className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </li>
      <li className="form-field">
        <fieldset>
          <legend  className="form-legend text-xl font-bold mb-2" >Eamcet Details:</legend>
          <ol>
            <li className="form-field">
              <label htmlFor="hall-ticket">
                HallTicket Number Eamcet/ECET:
              </label>
              <input
                type="text"
                id="hall-ticket"
                name="hallTicket"
                value={formValues.hallTicket}
                onChange={handleChange}
                required    className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </li>
            <li className="form-field">
              <label htmlFor="marks-obtained">
                Marks Obtained in Eamcet/ECET:
              </label>
              <input
                type="text"
                id="marks-obtained"
                name="marksObtained"
                value={formValues.marksObtained}
                onChange={handleChange}
                required    className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </li>
            <li className="form-field">
              <label htmlFor="rank-secured">Rank Secured in Eamcet/ECET:</label>
              <input
                type="text"
                id="rank-secured"
                name="rankSecured"
                value={formValues.rankSecured}
                onChange={handleChange}
                required    className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </li>
          </ol>
        </fieldset>
      </li>
      <li className="form-field">
        <fieldset>
          <legend  className="form-legend text-xl font-bold mb-2" >
            Details of Intermediate / Polytechnic or its Equivalent:
          </legend>
          <ol>
         
          </ol>
        </fieldset>
      </li>
      <li className="form-field">
        <fieldset>
          <legend  className="form-legend text-xl font-bold mb-2" >Minority Certificate</legend>
          <ol>
            <li className="form-field">
              <label htmlFor="headmaster-name">Headmaster name:</label>
              <input
                type="text"
                id="headmaster-name"
                name="headmasterName"
                value={formValues.headmasterName}
                onChange={handleChange}
                required    className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </li>
            <li className="form-field">
              <label htmlFor="school-name">School Name:</label>
              <input
                type="text"
                id="school-name"
                name="schoolName"
                value={formValues.schoolName}
                onChange={handleChange}
                required    className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </li>
          
          </ol>
        </fieldset>
      </li>
     
      <input type="submit" value="Submit"  className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"/>
    </form>
  );
};

export default ApplicationForm;
