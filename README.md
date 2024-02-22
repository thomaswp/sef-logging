
# Setup

1. Clone this project with `git clone --recursive https://github.com/thomaswp/sef-logging.git`
   * Note the `--recursive` flag: it is necessarily to clone submodules. If you forget you can use `git submodule update --init --recursive` after cloning.
   * This will take a moment, as it needs to clone Snap as well.
2. Install [Node.js](https://nodejs.org/en/download/)
3. Install dependencies: `npm install`
4. Create an sef-config file in `sef\snap\libraries\` based on `sef-config.example.js` pointing to "../../build/logging.js". This allows snap to find the extension that you are developing, which is currently bundled in `build/logging/js`.

# Running

1. Run `npm run dev`: This runs webpack on both this repo and on SEF (in case you need to make updates to SEF).
2. Run a webhost and go to `sef\snap`. Snap should now show logging in the console.

# Deploying

* The `sef/snap` folder should be a stand-alone, deployable, client-only webpage that can be hosted on any web server.
* If using only the `snap` folder, you should copy `build/your-module.js` to the `snap/libraries` folder and update `snap/libraries/sef-config.js` to point to that library (instead of the build directory in the root folder).
