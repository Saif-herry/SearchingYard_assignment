import React, { useState, useEffect } from 'react'
import '../Styles/Search.css'
import { Link } from 'react-router-dom'
const Searching = () => {
  const [db_data, setDb_data] = useState([])
  const [input_data, setInput_data] = useState('')
  const [searching_data, setSearching_data] = useState([])
  function get_data_from_db() {
    fetch('https://lazy-jade-octopus-tie.cyclic.app/searchingYard/get')
      .then((res) => res.json())
      .then((d) => {
        setDb_data(d)
      })
      .catch((err) => err)
  }

  const hnaldeFindTheWords = () => {
    console.log(input_data)
    let filter_data = db_data.filter(
      (item) =>
        item.date == input_data ||
        item.copyright == input_data ||
        item.title == input_data ||
        item.media_type == input_data ||
        item.explanation == input_data,
    )
    console.log('findthewords', filter_data)
    setSearching_data(filter_data)
  }
  const handleCleartheForm = () => {
    setInput_data('')
  }

  useEffect(() => {
    get_data_from_db()
  }, [])
  return (
    <div className="searchingPage">
      <section className="navbar">
        <navbar>
          <div className="main_navbar">
            <div>
              <img src="https://apod.nasa.gov/apod/apod.gif" alt="image" />
            </div>
            <div>
              <p className="astroText">
                Astronomy Picture of the Day <br /> Searchable Archive
              </p>
            </div>
          </div>
        </navbar>
      </section>
      <hr />

      <section className="searching_box">
        <div>
          <p>
            Type text you would like to search for here:
            <input
              type="text"
              value={input_data}
              onChange={(e) => setInput_data(e.target.value)}
            />
          </p>
        </div>
        <div className="searching_box_buttonsDiv">
          <button onClick={hnaldeFindTheWords}>Find the words</button>
          <button onClick={handleCleartheForm}>Clear the form</button>
        </div>
      </section>
      <hr />

      <section className="filterSearchBox">
        {searching_data.length > 0 ? (
          searching_data.map((item) => {
            return (
              <div key={item._id}>
                <p>{item.date}</p>
                <p>{item.copyright}</p>
                <p>{item.explanation}</p>
                <p>{item.title}</p>
                <p>{item.media_type}</p>
                <img src={item.url} alt={item.title} />
              </div>
            )
          })
        ) : (
          <div>...result not found</div>
        )}
      </section>
      <section className="bottomContent">
        <div>
          <p>
            After you enter some text in the search field press 'return' or
            'enter'. Thumbnail images and links to APODs containing the text
            will be displayed.
          </p>
          <p>
            This new APOD search facility is under development using the SWISH-E
            indexing system. It allows wildcards, AND and OR searches, and has
            other advanced features. Of course, simple text searches still work
            fine. For more information, see some SWISH-E online documentation.
          </p>

          <p><Link to="/">Today's Astronomy Picture of the Day</Link></p>
        </div>
      </section>
    </div>
  )
}

export default Searching
