import React from 'react'
import './Slider.css'
import Card from './Card.js'
import Details from './Details.js'
import Carousel from 'react-elastic-carousel'
const movies =[
    {
        id:1,
        image:"https://th.bing.com/th/id/OIP.XLH2nCXGy6ElA-pPSv6g7wAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        imageBg:"https://th.bing.com/th/id/OIP.XLH2nCXGy6ElA-pPSv6g7wAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        title:"Oppenhiemer",
        videoID:"uYPbbksJxIg"

    },
    {
        id:2,
        image:"https://m.media-amazon.com/images/M/MV5BYTFlYWRhYjEtNDU3MC00ZTRiLTlmY2MtNGViODJlNDczNTA4XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg",
        imageBg:"https://m.media-amazon.com/images/M/MV5BYTFlYWRhYjEtNDU3MC00ZTRiLTlmY2MtNGViODJlNDczNTA4XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg",
        title:"Never Have I Ever",
        videoID:"HyOCCCbxwMQ"
    },
    {
        id:3,
        image:"https://th.bing.com/th/id/R.92969bd5004543a10c5104e2bce05045?rik=yf3NgKjJwVFRgg&riu=http%3a%2f%2foakshow.in%2fpics%2fSerieses%2fMoneyHeist%2f2.jpg&ehk=8v5piOyUQqjpXM7hK9RodsaehQhiJkjpwSdgCcCeOeA%3d&risl=&pid=ImgRaw&r=0",
        imageBg:"https://th.bing.com/th/id/R.92969bd5004543a10c5104e2bce05045?rik=yf3NgKjJwVFRgg&riu=http%3a%2f%2foakshow.in%2fpics%2fSerieses%2fMoneyHeist%2f2.jpg&ehk=8v5piOyUQqjpXM7hK9RodsaehQhiJkjpwSdgCcCeOeA%3d&risl=&pid=ImgRaw&r=0",
        title:"Money Heist",
        videoID:"_InqQJRqGW4"
    },
    {
        id:4,
        image:"https://th.bing.com/th/id/OIP.rEXbe9i3ON5Vra7tCmCiggHaK-?rs=1&pid=ImgDetMain",
        imageBg:"https://th.bing.com/th/id/OIP.rEXbe9i3ON5Vra7tCmCiggHaK-?rs=1&pid=ImgDetMain",
        title:"13 Reasons Why",
        videoID:"HODC3BmvR7A"
    },
    {
        id:5,
        image:"https://th.bing.com/th/id/OIP.XJuIVRoBWaNAkZGlmOqIBwHaLH?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        imageBg:"https://th.bing.com/th/id/OIP.D3FwnWBDs1wjQbCyWpWrUQHaEK?rs=1&pid=ImgDetMain",
        title:"The Kissing Booth",
        videoId:"7bfS6seiLhk"
    },
    {   
        id:6,
        image:"https://th.bing.com/th/id/OIP.Glif880VT8UNPo8GiOwD3AHaEK?rs=1&pid=ImgDetMain",
        imageBg:"https://www.bing.com/th?id=OIP.dbdjMXeXeids14Gw4FIKkgHaEK&w=187&h=105&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        title:"Riverdale",
        videoID:"HxtLlByaYTc"
    },
    {
        id:7,
        image:"https://th.bing.com/th/id/OIP.to6hhfNt_ViRImuOvY21CQHaEE?rs=1&pid=ImgDetMain",
        imageBg:"https://www.bing.com/th?id=OIP.dbdjMXeXeids14Gw4FIKkgHaEK&w=187&h=105&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        title:"Wednesday Addams",
        videoId:"Di310WS8zLk"
    },
    {
        id:8,
        image:"https://flixwatch.co/wp-content/uploads/70143836.jpg",
        imageBg:"https://www.bing.com/th?id=OIP.dbdjMXeXeids14Gw4FIKkgHaEK&w=187&h=105&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        title:"Breaking Bad",
        videoId:"2gTC4uWP3_Y"
    },
    {
        id:9,
        image:"https://images7.alphacoders.com/105/thumb-1920-1050458.jpg",
        imageBg:"https://www.bing.com/th?id=OIP.dbdjMXeXeids14Gw4FIKkgHaEK&w=187&h=105&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        title:"The Arrow",
        videoID:"2q3l4fMVCO8"

    }
]
function Slider() {
    const breakPoints=[
        {width:1, itemsToShow:1},
        {width:500, itemsToShow:2},
        {width:768, itemsToShow:3},
        {width:1200, itemsToShow:4}
    ]
  return (
    <div className='slider'>
      <Carousel breakPoints={breakPoints}>
        <Card className='card'/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Details />
      </Carousel>
    </div>
  )
}

export default Slider