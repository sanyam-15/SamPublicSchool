import React from 'react';

const Admission = () => {
    return (
        <div className="bg-white text-gray-900 text-centre">
            {/* First Background Image Section */}
            <div className="bg-cover bg-center  bg-no-repeat bg-black/60 bg-blend-overlay min-h-[60vh] flex items-end p-8 text-white"
                style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2020/01/22/09/39/listening-4784915_1280.jpg')" }}>
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold">Apply To Kingster</h1>
                    <p className="text-lg mt-2">Your journey starts here!</p>
                </div>
            </div>

            {/* Details Section */}
            <div className="p-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold mb-4">Details About How To Apply</h2>
                <p className="text-gray-600 mb-6">
                    If you would like to study in the heart of the city, our institution offers a comprehensive application process. 
                    We focus on identifying talent and fostering growth through dedicated programs and mentorship.
                </p>

                {/* Services Section */}
                <div className="grid md:grid-cols-4 gap-6">
                    {['Education Services', 'International Hubs', "Bachelor's and Master's", 'University Life'].map((item, index) => (
                        <div key={index} className="p-4 bg-blue-100 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">{item}</h3>
                            <p className="text-gray-600">Kingster University was established by John Smith to serve the public benefit.</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Third Background Image Section */}
            <div className="bg-cover bg-center bg-fixed bg-no-repeat bg-black/60 bg-blend-overlay min-h-[60vh]"
                style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/group-happy-school-students-smiling-camera_488220-26194.jpg')" }}>
            </div>

            {/* Application Process */}
            <div className="bg-blue-50 py-12">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl font-semibold text-center mb-8">The Application Process</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[{
                            title: 'Start Online Submission',
                            desc: 'A wonderful serenity has taken possession of my soul.'
                        },
                        {
                            title: 'Submit The Form',
                            desc: 'Complete the application form and provide the required documents.'
                        },
                        {
                            title: 'Review The Submission',
                            desc: 'Our team will carefully review your application details.'
                        },
                        {
                            title: 'Gather Necessary Documents',
                            desc: 'Ensure you submit valid identification and certificates.'
                        },
                        {
                            title: 'Interviewing Process',
                            desc: 'Selected students will proceed to an interview round.'
                        },
                        {
                            title: 'Last Decision',
                            desc: 'Final selections will be communicated to successful candidates.'
                        }].map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="text-[45px] text-[#c50227] mb-2">{index + 1}</div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admission;
 