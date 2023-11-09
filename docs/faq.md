# Frequently Asked Questions


**Q: How do you prevent Twilio from stealing XRP?**

This is an inherent risk with using an internet SMS gateway. We have thought of using an alternative provider for delivery of one time pins (OTPs) but this risk exists in the event of collusion between Twilio and the alternative SMS gateway.

**Q: How do you prevent SMS spoofers from stealing XRP?**

The use of OTP’s delivered to the sender’s mobile device for time-based authentication of the wallet. The SMS spoofer will need to hijack the wallet users mobile device in order to get access to the OTP.

**Q: How do you prevent spying?**

Communication between the Mandla Wallet server and Twilio is encrypted, we make use of SSL. However, communication between the wallet users mobile device and Twilio is unencrypted, and in theory can be spied upon, the same way that regular SMS messages between a mobile device and mobile network can be vulnerable.

**Q: How do you store the keys?**

Currently keys are stored as environment variables on the application server. Access to the application server is 2FA controlled. Key management will be offloaded to key management servers or custody providers.

**Q: How are transactions signed for?**

The application server controls the custody account. Once a request to transfer funds from a Mandla Wallet to an XRPL account is received and validated (authentication passes, transfer message is well formed, balance checks pass) then the application server signs the transaction.

**Q: Why do you poll only every 5 mins, is it possible to have payment notifications / balances update instantly?**

Initially the polling service was configured to poll the XRP ledger every 10 minutes (in a development environment). This has now been updated to poll every minute. Payment notifications / balance updates within the Mandla ecosystem are instant.

**Q: How would you implement 2FA for payments?**
We have implemented the use of OTP for time-based wallet authentication (i.e. 15 minute sessions). This
could be supplemented by an OTP phone call when requesting to carry out a transaction.

**Q: Is there a self-custody / semi-self-custody key management solution you could implement to make signing
transactions more secure?**

We can investigate use of trusted execution environments (TEEs) and hardware enclaves such that the
application server is oblivious of user keys. However, this could be for the next iteration of the product
once features such as the admin UI etc are complete.

**Q: Can you set transaction limits?**

This is a recurring question and currently on our backlog.

**Q: SMS messages are not encrypted and so can be spied on. Is there a solution to prevent this?**

See earlier comments on use of SSL between the Mandla Wallet application server and the SMS
gateway.

**Q: How scalable is your solution?**

* We have not benchmarked the platform from a performance point of view.
* The platform can support any XRPL-issued asset (these can be configured by a server admin).
* Similarly, enabling support for an additional country is contingent on support by Twilio for the specific country (or integration with a mobile network operator [MNO]) and
  configuration by a server admin.

**Q: Could users get their own wallet address, rather than a shared wallet?**

This is possible either using a custody provider or a secure enclave (TEE) but this comes with overhead.

**Q: Can you provide this solution in other languages?**\

Yes. This is also a recurring question. Localisation is possible and will be added to the backlog.

**Q: Can we limit the currencies a user receives - or have them request one currency specifically?**

This is not currently implemented but is possible. An admin could configure this. This can be added to the
backlog.

**Q: Can we add a call to receive a history of transactions in case they lost the text history?**

Not currently implemented but possible. We can implement this via SMS e.g. send Yes. history sms to pull from SMS state.

**Q: What happens if Twilio goes down?**

If Twilio goes down, users will be unable to transact - i.e. there will be no responses to wallet prompts. The alternative is to build some redundancy by purchasing an alternative sms number from other service providers e.g. Best case scenario is to integrate directly with an in-country MNO e.g. Vodacom.

**Q: Is there a way the Mandla Money address can be copied in an easier way?**

We can configure an SMS prompt to return the MandlaID or Wallet address - e.g. help wallet address.

**Q: How easy is it to add more regions/numbers?**

This can be configured by a system admin. Purchase a country number on Twilio, complete endpoint
configuration and then update the server config. That said, integration with MNOs in each country of
operation is the ideal.

**Q: Feedback from other users?**

We have not yet run a pilot. Mainly demos and Q&amp;A’s such as the list of questions you have provided.

<br/>

<div style="page-break-after: always;"></div>
