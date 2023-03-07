import React from 'react';
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({data}) => {
    
    const [open, setOpen] = React.useState(false)

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
}

export default Card;