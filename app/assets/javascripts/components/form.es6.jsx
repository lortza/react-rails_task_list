class Form extends React.Component {

  passInputToParent(e) {
    console.log('form#passInputToParent')
    // Build the object that will be passed back to the parent
    const obj = {};
    obj[e.target.name] = e.target.value;
    // Call the function that will set the parent's state
    this.props.onUserInput(obj);
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('form#handleSubmit')
    this.props.onFormSubmit()

  }

  render () {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="col-sm-6">
              <label>Task</label>
              <input
                type='text'
                name='title'
                className='form-control'
                value={this.props.title}
                onChange={this.passInputToParent.bind(this)}
              />
            </div>

            <div className="col-sm-2">
              <label>Priority</label>
              <input
                type='checkbox'
                name='priority'
                value={this.props.priority}
                onChange={this.passInputToParent.bind(this)}
              />
            </div>

            <div className="col-sm-2">
              <label>Complete</label>
              <input
                type='checkbox'
                name='complete'
                value={this.props.complete}
                onChange={this.passInputToParent.bind(this)}
              />
            </div>

            <div className="col-sm-2 pt-4">
              <input type='submit' value='Submit' className='btn btn-sm btn-primary' />
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}


