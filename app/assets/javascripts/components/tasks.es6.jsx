class Tasks extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      tasks: this.props.data,
      title: '',
      complete: false,
      priority: false
    }
  }

  setInputAsState(obj){
    console.log('tasks#setInputAsState')
    // set the state to the new input field values
    this.setState(obj)
  }

  saveStateToDatabase(){
    console.log('tasks#saveStateToDatabase')
    let task = {
      title: this.state.title,
      complete: this.state.complete,
      priority: this.state.priority
    }
    $.post('/tasks', {task: task})
     .then(function(data){
        this.addNewTaskToView(task)
     }.bind(this))
  }

  addNewTaskToView(new_task){
    console.log('tasks#addNewTaskToView')
    // Push the new appointment into the state's array
    let allTasks = this.state.tasks
    allTasks.push(new_task)

    this.setState({
      tasks: allTasks
    })//setState
  }

  render(){
    return (
      <React.Fragment>
        <div id="form" className="mb-5">
          <Form
            // task={this.props.new_task}
            title={this.state.title}
            complete={this.state.complete}
            priority={this.state.priority}
            user_id={this.state.user_id}
            onUserInput={this.setInputAsState.bind(this)}
            onFormSubmit={this.saveStateToDatabase.bind(this)}
          />
        </div>

        <div id="task-list">
          {this.state.tasks.map(function(task){
            return (
              <Task
                key={task.id}
                task={task}
              />
            )
          })}
        </div>
      </React.Fragment>
    )//return
  }//render
}
