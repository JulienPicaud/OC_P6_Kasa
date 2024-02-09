import './tag.scss'

export default function Tag(tags) {

      const CurrentAccomodation = tags

      return (
            <div className="tag">
                  {CurrentAccomodation.tags.map((tag, index) => {
                        return <button key={index}>{tag}</button>
                  })}
            </div>
      )
}
