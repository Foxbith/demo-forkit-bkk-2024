# forkit-bkk-2024-demo
Unlocking Secure Development: Managing Secrets in Your Frontend.

# Google Map & Crypto Wallet Balance Example

This example demonstrates how to build a Next.js app and [Moralis](https://moralis.io/) that displays an interactive Google Map and shows cryptocurrency wallet balances using environment variables securely managed with Doppler.

## Demo

[fork-it-bkk-2024](https://demo-forkit-bkk-2024.vercel.app/)

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/solutions/mint-nft&project-name=mint-nft&repository-name=mint-nft&env=NEXT_PUBLIC_APP_ID,NEXT_PUBLIC_SERVER_URL,NEXT_PUBLIC_SERVER_DOMAIN)

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [pnpm](https://pnpm.io/installation) to bootstrap the example:

```bash
pnpm create next-app --example https://github.com/vercel/examples/tree/main/solutions/fork-it-bkk-2024
```

Next, install package from this project

```bash
pnpm install
```

### Install Doppler

Ensure Doppler is installed on your system for secure management of environment variables:
Install Doppler: Follow the official installation guide [here](https://docs.doppler.com/docs/install-cli) or use the following command for a quick install for macOS:
```bash
# Prerequisite. gnupg is required for binary signature verification
brew install gnupg

# Next, install using brew (use `doppler update` for subsequent updates)
brew install dopplerhq/cli/doppler
```

### Authenticate with Doppler

#### Method 1 (for user that has permission to access doppler workspace)
```bash
doppler login
```
when finish login, setup doppler project by
```bash
doppler setup
```
if it error for fetch projects that show
```bash
Unable to fetch projects
Doppler Error: Invalid Auth token
```
reset doppler by delete all local CLI configuration and auth tokens with
```bash
doppler configure reset 
```
than `doppler login` again

#### Method 2 (for user that has only access token)
```bash
# For access to specific environment permission
export DOPPLER_TOKEN=your-doppler-service-token

# For unset doppler token
unset DOPPLER_TOKEN
```
### Run the Project with Doppler
To run the project while securely injecting environment variables, use the following command:
```bash
doppler run -- pnpm dev
```
This ensures your environment variables are securely loaded from Doppler during local development.

### Configure Environment Variables

Make sure you have moved the secret key to Doppler and delete the .env file in your project and run the command with Doppler:
```bash
NEXT_PUBLIC_GOOGLE_MAP_API=your-google-map-api-key
NEXT_PUBLIC_SERVER_DOMAIN=your-server-domain
MORALIS_API_KEY=your-moralis-api-key
```
### Features
- Google Map Integration: Show interactive maps powered by Google Maps API.
- Crypto Wallet Balance Display: Fetch and display wallet balances with Moralis.
- Secure Environment Variables: Manage API keys and sensitive data using Doppler.

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).

