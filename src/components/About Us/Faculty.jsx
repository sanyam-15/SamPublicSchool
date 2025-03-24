import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react";

const facultyData = [
  {
    id: 1,
    name: "Dr. Chetan Barde",
    designation: "Principal",
    dateOfJoining: "10/10/2023",
    presentPostDate: "10/10/2023",
    employeeCode: "100244",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Dr. Himadri Nayak",
    designation: "PGT",
    dateOfJoining: "01/09/2016",
    presentPostDate: "01/08/2007",
    employeeCode: "55056",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Abhay Keshari",
    designation: "Developer",
    dateOfJoining: "01/09/2016",
    presentPostDate: "01/08/2007",
    employeeCode: "4012",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Sanyam Jain",
    designation: "Developer",
    dateOfJoining: "01/09/2016",
    presentPostDate: "01/08/2007",
    employeeCode: "4013",
    image: "https://picsum.photos/200/300",
  },
];

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    const newOrder = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(newOrder);
  };

  const sortedFaculty = [...facultyData].sort((a, b) => {
    if (!sortField) return 0;
    const valueA = a[sortField].toLowerCase();
    const valueB = b[sortField].toLowerCase();
    return sortOrder === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
  });

  const filteredFaculty = sortedFaculty.filter(
    (faculty) =>
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.employeeCode.includes(searchTerm)
  );

  return (
    <div className="h-[100%] bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-[85vw] mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Our Teachers
        </h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name, designation, or employee code..."
          className="w-full px-4 py-2 border rounded-lg mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Faculty Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-3 border">Profile Picture</th>
                <th className="p-3 border cursor-pointer" onClick={() => handleSort("name")}>
                  Name <ArrowUpDown className="inline-block" size={16} />
                </th>
                <th className="p-3 border cursor-pointer" onClick={() => handleSort("designation")}>
                  Designation <ArrowUpDown className="inline-block" size={16} />
                </th>
                <th className="p-3 border cursor-pointer" onClick={() => handleSort("dateOfJoining")}>
                  Date Of Joining <ArrowUpDown className="inline-block" size={16} />
                </th>
                <th className="p-3 border cursor-pointer" onClick={() => handleSort("presentPostDate")}>
                  Date Of Joining Present Post <ArrowUpDown className="inline-block" size={16} />
                </th>
                <th className="p-3 border cursor-pointer" onClick={() => handleSort("employeeCode")}>
                  Employee Code <ArrowUpDown className="inline-block" size={16} />
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredFaculty.length > 0 ? (
                filteredFaculty.map((faculty) => (
                  <tr
                    key={faculty.id}
                    className="odd:bg-gray-50 hover:bg-blue-100 hover:border-gray-500 hover:border transition-all duration-200 ease-in-out"
                  >
                    <td className="p-3 border border-gray-300">
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-24 h-24 rounded-md object-cover mx-auto"
                      />
                    </td>
                    <td className="p-3 border border-gray-300">{faculty.name}</td>
                    <td className="p-3 border border-gray-300">{faculty.designation}</td>
                    <td className="p-3 border border-gray-300">{faculty.dateOfJoining}</td>
                    <td className="p-3 border border-gray-300">{faculty.presentPostDate}</td>
                    <td className="p-3 border border-gray-300">{faculty.employeeCode}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-4">
                    No faculty members found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
