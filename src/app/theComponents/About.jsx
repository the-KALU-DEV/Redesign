
// "use client";

// import Image from "next/image";

// export default function About() {
//   return (
//     <div className="w-full py-20 lg:py-40">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 items-center">
//           <div className="lg:col-span-1">
//             <Image 
//               src="" 
//               alt="Codetivite Learning"
//               fill
//               className="w-full h-80 object-cover rounded-lg shadow-lg"
//             />
//           </div>

//           <div className="lg:col-span-2 flex flex-col gap-8">
//             <h2 className="mt-2 font-bold">
//               About Us
//             </h2>
//             <p className="text-xl md:text-7xl max-w-lg tracking-tighter text-left font-regular leading-relaxed">
//               Codetivite is a new tech learning platform. 
//             </p>

//             <p className="text-sm leading-relaxed tracking-tight text-muted-foreground max-w-md text-left font-mediumleading-relaxed">
//             You can see us as your career mentor, 
//               guiding you every step of the way. Our mission is to help tech aspirants transition 
//               into full-time employees of reputable brands across Africa and beyond.
//             </p>
//             <p className="text-sm leading-relaxed tracking-tight text-muted-foreground max-w-md text-left font-mediumleading-relaxed">
//               Navigating the job market is overwhelming. That’s why we’re here—to help new techies 
//               dominate the highly competitive job market through hands-on, practical-based learning. 
//             </p>
//           </div>

//           <div className="lg:col-span-2 flex flex-col gap-6">
//             <h2 className="mt-2 font-bold font-bold">
//                 Our commitment to you
//             </h2>
//             <p className="text-xl md:text-7xl max-w-lg tracking-tighter text-left font-regular leading-relaxed">
//                 Our Mission is to help you as a new Techie.
//             </p>
//             <p className="text-sm leading-relaxed tracking-tight text-muted-foreground max-w-md text-left font-mediumleading-relaxed">
//                 Help you as a new techie stay patient and consistent in your search for jobs. But most importantly, reduce the time frame it normally takes to get jobs and increase your chances of getting hired by 87%
//             </p>
//           </div>
//           <div className="lg:col-span-1">
//             <Image 
//               src="" 
//               alt="Codetivite Learning Process"
//               fill
//               className="w-full h-80 object-cover rounded-lg shadow-lg"
//             />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 items-center">

          {/* Row 1: Image (1/3) | Text (2/3) */}
          <div className="lg:col-span-1 relative h-72 w-full sm:h-96 md:h-full md:h-[400px] lg:h-full">
            <Image 
              src="/codetivitelearning.png" 
              alt="Codetivite Learning"
              fill
              quality={100}
              sizes="(max-width: 640px) 100vw, 
                     (max-width: 1024px) 50vw, 
                     33vw"
              className="object-contain"
            />
            {/* <div className="relative w-full h-[500px] bg-cover bg-center rounded-xl overflow-hidden" style={{ backgroundImage: "url('/background-image.jpg')" }}>

                <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-full shadow-lg">
                    Portfolio Management 😏
                </div>

                <div className="absolute bottom-12 left-6 bg-white p-6 rounded-xl shadow-lg w-80">
                    <div className="flex gap-1">
                    {Array(5).fill("⭐")}
                    </div>
                    <p className="text-gray-700 mt-2">
                    "Codetivite changed my life! Their hands-on training helped me build a job-worthy portfolio and gain confidence."
                    </p>
                    <div className="mt-4 font-bold">Sandra O., Front-End Developer</div>
                </div>

                <div className="absolute bottom-12 right-6 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center">
                    <span className="mr-2">2k+ Registered Users</span>
                    <div className="flex -space-x-2">
                    <img src="/user1.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="/user2.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="/user3.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full border-2 border-white">
                        +
                    </div>
            </div> 
        </div>
                </div> */}
    </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <h2 className="mt-2 font-bold">About Us</h2>
            <p className="text-xl md:text-4xl font-bold leading-tight">
              Codetivite is a new tech learning platform. 
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
                You can see us as your career mentor who will be there for you every step of the way. And this is why: Our single aim is to help tech-aspirants transition from new-techies to become full time employees of reputable brands across Africa and the world. 
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
                Because it is general knowledge that navigating the job market is overwhelming and challenging. So this is why we want to step in as a guide and mentor to help new techies dominate the highly competitive job market. How do we intend to achieve this? You ask?

                Everything we do at Codetivite is what we call: Practical-based-learning. We will watch you closely as you build real world projects to test your progress. The projects you build, will simultaneously become your portfolio which you can submit to potential employers.
            </p>
          </div>

          {/* Row 2: Text (2/3) | Image (1/3) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h2 className="mt-2 font-bold">Our Commitment to You</h2>
            <p className="text-xl md:text-4xl font-bold leading-tight">
              Our mission is to help you as a new techie.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Help you as a new techie stay patient and consistent in your search for jobs. But most importantly, reduce the time frame it normally takes to get jobs and increase your chances of getting hired by 87%
            </p>
          </div>

          <div className="lg:col-span-1 relative h-72 w-full sm:h-96 md:h-full md:h-[400px] lg:h-full">
            <Image 
              src="/learnwithus.png" 
              alt="Learn With Us"
              fill
              quality={100}
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 
                     (max-width: 1024px) 50vw, 
                     33vw"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
