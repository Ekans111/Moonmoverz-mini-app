import { NightlyConnectAptosAdapter } from '@nightlylabs/wallet-selector-aptos'

let _adapter: NightlyConnectAptosAdapter | undefined
export const getAdapter = async () => {
  // console.log("Adapter is ", _adapter)
  // if (_adapter) return _adapter
  _adapter = await NightlyConnectAptosAdapter.build({
    appMetadata: {
      name: 'Aptos Template',
      description: 'Aptos Template',
      icon: 'https://docs.nightly.app/img/logo.png',
    },
  })
  console.log("Aptos Template", _adapter)
  return _adapter
}
