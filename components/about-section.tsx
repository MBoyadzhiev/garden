// "use client";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";

// export const AboutSection = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [isInView, setIsInView] = useState(false);
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   // fade-in observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsInView(entry.isIntersecting),
//       { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // simple mouse-based parallax
//   useEffect(() => {
//     const handle = (e: MouseEvent) => {
//       const { innerWidth, innerHeight } = window;
//       setMouse({
//         x: (e.clientX - innerWidth / 2) / innerWidth,
//         y: (e.clientY - innerHeight / 2) / innerHeight,
//       });
//     };
//     window.addEventListener("mousemove", handle);
//     return () => window.removeEventListener("mousemove", handle);
//   }, []);

//   const parallax = (d: number) => ({
//     transform: `translate3d(${mouse.x * d}px, ${mouse.y * d}px, 0)`,
//     transition: "transform 0.25s ease-out",
//   });

//   return (
//     <section ref={sectionRef} className="relative overflow-hidden">
//       {/* fixed jungle background */}
//       <div
//         className={`fixed inset-0 w-full h-screen z-0 transition-opacity duration-1000 ${
//           isInView ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <Image
//           src="/restaurant/interior.jpg"
//           alt="Garden Bogoridi Restaurant Interior"
//           fill
//           className="object-cover"
//           priority
//           quality={90}
//         />
//         <div className="absolute inset-0 bg-black/45" />
//       </div>

//       {/* decorative parallax food images */}
//       <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-10">
//         <div
//           className="absolute right-[-120px] top-[-160px] opacity-70"
//           style={parallax(40)}
//         >
//           <Image
//             src="/food/pasta-calamari.jpg"
//             alt="Delicious Pasta"
//             width={280}
//             height={400}
//             className="object-cover rounded-lg"
//           />
//         </div>
//         <div
//           className="absolute right-[-180px] top-[160px] opacity-60"
//           style={parallax(60)}
//         >
//           <Image
//             src="/food/steak.jpg"
//             alt="Premium Steak"
//             width={320}
//             height={480}
//             className="object-cover rounded-lg"
//           />
//         </div>
//         <div
//           className="absolute right-[-80px] top-[350px] opacity-50"
//           style={parallax(80)}
//         >
//           <Image
//             src="/food/snowwhite.jpg"
//             alt="Delicious Dessert"
//             width={260}
//             height={420}
//             className="object-cover rounded-lg"
//           />
//         </div>
//       </div>

//       {/* content */}
//       <div className="relative z-20 min-h-screen flex items-center">
//         <div className="container mx-auto px-6 py-24">
//           <div
//             className={`max-w-3xl mx-auto text-center text-white transition-all duration-1000 transform ${
//               isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             <h2 className="text-4xl md:text-5xl font-light mb-8">
//               За Garden Bogoridi
//             </h2>

//             <p className="text-lg md:text-xl leading-relaxed mb-6">
//               Ние сме ресторант{" "}
//               <span className="font-semibold">Garden Bogoridi</span> в сърцето
//               на Бургас — място, където традицията среща модерността, а всяко
//               ястие е история.
//             </p>

//             <p className="text-lg md:text-xl leading-relaxed mb-6">
//               Вярваме в снабдяването с занаятчийски продукти — местни, когато са
//               налични, но винаги вкусни, устойчиви и натурални. Избираме
//               продукти, които обичаме, и сме прозрачни за тях.
//             </p>

//             <p className="text-lg md:text-xl leading-relaxed mb-6">
//               Нашият ресторант ти позволява да се наслаждаваш на автентични
//               български вкусове в уютна атмосфера с две големи външни градини и
//               специален детски кът.
//             </p>

//             <p className="text-lg md:text-xl leading-relaxed mb-10 font-medium">
//               Елате и се присъединете към нашата кулинарна история.
//             </p>

//             <h3 className="text-2xl font-light mb-4">Нашите предимства</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-lg">
//               {[
//                 "Две големи външни градини",
//                 "Вътрешен и външен детски кът",
//                 "Седмични тематични събития",
//                 "Специално обедно меню",
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center justify-center space-x-3"
//                 >
//                   <div className="w-2 h-2 bg-white rounded-full" />
//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // simple mouse-based parallax
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMouse({
        x: (e.clientX - innerWidth / 2) / innerWidth,
        y: (e.clientY - innerHeight / 2) / innerHeight,
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const parallax = (depth: number) => ({
    transform: `translate3d(${mouse.x * depth}px, ${mouse.y * depth}px, 0)`,
    transition: "transform 0.3s ease-out",
  });

  return (
    <section ref={sectionRef} className="relative py-20 px-4 bg-gray-900">
      {/* Sparkles background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={15}
          className="w-full h-full"
          particleColor="#D4C4B0"
        />
      </div>

      {/* Main Container with Border */}
      <div className="relative max-w-7xl mx-auto bg-[#F5F0E6] rounded-lg overflow-hidden z-10">
        {/* Decorative Leaves - Bottom Corners */}
        <div
          className="absolute bottom-0 left-0 w-[200px] h-[150px] opacity-30"
          style={parallax(20)}
        >
          <Image
            src="/leaves.png"
            alt="Decorative leaves"
            width={240}
            height={160}
            className="object-contain"
          />
        </div>

        <div
          className="absolute bottom-0 right-0 w-[180px] h-[120px] opacity-25"
          style={parallax(25)}
        >
          <Image
            src="/leaves.png"
            alt="Decorative leaves"
            width={240}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-12">
          {/* Title */}
          <h2
            className={`text-5xl md:text-6xl font-elegant text-black mb-8 text-center transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            GARDEN BOGORIDI
          </h2>

          {/* Main Text Content */}
          <div
            className={`text-left max-w-4xl mx-auto transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-black font-elegant">
              В сърцето на Бургас, на ул. Антим I 32, се намира нашето
              пространство <span className="font-elegant">Garden Bogoridi</span>
              . Тук създадохме място, което съчетава модерния дизайн с топлата
              атмосфера на квартала.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6 text-black font-elegant">
              Бургас е известен със своята спокойна енергия и близост до морето,
              което прави това място идеално за отмора с чаша качествено кафе в
              ръка.
            </p>

            {/* Address */}
            <p className="text-lg md:text-xl text-black font-elegant flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              ул. Антим I 32, Бургас
            </p>
          </div>

          {/* Image Collage */}
          <div
            className={`mt-12 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex gap-4 justify-center items-center">
              {/* Left Image - Circular */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#8B4545]">
                  <Image
                    src="/food/snowwhite.jpg"
                    alt="Specialty Dessert"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Middle Image - Restaurant Interior */}
              <div className="w-80 h-48 rounded-lg overflow-hidden border-4 border-[#8B4545]">
                <Image
                  src="/restaurant/interior.jpg"
                  alt="Restaurant Interior"
                  width={320}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Image - Garden/Food */}
              <div className="w-48 h-48 rounded-lg overflow-hidden border-4 border-[#8B4545]">
                <Image
                  src="/restaurant/gradina.jpg"
                  alt="Garden View"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
