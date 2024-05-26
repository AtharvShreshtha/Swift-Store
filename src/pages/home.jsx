import React from 'react';
import '../styles.css'; 
import logo from '../imgvid/logo.jpg'; 
import down from '../imgvid/down.webp';
import pay from '../imgvid/pay.webp'; 
import ship from '../imgvid/ship.jpg';
import money from '../imgvid/money.jpg';
import time from '../imgvid/time.jpg';
import promo from '../imgvid/promo.jpg';
import lap from '../imgvid/lap.jpg';
import cloth from '../imgvid/prod1.jpg'
import watch from '../imgvid/prod2.jpg'
import shoe from '../imgvid/prod3.webp'
import lapt from '../imgvid/laptop.jpg'
import a from '../imgvid/1.webp';
import b from '../imgvid/2.webp';
import c from '../imgvid/3.webp';
import d from '../imgvid/4.webp';
import e from '../imgvid/5.webp';
import f from '../imgvid/6.webp';
import g from '../imgvid/7.webp';
import h from '../imgvid/8.webp';
import i from '../imgvid/9.webp';
import j from '../imgvid/10.webp';
import k from '../imgvid/11.webp';
import l from '../imgvid/12.webp';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function HomePage() {
  return (
    <div>
      <Navbar/>

      <div className="hero1">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all Products</h1>
        <p>Save more with coupons & upto 70% off!</p><br />
        <a href='/shop'><button>Shop Now&emsp;<i class="fa-solid fa-arrow-right"></i></button></a>
      </div>

      <div className='cats'>
        <h1>Featured Categories</h1><br></br>
        <p>Choose from a wide range of products</p><br></br>
      </div>

      <div className="prod1">
        <div className="text">
          <h1>Product 1</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
          <br></br><br></br><a href='/shop'><button>Search More&emsp;<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        <img src={cloth} alt="Who We Are" />
      </div>

      <div className="prod1">
        <img src={watch} alt="Who We Are" />
        <div className="text">
          <h1>Product 2</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
          <br></br><br></br><a href='/shop'><button>Search More&emsp;<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
      </div>

      <div className="prod1">
        <div className="text">
          <h1>Product 3</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
          <br></br><br></br><a href='/shop'><button>Search More&emsp;<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        <img src={shoe} alt="Who We Are" />
      </div>

      <div className="prod1">
        <img src={lapt} alt="Who We Are" />
        <div className="text">
          <h1>Product 4</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
          <br></br><br></br><a href='/shop'><button>Search More&emsp;<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
      </div>

      <div className='feats'>
        <h1>Featured Products</h1><br></br>
        <p>Summer Collection New Modern Design</p><br></br>
        <div className='procontain'>
              <div className='contain'>
                <img src={a}></img>
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
              <div className='contain'>
                <img src={b}></img>
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
                <div className='contain'>
                <img src={c}></img>
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
                <div className='contain'>
                <img src={d}></img>
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
                <div className='contain'>
                <img src={e}></img>
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
                <div className='contain'>
                <img src={f}></img>
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
                <div className='contain'>
                <img src={g}></img>
                <div className="des">
                    <span>Nike</span>
                    <h5 className='name'>Nike Air Shoes</h5>
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
                <div className='contain'>
                <img src={h}></img>
                <div className="des">
                    <span>HushPuppy</span>
                    <h5 className='name'>HushPuppy Grand Shoes</h5>
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
                <div className='contain'>
                <img src={i}></img>
                <div className="des">
                    <span>Sketchers</span>
                    <h5 className='name'>Sketchers GoWalk Shoes</h5>
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
        </div>
      </div>

      <div className="sec3">
        <div className="box">
          <img src={ship} alt="Free Shipping" />
          <h4>Free Shipping</h4>
        </div>
        <div className="box">
          <img src={time} alt="On-Time Delivery" />
          <h4>On-Time Delivery</h4>
        </div>
        <div className="box">
          <img src={money} alt="Save Money" />
          <h4>Save Money</h4>
        </div>
        <div className="box">
          <img src={promo} alt="Promotions" />
          <h4>Promotions</h4>
        </div>
        <div className="box">
          <img src={lap} alt="24/7 Support" />
          <h4>24/7 Support</h4>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default HomePage;