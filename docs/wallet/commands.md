# Wallet Commands


## General Functionality

| Commands               | Function                                                                                                          |
|------------------------|-------------------------------------------------------------------------------------------------------------------|
| Initialise wallet      | Send a message "Hello Mandla" to initialise the wallet                                                            | 
| Register/Create Wallet | Use the command "Register" to create a new wallet                                                                 |
| Activate Wallet        | If you receive funds and your wallet is automatically created, use the command "Activate" to activate your wallet |
| Check Wallet Balance   | Send an SMS with the command "Balance" to check your wallet balance                                               |
| Activate Help          | Send an SMS with the command "Help" to activate the help functionality                                            |



## Sending / Receiving / Withdrawing Funds

The process of transferring and withdrawing funds using a Mandla Wallet can be executed using the following SMS commands.


| Commands                                  | Function                                                       |
|-------------------------------------------|----------------------------------------------------------------|
| Sending Funds to a Mandla user            | Send an SMS in the following format `send#asset#tag#value`     |
| Receiving Funds from a Mandla user        | Send an SMS in the following format `receive#asset#tag#value`  |
| Withdrawing Funds from your Mandla wallet | Send an SMS in the following format `withdraw#asset#tag#value` |


::: info Definitions
<hr/>

**Asset**: The asset refers to the specific tokens setup within the system. For example: "USD", "ZAR", etc.

**Tag**: Each user of the Mandla wallet is assigned an XRP tag that is unique to their cell number. This tag is used to transfer/receive or withdraw funds. __A CELL NUMBER can also be used in place of a user tag__
:::



## Get Help

Use the relevant "HELP" commands mentioned in this section to receive instructions on sending funds, making withdrawals, or receiving funds/funding your wallet.

* `HELP SEND` - help on sending assets
* `HELP RECEIVE` - help on receiving assets
* `HELP WITHDRAW` - help on withdrawing assets
