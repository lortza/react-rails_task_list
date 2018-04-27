class Task extends React.Component {
  constructor(props){
    super(props)
    this.task = this.props.task
  }

  displayCheck(attr){
    if(attr === true){
      return <i className="mr-2 fas fa-check-square"></i>
    } else {
      return <i className="mr-2 far fa-square"></i>
    }
  }

  displayPriority(attr){
    if(attr === true){
      return <i className="mr-2 fas fa-exclamation-circle"></i>
    } else {
      return <i className="mr-2 far fa-exclamation-circle"></i>
    }
  }

  render () {
    return (
      <div className="card card-body mb-3">
        <p>{this.displayCheck(this.task.complete)} {this.task.title}
          <span className="right">
          {this.displayPriority(this.task.priority)}
          <a href={`/tasks/${this.task.id}/edit/`}><i className='far fa-edit mr-2'></i></a>
          <a href={`/tasks/${this.task.id}/`} data-method='delete'><i className='fa fa-times-circle'></i></a>
          </span>
          </p>
      </div>
    )
  }
}
