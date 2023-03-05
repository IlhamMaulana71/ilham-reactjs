import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const FetchNews = () => {
  const [open, setOpen] = React.useState(true)
  const [news, setNews] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?domains=liputan6.com,tribunnews.com,detik.com&apiKey=f4387be27a6748058a7e274bc1ae2050')
    .then((res) => {
      console.log(res.data.articles);
      setNews(res.data.articles)
    })
  }, []);
  
  return (
          <>
            <nav className="navbar navbar-expand-lg bg-black ">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src="https://icons-for-free.com/iconfiles/png/512/morning+news+newspaper+icon-1320136429130706490.png"  alt="..." height="36" />
                    </div>
                <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                <div className="flex gap-3 md:order-2">
                    <h1 className="text-primary">New App</h1>
                </div>

                <div className="navbar-nav ms-auto">
                    <form className="d-flex form-inline my-5 my-lg-0">
                        <input
                         type="text"
                         placeholder="Search News"
                         className="search"
                         onChange={(e) => setSearch(e.target.value)}
                         /> 
                    </form>
                    
                </div>
                </div>
                </div>  
            </nav>
            <div className="container my-5">
              <div className="row text-center">
                {news.filter((data) => 
                  data.title.toLowerCase().includes(search)
                  ).map((data) =>{
                    return(
                      <div className="col my-3">
                        <div className="card" style={{width: '18rem'}}>
                          <img src={data.urlToImage} className="card-img-top" alt="" />
                          <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                              <p className="card-title">{data.author},{data.publishedAt}</p>   
                          </div>
                            <center>
                            <button style={{width:'178px',padding:'10px'}} className="btn btn-primary"
                              type='button'onClick={() => {
                              setOpen(!open)
                            }}>
                            {open ? 'Close' : 'Lihat selengkapnya...'}
                            </button>
                            </center><br/><br/>
                            <Collapsible open={open}>
                              <h5 className="card-title">{data.description}</h5> <br/>
                                <h5 className="card-title">{data.content}</h5> <br/>
                                  <a href={data.url} >Read more here</a>
                            </Collapsible>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </>
  );
};

export default FetchNews;