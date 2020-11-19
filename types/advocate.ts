import { AdvocatesWorldRegion } from '~/store/modules/advocates'

/**
 * Interface for a Qiskit advocate.
 */
export interface Advocate {
  city: string,
  country: string,
  image: string,
  location?: string,
  name: string,
  region: AdvocatesWorldRegion,
  slackId?: string
  slackUsername?: string
}
