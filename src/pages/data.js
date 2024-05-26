import React from 'react';
import '../styles.css'; 
import a from '../imgvid/1.webp';
import b from '../imgvid/2.webp';
import c from '../imgvid/3.webp';
import d from '../imgvid/4.webp';
import e from '../imgvid/5.webp';
import f from '../imgvid/6.webp';
import g from '../imgvid/7.webp';
import h from '../imgvid/8.webp';
import i from '../imgvid/9.webp';
import shoe4 from '../imgvid/shoe4.webp';
import shoe5 from '../imgvid/shoe5.webp';
import watch1 from '../imgvid/watch1.webp';
import watch2 from '../imgvid/watch2.webp';
import watch3 from '../imgvid/watch3.webp';
import watch4 from '../imgvid/watch4.webp';
import watch5 from '../imgvid/watch5.webp';
import lap1 from '../imgvid/lap1.webp';
import lap2 from '../imgvid/lap2.webp';
import lap3 from '../imgvid/lap3.webp';
import lap4 from '../imgvid/lap4.webp';
import lap5 from '../imgvid/lap5.webp';
import { Link } from 'react-router-dom';



    const products = [
        { 
            id: 1, 
            name: 'White T-Shirt',
            price: 29,
            image: a,
            element: (
                <div>
                <Link to={`/product/${1}`}><img onClick={window.scrollTo(0,0)} src={a}></img></Link>
                <div className="des">
                    <span>GANT</span>
                    <h5 className='name'>White T-Shirt</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$29</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 2, 
            name: 'Black T-Shirt',
            price: 29,
            image: b,
            element: (
                <div>
                <Link to={`/product/${2}`}><img onClick={window.scrollTo(0,0)} src={b}></img></Link>
                <div className="des">
                    <span>Polo</span>
                    <h5 className='name'>Black T-Shirt</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$29</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 3, 
            name: 'Blue T-Shirt',
            price: 29,
            image: c,
            element: (
                <div>
                <Link to={`/product/${3}`}><img onClick={window.scrollTo(0,0)} src={c}></img></Link>
                <div className="des">
                    <span>LEVI</span>
                    <h5 className='name'>Blue T-Shirt</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$29</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 4, 
            name: 'Slim-Fit Jeans',
            price: 29,
            image: d,
            element: (
                <div>
                <Link to={`/product/${4}`}><img onClick={window.scrollTo(0,0)} src={d}></img></Link>
                <div className="des">
                    <span>CK</span>
                    <h5 className='name'>Slim-Fit Jeans</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$29</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 5, 
            name: 'Skin-Tight Jeans',
            price: 29,
            image: e,
            element: (
                <div>
                <Link to={`/product/${5}`}><img onClick={window.scrollTo(0,0)} src={e}></img></Link>
                <div className="des">
                    <span>Polo</span>
                    <h5 className='name'>Skin-Tight Jeans</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$29</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 6, 
            name: 'Baggy Jeans',
            price: 29,
            image: f,
            element: (
                <div>
                <Link to={`/product/${6}`}><img onClick={window.scrollTo(0,0)} src={f}></img></Link>
                <div className="des">
                    <span>LEVI</span>
                    <h5 className='name'>Baggy Jeans</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$29</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 7, 
            name: 'Nike Air Shoes',
            price: 49,
            image: g,
            element: (
                <div>
                <Link to={`/product/${7}`}><img onClick={window.scrollTo(0,0)} src={g}></img></Link>
                <div className="des">
                    <span>Nike</span>
                    <h5 className='name'>Nike Air</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$49</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 8, 
            name: 'HushPuppy Grand Shoes',
            price: 49,
            image: h,
            element: (
                <div>
                <Link to={`/product/${8}`}><img onClick={window.scrollTo(0,0)} src={h}></img></Link>
                <div className="des">
                    <span>HushPuppy</span>
                    <h5 className='name'>HushPuppy Grand</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$49</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 9, 
            name: 'Sketchers GoWalk Shoes',
            price: 49,
            image: i,
            element: (
                <div>
                <Link to={`/product/${9}`}><img onClick={window.scrollTo(0,0)} src={i}></img></Link>
                <div className="des">
                    <span>Sketchers</span>
                    <h5 className='name'>Sketchers GoWalk</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$49</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 10, 
            name: 'Reebok Premium Shoes',
            price: 49,
            image: shoe4,
            element: (
                <div>
                <Link to={`/product/${10}`}><img onClick={window.scrollTo(0,0)} src={shoe4}></img></Link>
                <div className="des">
                    <span>Reebok</span>
                    <h5 className='name'>Reebok Premium</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$49</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 11, 
            name: 'Campus Terminator Shoes',
            price: 49,
            image: shoe5,
            element: (
                <div>
                <Link to={`/product/${11}`}><img onClick={window.scrollTo(0,0)} src={shoe5}></img></Link>
                <div className="des">
                    <span>Campus</span>
                    <h5 className='name'>Campus Terminator Shoes</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$49</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 12, 
            name: 'Tissot Grand Watch',
            price: 59,
            image: watch1,
            element: (
                <div>
                <Link to={`/product/${12}`}><img onClick={window.scrollTo(0,0)} src={watch1}></img></Link>
                <div className="des">
                    <span>Tissot</span>
                    <h5 className='name'>Tissot Grand</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$59</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 13, 
            name: 'Rolex Gold Watch',
            price: 59,
            image: watch2,
            element: (
                <div>
                <Link to={`/product/${13}`}><img onClick={window.scrollTo(0,0)} src={watch2}></img></Link>
                <div className="des">
                    <span>Rolex</span>
                    <h5 className='name'>Rolex Gold</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$59</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 14, 
            name: 'CK Green Watch',
            price: 59,
            image: watch3,
            element: (
                <div>
                <Link to={`/product/${14}`}><img onClick={window.scrollTo(0,0)} src={watch3}></img></Link>
                <div className="des">
                    <span>CK</span>
                    <h5 className='name'>CK Green</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$59</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 15, 
            name: 'Fastrack Ultra Watch',
            price: 59,
            image: watch4,
            element: (
                <div>
                <Link to={`/product/${15}`}><img onClick={window.scrollTo(0,0)} src={watch4}></img></Link>
                <div className="des">
                    <span></span>
                    <h5 className='name'>Fastrack Ultra</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$59</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 16, 
            name: 'Titan Premium Watch',
            price: 59,
            image: watch5,
            element: (
                <div>
                <Link to={`/product/${16}`}><img onClick={window.scrollTo(0,0)} src={watch5}></img></Link>
                <div className="des">
                    <span>Titan</span>
                    <h5 className='name'>Titan Premium</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$59</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 17, 
            name: 'HP Victus Laptop',
            price: 89,
            image: lap1,
            element: (
                <div>
                <Link to={`/product/${17}`}><img onClick={window.scrollTo(0,0)} src={lap1}></img></Link>
                <div className="des">
                    <span>HP</span>
                    <h5 className='name'>HP Victus</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$89</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 18, 
            name: 'Lenovo Ideapad Laptop',
            price: 89,
            image: lap2,
            element: (
                <div>
                <Link to={`/product/${18}`}><img onClick={window.scrollTo(0,0)} src={lap2}></img></Link>
                <div className="des">
                    <span>Lenovo</span>
                    <h5 className='name'>Lenovo Ideapad</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$89</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 19, 
            name: 'ASUS Vivobook Laptop',
            price: 89,
            image: lap3,
            element: (
                <div>
                <Link to={`/product/${19}`}><img onClick={window.scrollTo(0,0)} src={lap3}></img></Link>
                <div className="des">
                    <span>ASUS</span>
                    <h5 className='name'>ASUS Vivobook</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$89</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 20, 
            name: 'HP Pavilion Laptop',
            price: 89,
            image: lap4,
            element: (
                <div>
                <Link to={`/product/${20}`}><img onClick={window.scrollTo(0,0)} src={lap4}></img></Link>
                <div className="des">
                    <span>HP</span>
                    <h5 className='name'>HP Pavilion</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$89</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        },
        { 
            id: 21, 
            name: 'Dell G16 Laptop',
            price: 89,
            image: lap5,
            element: (
                <div>
                <Link to={`/product/${21}`}><img onClick={window.scrollTo(0,0)} src={lap5}></img></Link>
                <div className="des">
                    <span>Dell</span>
                    <h5 className='name'>Dell G16</h5>
                    <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    </div>
                    <h4>$89</h4>
                </div> 
                <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
                </div>

        )
        }
        
    ];

    

export default products;