import rpc from 'bitcoin-rpc-promise';

async function run() {
    let bitcoind = new rpc('http://alice:alice@10.168.3.131:8332');
    let result = await bitcoind.call('getblockcount');
    console.log(result);
}

run();