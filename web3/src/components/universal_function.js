import { PublicKey, Connection, clusterApiUrl } from '@solana/web3.js';



//define a test prams
//mainnet-beta
const USING_NET = 'devnet';
//global params: SPL_Name_Service's programID
const SPL_Name_ServiceID = new PublicKey('namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX');
//root domain
const root_domain = ".sol";

/**
 * calculate the PDA of domain,nd query solana to confirm whether it has been registered
 * @params  {string} domian  --  Domain name to query
 * @returns {Promise<string>} -- state
 */
export async function check_domain_availability(domain) {
    const max_lenth = 15;
    console.log("ready to query:", domain);
    //check if 
    if( !(domain.length() <= max_lenth)|| !(domain.endWith(root_domain))){
        console.log("invalid domain format")
        return "invalid domain"
    }
    try {
        console.log("start try");
        //convert domian to buty array
        //TextEncoder()：Constructor for encoding a string into a byte array in Web API
        const domain_bytes = new TextEncoder().encode(domain);
        //calculate the PDA
        //await: Waiting for an asynchronous operation
        const [PDA, _] =  PublicKey.findProgramAddressSync([domain_bytes], SPL_Name_ServiceID);
        //create solana network connect
        const connection = new Connection(clusterApiUrl(USING_NET));
        //query
        const accountInfo = await connection.getAccountInfo(PDA);
        if (accountInfo === null){
            console.log("valid domain");
            return "valid";
        }else{
            console.log("invalid domain");
            return "invalid";
        }
    }catch(error){
        console.log("error happened:", error);
        return "error happened";
    }
}