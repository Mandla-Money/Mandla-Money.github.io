# General Information

## Security and User Privacy

Mandla Wallet is a safe and secure means of handling your funds and transactions. The following security measures are in place to protect users and their funds:

* **Email alerts** are sent to system administrators for high value transactions.

* **Automated scheduled tests** are conducted to compare on chain transactions with off-chain user balances these are expected to reconcile and alert system administrators periodically.

* Continuous **web application uptime monitoring.**

* Our cloud service provider implements **distributed denial-of-service (DDos) mitigation
  such as connection rate limiting, and prohibits** (and actively blocks attempts) **port
  scanning.**

* **Email notifications** are sent out to system administrators everytime an administrator logs in to the wallet backend.

<br/>

Mandla wallet prioritises user privacy and protects access to any personal information by placing the following measures:

* **Anonymised Mandla ID:** Offline payments make use of a receiver's cellphone number or Mandla ID (Mandla IDs and user cellphone numbers are mapped in the backend). The Mandla ID is a randomly generated sequence of numbers which does not reveal anything about the associated
  user (e.g. an example Mandla ID is 333838471). No previously unknown information is
  leaked to a sender or a receiver outside of the corresponding cellphone number and
  Mandla ID.

  

## Background Architecture

Mandla Wallet is built using a Django webserver hosted on Heroku. The XRPL library is used to interact with the XRP ledger. An online SMS Gateway (currently Twilio) is used to to relay SMSs from users to the server.

The user is required to initialise their wallet which connects them to the Mandla Wallet server through the online SMS gateway. Each user has a unique "tag" identified by their cell number. The user then can send specific commands using SMS which are then transferred to the Mandla Wallet webserver.

![Process flow](/img/wallet/overview/process-flow-with-whatsapp.png)


## Transfer of Funds

Settlement is achieved in under 5 seconds from initiation of the transaction via SMS.
There are two types of payment flows that the Mandla SMS Wallet supports:

- **Payments initiated by a non-Mandla wallet user to a Mandla wallet user:**  
  In this instance, a user sends the digital asset from another application or exchange to a
  Mandla wallet user using the Mandla wallet universal custody address (that is specific to any of the supported blockchain networks) and includes a Mandla ID reference of the receiver. In this case, the transaction happens on-chain (by accessing the XRP Ledger) and once finalised, the Mandla Wallet receiver is notified.

  The time constraint here is the amount of time for a transaction to be finalised on the blockchain network. The Mandla backend service polls the blockchain network every 10 seconds.

- **Payments initiated by a Mandla Wallet user to another Mandla Wallet user:**  
  In this instance, user account balances are updated off chain (without having to access the XRP Ledger) and there is no
  interaction with the blockchain network. Settlement happens as soon as the sender’s SMS is received and processed server side - which is sub-5 seconds.

  The time constraint here is the receiving and processing of the sender’s SMS by the Mandla backend server which in turn is based on the internet SMS gateway.

- **External transactions on the blockchain with the user's account**
  In this instance, if a user receives funds from an external network these transactions are processed and the user's funds are updated accordingly on the Mandla Wallet. The blockchain is regularly queried to check for such transactions.

  

## The XRP Ledger

XRP is a cryptocurrency that runs on the XRP Ledger, which is a decentralised public blockchain led by a global community of  developers.

- Mandla wallet has a central custody account identified with **rBBFeyRk19orSKU8k9JhF1A7KcQgM1dqse**. 
- Each user is assigned a memo upon registration. A unique tag is generated for each Mandla Wallet user when they first register on the wallet.


![XRPL tags](/img/wallet/overview/XRPL_tags.jpg)


## On-ramping and Off-ramping

The conversion between physical cash and a digital asset on the XRP Ledger occurs via an agent. A user issues this transaction via a Mandla Wallet agent who converts the user's physical cash to stable coin on the XRP Ledger which the user can then access through their Mandla Wallet on their devices to transact digital currency. A user is also able to withdraw the digital currency stored on their Mandla Wallet in the form of physical cash through a Mandla wallet agent.


![cash flow](/img/wallet/overview/Cash_flow.jpg)
