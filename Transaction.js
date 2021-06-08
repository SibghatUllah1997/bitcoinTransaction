// let bitcoin = require('bitcoinjs-lib');
// const axios = require('axios').default;
const bitcore = require('bitcore-lib')
var Insight = require('bitcore-explorers').Insight;
var insight = new Insight("testnet");



const privateKeyWIF = 'cNqLhodZfUPCGiBHccyYJTju4N2hK4Z5KtUeMuGy6BhPKmNNPyw6';
var privateKey = bitcore.PrivateKey.fromWIF(privateKeyWIF)
var address = privateKey.toAddress();
console.log("address----->", `${address}`)

const privateKeyWIF2 = 'cRRFguHcsvgvYMt2GhdbXSVcGS1sRvSiaSMDJQ3Jv6E9SHEiGiDN';
var privateKey2 = bitcore.PrivateKey.fromWIF(privateKeyWIF2)
var address2 = privateKey2.toAddress();
console.log("address----->", `${address2}`);

// var shell= {} ;



//  insight.address(address,(error, result)=>{shell.address = result})
// console.log(result)

// insight.getUnspentUtxos(address ,(err, result) => {shell.utxo = result})
// console.log(shell.utxo)

// insight.getUnspentUtxos(address , function(err, utxos){

//     if(err){
//         console.log("err---------------",err)
//     }
//     else{
//         console.log(utxos)
//     }
// })
// insight.getUnspentUtxos(`${address}`, function(err, utxos) {
//     if (err) {
//       // Handle errors...
//       console.log("",err)
//     } else {
//       // Maybe use the UTXOs to create a transaction
//       console.log(utxos)
//     }
//   });


insight.getUnspentUtxos(`${address}`, function(err, utxos) {
    if(err){

        console.log("address",`${address}`)
        console.log("error-------------------------------",err)

    }
    else{
        console.log(utxos)
//         // var tx = bitcore.Transaction();
//         // tx.from(utxos);
//         // tx.to(address2 , 1000);
//         // tx.change(address);
//         // tx.fee(50000);
//         // tx.sign(privateKey)

//         // console.log('transaction');
//         // console.log(tx.toObject());
//         // tx.serialize();
//         // // tx.serialize();
//         // insight.broadcast(tx, function(err, returnedTxId){

//         //     if(err){
//         //         console.log(err)
//         //     }else{
//         //         console.log('transaction successful', +returnedTxId)
//         //     }
//         // });

    }
});
