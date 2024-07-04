import { generateAddressEVM } from "fk-evm-address-generator";

function generateNiceAddressEVM(postfix) {
    let result = generateAddressEVM("nice");
    return result;
}

export { generateNiceAddressEVM };
