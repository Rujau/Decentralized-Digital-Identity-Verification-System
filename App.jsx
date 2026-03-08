import { useState } from "react";
import { ethers } from "ethers";

const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

function App() {
  const [account, setAccount] = useState("");

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
    } else {
      alert("Install MetaMask");
    }
  }

  return (
    <div style={{padding:"40px"}}>
      <h1>Identity Verification DApp</h1>

      <button onClick={connectWallet}>
        Connect Wallet
      </button>

      <p>Connected Account: {account}</p>
    </div>
  );
}

export default App;