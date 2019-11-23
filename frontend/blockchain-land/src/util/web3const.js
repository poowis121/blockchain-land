export const ABI = [
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "RID",
                    "type": "uint64"
                }
            ],
            "name": "acceptRequest",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "encryptedData",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "docHash",
                    "type": "string"
                }
            ],
            "name": "sendRequest",
            "outputs": [
                {
                    "internalType": "uint64",
                    "name": "",
                    "type": "uint64"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "checkContractBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "RID",
                    "type": "uint64"
                },
                {
                    "internalType": "string",
                    "name": "toSet",
                    "type": "string"
                }
            ],
            "name": "setHash",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "requests",
            "outputs": [
                {
                    "internalType": "uint64",
                    "name": "RID",
                    "type": "uint64"
                },
                {
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "approval",
                    "type": "bool"
                },
                {
                    "internalType": "address",
                    "name": "companyAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "encryptedData",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "docHash",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isLD",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "RID",
                    "type": "uint64"
                }
            ],
            "name": "rejectRequest",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "RID",
                    "type": "uint64"
                }
            ],
            "name": "checkRequest",
            "outputs": [
                {
                    "internalType": "uint64",
                    "name": "",
                    "type": "uint64"
                },
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "RID",
                    "type": "uint64"
                }
            ],
            "name": "RequestSent",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "RID",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approval",
                    "type": "bool"
                }
            ],
            "name": "DecisionOnRequest",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        }
    ]
