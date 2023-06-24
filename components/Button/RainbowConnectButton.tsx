import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { WalletButton } from '../WalletBar'

export function RainbowConnectButton({ children }: any) {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                return (
                    <div
                        {...(!mounted && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!mounted || !account || !chain) {
                                return (
                                    <WalletButton onClick={openConnectModal} >
                                        Connect Wallet
                                    </WalletButton>
                                );
                            }

                            if (chain.unsupported) {
                                return (
                                    <WalletButton onClick={openChainModal} >
                                        Wrong network
                                    </WalletButton>
                                );
                            }

                            return (
                                <div style={{ display: 'flex', gap: 12 }}>
                                    <WalletButton
                                        onClick={openChainModal}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 999,
                                                    overflow: 'hidden',
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <Image
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src={chain.iconUrl}
                                                        width={12}
                                                        height={12}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {chain.name}
                                    </WalletButton>

                                    <WalletButton onClick={openAccountModal} >
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
                                    </WalletButton>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    )
}