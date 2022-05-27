import axios from 'axios'
import { fetchMembers } from '~/hooks/ecosystem-conversion-utils'

jest.mock('axios')

describe('fetchMembers', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const members = {
    data: {
      MAIN: {
        1: {
          name: 'member1',
          tier: 'MAIN',
          tests_results: ''
        }
      }
    }
  }

  it('fetches members and formats correctly', async () => {
    const formattedMembers: {name: string, tier: string, testsResults: string}[] = [
      {
        name: 'member1',
        tier: 'MAIN',
        testsResults: ''
      }
    ];

    (axios.get as any).mockResolvedValueOnce(members)
    const result = await fetchMembers()

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(result).toEqual(formattedMembers)
  })

  it('throws error if api call fails', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    (axios.get as any).mockRejectedValueOnce('example error')
    await fetchMembers()

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(consoleSpy).toHaveBeenCalled()
    expect(consoleSpy).toHaveBeenCalledWith('example error')
  })
})
