 
# NFT Ticketing System

## Overview

This project is a decentralized ticketing system built on the Ethereum blockchain, enabling event organizers to create events and attendees to mint NFTs as tickets when they join an event. The smart contracts are written in Solidity, and the dApp is built using Next.js for the front-end with Hardhat as the development environment. For seamless integration with wallets and smart contract interactions, `wagmi` and `RainbowKit` are used.

## Features

- **Create Events**: Organizers can create events with customizable details such as date, time, and location.
- **Mint NFT Tickets**: Attendees can join an event by minting an NFT that serves as their entry ticket.
- **IPFS Integration**: Event ticket images are stored on IPFS, ensuring decentralization and security.
- **Event Verification**: Only authorized addresses can mint tickets for certain events based on the rules set by the event organizers.
- **Ticket Tracking**: Track the availability of tickets and limit the number of attendees.

## Tech Stack

- **Solidity**: Smart contracts are developed in Solidity to manage event creation and ticket minting.
- **Hardhat**: Hardhat is used for smart contract development, testing, and deployment.
- **Next.js**: Provides the front-end of the application, offering a seamless user experience.
- **wagmi**: Handles wallet connections and contract interactions within the front-end.
- **RainbowKit**: Simplifies wallet integration for users, enabling them to connect their wallets to the dApp.
- **IPFS**: Used to store ticket images in a decentralized manner.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn or npm
- MetaMask or any Ethereum-compatible wallet
- Ethereum node provider (e.g., Alchemy or Infura)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/limitlxx/e-Ticketing
   cd e-Ticketing
   ```

2. **Install Dependencies**

   Install the project dependencies using Yarn or npm:

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory and add the following variables:

   ```bash
   CONTRACT_ADDRESS=<Depolyment contract> 

4. **Compile and Deploy Smart Contracts**

   Compile and deploy the smart contracts to your preferred Ethereum network using Hardhat:

   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network <network-name>
   ```

   Make sure to update the deployed contract address in your `.env` file.

5. **Run the Frontend**

   Start the Next.js development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

### Smart Contract Interaction

This project uses `wagmi` and `RainbowKit` for interacting with the deployed smart contracts. The core functionality includes creating events, minting tickets, and managing ticket availability.

- **Event Creation**: Event creators can specify event details such as date, location, and maximum attendees.
- **Minting Tickets**: Users can mint an NFT as a ticket when joining an event. The NFT is associated with the event and provides proof of attendance.

## Testing

Unit tests are provided for smart contracts using Hardhat's testing framework.

```bash
npx hardhat test
```

### Frontend Testing

For frontend testing, Jest and React Testing Library are used to validate components and UI behavior.

```bash
yarn test
# or
npm run test
```

## Deployment

For production deployment, you can build the application and deploy it to a platform like Vercel or Netlify.

```bash
yarn build
# or
npm run build
```

## Contributing

Contributions are welcome! Please follow the standard GitHub fork-and-pull model for contributing:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Solidity](https://soliditylang.org/)
- [Hardhat](https://hardhat.org/)
- [Next.js](https://nextjs.org/)
- [wagmi](https://wagmi.sh/)
- [RainbowKit](https://www.rainbowkit.com/)
- [IPFS](https://ipfs.io/)

---

Feel free to contribute and enhance the decentralized ticketing system to fit a variety of event and NFT use cases!