import { motion } from "framer-motion";
import HeroSection from "../About Us/HeroSection";
import { useEffect } from "react";

export default function RulesAndRegulations() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <HeroSection moto={"Guidelines"} section={"Rules and Regultions"} />

      {/* Rules Section */}
      <div className="relative min-h-screen bg-cover bg-center p-6">
        <div className="absolute inset-0 bg-[#F3F4F6] opacity-40"></div>{" "}
        {/* Overlay for readability */}
        <div className="relative max-w-4xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
            Rules and Regulations
          </h2>
          <div className="space-y-4 text-gray-800">
            <h3 className="text-xl font-semibold">General Rules</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Parents must ensure their children attend school regularly.
                Coming late is not permitted.
              </li>
              <li>
                School hours are from 8:45 a.m. to 1:45 p.m. Latecomers will not
                be allowed.
              </li>
              <li>
                School policies are decided by the management, and adherence is
                expected.
              </li>
              <li>The school is not responsible for lost items.</li>
              <li>
                Students recovering from infectious diseases need a doctor’s
                certificate.
              </li>
              <li>
                Absences must be recorded in the school diary and signed by
                parents.
              </li>
              <li>
                Prolonged absence without intimation will result in name removal
                from rolls.
              </li>
              <li>Attendance of 75% is mandatory.</li>
              <li>Parents must attend all PTMs and orientation programs.</li>
              <li>
                Interaction with students or teachers during school hours
                requires prior permission.
              </li>
              <li>
                The school is responsible for the safety of students only if
                they use the school bus.
              </li>
              <li>Respect for school property is mandatory.</li>
              <li>Students must carry their school identity card daily.</li>
            </ol>

            <h3 className="text-xl font-semibold">Admission Procedure</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Admissions depend on seat availability and require a Transfer
                Certificate.
              </li>
              <li>Entrance tests may be required.</li>
              <li>The management’s decision on admissions is final.</li>
              <li>
                The school reserves the right to change admission policies.
              </li>
            </ol>

            <h3 className="text-xl font-semibold">Withdrawal Procedure</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>A month's written notice is required for withdrawal.</li>
              <li>
                School leaving certificates are issued free; duplicates cost Rs.
                200/-.
              </li>
              <li>
                Caution money is refundable only at the time of withdrawal.
              </li>
              <li>
                No transfer certificate will be issued until dues are cleared.
              </li>
            </ol>

            <h3 className="text-xl font-semibold">Fee Rules</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Fees must be paid by the 10th of each month.</li>
              <li>Late payment incurs a Rs. 50/- fine per day.</li>
              <li>
                Annual charges apply if a student withdraws after March 31.
              </li>
              <li>
                Transport fees apply for 10 months, regardless of absences.
              </li>
              <li>Fee clearance slips are required before exams.</li>
            </ol>

            <h3 className="text-xl font-semibold">School Uniform</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Neatly laundered uniform and polished shoes are mandatory.
              </li>
              <li>Winter uniform includes a maroon pullover.</li>
              <li>Fancy watches and jewelry are not allowed.</li>
            </ol>

            <h3 className="text-xl font-semibold">Note for Parents</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Communication between parents and teachers is essential.</li>
              <li>
                Parents should encourage independence and acknowledge
                achievements.
              </li>
              <li>Regular checking of the school diary is advised.</li>
              <li>
                Address or contact changes must be reported to the class
                teacher.
              </li>
              <li>
                Parents must carry the Guardian Card when picking up their
                children.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
