import Header from "../landingPage/header.jsx";

const landingpage = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-[#0A0A0A]
      bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
      bg-[size:48px_48px]"
    >
      <Header />
    </div>
  );
};

export default landingpage;
