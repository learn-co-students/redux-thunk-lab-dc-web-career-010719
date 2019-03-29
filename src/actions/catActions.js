export const fetchCats = (dispatch) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' })

    return fetch('http://localhost:4000/db')
    .then(res => res.json())
    .then(cats => {
      dispatch({
        type: 'FETCH_CATS',
        payload: cats.images })
    })
  }
}
