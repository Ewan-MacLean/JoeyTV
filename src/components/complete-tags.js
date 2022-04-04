import ProgressBar from "react-bootstrap/ProgressBar"
import 'bootstrap/dist/css/bootstrap.min.css'

const CompleteTags = function (props) {
    // const summaryData = require('./894summary.json')
    const summaryData = props.props[2];
    console.log(summaryData)
    let countReviews = summaryData.countReviews;
    let items = [];
    for (let p in summaryData.tagsObj) {
            let progress = (100*summaryData.tagsObj[p]/countReviews);
            items.push(<p>{p}
                <ProgressBar animated now={progress}/>
            </p>)
        
    }


    return (
        <div>
            <h2>All tags</h2>
            <div>{items}</div>

        </div>
    )
}

export default CompleteTags;