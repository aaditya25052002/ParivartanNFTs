import timelessLogo from "../assets/PARIVARTRAN.png";
import { connectWallet } from "../Blockchain.Services";
import { useGlobalState, truncate } from "../store";
import "./Header.css";

const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto navbarr">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          className="w-32 cursor-pointer"
          src={timelessLogo}
          alt="Timeless Logo"
        />
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">Market</li>
        <li className="mx-4 cursor-pointer">Profile</li>
        {connectedAccount ? (
          <button
            className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs m-2 p-2
          rounded-full cursor-pointer font-semibold"
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointers font-semibold"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}

        <button
          className="shadow-xl shadow-black text-white
        bg-sky-500 hover:bg-sky-700 md:text-xs m-2 p-2 px-4
          rounded-full cursor-pointer font-semibold"
        >
          <a href="https://aadityas-organization.gitbook.io/untitled/">Docs</a>
        </button>
      </ul>
    </nav>
  );
};

export default Header;
