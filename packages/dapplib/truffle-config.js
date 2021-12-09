require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth often coil grace infant forget gift'; 
let testAccounts = [
"0xd3bda236745545dabd659daf1375e0bcad38f3ce7e9b853c5823878e442c1f65",
"0xde8fd1c6a920063352dc713a8d99fcc76a046ffad3dda57a17f67edcf8c2d006",
"0x09b7b0061ad27f188e9f98ddee22ccee4687ff0bd8d023b0c7a20cf6c06d17e6",
"0x44303035e7a9c779e42369318f4980f00d1a13b25b60f3d5083304c21e861965",
"0x1a9863a7cb2de6981d7ad1b1173fabaf40ae7788dc77ea2c820d30643a850508",
"0xdd4fd58966efbef006d5f71ce88b949b03d00b4c453138ac892e2ebc826f0e99",
"0x0800bf4d124810693ec8a7df23269d90aa396939ca79eb32b289db8d915a927b",
"0x8a00b6e9594315425706ffc82cf7a9767aea1e8c212ea4ddbe993d078d2a86e4",
"0xe7f9e6b2025f9d5730db3438e97310dd7ff3ae51b0d68f96fd42523de5e26a3a",
"0x0f50defc67e528341d29de3d19568bf59a92e0ef0faedfd5e7fd4887f10e5575"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

