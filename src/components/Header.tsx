export default function Header() {
  return (
    <section className="h-screen  text-white flex flex-col justify-between py-10 items-center bg-cover bg-center"
    style={{ backgroundImage: "url('/headerbg.jpg')" }}>
        <nav className="font-robotoMono">
            <ul className="flex gap-10 font-bold">
                <li><a href="#" className=" hover:text-blue-600">// home</a></li>
                <li><a href="#" className=" hover:text-blue-600">// expertise</a></li>
                <li><a href="#" className=" hover:text-blue-600">// projects</a></li>
                <li><a href="#" className=" hover:text-blue-600">// experience</a></li>
                <li><a href="#" className=" hover:text-blue-600">// contact</a></li>
            </ul>
        </nav>
        <div className="text-center">
            <h1 className="font-poppins uppercase text-9xl font-semibold">Nova Fernandes</h1>
            <h3 className="font-poppins uppercase text-3xl">Software Engineer | Front End & Back End.</h3>
        </div>
        <div>scroll down</div>
    </section>
  );
}