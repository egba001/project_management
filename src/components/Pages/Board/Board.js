import { useState, useEffect } from 'react';
import Lane from '../../Lane/Lane';

function Board () {
    // Setup useState Hooks to update state when necessary
    
    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        async function fetchData() {
            try {
                const tasks = await fetch(
                    'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks',
                );
                const result = await tasks.json();

                if (result) {
                    setTasks(result);
                    setLoading(false);
                }
            } catch(e) {
                setLoading(false);
                setError(e.message);
            }

            fetchData();
        };
    }, [])

    return (
        <div className=''>
            {lanes.map((lane) => {
                <Lane key={lane.id} title={lane.title} loading={loading} error={error} tasks={tasks.filter((task) => task.lane === lane.id)} />
            })}
        </div>
    )
}

export default Board;