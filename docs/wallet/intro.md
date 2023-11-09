

# Mandla Wallet

<hr/>



Mandla Money's wallet is a powerful tool designed to provide you with convenient access to your funds, seamless transactions, and robust security measures. Whether you're sending money to friends, making online purchases, or managing your investments, our wallet offers a user-friendly interface and a wide range of functionalities to meet your financial needs.

With Mandla Money's wallet, you can effortlessly check your account balance, send and receive funds from anywhere in the world, convert currencies, and even make withdrawals to external bank accounts. We've made it our mission to ensure a smooth and intuitive user experience while maintaining the highest standards of security to protect your assets and personal information.

In this documentation, you will find step-by-step instructions, detailed explanations, and useful tips to help you navigate the wallet's features with confidence. Whether you're a first-time user or an experienced investor, this guide will provide you with the knowledge and resources to make the most of Mandla Money's wallet.

We encourage you to explore the documentation thoroughly, as it covers everything from the initial setup process to advanced features and troubleshooting tips. Additionally, we've included a frequently asked questions (FAQs) section to address common queries and provide quick solutions.

Should you encounter any difficulties or have further questions, our dedicated support team is here to assist you. Feel free to reach out to us via our support channels, which are detailed in the "Contact Support" section.

Thank you for choosing Mandla Wallet.





## Security and User Privacy

Mandla wallet is a safe and secure means of handling your transcations. The following security measures are in place to protect the users and their funds:

*  **Email alerts** are sent to system administrators for high value transactions.  

* **Automated scheduled tests** are conducted to compacre on chain transactions with off-chain user balances to compare on chain transactions with off-chain user - these are expected to reconcile and alert system administrators periodically.

* Continuous **web application uptime monitoring.**

* Our cloud service provider implements **distributed denial-of-service (DDos) mitigation
such as connection rate limiting, and prohibits** (and actively blocks attempts) **port
scanning.**

* **Email notifications** are sent out to system administrators everytime an administrator logs in to the wallet backend. 

<br/>

Mandla wallet prioritises user privacy and protects access to any personal information by placing the following measures: 
<br/>

* **Anonymised Mandla ID:** Offline payments make use of a receiver's cellphone number or Mandla ID (Mandla IDs and user cellphone numbers are mapped in the backend). The Mandla ID is a randomly generated sequence of numbers which does not reveal anything about the associated
user (e.g. an example Mandla ID is 333838471). No previously unknown information is
leaked to a sender or a receiver outside of the corresponding cellphone number and
Mandla ID.
 

<div style="page-break-after: always;"></div>

## Background Architecture

Mandla Wallet is built using a Django webserver hosted on Heroku. The XRPL library is used to interact with the XRP ledger. An online SMS Gateway (currently Twilio) is used to to relay SMSs from users to the server. 

The user is required to initialise their wallet which connects them to the Mandla Wallet server through the online SMS gateway. Each user has a uniqe "tag" identified by their cell number. The user then can send specific commands using SMS which are then transferred to the Mandla Wallet webserver. 


![Architecture](/images_mwoverview/Architecture_diagram.jpg)

<br/>

## Transfer of Funds

Settlement is achieved in under 5 seconds from initiation of the transaction via SMS.
There are two types of payment flows that the Mandla SMS Wallet supports:

- **Payments initiated by a non-Mandla wallet user to a Mandla wallet user:**  
  In this instance, a user sends the digital asset from another application or exchange to a
Mandla wallet user using the Mandla wallet universal custody address (that is specific to any of the supported blockchain networks) and includes a Mandla ID reference of the receiver. In this case, the transaction happens on-chain (by accessing the XRP Ledger) and once finalised, the Mandla Wallet receiver is notified.

  The time constraint here is the amount of time for a transaction to be finalised on the blockchain network. The Mandla backend service polls the blockchain network every 10 seconds.

- **Payments initiated by a Mandla Wallet user to another Mandla Wallet user:**  
  In this instance, user account balances are updated offchain(without having to accessing the XRP Ledger) and there is no
interaction with the blockchain network. Settlement happens as soon as the sender’s SMS is received and processed server side - which is sub-5 seconds.  

  The time constraint here is the receiving and processing of the sender’s SMS by the Mandla backend server which in turn is based on the internet SMS gateway.

- **External transactions on the blockchain with the user's account**
  In this instance, if a user receives funds from an external network these transactions are processed and the user's funds are updated accordingly on the Mandla Wallet. The blockchain is regularly queried to check for such transactions. 


<br/>

![process flow](/images_mwoverview/process_flow.jpg)

<br/>

## The XRP Ledger

XRP is a cryptocurrency that runs on the XRP Ledger, which is a decentralised public blockchain led by a global community of  developers.  

Mandla wallet has a central custody account identified with "rBBFeyRk19orSKU8k9JhF1A7KcQgM1dqse". Each user is assigned a memo upon registration. A unique tag is generated for each Mandla Wallet user when the first SMS is sent using their cell number. 

<br/>

![XRPL tags](/images_mwoverview/XRPL_tags.jpg)

<br/>

## On-ramping and Off-ramping

The convertion between physical cash and a digital asset on the XRP Ledger occurs via an agent. A user issues this transaction via a Mandla Wallet agent who converts the user's physical cash to stablecoin on the XRP Ledger which the user can then access through their Mandla Wallet on their devices to transact digital currency. A user is also able to withdraw the digital currency stored on their Mandla Wallet in the form of physical cash through a Mandla wallet agent. 

<br/>

![cash flow](/images_mwoverview/Cash_flow.jpg)




