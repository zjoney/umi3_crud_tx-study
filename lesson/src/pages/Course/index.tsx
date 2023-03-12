import React, { Fragment ,useCallback} from 'react'
import { useDispatch} from 'dva'
import About from '../About'

const Course = () => {
  const dispatch = useDispatch();
  const addDisptch = useCallback(() => dispatch({
      type: 'add'
    }),
    [dispatch],
  )
  return (
    <Fragment>
      课程 <br />
      <button onClick={addDisptch}>课程</button>
      <h3>-----------------</h3>
      <About />
    </Fragment>
  )
}

export default Course
