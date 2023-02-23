import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'
import FooterNav from '../Components/FooterNav'
import Footer from '../Components/Footer'

const Apod = () => {
  const api = 'https://lazy-jade-octopus-tie.cyclic.app/searchingYard/get'
  const post_api_to_backend =
    'https://lazy-jade-octopus-tie.cyclic.app/searchingYard/post'
  const [data, setData] = useState([])
  const [nasaData, setnasaData] = useState([])
  const time_data = new Date()
  const date =
    time_data.getFullYear() +
    '-' +
    (time_data.getMonth() + 1 < 10
      ? '0' + (time_data.getMonth() + 1)
      : time_data.getMonth() + 1) +
    '-' +
    time_data.getDate()
  // console.log('dateee', date)
  const nasaapi = `https://api.nasa.gov/planetary/apod?api_key=JeD3EqEdP0z2MiyGjnhYoFlmXDGUI9DVbXjLBoMW&start_date=${date}`

  useEffect(() => {
    axios.get(api).then((res) => {
      let a = res.data
      a.sort((a, b) => b.date - a.date)
      console.log(a)
      setData(a)
    })

    // .then((d) => setData(d))
  }, [])

  function saveNasaApiToBackend(nasa_api_data) {
    axios
      .post(post_api_to_backend, nasa_api_data)
      .then((res) => res.data)
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    console.log('nasaapi-length', nasaData.length)

    axios.get(nasaapi).then((res) => {
      setnasaData(res.data)
      // console.log('nasaapi response', res.data[0])
      saveNasaApiToBackend(res.data[0])
    })
  }, [])

  console.log(
    'backend-data',
    data.sort((a, b) => a - b),
  )

  let data1 = data.filter((item) => {
    return date == item.date
  })
  // console.log('data1--', data1)
  return (
    <div className="IdContainer">
      <div className="classofhead">
        <h1>Astronomy Picture of the Day</h1>
      </div>
      <div className="HeadIdContainer">
        <div>
          {' '}
          <Link to="/cos">Discover the cosmos!</Link>
        </div>
        <div>
          <p>
            Each day a different image or photograph of our fascinating universe
            is featured, along with a brief explanation written by a
            professional astronomer.
          </p>
        </div>
      </div>

      {data1.length > 0
        ? data1?.map((item) => {
            return (
              <div>
                <div key={item._id} className="featchDataIddatImg">
                  <p style={{ marginTop: '10px' }}>{item.date}</p>
                  <img className="IdImg" src={item.hdurl} alt="" />
                  <p>{item.title}</p>
                  <p style={{ marginTop: '-15px' }}>
                    Image Credit &{' '}
                    <Link to="https://apod.nasa.gov/apod/lib/about_apod.html#srapply">
                      @Copyright : {item.copyright}
                    </Link>{' '}
                  </p>
                </div>
                <div className="Explaination">
                  <span style={{ fontWeight: 'bold' }}> Explaination : </span>
                  {item.explanation}
                </div>
                <div className="tommarowPic">
                  <span style={{ fontWeight: 'bold' }}>
                    {' '}
                    Tomorrow's picture:{' '}
                  </span>{' '}
                  <Link to="https://apod.nasa.gov/apod/ap230204.html">
                    {' '}
                    along the ridge
                  </Link>
                </div>
                <hr />
                <div className="FooterNav">
                  <FooterNav />
                </div>
                <hr />
                <div style={{ textAlign: 'center' }}>
                  <Footer />
                </div>
              </div>
            )
          })
        : nasaData?.map((item) => {
            return (
              <div key={item.date}>
                <p>{item.date}</p>
                <p>{item.title}</p>
                <img src={item.url} alt="image-broken" />
              </div>
            )
          })}
    </div>
  )
}
// axios.get(nasaapi).then((res)=>res.data).then((d)=>console.log("nasa-data",d))
export default Apod
