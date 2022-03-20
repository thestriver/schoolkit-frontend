import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ethers } from "ethers";
import "react-toastify/dist/ReactToastify.css";

import Head from "next/head";
import abi from "../utils/DonateKit.json";

import { Hero } from "./hero";
import { Givers } from "./givers";
import { Newsletter } from "./newsletter";
import { Goal } from "./goal";
import { Footer } from "./footer";

export default function Home() {
  //contract address
  const contractAddress = "0x70E2D6F0c728945B32f560e20979A26B6968e6ca";
  //abi
  const contractABI = abi.abi;

 
  const [currentAccount, setCurrentAccount] = useState("");

  const [message, setMessage] = useState("");

  const [name, setName] = useState("");
  
  //const [totalCount, setTotalCount] = useState(0);

  const [allDonations, setAllDonations] = useState([]);

  const [showEthDonation, setShowEthDonation] = useState(false);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      /*
       * Check if we're authorized to access the user's wallet
       */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        setCurrentAccount(account);
        toast.success("🦄 Wallet is Connected", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.warn("Make sure you have MetaMask Connected", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  //connect wallet
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        toast.warn("Make sure you have MetaMask Connected", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const donateSchoolKit = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const schoolkitContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        let count = await schoolkitContract.getTotalSchoolKits();
        console.log("Retrieved total donation count...", count.toNumber());
        //setTotalCount(count);

        //call donateSchoolKit in your contract
        const donationTxn = await schoolkitContract.donateSchoolKit(
          message ? message : "School Kit donated!",
          name ? name : "Anonymous",
          ethers.utils.parseEther("0.01"),
          {
            gasLimit: 300000,
          }
        );
        console.log("Mining...", donationTxn.hash);

        toast.info("Sending donation funds...", {
          position: "top-left",
          autoClose: 18050,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        await donationTxn.wait();

        console.log("Transaction mined -- ", donationTxn.hash);

        count = await schoolkitContract.getTotalSchoolKits();

        console.log("Retrieved total donations...", count.toNumber());
        //setTotalCount(count);

        setMessage("");
        setName("");

        toast.success("Donation completed!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  //Display all donations made
  const getAllSchoolKits = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const schoolkitContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        /*
         * Call the getallSchoolKits method from your Smart Contract
         */
        const donations = await schoolkitContract.getAllSchoolKits();

        //destructure 
        const kitsDonated = donations.map((donation) => {
          return {
            address: donation.giver,
            timestamp: new Date(donation.timestamp * 1000),
            message: donation.message,
            name: donation.name,
          };
        });

        /*
         * Store our data in React State
         */
        setAllDonations(kitsDonated);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * This runs our function when the page loads.
   */
  useEffect(() => {
    let schoolkitContract;
    getAllSchoolKits();
    checkIfWalletIsConnected();

    const onNewDonation = (from, timestamp, message, name) => {
      console.log("NewDonation", from, timestamp, message, name);
      setAllDonations((prevState) => [
        ...prevState,
        {
          address: from,
          timestamp: new Date(timestamp * 1000),
          message: message,
          name: name,
        },
      ]);
    };

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      schoolkitContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      schoolkitContract.on("NewKitDonation", onNewDonation);
    }

    return () => {
      if (schoolkitContract) {
        schoolkitContract.off("NewKitDonation", onNewDonation);
      }
    };
  }, []);

  const handleOnMessageChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };
  const handleOnNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  return (
    <>
      <Head>
          <title>Donate a SchoolKit</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <section class="py-10">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap md:-mx-8">
        <div class="w-full lg:w-1/2 px-8">
          <div class="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
            <h2 class="mb-4 text-4xl lg:text-5xl font-bold font-heading">Help School Kids Achieve Their Dreams</h2>
            <p class="mb-4 leading-loose text-blueGray-400">
                There is a huge chance Crypto has had a huge influence on your life. And we're hoping you can help make it changed others too. </p>
                
            <p class="mb-4 leading-loose text-blueGray-400"> There are over <span class="font-bold" >200 million out of school children globally</span>
                and those still in school lack appropriate learning materials to truly achieve their goals.
            </p>
                
            <p class="mb-4 leading-loose text-blueGray-400"> Over the past couple of years, I've participated in efforts to donate proper school kits to needy school kids in sub-Saharan Africa especially 
                in places where millions are living in extreme poverty but there's still so much to be done. 
            </p>
          <p class="mb-4 leading-loose text-blueGray-400">
                With Gift A School Kit, <b>we can help make a difference</b> . Help these kids fulfil their right to education. Help them achieve their dreams. 
                Gift A School Kit Today.
                
                
            </p>
            
        </div>
        </div>
        {/* Donate section */}
        <div class="w-full lg:w-1/2 px-8 pt-20 pl-16 ">
          <ul class="space-y-12">
            <li class="flex -mx-4">
              <div class="px-4">
                <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-600 text-white">$20</span>
              </div>
              <div class="">
                <h3 class="text-xl font-semibold">Essentials</h3>
                <p class="text-blueGray-400 leading-loose">An Essentials School Kit pack includes a school backpack, a set of notebooks and other essential educational materials for a school kid.</p>
                
                <div class="flex justify-start mt-3">
                    <button onClick={() => setShowEthDonation(showEthDonation => !showEthDonation)}
                    class="inline-flex items-center bg-blue-600 border-0 py-2 px-3 focus:outline-none hover:bg-blue-700 rounded text-base text-white mt-4 md:mt-0">
                      Gift A Kit Now
                    </button>
                </div>
                <small class="text-[10px]"> $20 in ETH (Ethereum Blockchain)</small>
                <br/><br/>

                {/* Donate section starts */}
                {showEthDonation ? (
                    <div className="">
                    <main className="">
                      {/*
                      * If there is currentAccount render this form, else render a button to connect wallet
                      */}
                      {currentAccount ? (
                        <div className="w-full max-w-xs top-3 z-50 ">
                          <form className="bg-white shadow-md rounded px-8 pt-2 pb-2">
                            <div className="mb-4">
                              <label
                                className="block text-gray-700 text-sm font-bold mb-1"
                                htmlFor="name"
                              >
                                Name
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Name"
                                onChange={handleOnNameChange}
                                required
                              />
                            </div>
    
                            <div className="mb-2">
                              <label
                                className="block text-gray-700 text-sm font-bold"
                                htmlFor="message"
                              >
                                Leave a message
                              </label>
    
                              <textarea
                                className="form-textarea mt-1 block w-full shadow appearance-none py-1 px-3 border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                rows="3"
                                placeholder="Message"
                                id="message"
                                onChange={handleOnMessageChange}
                                required
                              ></textarea>
                            </div>
    
                            <div className="flex items-left justify-between">
                              <button
                                className="bg-blue-500 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={donateSchoolKit}
                              >
                                Donate A $20 Kit
                              </button>
                              
                            </div>
                            {/* <p>Total Donations  donated so far: {totalCount}</p> */}
                          </form>
                        </div>
                      ) : (
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full mt-3"
                          onClick={connectWallet}
                        >
                          Please Connect Your Wallet
                        </button>
                      )}
    
                      {allDonations.map((donation, index) => {
                        return (
                          <div className="border-l-2 mt-2" key={index}>
                            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-2 bg-blue-800 text-white rounded mb-2 flex-col md:flex-row space-y-2 md:space-y-0">
                              {/* <!-- Dot Following the Left Vertical Line --> */}
                              <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
    
                              {/* <!-- Line that connecting the box with the vertical line --> */}
                              <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>
    
                              {/* <!-- Content that showing in the box --> */}
                              <div className="flex-auto">
                                <small className="text-md pr-2">Supporter: {donation.name}</small>
                                <small className="text-md pr-2">Message: {donation.message}</small>
                                <small>Address: {donation.address}</small>
                                <small className="text-md pl-2">
                                  TimeStamp: {donation.timestamp.toISOString().slice(0, 10)}
                                </small>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </main>
                    <ToastContainer
                      position="top-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                    />
                   </div>
                ):null}
                

                {/* Donate section ends */}
                <small class=""><b>
                  If you would like to make donations in another chain, 
                  here are our addresses:
                </b></small>
                <br/>
                <small class="text-[12px]">
                 Bitcoin: <b>
                </b></small><br/>
                <small class="text-[12px]">
                 Binance Chain (BEP20): <b>
                </b></small><br/>
                <small class="text-[12px]">
                 Tron (TRC20): <b>
                </b></small>

                
                
               

            </div>
            </li>
          </ul>
         
        </div>
      </div>
    </div>
  </section>
     
      <Goal />
      <Givers />
      <Newsletter />
      <Footer />
    </>
  );
}