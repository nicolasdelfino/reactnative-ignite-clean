import Types from './Types'

const example = (value) =>
  ({ type: Types.SOMETHING, value })

const startup = () => ({ type: Types.STARTUP })

/**
 Makes available all the action creators we've created.
 */
export default {
  startup,
  example
}
