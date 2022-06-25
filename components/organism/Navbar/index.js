import Logo from "../../../public/images/logo.svg";
import Image from "next/image";
export default function Navbar() {
  const menu = ["Home", "Tulisan", "Kelas Online", "Tentang Kami"];
  return (
    <section>
      <div className="container flex justify-between mx-auto pt-6 items-center">
        <Image src={Logo} alt="Logo" />
        <div className="flex">
          <ul className="flex space-x-5 font-poppins-500">
            {menu.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
          <button className="font-bold text-white rounded-full bg-emerald-500 px-14 py-2">
            Login
          </button>
        </div>
      </div>
    </section>
  );
}
