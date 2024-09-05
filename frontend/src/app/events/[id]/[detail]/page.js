"use client"
import { useState } from 'react';
import { useContract, useSigner } from 'wagmi';
// import { uploadToIPFS } from '../../../../utils/ipfs';
// import { abi } from '../../../../utils/abi';
// import { contractAddress } from '../../../../utils/services';
import DetailPage from "../../../components/detailpage";

export default function JoinEvent() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    ticketPriceUSD: '',
    totalTickets: '',
    image: null,
    ticketName: '',
    ticketSymbol: '',
  });

  // const { data: signer } = useSigner();
  // const contract = useContract({
  //   address: contractAddress,
  //   abi,
  //   signerOrProvider: signer,
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!signer) {
  //     alert('Please connect your wallet');
  //     return;
  //   }

  //   try {
  //     const ipfsUrl = await uploadToIPFS(formData.image);
  //     const tx = await contract.createEvent(
  //       formData.name,
  //       formData.category,
  //       Math.round(parseFloat(formData.ticketPriceUSD) * 100), // Convert to cents
  //       formData.totalTickets,
  //       ipfsUrl,
  //       formData.ticketName,
  //       formData.ticketSymbol
  //     );
  //     await tx.wait();
  //     alert('Event created successfully!');
  //   } catch (error) {
  //     console.error('Error creating event:', error);
  //     alert('Error creating event. Please try again.');
  //   }
  // }

  return (
    <>
    <DetailPage />
    </>
  )
}