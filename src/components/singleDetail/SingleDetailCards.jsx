import React from 'react'

function SingleDetailCards(props) {
    return (
        <div className="SingleDetailCards">
            <div className="img-holder">
                <img src={props.picture} alt="" />
            </div>
            <div className="SingleDetail-content">
                <h4 className='biggest-text'>{props.title}</h4>
                <div className="profile-wrapper">
                    <div className="profile-holder">
                        <img src="https://secure.gravatar.com/avatar/f171758ec90baaed75fea6b55fb77d03?s=75&d=mm&r=g" alt="" />
                    </div>
                    <p className='small-text'>by <span className='blue-text'>{props.author}</span>. {props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleDetailCards