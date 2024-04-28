import {backend} from './en'
import {transformNestedObject} from './util'

/**
 * Take this nested object, keep the shape, but make the final keys the dot delimited string
 * path of the nested key
 */
const languageMap = transformNestedObject((key) => key, backend)

export default languageMap
