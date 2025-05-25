import React from "react";

const teamMembers = [
  {
    name: "Harshit Kumar",
    // role: "UI/UX Designer/AI lead",
    // experience: "AI Enthusiast , Hackathon finalist ",
    // image: "/./src/assets/Screenshot 2025-03-11 205754.png"
  },
  {
    name: "Himalay Singh",
    // role: "Backend Lead",
    // experience: "Backend Expert , Blockchain Enthusiast ",
    // image: "./src/assets/aadi.jpg"
  },
  {
    name: "Yuvraj Singh",
    // role: "Backend Lead",
    // experience: "Student || Exploring, Observing, Learning ||",
    // image: "./src/assets/Vaibhav.jpg"
  },
 

];

const TeamSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-12">
      <div className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-black-500 font-light leading-relaxed tracking-wide">PEOPLE BEHIND HEALTH VAULT </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-medium leading-relaxed tracking-wide max-w-3xl mx-auto">Meet the skilled and experienced team behind our successful medical app</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="relative w-full bg-white shadow-lg rounded-xl p-6 border border-gray-200 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* LinkedIn Badge on the Top Right Corner */}
            <div className="absolute top-2 right-2 bg-black text-white w-7 h-7 flex items-center justify-center rounded-full shadow-md">
              <span className="text-green-400 text-xs font-bold">in</span>
            </div>
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
              <hr className="my-3 border-gray-300" />
              <p className="text-gray-600 text-sm">{member.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;