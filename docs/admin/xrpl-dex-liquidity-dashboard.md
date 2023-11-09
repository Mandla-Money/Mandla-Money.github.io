# XRPL DEX Liquidity Dashboard

## General Overview

The Liquidity dashboard is a market making feature that allows one to create bids and asks on the DEX. The logic places a series of buy and sell orders at different price levels to provide liquidity for a chosen token (eg USD) in exchange for XRP. The logic calculates the ask and bid prices based on the exchange rate and percentage interval.

## How to use the DEX Liquidity interface

To place bid and ask orders enter the following information:

1. `Amount` the initial amount used to calculate the bids and asks. eg `100`
2. `Issuer Address` the token issuer address.
3.  The token.
4. `Receiver Seed` the seed of the wallet that will place orders.
5. `Steps` The number of steps or levels at which liquidity orders will be placed. Each step increases or decreases the price. eg `3`
6. `Interval` The percentage change in price between each step. `20`
7. Then click the **Create Orders** button.

![DEX Liquidity](/images_dex_liquidity/dex_liquidity.png)

