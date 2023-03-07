import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card';

const FetchNews = () => {
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
                      <Card data={data}/>
                    )
                  })
                }
              </div>
            </div>
          </>
  );
};

export default FetchNews;