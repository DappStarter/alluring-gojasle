require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remain unknown heavy argue swallow skate'; 
let testAccounts = [
"0xe6888eec8a4d4c71f8e9ca619e719c66cdd9741ebae52fc1e32cbff7fb8b091b",
"0x268dd4990731c9835bb85fb2794b3f55522a20a9add9ca466587e5574cca9683",
"0x8c249d3ab8aae7d1db30001184f5ec1ce5c9dec758a64c21366a9d4bb88e5ced",
"0xa4e01fc48b1d809b334ccfc37b8a380a745df20f1ddcf8e70115d3a09f7fe184",
"0x22cbea18b1df120ba80737b67e0321dd8bfde8a69e320d0ae22e9d2649b8a2d4",
"0xef4ba289aec05852a487610cc6152383a00f9a356e0867948bb196ddaa531dc7",
"0xf08124234f20f1ae1e85e2375beaf58add8605d6441dbf0b612c45c719ec9d37",
"0x05b603cfb47243f77cb11416bdf8da846730fa56c45ed89e417748c1ef0f670b",
"0x52e87271c0e370642d52469f99045873e155056b78936137bde6770c051671bf",
"0xeb49e9fa1f0e93abc89eed465311ef9bac70e6a269466bfd055053b251b54847"
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
            version: '^0.5.11'
        }
    }
};
