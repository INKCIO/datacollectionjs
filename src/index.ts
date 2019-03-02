import rpc from 'bitcoin-rpc-promise';

async function run() {
    let bitcoind = new rpc('http://alice:alice@10.168.3.131:8332');
    let height = await bitcoind.call('getblockcount');
    console.log(height);

    let hash = await bitcoind.call('getblockhash', height);
    console.log(hash);

    let block = await bitcoind.call('getblock', hash);
    let txid = block.tx[0];
    console.log(block);
    console.log(txid);

    let tx = await bitcoind.call('getrawtransaction', txid);
    console.log(tx);
}

run();