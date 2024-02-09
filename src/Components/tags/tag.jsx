import './tag.scss'

export default function Tag(tags) {

      const tagsAccomodation = tags

      return (
            <div className="tag">
                  {tagsAccomodation.tags.map((tag, index) => {
                        return <button key={index}>{tag}</button>
                  })}
            </div>
      )
}
