// import Slider from 'react-slick'

// // import 'slick-carousel/slick/slick.css'
// // import 'slick-carousel/slick/slick-theme.css'

// import './index.css'

// const PlanetsSlider = props => {
//   const {planetsList} = props

//   const settings = {
//     dots: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   }
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div className="">
//           {planetsList.map(eachPlanet => (
//             <PlanetItem itemDetails={eachPlanet} />
//           ))}
//         </div>
//       </Slider>
//     </div>
//   )
// }

// export default PlanetsSlider

import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          {planetsList.map(eachPlanet => (
            <PlanetItem itemDetails={eachPlanet} />
          ))}
        </div>
      </Slider>
    </div>
  )
}

export default PlanetsSlider
