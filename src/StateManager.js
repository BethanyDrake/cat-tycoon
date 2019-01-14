class StateManager{

  constructor(){
    this.callbacks = []
    this.updateState = this.updateState.bind(this)
  }

  updateState(){
    this.callbacks.forEach(callback=> callback(this))
  }

  register(callback){
    this.callbacks.push(callback)
  }

}
export default StateManager
