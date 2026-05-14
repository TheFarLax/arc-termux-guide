// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title HelloArc
 * @dev A simple smart contract to demonstrate deployment on Arc Testnet via Termux.
 */
contract HelloArc {
    string public message;
    address public owner;

    event MessageUpdated(string oldMessage, string newMessage);

    constructor(string memory _initialMessage) {
        message = _initialMessage;
        owner = msg.sender;
    }

    /**
     * @dev Updates the stored message.
     * @param _newMessage The new message to store.
     */
    function updateMessage(string memory _newMessage) public {
        string memory oldMessage = message;
        message = _newMessage;
        emit MessageUpdated(oldMessage, _newMessage);
    }

    /**
     * @dev Returns the greeting message.
     */
    function getMessage() public view returns (string memory) {
        return message;
    }
}
