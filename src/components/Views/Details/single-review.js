import { findByLabelText } from '@testing-library/react';
import { Button, Card, ProgressBar } from 'react-bootstrap';
// import { FaStar } from "react-icons/fa";

const SingleReview = function (props) {
    console.log(props.props)
    // const reviews = require('./894reviews.json')
    const reviews = props.props;

    return (
        <div>
            {reviews.map(rev => (
                <Card key={rev.userId}>
                    <Card.Title>
                        {/* <FaStar
                            key={rev.rating}
                            className="cursor-pointer"
                            icon="fas fa-star"
                            onClick={() => onRating(index)}
                            style={{ color: getColor(index) }}
                        /> */}
                    </Card.Title>
                    <Card.Text>{rev.review}</Card.Text>
                    <div>{rev.tags.map(tag => (
                        <Button variant="primary" key={tag} style={{ border: '1px solid black', borderRadius: 5, margin: '2px', padding: '2px' }} >{tag}</Button>
                    ))}</div>
                </Card>))
            }
        </div>
    )
}
export default SingleReview;