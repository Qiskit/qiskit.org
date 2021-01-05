import cloneDeep from 'lodash/cloneDeep'
import advocates from '~/store/advocates'
import events from '~/store/events'
import learningResources from '~/store/learning-resources'

const storeOptions = {
  modules: {
    advocates,
    events,
    'learning-resources': learningResources
  }
}

export default () => {
  const storeOptionsClone = cloneDeep(storeOptions)

  return storeOptionsClone
}
