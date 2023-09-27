
# Setup

1. Install [Node.js](https://nodejs.org/en/download/)
2. Initialize submodules: `git submodule update --init --recursive`
3. Install dependencies: `npm install`
4. Create an sef-config file in `sef\snap\libraries\` based on `sef-config.example.js` pointing to "../../build/logging.js".

# Running

1. `npm run dev`: This runs webpack on both this repo and on SEF (in case you need to make updates to SEF).
2. Run a webhost and go to `sef\snap`. Snap should now show logging in the console.