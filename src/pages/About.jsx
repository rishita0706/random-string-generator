import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dbeafe] to-[#93c5fd] flex items-center justify-center pt-20">
      <p className="text-lg text-[#1e293b] max-w-md text-center">
        This app generates secure random strings using customizable options.
        <br/>
        Can be useful to make strong passwords.
      </p>
    </div>
  );
}
export default About;