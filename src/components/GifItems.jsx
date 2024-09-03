
export const GifItems = ({ key, title, url, id }) => {
  return (
    <div key={ id } className="card">
        <img src={ url } alt={ title }/>
        <p>{ title } </p>
    </div>
  )
}
