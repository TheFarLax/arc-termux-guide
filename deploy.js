const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
const solc = require("solc");
require("dotenv").config();

async function main() {
    // 1. Setup Provider & Wallet
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL || "https://rpc.testnet.arcana.network/");
    
    if (!process.env.PRIVATE_KEY) {
        console.error("❌ Error: PRIVATE_KEY not found in .env file");
        process.exit(1);
    }

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    console.log(`🚀 Deploying from: ${wallet.address}`);

    // 2. Compile Contract
    console.log("🛠️  Compiling contract...");
    const contractPath = path.resolve(__dirname, "contracts", "HelloArc.sol");
    const source = fs.readFileSync(contractPath, "utf8");

    const input = {
        language: "Solidity",
        sources: {
            "HelloArc.sol": {
                content: source,
            },
        },
        settings: {
            outputSelection: {
                "*": {
                    "*": ["abi", "evm.bytecode"],
                },
            },
        },
    };

    const output = JSON.parse(solc.compile(JSON.stringify(input)));
    
    if (output.errors) {
        output.errors.forEach((err) => console.error(err.formattedMessage));
        if (output.errors.some(err => err.severity === 'error')) process.exit(1);
    }

    const contractData = output.contracts["HelloArc.sol"]["HelloArc"];
    const abi = contractData.abi;
    const bytecode = contractData.evm.bytecode.object;

    // 3. Deploy
    console.log("📡 Sending deployment transaction...");
    const factory = new ethers.ContractFactory(abi, bytecode, wallet);
    
    const initialMessage = "Hello from Termux!";
    const contract = await factory.deploy(initialMessage);

    console.log("⏳ Waiting for confirmation...");
    await contract.waitForDeployment();

    const address = await contract.getAddress();
    console.log(`✅ Contract deployed successfully!`);
    console.log(`📍 Address: ${address}`);
    console.log(`🔗 Explorer: https://explorer.testnet.arcana.network/address/${address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
