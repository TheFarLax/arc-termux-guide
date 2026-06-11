# Deploying on Arc Testnet Using Only Termux

Most smart contract tutorials assume you have a laptop.

I wanted to see how far I could go using only an Android phone and Termux.

Turns out it's completely possible.

This repo contains the code and steps I used to deploy a Solidity contract to Arc Testnet directly from my phone.

---

## What You'll Need

- Android phone
- Termux
- Internet connection
- Wallet private key (test wallet only)
- Some testnet tokens

---

## Install Dependencies

Update packages:

```bash
pkg update && pkg upgrade -y
```

Install required tools:

```bash
pkg install git python nodejs-lts -y
```

If you get:

```bash
dpkg was interrupted
```

run:

```bash
dpkg --configure -a
```

and then retry the installation.

---

## Clone Repository

```bash
git clone https://github.com/TheFarLax/arc-termux-guide.git

cd arc-termux-guide
```

Install packages:

```bash
npm install
```

---

## Configure Environment Variables

Create:

```bash
nano .env
```

Add:

```env
RPC_URL=YOUR_RPC_URL
PRIVATE_KEY=YOUR_PRIVATE_KEY
```

Save:

- CTRL + O
- Enter
- CTRL + X

---

## Deploy

Run:

```bash
node deploy.js
```

Example output:

```bash
Deploying contract...

Transaction sent...

Waiting for confirmation...

Contract deployed successfully.

Contract Address:
0x...
```

---

## Verify Deployment

Copy the deployed contract address and open the Arc explorer.

Search for your address and confirm the contract is visible on-chain.

---

## Common Issues

### nodejs package not found

Try:

```bash
pkg install nodejs-lts
```

---

### dpkg interrupted

```bash
dpkg --configure -a
```

---

### insufficient funds

Fund your wallet using the Arc testnet faucet.

---

### .env not found

Make sure the filename is exactly:

```bash
.env
```

not:

```bash
.env.txt
```

---

## Security

Never upload:

- Private key
- Seed phrase
- .env file

Use a dedicated test wallet.

Do not use your main wallet.

---

## Why This Repo Exists

I built this because most deployment tutorials are written for laptops.

This repo shows that you can write, compile and deploy smart contracts directly from an Android device using Termux.

If it helps you deploy your first contract from mobile, that's a win.

---

Built by @TheFarLax
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
```

---

## 🔍 Verification
After deployment, copy the contract address and search for it on the [Arc Testnet Explorer](https://testnet.arcscan.app/).

![Explorer Screenshot Placeholder](images/explorer_screenshot.png)
*(Coming soon: Visual guide for verification)*

---

## ⚠️ Common Errors & Troubleshooting

| Error | Solution |
| :--- | :--- |
| `Command 'node' not found` | Run `pkg install nodejs` |
| `Insufficient funds` | Get test tokens from the [Arc Faucet](https://faucet.circle.com/) |
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
- **Website**: [Arc Network](https://arc.network/)
- **Documentation**: [Arc Docs](https://docs.arc.network/)
- **Twitter**: [@Arc](https://twitter.com/Arc)

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ by thefarlax
