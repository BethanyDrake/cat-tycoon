class StateManager{

  constructor(){
    this.listeners = []
    this.updateState = this.updateState.bind(this)
  }

  updateState(){
    this.listeners.forEach(listener=> listener.updateState(this))
  }

}
export default StateManager
