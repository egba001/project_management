import Task from '../Task/Task';
import './Lane.css';

function Lane({ title, loading, error, tasks }) {
    // Set up a condition for rendering list of tasks. If the tasks are loading, set display to loading else display the tasks oon the screen
    return (
        <div className='Lane-wrapper'>
            <h2>{title}</h2>
            {loading || error ? (
                <span>{error ||'Loading...'}</span>
            ) : (
                tasks.map((task) => (
                    <Task key={task.id} id={task.id} title={task.title} body={task.body} />
                ))
            )}
        </div>
    )
}

export default Lane;