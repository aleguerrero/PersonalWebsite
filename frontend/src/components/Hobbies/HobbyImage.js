import React, { useState } from "react";

function HobbyImage(props) {

    const [currentImage, setCurrentImage] = useState();

    if (props.imagePath) {
        import(`../Hobbies/images/${props.imagePath}`).then((image) =>
            setCurrentImage(image.default)
        );

        return (
            <div className='hobbyImage'>
                <img src={currentImage} alt='test' />
            </div>
        );
    }
}

export default HobbyImage;