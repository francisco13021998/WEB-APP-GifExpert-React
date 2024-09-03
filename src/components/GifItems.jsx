import PropTypes from 'prop-types';

export const GifItems = ({ itemKey, title, url, id }) => {
  return (
    <div key={ itemKey } className="card">
        <img src={ url } alt={ title }/>
        <p>{ title } </p>
    </div>
  )
}

GifItems.propTypes = {
  title : PropTypes.string.isRequired,
  url   : PropTypes.string.isRequired,
}