export default function Expertise() {
  return (
    <section className="h-screen bg-modern-black text-white flex flex-col py-10 items-center">
        <div className="text-center">
            <h1 className="font-poppins text-7xl font-semibold">My Expertise</h1>
        </div>
        <div id="expertise-cards" className="flex flex-row items-center">
          <div className="bg-red-500 min-w-[350px] max-w-[351px] border-2 border-gray-300 py-10 px-7">
            <div className="flex flex-row">
              <div>
                <img src="/icons/icon1.png" alt="Icon 1" className="w-16 h-16" />
              </div>
              <h3 className="text-3xl">
                Front End
              </h3>
            </div>
            <div>
              Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.
            </div>
          </div>
          <div className="bg-red-500 min-w-[350px] max-w-[351px] border-2 border-gray-300 py-10 px-7">
            <div className="flex flex-row">
              <div>
                <img src="/icons/icon2.png" alt="Icon 1" className="w-16 h-16" />aa
              </div>
              <h3 className="text-3xl">
                Back End
              </h3>
            </div>
            <div>
              Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.
            </div>
          </div>
          <div className="bg-red-500 min-w-[350px] max-w-[351px] border-2 border-gray-300 py-10 px-7">
            <div className="flex flex-row">
              <div>
                <img src="/icons/icon3.png" alt="Icon 1" className="w-16 h-16" />
              </div>
              <h3 className="text-3xl">
                Leadership
              </h3>
            </div>
            <div>
              Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.
            </div>
          </div>
        </div>
    </section>
  );
}