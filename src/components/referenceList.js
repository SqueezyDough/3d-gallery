import { noop } from '../utils'

const ReferenceList = ({ references }) => {
  if (!references) return noop()

  return (
    <ul>
      {references.map((reference, index) => {
        return <li key={index}>
          {reference.type === 'artist' ? (
            <span>Artist: </span>
          ) : noop() }
          <a href={reference.link} target='_blank' rel="noreferrer">
            {reference.title}
          </a>
        </li>
      })}
    </ul>
  )
}

export default ReferenceList