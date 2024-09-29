import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <a className="logo" href="/">
          Ali Askari
        </a>

        <div className="navbar">

          <Link href="/" 
          className="navbar">Home</Link>


          <Link href="/about" className="navbar">About</Link>


          <Link href="/contact" className="navbar">Contact</Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
