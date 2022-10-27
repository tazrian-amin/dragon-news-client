import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;

    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <div className='text-center'>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">Back to the Category</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default News;