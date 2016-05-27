/*eslint-disable */

export function toBoolean(val){
	return (typeof val !== 'string' ? val :
  		val === 'true' ? true :
  		val === 'false' ? false :
  		val === 'null' ? false :
  		val === 'undefined' ? false : val)
}
