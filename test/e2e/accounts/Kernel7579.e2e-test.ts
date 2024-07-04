import { getAccount } from 'src/account'
import { getPublicClient, getTestClient } from 'test/utils/userOps/clients'
import { cleanUpEnvironment, setupEnvironment } from '../infra'
import {
  testOwnableValidator,
  testOwnableExecutor,
  testAutoSavingsExecutor,
  testDeadmanSwitchValidator,
  testSocialRecoveryValidator,
  testRegistryHook,
  testMultiFactorValidator,
  testColdStorageHook,
  testScheduledOrdersExecutor,
  testScheduledTransfersExecutor,
  testHookMultiPlexer,
  testWebauthnValidator,
} from '../modules'

describe('Test Kernel-7579 account', () => {
  const testClient = getTestClient()
  const publicClient = getPublicClient()
  const KERNEL_ACCOUNT_ADDRESS = '0xee0cbe5e9c49a2cc31881ab9c26e662be68e85dd'
  const account = getAccount({
    address: KERNEL_ACCOUNT_ADDRESS,
    type: 'kernel',
  })

  beforeAll(async () => {
    await setupEnvironment({
      account,
      publicClient: publicClient,
      testClient,
    })
  }, 50000)

  afterAll(async () => {
    await cleanUpEnvironment({
      account,
      client: publicClient,
    })
  }, 50000)

  testOwnableValidator({
    account,
    publicClient,
    testClient,
  })

  testWebauthnValidator({
    account,
    publicClient,
    testClient,
  })

  testOwnableExecutor({
    account,
    publicClient,
    testClient,
  })

  testAutoSavingsExecutor({
    account,
    publicClient,
    testClient,
  })

  testDeadmanSwitchValidator({
    account,
    publicClient,
    testClient,
  })

  testSocialRecoveryValidator({
    account,
    publicClient,
    testClient,
  })

  testRegistryHook({
    account,
    publicClient,
    testClient,
  })

  testMultiFactorValidator({
    account,
    publicClient,
    testClient,
  })

  testColdStorageHook({
    account,
    publicClient,
    testClient,
  })

  testScheduledOrdersExecutor({
    account,
    publicClient,
    testClient,
  })

  testScheduledTransfersExecutor({
    account,
    publicClient,
    testClient,
  })

  testHookMultiPlexer({
    account,
    publicClient,
    testClient,
  })
})
