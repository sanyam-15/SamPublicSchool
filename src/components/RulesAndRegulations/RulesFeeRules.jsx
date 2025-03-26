import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const rules = [
  {
    title: "GENERAL RULES",
    content:
      "1. Students must maintain discipline and decorum within the school premises.\n2. Uniforms must be worn properly at all times.\n3. Respectful behavior towards teachers, staff, and fellow students is mandatory.\n4. Use of mobile phones is strictly prohibited during school hours.\n5. Any damage to school property must be reported and compensated for by the concerned student."
  },
  {
    title: "ATTENDANCE & PUNCTUALITY",
    content:
      "1. Students must attend school regularly and arrive on time.\n2. A minimum of 75% attendance is required to appear in exams.\n3. Absence due to illness must be supported by a medical certificate.\n4. Late arrivals must obtain permission from the Principal before attending class."
  },
  {
    title: "FEE RULES",
    content:
      "1. Fees must be paid on or before the due date. Late payments will attract a fine.\n2. The school reserves the right to withhold results and certificates for non-payment of fees.\n3. Fees once paid are non-refundable, except under special circumstances approved by the administration.\n4. Payment can be made via online banking, cheque, or at the school office.\n5. Students with pending fees will not be allowed to sit for exams."
  },
  {
    title: "EXAM & ACADEMICS",
    content:
      "1. Students must maintain academic integrity during exams. Any malpractice will result in strict action.\n2. Assignments and projects must be submitted on time.\n3. A minimum pass percentage must be obtained in all subjects.\n4. Re-examinations are allowed only under valid circumstances, with approval from the school authorities."
  }
];

export default function RulesFeeRules() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center px-4 py-10"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/23/15/31/man-1853545_1280.jpg')" }}
    >
      <div className="max-w-3xl mx-auto bg-white bg-opacity-95 p-6 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">School Rules & Fee Guidelines</h2>
        <div className="divide-y divide-gray-300">
          {rules.map((item, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md"
              >
                <span className="font-semibold text-lg text-gray-800">{item.title}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="p-4 mt-2 text-gray-700 bg-gray-50 rounded-lg shadow-sm whitespace-pre-line">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}