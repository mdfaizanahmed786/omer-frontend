import { useQuery } from "react-query";
import Navbar from "./Navbar";

function AllForms() {
  const { data, isLoading } = useQuery({
    queryKey: "allForms",
    queryFn: () =>
      fetch("http://localhost:5002/application/get").then((res) => res.json()),
  });
  return (
    <div>
      <Navbar />

      <div className="w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800">All Forms</h1>
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Candidate Name</th>
                  <th className="px-4 py-2">Date of Birth</th>
                  <th className="px-4 py-2">Age</th>
                  <th className="px-4 py-2">Mark 1</th>
                  <th className="px-4 py-2">Mark 2</th>
                  <th className="px-4 py-2">Aadhar</th>
                  <th className="px-4 py-2">Marks Obtained</th>
                  <th className="px-4 py-2">Rank Secured</th>
                  <th className="px-4 py-2">Headmaster Name</th>
                  <th className="px-4 py-2">School Name</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : (
                  data?.map((form) => (
                    <tr key={form._id}>
                      <td className="border px-4 py-2">{form.candidateName}</td>
                      <td className="border px-4 py-2">{form.dob}</td>
                      <td className="border px-4 py-2">{form.age}</td>
                      <td className="border px-4 py-2">{form.mark1}</td>
                      <td className="border px-4 py-2">{form.mark2}</td>
                      <td className="border px-4 py-2">{form.aadhar}</td>
                      <td className="border px-4 py-2">{form.marksObtained}</td>
                      <td className="border px-4 py-2">{form.rankSecured}</td>
                      <td className="border px-4 py-2">
                        {form.headmasterName}
                      </td>
                      <td className="border px-4 py-2">{form.schoolName}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllForms;
