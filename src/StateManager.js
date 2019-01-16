class StateManager{
  constructor(initialValue){
    this.callbacks = []
    this.updateState = this.updateState.bind(this)
  }

  updateState(data){
    this.callbacks.forEach(callback=> callback(data))
  }

  register(callback){
    this.callbacks.push(callback)
  }

}
export default StateManager
