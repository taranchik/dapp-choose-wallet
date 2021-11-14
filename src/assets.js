import BSC from "./img/BSC.png";
import ETH from "./img/ETH.png";
import MetaMask from "./img/MetaMask.png";
import not_selected from "./img/Diamon.png";
import sandbox from "./img/sandbox.png";
import selected from "./img/Diamond_selected.png";
import success from "./img/success.png";

export { BSC, ETH, MetaMask, not_selected, selected, sandbox, success };

export const binanceContractAddress =
  "0x0F3d5B978A143A1544B602808559f30d05Ade1ED";

export const goerliContractAddress =
  "0x704c8F4571B070029D76CD3d4F0d622C816a7d14";

export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "NewParticipant",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isParticipating",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numberOfParticipants",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "no",
        type: "uint256",
      },
    ],
    name: "participantsAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "participate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
