
## Features

- Edge-Native
- Static Site Generation
- i18n Native
- Next.js App Router
- React Compiler (Always optimizes memoization for production)
- Solana Wallet Connection
- Solana Web3.js
- Solana Blinks Actions Interface
- Green Coding

## Built with

- [Deno](https://deno.com/)
- [Next.js](https://nextjs.org/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [React Compiler](https://react.dev/learn/react-compiler)
- [shadcn/ui](https://ui.shadcn.com/)
- [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap)
- [Solana Web3.js](https://github.com/solana-labs/solana-web3.js/)
- [Solana Wallet Adapter](https://github.com/anza-xyz/wallet-adapter)
- [Solana Blinks Actions Interface](https://github.com/dialectlabs/blinks)

## Getting Started

First, run the development server:

```bash
deno i
deno task dev
```

Open [http://localhost:4242](http://localhost:4242) with your browser to see the result.

### Solana RPC Endpoint

It's recommended to set your own Solana RPC endpoint, as the default mainnet endpoint is few times limited, which could lead to 429 errors (too many requests).

No worries, you can get free credit for a Solana RPC endpoint at ERPC - Enhanced Solana RPC.

ERPC: https://erpc.validators.solutions

Setting Example (.env.local):

```
NEXT_PUBLIC_SOLANA_ENDPOINT=https://rpc.validators.solutions/rpc?api-key=<your-api-key>
```

### GitHub Actions Deployment

If you're using GitHub Actions for auto-deployment, don't forget to set your repository secrets.

For example:

- `NEXT_PUBLIC_SOLANA_ENDPOINT`: Your Solana RPC endpoint
- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID


