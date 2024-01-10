import React from 'react'

function Details() {
  return (
    <div className='details'>
        <div className="details__background">
            <div className="details__background__shadow"></div>
            <img className='details__background__image' src="https://th.bing.com/th/id/OIP.rEXbe9i3ON5Vra7tCmCiggHaK-?rs=1&pid=ImgDetMain"/>
        </div>
        <div className="details__area">
            <div className="details__area__container">
                <div className="details__title">Hey</div>
                <div className="details__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ut vero? Neque vero voluptatem quia velit ipsum? Nulla, sapiente voluptate minus suscipit, distinctio quasi aperiam, beatae nobis delectus labore maiores.
                </div>
            </div>
            <button className="trailerButton">Trailer</button>
        </div>
    </div>
  )
}

export default Details