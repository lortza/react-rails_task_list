class Tasks extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div id="form" className="mb-5">
          <Form task={this.props.new_task}/>
        </div>
        <div id="task-list">
          {this.props.tasks.map(function(task){
            return <Task key={task.id} task={task}/>
          })}
        </div>
      </React.Fragment>
    )//return
  }//render
}
