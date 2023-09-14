function TechBlock(props) {

    const learnedMonth = new Date(props.dateLearned).toLocaleString('default', { month: 'long' });
    const learnedYear = new Date(props.dateLearned).getFullYear();

    let boolFW = false;
    let boolT = false;

    if (props.frameworks) {
        boolFW = true;
        console.log("got here")
    } else if (props.tools) {
        boolT = true;
    }

    return (
        <div className="techblock">
            <h5>{props.name}</h5>
            <span className="learnedOn">Learned on {learnedMonth + " " + learnedYear}</span>
            <ul>
                {boolFW ? (<p>Frameworks: </p>) : ("")}
                {boolFW ? (
                    props.frameworks
                    && props.frameworks.map((fw) => (
                        <li>{fw}</li>
                    ))
                ) : ("")}

                {boolT ? (<p>Tools: </p>) : ("")}
                {boolT ? (
                    props.tools
                    && props.tools.map((t) => (
                        <li>{t}</li>
                    ))
                ) : ("")}
            </ul>
        </div>
    );
}

export default TechBlock;