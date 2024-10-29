import Button from "@/components/Button";
import Image from "next/image";
import profilePic from '../../public/profile.jpeg'

const Home = () => {
  return (
    <div className="pt-[15px] text-primary bg-natural-white pl-10 h-screen">
      <div>
        <div className="flex items-center gap-10">
          <div className="mt-10 flex flex-1 border-2 rounded border-natural-pink p-2">
            <Image src={profilePic} alt="" className="p-16"/>
          </div>
          <div className="mt-5 items-center gap-5 mb-[25px]">
            <div>
              <div className="leading-none text-natural-pink-500">
                <h1 className="text-6xl font-medium text-secondary">Nova Fernandes,</h1>
                <h2 className="text-3xl">Full-stack developer.</h2>
              </div>
              
              <p className="text-xl mt-10 font-light max-w-[600px]">
                I produce elegant, performant and accessible websites.
                <br />
                <span className="font-medium"> I'm absolutely in love with coding</span>, mainly
                working around <span className="font-medium"> React, Express and Django.</span>
                <br />
                <br />
                I'm 22 years old and currently living in Brasília - Brazil.
              </p>

              <div className="flex gap-5 my-5">
                <Button variant="static" title="Check my work!" />
                <Button variant="dynamic" title="Read my Resume" />
                <Button variant="important" title="HIRE" />
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8" />
            <div className="mb-10">
              <h2>Know a little more about me:</h2>

              <div className="pl-0 md:pl-8">
                <h3 className="mt-5">&#x2022; What are my pronouns?</h3>

                <p className="max-w-[650px] mt-5 text-justify">
                  I am <strong>non-binary</strong>, and my pronouns are
                  <strong> He/She/They.</strong>
                  <br />
                  You can use any! 😊
                </p>
              </div>

              <div className="pl-0 md:pl-8">
                <h3 className="mt-5">&#x2022; Why "NovaScript"?</h3>
                <p className="max-w-[650px] mt-5 text-justify">
                  <strong>NovaScript</strong> is a combination of
                  <strong> "Nova"</strong> (my first name) and{" "}
                  <strong>"Script"</strong> from JavaScript (my preferred
                  programming language).
                </p>
              </div>

              <div className="pl-0 md:pl-8">
                <h3 className="mt-5">&#x2022; What are you hobbies?</h3>

                <p className="max-w-[650px] mt-5 text-justify">
                  My main hobbies are playing video-games, exercising, reading
                  philosophy books and listening to podcasts!
                </p>
              </div>
            </div>
      </div>
    </div>
  );
};

export default Home;