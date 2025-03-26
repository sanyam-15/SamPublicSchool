import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const guidelines = [
  { title: "PUNCTUALITY", content: "Punctuality is the politeness of kings and queens, the duty of gentlemen and ladies and the necessity of business people.\n\nEvery student is expected to be in the School 5 minutes before the Assembly Bell. If students are late for the Assembly they will receive 3 warning notices, after which they are liable to be sent home at the parent's own risk.\n\nThe Attendance Roll will be called out at the beginning of each Session. Those who are not in class will be marked absent. Irregular attendance, unjustified or unexplained absence for more than a week, habitual idleness, disobedience or objectionable moral influence, justify dismissal. Students are responsible to the school authorities for their conduct both in and out of the school and Catholics, for the performance of their religious duties as well." },
  { title: "SILENCE", content: "There is a time for speaking and time for being still. Special care must be taken by teachers and students to preserve an ATMOSPHERE OF SILENCE AND SERIOUS WORK during class hours." },
  { title: "ORDER", content: "A place for everything and everything in its place. Running, playing, shouting inside the school building is never allowed. When moving along corridors from one class to another the rule is always: keep left and respect classes at work moving with as little noise as possible.\n\nStudents from one class may not visit their friends in other classrooms during class hours or free periods. Silence must be observed in the corridors and on the stairs during class hours. There should be no loud talking at the change of periods." },
  { title: "COURTESY", content: "Beauty without Courtesy is like a grove without flowers.\n\nStudents shall always greet their teachers, elders, and friends in a pleasant and audible tone whenever they meet them in school or outside.\n\nThey shall maintain a good posture whenever they sit, stand, or walk. They shall be polite in speaking to one another, always avoiding the use of slang." },
  { title: "SCHOOL CLEANLINESS", content: "Cleanliness is next to Godliness.\n\nAll must consider it their responsibility to keep the School Premises clean.\n\nEvery child must be particularly careful to avoid throwing waste-paper, fruit-peels, etc. out of the windows or on the school grounds. Use should be made of the waste paper baskets and bins provided for this purpose." },
  { title: "CARE OF SCHOOL PROPERTY", content: "Be as careful of the property of others as you would be of your own.\n\nChildren should take special care of School Property i.e. furniture, apparatus, etc. Any damage done to School property must be made good." },
  { title: "BEHAVIOUR OUTSIDE SCHOOL", content: "Behaviour is a mirror in which everyone shows his image.\n\nStudents are answerable to the School Authorities for their conduct both in School and outside. They ought always to conduct themselves in a manner worthy of the dignity of a human being. Misbehavior justifies dismissal. Students are not permitted to patronize roadside vendors or eat on the road." }
];

export default function StudentGuidelines() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/200/300')" }}>
      <div className="max-w-2xl mx-auto mt-10 p-4 bg-white bg-opacity-90 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Guidelines for the Students</h2>
        <div className="border border-gray-200 rounded-lg">
          {guidelines.map((item, index) => (
            <div key={index} className="border-b last:border-none">
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center p-4 text-left bg-gray-100 hover:bg-gray-200"
              >
                <span className="font-semibold">{item.title}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700 bg-white whitespace-pre-line">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}