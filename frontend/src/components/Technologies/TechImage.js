import React, { useState } from "react";

const TechImage = (props) => {

    const [currentImage, setCurrentImage] = useState();

    if (props.imageName) {
        import(`../Technologies/images/${props.type}/${props.imageName}`).then((image) =>
            setCurrentImage(image.default)
        );

        return (
            <div className='tech-image'>
                <img src={currentImage} alt={props.name} />
            </div>
        );
    }
}

export default TechImage;