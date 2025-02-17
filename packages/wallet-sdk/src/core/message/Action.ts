import { AppMetadata } from ':core/type/ProviderInterface';

export enum SupportedEthereumMethods {
  EthRequestAccounts = 'eth_requestAccounts',
  // Sign Transaction
  EthSendTransaction = 'eth_sendTransaction',
  EthSignTransaction = 'eth_signTransaction',
  EthSendRawTransaction = 'eth_sendRawTransaction',
  // Sign Message
  EthSign = 'eth_sign',
  PersonalSign = 'personal_sign',
  EthSignTypedDataV1 = 'eth_signTypedData_v1',
  EthSignTypedDataV3 = 'eth_signTypedData_v3',
  EthSignTypedDataV4 = 'eth_signTypedData_v4',
  // Wallet
  WalletSwitchEthereumChain = 'wallet_switchEthereumChain',
  WalletAddEthereumChain = 'wallet_addEthereumChain',
  WalletGetCapabilities = 'wallet_getCapabilities',
  WalletSendCalls = 'wallet_sendCalls',
}

export type RequestAccountsAction = {
  method: SupportedEthereumMethods.EthRequestAccounts;
  params: AppMetadata;
};

export type SignAction = {
  method: SupportedEthereumMethods.EthSign;
  params: {
    address: string;
    message: string;
  };
};

export type PersonalSignAction = {
  method: SupportedEthereumMethods.PersonalSign;
  params: {
    address: string;
    message: string;
  };
};

export type SignTypedDataV1Action = {
  method: SupportedEthereumMethods.EthSignTypedDataV1;
  params: {
    address: string;
    message: string;
  };
};

export type SignTypedDataV3Action = {
  method: SupportedEthereumMethods.EthSignTypedDataV3;
  params: {
    address: string;
    message: string;
  };
};

export type SignTypedDataV4Action = {
  method: SupportedEthereumMethods.EthSignTypedDataV4;
  params: {
    address: string;
    message: string;
  };
};

export type SignTransactionAction = {
  method: SupportedEthereumMethods.EthSignTransaction;
  params: {
    from: string;
    to: string | null;
    value: string;
    data: string;
    nonce: number;
    gasPriceInWei: string | null;
    maxFeePerGas: string | null;
    maxPriorityFeePerGas: string | null;
    gasLimit: string | null;
  };
};

export type SendTransactionAction = {
  method: SupportedEthereumMethods.EthSendTransaction;
  params: {
    from: string;
    to: string | null;
    value: string;
    data: string;
    nonce: number;
    gasPriceInWei: string | null;
    maxFeePerGas: string | null;
    maxPriorityFeePerGas: string | null;
    gasLimit: string | null;
  };
};

export type SendRawTransactionAction = {
  method: SupportedEthereumMethods.EthSendRawTransaction;
  params: {
    transaction: string;
  };
};

export type SwitchEthereumChainAction = {
  method: SupportedEthereumMethods.WalletSwitchEthereumChain;
  params: [
    {
      chainId: `0x${string}`; // Hex chain id
    },
  ];
};

export type AddEthereumChainAction = {
  method: SupportedEthereumMethods.WalletAddEthereumChain;
  params: {
    chainId: string;
    blockExplorerUrls?: string[];
    chainName?: string;
    iconUrls?: string[];
    nativeCurrency?: {
      name: string;
      symbol: string;
      decimals: number;
    };
    rpcUrls?: string[];
  };
};

export type GetCapabilitiesAction = {
  method: SupportedEthereumMethods.WalletGetCapabilities;
};

type WalletSendCallsParams = {
  version: string;
  chainId: `0x${string}`; // Hex chain id
  from: `0x${string}`;
  calls: {
    to: `0x${string}`;
    data: `0x${string}`;
    value: `0x${string}`; // Hex value
  }[];
  capabilities: Record<string, unknown>;
};

export type WalletSendCallsAction = {
  method: SupportedEthereumMethods.WalletSendCalls;
  params: WalletSendCallsParams;
};

export type AllAction =
  | RequestAccountsAction
  | SignAction
  | PersonalSignAction
  | SignTypedDataV1Action
  | SignTypedDataV3Action
  | SignTypedDataV4Action
  | SignTransactionAction
  | SendTransactionAction
  | SendRawTransactionAction
  | SwitchEthereumChainAction
  | AddEthereumChainAction
  | GetCapabilitiesAction
  | WalletSendCallsAction;

export type Action = {
  method: SupportedEthereumMethods;
  params: unknown; // json encoded params
};
