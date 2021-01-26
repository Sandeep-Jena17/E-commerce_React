import React from 'react'
import Product from '../Product/Product';
import './Home.css';
const Home=()=> {
    return (
        <div className='home'>
          <div className='home__container'>
               <img className='home__image'
               src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
               
             <div className='home__row'>
              {/* product */}
              <Product title='Samsung phone' 
                       price={15000}
                       image="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY218_.jpg"
                       rating={4}
                       ID={12313}/>
              
              <Product ID={12314}
                       title='Alexa' 
                       price={10000}
                       image='https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg'
                       rating={4}/>
             <Product ID={12320}
                       title='marijuana medical cannabis '
                       price={1500}
                       image='https://image.shutterstock.com/image-photo/supermarket-trolley-marijuana-medical-cannabis-260nw-1469999738.jpg' 
                       rating={5}/>

             </div>
            
             <div className='home__row'>
              <Product ID={12315}
                       title='Redmi Note 9 Pro (Glacier White, 4GB RAM, 64GB Storage) - Latest 8nm Snapdragon 720G & Alexa Hands-Free | Upto 6 Months No Cost EMI'
                       price={12999}
                       image='https://m.media-amazon.com/images/I/71uZrDPrsRL._AC_UY218_.jpg' 
                       rating={4}/>
              <Product ID={12316}
                       title='AMZ Microfibre Soft Home Seat Cushion Long Chair Pad Cushion for Indoor/Outdoor Home Office'
                       price={700}
                       image='https://images-eu.ssl-images-amazon.com/images/I/51e1cmjl7cL._AC_US160_FMwebp_QL70_.jpg' 
                       rating={4}/>
              
              <Product ID={12319}
                       title='Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) '
                       price={65990}
                       image='https://m.media-amazon.com/images/I/317ZwBbdXLL.jpg' 
                       rating={5}/>
                       
              
              <Product ID={12317}
                       title='
                       Jetspree
                       Glenfiddich Select Cask Single Malt Scotch Whisky '
                       price={8700}
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAKuCS42v2lZwM30khXHhrwP_dzleL5BzruQ&usqp=CAU' 
                       rating={5}/>       
             </div>
            
             <div className='home__row'>
             <Product ID={12318}
                       title='Samsung C34H890WJN - 34 Inch (3440 x 1440) WQHD UltraWide Professional LED Curved Monitor'
                       price={83500}
                       image='https://m.media-amazon.com/images/I/41gVicwYMiL._AC_UY218_.jpg' 
                       rating={2}/>
            
             </div>
         </div>
    </div>
    )
}

export default Home;