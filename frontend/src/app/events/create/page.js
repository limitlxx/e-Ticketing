"use client";

import { useState } from 'react';
import { useContract, useSigner } from 'wagmi';
import { uploadToIPFS } from '../../utils/ipfs';
import { contractAddress, contractABI } from '../../utils/contracts';

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    ticketPriceUSD: '',
    totalTickets: '',
    image: null,
    ticketName: '',
    ticketSymbol: '',
  });

  const { data: signer } = useSigner();
  const contract = useContract({
    address: contractAddress,
    abi: contractABI,
    signerOrProvider: signer,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signer) {
      alert('Please connect your wallet');
      return;
    }

    try {
      const ipfsUrl = await uploadToIPFS(formData.image);
      const tx = await contract.createEvent(
        formData.name,
        formData.category,
        Math.round(parseFloat(formData.ticketPriceUSD) * 100), // Convert to cents
        formData.totalTickets,
        ipfsUrl,
        formData.ticketName,
        formData.ticketSymbol
      );
      await tx.wait();
      alert('Event created successfully!');
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating event. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Event</h1>
      <input
        type="text"
        name="name"
        placeholder="Event Name"
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="number"
        name="ticketPrice"
        placeholder="Ticket Price (ETH)"
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="number"
        name="totalTickets"
        placeholder="Total Tickets"
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="file"
        name="image"
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="text"
        name="ticketName"
        placeholder="Ticket NFT Name"
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="text"
        name="ticketSymbol"
        placeholder="Ticket NFT Symbol"
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Create Event
      </button>
    </form>
  );
}