;
export const CONTRACTADDRESSOLD = "0x09D5Ba44Ef758D17bf74fd44F178879a1A0b4211"
export const CONTRACTADDRESS = "0x010ACdFCaaE7B16B61cA15188D18afCBc27E5fa5"
export const HTTPPROVIDER = 'https://rinkeby.infura.io/v3/be6ca8f2fa9e482f9a2e45127499434f';
export const BYTECODE = "60806040523480156200001157600080fd5b50620000226200012c60201b60201c565b600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000726200012c60201b60201c565b600760086101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061753060058190555060646006819055506000600760006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555062000126600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1664e8d4a510006200013460201b60201c565b620003e9565b600033905090565b620001446200036560201b60201c565b6200019b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603681526020018062002fb76036913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200023f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6200025b81600454620003cc60201b620024081790919060201c565b600481905550620002b9816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054620003cc60201b620024081790919060201c565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16620003b06200012c60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614905090565b600080828401905083811015620003df57fe5b8091505092915050565b612bbe80620003f96000396000f3fe6080604052600436106100f35760003560e01c806370a082311161008a578063a9059cbb11610059578063a9059cbb146107e0578063c8c7c11614610853578063d783c3ff1461088b578063dd62ed3e14610a19576100f3565b806370a082311461055557806381d12c58146105ba5780639df3bbb91461073e578063a457c2d71461076d576100f3565b806323b872dd116100c657806323b872dd1461034857806339509351146103db57806350312c9e1461044e57806356c7642d14610479576100f3565b806303871b4c146100f85780630413948514610130578063095ea7b3146102aa57806318160ddd1461031d575b600080fd5b61012e6004803603602081101561010e57600080fd5b81019080803567ffffffffffffffff169060200190929190505050610a9e565b005b6102806004803603604081101561014657600080fd5b810190808035906020019064010000000081111561016357600080fd5b82018360208201111561017557600080fd5b8035906020019184600183028401116401000000008311171561019757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156101fa57600080fd5b82018360208201111561020c57600080fd5b8035906020019184600183028401116401000000008311171561022e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610d05565b604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390f35b3480156102b657600080fd5b50610303600480360360408110156102cd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061112f565b604051808215151515815260200191505060405180910390f35b34801561032957600080fd5b5061033261114d565b6040518082815260200191505060405180910390f35b34801561035457600080fd5b506103c16004803603606081101561036b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611157565b604051808215151515815260200191505060405180910390f35b3480156103e757600080fd5b50610434600480360360408110156103fe57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112bc565b604051808215151515815260200191505060405180910390f35b34801561045a57600080fd5b5061046361136f565b6040518082815260200191505060405180910390f35b34801561048557600080fd5b506105536004803603604081101561049c57600080fd5b81019080803567ffffffffffffffff169060200190929190803590602001906401000000008111156104cd57600080fd5b8201836020820111156104df57600080fd5b8035906020019184600183028401116401000000008311171561050157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061138e565b005b34801561056157600080fd5b506105a46004803603602081101561057857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061147b565b6040518082815260200191505060405180910390f35b3480156105c657600080fd5b506105f3600480360360208110156105dd57600080fd5b81019080803590602001909291905050506114c3565b604051808767ffffffffffffffff1667ffffffffffffffff16815260200186151515158152602001851515151581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561069757808201518184015260208101905061067c565b50505050905090810190601f1680156106c45780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156106fd5780820151818401526020810190506106e2565b50505050905090810190601f16801561072a5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b34801561074a57600080fd5b5061075361168a565b604051808215151515815260200191505060405180910390f35b34801561077957600080fd5b506107c66004803603604081101561079057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506116e9565b604051808215151515815260200191505060405180910390f35b3480156107ec57600080fd5b506108396004803603604081101561080357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061179c565b604051808215151515815260200191505060405180910390f35b6108896004803603602081101561086957600080fd5b81019080803567ffffffffffffffff1690602001909291905050506117ba565b005b34801561089757600080fd5b506108ce600480360360208110156108ae57600080fd5b81019080803567ffffffffffffffff169060200190929190505050611a47565b604051808767ffffffffffffffff1667ffffffffffffffff16815260200186151515158152602001851515151581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610972578082015181840152602081019050610957565b50505050905090810190601f16801561099f5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156109d85780820151818401526020810190506109bd565b50505050905090810190601f168015610a055780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b348015610a2557600080fd5b50610a8860048036036040811015610a3c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a93565b6040518082815260200191505060405180910390f35b610aa661168a565b610afb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180612b546036913960400191505060405180910390fd5b600554610b0661136f565b1015610b5d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612adf602c913960400191505060405180910390fd5b60001515610b6a82611b1a565b151514610bdf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f5265717565737420686173206265656e20646563696465642e0000000000000081525060200191505060405180910390fd5b610bea816001611bf8565b610bf5816001611d38565b610c2430600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600654611e78565b600760089054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6005549081150290604051600060405180830381858888f19350505050158015610c8e573d6000803e3d6000fd5b507f18811a893ff0e59cd03ef284cebbafdc8bd21cc495b3601e78574761fc122cbe81610cba83611b1a565b610cc384612114565b604051808467ffffffffffffffff1667ffffffffffffffff1681526020018315151515815260200182151515158152602001935050505060405180910390a150565b6000600654610d1a610d156121f2565b61147b565b1015610d71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612abe6021913960400191505060405180910390fd5b6005543414610de8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f54686520616d6f756e74206f662077656920697320696e636f72726563742e0081525060200191505060405180910390fd5b610df43060065461179c565b50610dfd6121f2565b60026000600760009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060086040518060c00160405280600760009054906101000a900467ffffffffffffffff1667ffffffffffffffff168152602001600015158152602001600015158152602001610ec56121f2565b73ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152509080600181540180825580915050906001820390600052602060002090600302016000909192909190915060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548160ff02191690831515021790555060408201518160000160096101000a81548160ff021916908315150217905550606082015181600001600a6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816001019080519060200190610fe7929190612924565b5060a0820151816002019080519060200190611004929190612924565b50505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166110496121f2565b73ffffffffffffffffffffffffffffffffffffffff167f7256841227e30601da1d8a268284d2b702ae3fb121beb0d1077319bbb546af06600654600760009054906101000a900467ffffffffffffffff16604051808381526020018267ffffffffffffffff1667ffffffffffffffff1681526020019250505060405180910390a36001600760008282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506001600760009054906101000a900467ffffffffffffffff1603905092915050565b600061114361113c6121f2565b84846121fa565b6001905092915050565b6000600454905090565b60006111616121f2565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806111aa57506111a6846111a16121f2565b611a93565b8211155b6111ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612a8f602f913960400191505060405180910390fd5b61120a848484611e78565b6112b1846112166121f2565b6112ac85600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006112636121f2565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546123f190919063ffffffff16565b6121fa565b600190509392505050565b60006113656112c96121f2565b8461136085600160006112da6121f2565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461240890919063ffffffff16565b6121fa565b6001905092915050565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b61139661168a565b6113eb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180612b546036913960400191505060405180910390fd5b600115156113f883612114565b15151461146d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f546869732072657175657374206973206e6f7420617070726f7665642e00000081525060200191505060405180910390fd5b6114778282612424565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600881815481106114d057fe5b90600052602060002090600302016000915090508060000160009054906101000a900467ffffffffffffffff16908060000160089054906101000a900460ff16908060000160099054906101000a900460ff169080600001600a9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115e25780601f106115b7576101008083540402835291602001916115e2565b820191906000526020600020905b8154815290600101906020018083116115c557829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116805780601f1061165557610100808354040283529160200191611680565b820191906000526020600020905b81548152906001019060200180831161166357829003601f168201915b5050505050905086565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166116cd6121f2565b73ffffffffffffffffffffffffffffffffffffffff1614905090565b60006117926116f66121f2565b8461178d85600160006117076121f2565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546123f190919063ffffffff16565b6121fa565b6001905092915050565b60006117b06117a96121f2565b8484611e78565b6001905092915050565b6117c261168a565b611817576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180612b546036913960400191505060405180910390fd5b60055461182261136f565b1015611879576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612adf602c913960400191505060405180910390fd5b6000151561188682611b1a565b1515146118fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f5265717565737420686173206265656e20646563696465642e0000000000000081525060200191505060405180910390fd5b611906816001611bf8565b611911816000611d38565b6119663060088367ffffffffffffffff168154811061192c57fe5b9060005260206000209060030201600001600a9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600654611e78565b600760089054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6005549081150290604051600060405180830381858888f193505050501580156119d0573d6000803e3d6000fd5b507f18811a893ff0e59cd03ef284cebbafdc8bd21cc495b3601e78574761fc122cbe816119fc83611b1a565b611a0584612114565b604051808467ffffffffffffffff1667ffffffffffffffff1681526020018315151515815260200182151515158152602001935050505060405180910390a150565b60008060008060608086611a5a88611b1a565b611a6389612114565b611a6c8a612561565b611a758b612652565b611a7e8c6127bb565b95509550955095509550955091939550919395565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600760009054906101000a900467ffffffffffffffff1667ffffffffffffffff168267ffffffffffffffff1610611bbb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f75722052494420697320696e636f72726563742e0000000000000000000081525060200191505060405180910390fd5b60088267ffffffffffffffff1681548110611bd257fe5b906000526020600020906003020160000160089054906101000a900460ff169050919050565b611c0061168a565b611c55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180612b546036913960400191505060405180910390fd5b600760009054906101000a900467ffffffffffffffff1667ffffffffffffffff168267ffffffffffffffff1610611cf4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f75722052494420697320696e636f72726563742e0000000000000000000081525060200191505060405180910390fd5b8060088367ffffffffffffffff1681548110611d0c57fe5b906000526020600020906003020160000160086101000a81548160ff0219169083151502179055505050565b611d4061168a565b611d95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180612b546036913960400191505060405180910390fd5b600760009054906101000a900467ffffffffffffffff1667ffffffffffffffff168267ffffffffffffffff1610611e34576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f75722052494420697320696e636f72726563742e0000000000000000000081525060200191505060405180910390fd5b8060088367ffffffffffffffff1681548110611e4c57fe5b906000526020600020906003020160000160096101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611efe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180612b0b6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611f84576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180612a4a6023913960400191505060405180910390fd5b611fd5816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546123f190919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612068816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461240890919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000600760009054906101000a900467ffffffffffffffff1667ffffffffffffffff168267ffffffffffffffff16106121b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f75722052494420697320696e636f72726563742e0000000000000000000081525060200191505060405180910390fd5b60088267ffffffffffffffff16815481106121cc57fe5b906000526020600020906003020160000160099054906101000a900460ff169050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612280576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612b306024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612306576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612a6d6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b6000828211156123fd57fe5b818303905092915050565b60008082840190508381101561241a57fe5b8091505092915050565b61242c61168a565b612481576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180612b546036913960400191505060405180910390fd5b600760009054906101000a900467ffffffffffffffff1667ffffffffffffffff168267ffffffffffffffff1610612520576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f75722052494420697320696e636f72726563742e0000000000000000000081525060200191505060405180910390fd5b8060088367ffffffffffffffff168154811061253857fe5b9060005260206000209060030201600201908051906020019061255c9291906129a4565b505050565b6000600760009054906101000a900467ffffffffffffffff1667ffffffffffffffff168267ffffffffffffffff1610612602576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f75722052494420697320696e636f72726563742e0000000000000000000081525060200191505060405180910390fd5b60088267ffffffffffffffff168154811061261957fe5b9060005260206000209060030201600001600a9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6060600760009054906101000a900467ffffffffffffffff1667ffffffffffffffff168267ffffffffffffffff16106126f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f75722052494420697320696e636f72726563742e0000000000000000000081525060200191505060405180910390fd5b60088267ffffffffffffffff168154811061270a57fe5b90600052602060002090600302016001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156127af5780601f10612784576101008083540402835291602001916127af565b820191906000526020600020905b81548152906001019060200180831161279257829003601f168201915b50505050509050919050565b6060600760009054906101000a900467ffffffffffffffff1667ffffffffffffffff168267ffffffffffffffff161061285c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f75722052494420697320696e636f72726563742e0000000000000000000081525060200191505060405180910390fd5b60088267ffffffffffffffff168154811061287357fe5b90600052602060002090600302016002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156129185780601f106128ed57610100808354040283529160200191612918565b820191906000526020600020905b8154815290600101906020018083116128fb57829003601f168201915b50505050509050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061296557805160ff1916838001178555612993565b82800160010185558215612993579182015b82811115612992578251825591602001919060010190612977565b5b5090506129a09190612a24565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106129e557805160ff1916838001178555612a13565b82800160010185558215612a13579182015b82811115612a125782518255916020019190600101906129f7565b5b509050612a209190612a24565b5090565b612a4691905b80821115612a42576000816000905550600101612a2a565b5090565b9056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f2061646472657373596f7572207472616e73616374696f6e2065786365656473207468652073656e646572277320616c6c6f77616e63654e6f7420656e6f75676820746f6b656e7320696e20796f7572206163636f756e744e6f7420656e6f75676820776569206f6e207468697320636f6e747261637420746f20706179206261636b2e45524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573734f6e6c79204c616e64204465706172746d656e74206f66204c616e6420686173207065726d697373696f6e20746f20646f2074686973a265627a7a72315820c5e2a33d924140ddf9409075c983a31b3b08780397694eeaa1b43917fb0cec5164736f6c634300050b00324f6e6c79204c616e64204465706172746d656e74206f66204c616e6420686173207065726d697373696f6e20746f20646f2074686973";
