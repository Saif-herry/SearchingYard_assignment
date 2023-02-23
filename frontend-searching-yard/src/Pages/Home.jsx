import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import "../Styles/Home.css"
import FooterNav from '../Components/FooterNav';
import Footer from '../Components/Footer';
const Home = () => {
    const navigate=useNavigate()
    const [data,setData] = useState([])
    // const [nasaData,setnasaData] = useState([])
    const {id} = useParams();
    console.log(id);
    
    function idData(){
      axios.get(`https://lazy-jade-octopus-tie.cyclic.app/searchingYard/get/${id}`).then(r=>setData(r.data)).catch(e=>console.log(e))
    }
    useEffect(()=>{
      idData()
    },[])
    console.log(data);
  return (
    <div className='IdContainer'>
      <div className="classofhead"><h1>Astronomy Picture of the Day</h1></div>
      <div className="HeadIdContainer">
      <div> <Link to="/cos">Discover the cosmos!</Link></div>
       <div><p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p></div>
      </div>
      <div className="featchDataIddatImg">
        <p style={{marginTop:"10px"}}>{data.date}</p>
        <img className='IdImg' src={data.hdurl} alt="" />
        <p>{data.title}</p>
        <p style={{marginTop:"-15px"}}>Image Credit & <Link to="https://apod.nasa.gov/apod/lib/about_apod.html#srapply" >@Copyright : {data.copyright}</Link>  </p>
      </div>
      <div className="Explaination">
    <span style={{fontWeight:"bold"}}>  Explaination : </span>
        {data.explanation}
      </div>
      <div className="tommarowPic">
      <span style={{fontWeight:"bold"}}> Tomorrow's picture: </span> <Link to="https://apod.nasa.gov/apod/ap230204.html"> along the ridge</Link>
      </div>
      <hr />
      <div className="FooterNav">
        <FooterNav/>
      </div>
      <hr />
      <div style={{textAlign:"center"}}>
        <Footer/>
      </div>
    </div>
  )
}
// axios.get(nasaapi).then((res)=>res.data).then((d)=>console.log("nasa-data",d))
export default Home