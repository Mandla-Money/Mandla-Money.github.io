# XRPL DEX Dashboard

## General Overview

The XRPL decentralized exchange (DEX) is a platform that allows users to trade digital assets in a decentralized and secure manner. The base currency on the DEX is XRP. The Mandla Money DEX integration dashboard interface allows for swapping between XRP and USDC.

## How to use the DEX integration interface

On the dashboard you will see the connected wallet and the balances it has for the different digital assets.

![DEX wallet and balances](/images_dex_integration/dex_wallet-balances.png)

The interface allows you to swap XRP for USDC and vice versa. Before you perform a swap operation you will want to assess liquidity on the DEX. The interface shows you the orders that are at the top of the order book limiting the records to 15.

![DEX order book](/images_dex_integration/dex-order-book.png)

On this interface you are able to view you trade history of all the successful trades you would have previously  made.

![DEX trade history](/images_dex_integration/dex-trade-history.png)

To perform a trade operation you:

1. Enter the amount you want to get.
2. Select the associated currency you want.
3. Select the currency you are offering.
4. Then click the **Swap** button.

Information such as the current exchange rate for the currencies you are trading are automatically filled in for you. The exchange is pulled from the aggregated exchange rate service operated by XRP labs the creators of the XUMM wallet. The amount you are offering is automatically calculated from the amount you want and a 15% transaction fee is added on top.

![DEX swapping](/images_dex_integration/dex-swap-form.png)
