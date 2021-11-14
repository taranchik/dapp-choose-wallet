# dApp Choose Wallet

![Project Image](https://i.imgur.com/UnusOKD.png)

> The application has a simple functionality of submitting an application for a promotional campaign. It enables interaction with the 'smart contract' on two test networks:
> Binance Chain Testnet
> Goerli Test Network

---

### Table of Contents

- [Description](#description)
- [React Libraries](#react-libraries)
- [Possible improvements](#possible-improvements)
- [How To Use](#how-to-use)
- [References](#references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

### Functionality

#### There are two stages in it:

- User should connect to the user's wallet before program will switch to the functional part of the application. Firstly, the user has to connect his wallet, it is possible to do so using the Metamask wallet.

### Interaction with a smart contract

#### This part consists of three views:

- Claiming - if the user has not submitted a request yet, it allows him to do so

![Claim tokens screen](https://i.imgur.com/s0hqH1U.png)

- Pending transaction - appears after the user accepts the transaction

![Pending transaction](https://i.imgur.com/3rLeVTG.png)

- Thank you - appears when the transaction is successfully completed

![Thank you screen](https://i.imgur.com/KpygGYk.png)

---

## React Libraries

- Web3 React - A simple, maximally extensible, dependency minimized framework for building modern Ethereum dApps to allow interact with MetaMask wallet in the Choose Wallet decentralized application.
- Styled components - A React library providing unusual syntax for styling HTML tags.

[Back To The Top](#dapp-choose-wallet)

---

## Possible improvements

- The state of the application is not persistent as well as the connection with the wallet, it would be fixed.
- When the transaction is successfuly confirmed, the screen "Thank You" remains unchanged, would be added redirecting to the screen with wallet and network connection.

[Back To The Top](#dapp-choose-wallet)

---

## How To Use

#### Installation

Copy-paste the following commands in the terminal

1. Fetch the dApp in your current directory

```
git clone https://github.com/taranchik/dapp-choose-wallet
```

2. Go to the directory with the app

```
cd dapp-choose-wallet
```

3. Install the dependencies and run the app

```
npm install && npm start
```

4. Now the app should open in your browser and work according to the scenario described in the [Description](#description) section

---

## References

[Web3 React Tools](https://github.com/NoahZinsmeister/web3-react)

[Styled components](https://styled-components.com/)

[React](https://reactjs.org/)

[TypeScript](https://www.typescriptlang.org/)

[Back To The Top](#dapp-choose-wallet)

---

## Author Info

- LinkedIn - [Viacheslav Taranushenko](https://www.linkedin.com/in/viacheslav-taranushenko-727466187/)
- GitHub - [@taranchik](https://github.com/taranchik)
- GitLab - [@taranchik](https://gitlab.com/taranchik)
- Twitter - [@viataranushenko](https://twitter.com/viataranushenko)

[Back To The Top](#dapp-choose-wallet)
