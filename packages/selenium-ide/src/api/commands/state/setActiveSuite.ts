import browserHandler from 'browser/api/classes/Handler'
import mainHandler, { passthrough } from 'main/api/classes/Handler'
import { Mutator } from 'api/types'
import loadingID from 'api/constants/loadingID'
import { hasID } from 'api/helpers/hasID'

export type Shape = (suiteID: string) => Promise<void>

export const mutator: Mutator<Shape> = (
  session,
  { params: [activeSuiteID] }
) => {
  const activeTestID =
    session.project.suites.find(hasID(activeSuiteID))?.tests?.[0] ??
    loadingID
  return {
    ...session,
    state: {
      ...session.state,
      editor: {
        ...session.state.editor,
        selectedCommandIndexes: [0],
      },
      activeSuiteID,
      activeTestID,
    },
  }
}

export const browser = browserHandler<Shape>()

export const main = mainHandler<Shape>(passthrough)
