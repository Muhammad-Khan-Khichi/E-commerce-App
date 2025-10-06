import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { data } from 'react-router-dom';
import { itemsAction } from '../store/itemsSlice';
import { fetchStatusAction } from '../store/fetchStatusSlice';

function FetchItems() {
    const fetchStatus = useSelector(store => store.fetchStatus);
    const dispatch = useDispatch()

    useEffect(() => {
        if (fetchStatus.fetchDone)  return;

        const controller = new AbortController()
        const signal = controller.signal;
        
        dispatch(fetchStatusAction.markFetchingStarted())
        fetch("http://localhost:5174/items", {signal})
        .then((res) => res.json())
        .then(({items}) => {
            dispatch(fetchStatusAction.markFetchDone())
            dispatch(fetchStatusAction.markFetchingFinished())
           dispatch( itemsAction.addInitialItems(items[0]))            
        })

        return () => {
            controller.abort()
        }
      
    }, [fetchStatus])

  return (
    <div>
    </div>
  )
}

export default FetchItems
