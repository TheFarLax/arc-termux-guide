# 📱 Arc Termux Guide: Mobile-First Smart Contract Deployment

[![Network](https://img.shields.io/badge/Network-Arc_Testnet-blueviolet?style=for-the-badge&logo=ethereum)](https://explorer.testnet.arcana.network/)
[![Tools](https://img.shields.io/badge/Tools-Termux_%7C_Node.js_%7C_Ethers.js-orange?style=for-the-badge)](https://termux.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 🌟 Overview

Welcome to the **Arc Termux Guide**! This repository is a production-ready template and step-by-step tutorial designed for developers who want to build and deploy on the **Arc Testnet** using nothing but their **Android smartphone**.

By combining the power of **Termux**, **Node.js**, and **Ethers.js v6**, we eliminate the need for a laptop, making Web3 development truly portable and accessible.

> [!TIP]
> This guide is optimized for "Mobile-First" builders. All commands are formatted for easy copy-pasting directly into the Termux terminal.

---

## 🚀 Features

- 📱 **100% Mobile Workflow**: No PC required.
- ⚡ **Ethers.js v6**: Using the latest standards in Ethereum libraries.
- 🛠️ **Auto-Compilation**: Deployment script compiles Solidity on-the-fly.
- 🌐 **Arc Testnet Ready**: Pre-configured RPC and Explorer links.
- 🔒 **Secure-ish**: Local `.env` management (with security warnings).

---

## 🏗️ Why this setup?

Desktop environments are great, but the future is mobile. Whether you're commuting, traveling, or just prefer your phone, being able to ship code from anywhere is a superpower. Arc Network's high-speed infrastructure paired with Termux's Linux environment creates a professional development experience in your pocket.

---

## 📋 Prerequisites

Before starting, ensure you have:
1. An **Android Device** with internet access.
2. **Termux** installed (Download from [F-Droid](https://f-droid.org/en/packages/com.termux/) for the most up-to-date version).
3. A **Private Key** from a test wallet (e.g., MetaMask) with some Arc Testnet faucet tokens.

---

## 🛠️ Step-by-Step Installation

### 1. Install Termux & Base Packages
Open Termux and run these commands to prepare your environment:

```bash
# Update packages
pkg update && pkg upgrade -y

# Install Node.js, Git, and Python (needed for some builds)
pkg install nodejs git python -y
```

### 2. Clone & Setup Project
```bash
# Clone the repository
git clone https://github.com/TheFarLax/arc-termux-guide.git
cd arc-termux-guide

# Install dependencies
npm install
```

### 3. Configure Environment Variables
Create a `.env` file to store your sensitive data:

```bash
nano .env
```

Paste the following and replace `YOUR_PRIVATE_KEY` with your actual private key:
```env
RPC_URL=https://rpc.testnet.arc.network/
PRIVATE_KEY=YOUR_PRIVATE_KEY_HERE
```
*Press `CTRL + O`, then `Enter` to save, and `CTRL + X` to exit.*

---

## 📄 The Smart Contract
Our contract is located in `contracts/HelloArc.sol`. It's a simple, gas-efficient greeting contract.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloArc {
    string public message;
    
    constructor(string memory _initialMessage) {
        message = _initialMessage;
    }
}
```

---

## 🚢 Deployment

Once your `.env` is set up, deploy your contract with a single command:

```bash
node deploy.js
```

### 📈 Expected Output
```text
🚀 Deploying from: 0xYourWalletAddress...
🛠️  Compiling contract...
📡 Sending deployment transaction...
⏳ Waiting for confirmation...
✅ Contract deployed successfully!
📍 Address: 0x...
🔗 Explorer: https://explorer.testnet.arcana.network/address/0x...
```

---

## 🔍 Verification
After deployment, copy the contract address and search for it on the [Arc Testnet Explorer](https://explorer.testnet.arcana.network/).

![Explorer Screenshot Placeholder](images/explorer_screenshot.png)
*(Coming soon: Visual guide for verification)*

---

## ⚠️ Common Errors & Troubleshooting

| Error | Solution |
| :--- | :--- |
| `Command 'node' not found` | Run `pkg install nodejs` |
| `Insufficient funds` | Get test tokens from the [Arcana Faucet](https://faucet.testnet.arcana.network/) |
| `solc compilation failed` | Ensure `package.json` has `solc: 0.8.20` installed |
| `.env not found` | Ensure the file is named exactly `.env` (with the dot) |

---

## 🔐 Security Notes

> [!CAUTION]
> **Never** share your `.env` file or commit it to GitHub. It contains your private key, which grants full control over your wallet.
> - Always add `.env` to your `.gitignore`.
> - Use a dedicated **development-only wallet** (never your main wallet).

---

## 🔮 Future Improvements
- [ ] Add contract verification script for the explorer.
- [ ] Add support for multiple contracts.
- [ ] Integrate a simple CLI for interacting with deployed contracts.

---

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🔗 Links & Socials
- **Website**: [Arcana Network](https://arcana.network/)
- **Documentation**: [Arcana Docs](https://docs.arcana.network/)
- **Twitter**: [@ArcanaNetwork](https://twitter.com/ArcanaNetwork)

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ by the Arc Dev Community.
