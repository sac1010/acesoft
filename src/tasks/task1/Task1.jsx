import React from 'react'
import UseFetch from '../../utils/UseFetch'
import Table from '../../components/Table'

const Task1 = () => {
    const {data, loading, error, onRefresh} = UseFetch('https://jsonplaceholder.typicode.com/posts')
    console.log(data)
  return (
    <div className='max-w-3xl mx-auto'>
        <div className='w-full text-end'>
            <button onClick={onRefresh} className='bg-blue-800 px-4 py-2 text-white rounded-3xl'>Reset</button>
        </div>
        {error && <div>Error fetching the data</div>}
        {loading ? <div className='w-full h-screen flex items-center justify-center'>Loading...</div>: <Table data={data}/>}
    </div>
  )
}

export default Task1