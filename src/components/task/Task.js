import React from 'react'
import TaskSection from './TaskSection'
import Tags from './../widgets/Tags'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const EditButton = withRouter(({ history, linkRef }) => (
  <button
    type="button"
    className="btn primary"
    onClick={() => {
      history.push(linkRef)
    }}
  >
    Edit Task
  </button>
))

const Task = ({ removeHandler, pinHandler, task }) => {
  const linkRef = 'task/' + task.id
  return (
    <div className="task">
      <button
        className="btn danger remove-task"
        onClick={removeHandler}
        data-html2canvas-ignore="true"
      >
        Remove
      </button>
      <h2>
        {task.isPinned && (
          <i data-html2canvas-ignore="true" className="pin"></i>
        )}
        {task.link && (
          <a href={task.link} target="_blank" rel="noopener noreferrer">
            {task.title}
          </a>
        )}
        {!task.link && task.title}
      </h2>
      <TaskSection label="Description" content={task.description} />
      <TaskSection label="The Plan" content={task.plan} />
      <div className="actions-section" data-html2canvas-ignore="true">
        <EditButton linkRef={linkRef} />
        <button
          className={`btn highlight ${
            task.isPinned ? 'highlight--active' : ''
          }`}
          onClick={pinHandler}
        >
          {task.isPinned ? 'Unpin' : 'Pin'} Task
        </button>
        <Tags tags={task.tags}></Tags>
      </div>
    </div>
  )
}

Task.propTypes = {
  pinHandler: PropTypes.func,
  removeHandler: PropTypes.func,
  task: PropTypes.object
}

export default Task
