import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useLocation } from 'react-router-dom';

export const Blog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [refreshed, setRefreshed] = useState(false);

  useEffect(() => {
    if (!refreshed) {
      setRefreshed(true);
      navigate(location.pathname, { replace: true });
    }
  }, [refreshed, navigate, location.pathname]);

  const handleSelect = (blog) => {
    navigate(`/company/${blog}`);
    window.scrollTo(0, 0); 
  };

  return (
    <div className='container mx-auto px-4'>
      <Navbar />
      <div className='header text-center my-8'>
        <div className='text text-3xl font-bold'>Blogs</div>
        <div className='underline w-16 h-1 mx-auto my-2 bg-black'></div>
      </div>
      <div className='card-container grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card className='rounded-xl shadow-lg overflow-hidden'>
          <CardMedia
            component="img"
            height="200"
            image="https://mechdb.com/wp-content/uploads/2024/01/Machine-Learning-Applications-in-Mechanical-Data-Analysis.webp"
            alt="Model Image"
          />
          <CardContent className='pt-4 pb-2'>
            <Typography gutterBottom variant="h5" component="div" className='font-bold'>
              Common Machine Learning Models
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Uncover the magic behind intelligent applications - explore how these models power your digital world! Dive into the algorithms and methodologies that drive transformative technologies across industries. From predicting user behavior to automating complex tasks, discover how machine learning models like logistic regression are shaping the future of artificial intelligence.
            </Typography>
          </CardContent>
          <CardActions className='justify-between px-4 pb-4'>
            <div className='flex items-center text-gray-600'>
              <time dateTime="2024-05-24" className="text-sm mr-2">July 5, 2024</time>
              <div className="border-l-2 h-4 mx-2"></div>
              <a className="text-sm" href="https://www.linkedin.com/in/hridyanshu-slathia">Hridyanshu Slathia BTech CSE</a>
            </div>
            <Button variant="contained" color="primary" onClick={() => handleSelect('blog1')}>
              Read More
            </Button>
          </CardActions>
        </Card>

        <Card className='rounded-xl shadow-lg overflow-hidden'>
          <CardMedia
            component="img"
            height="200"
            image="https://img.freepik.com/premium-photo/biometrics-technology-concept_670147-22042.jpg"
            alt="Model Image"
          />
          <CardContent className='pt-4 pb-2'>
            <Typography gutterBottom variant="h5" component="div" className='font-bold'>
              Unveiling the Power of Convolutional Neural Networks (CNNs)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dive into the world of CNNs, a revolutionary deep learning technique transforming computer vision! Explore how CNNs work, their applications in image recognition, object detection, and more.
            </Typography>
          </CardContent>
          <CardActions className='justify-between px-4 pb-4'>
            <div className='flex items-center text-gray-600'>
              <time dateTime="2024-05-24" className="text-sm mr-2">July 5, 2024</time>
              <div className="border-l-2 h-4 mx-2"></div>
              <a className="text-sm" href="https://www.linkedin.com/in/vanshika-bakshi">Vanshika Bakshi BTech CSE</a>
            </div>
            <Button variant="contained" color="primary" onClick={() => handleSelect('blog2')}>
              Read More
            </Button>
          </CardActions>
        </Card>

        <Card className='rounded-xl shadow-lg overflow-hidden'>
          <CardMedia
            component="img"
            height="200"
            image="https://th.bing.com/th/id/OIP.bjlsB9kZ3VjcE03ra0F1_gHaE8?rs=1&pid=ImgDetMain"
            alt="New Blog Image"
          />
          <CardContent className='pt-4 pb-2'>
            <Typography gutterBottom variant="h5" component="div" className='font-bold'>
              Artificial Intelligence in Home Robots: Revolutionarizing Everyday Life
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Discover the future of AI and how it's reshaping industries and societies. Explore the latest advancements, ethical considerations, and potential impacts of AI technologies on our lives.
            </Typography>
          </CardContent>
          <CardActions className='justify-between px-4 pb-4'>
            <div className='flex items-center text-gray-600'>
              <time dateTime="2024-07-06" className="text-sm mr-2">July 8, 2024</time>
              <div className="border-l-2 h-4 mx-2"></div>
              <a className="text-sm" href="https://www.linkedin.com/in/shagunmengi/">Shagun Mengi BTech CSE 3rd year</a>
            </div>
            <Button variant="contained" color="primary" onClick={() => handleSelect('blog3')}>
              Read More
            </Button>
          </CardActions>
        </Card>

        <Card className='rounded-xl shadow-lg overflow-hidden'>
          <CardMedia
            component="img"
            height="200"
            image="https://th.bing.com/th/id/OIP.JfMZKvoriMih2Qg-E2TFQgHaE8?rs=1&pid=ImgDetMain"
            alt="NLP Image"
          />
          <CardContent className='pt-4 pb-2'>
            <Typography gutterBottom variant="h5" component="div" className='font-bold'>
              Comprehensive Overview of Natural Language Processing (NLP)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Delve into the fascinating world of Natural Language Processing (NLP) and its role in making computers understand and generate human language. Explore the techniques, applications, and future trends that are revolutionizing how we interact with technology.
            </Typography>
          </CardContent>
          <CardActions className='justify-between px-4 pb-4'>
            <div className='flex items-center text-gray-600'>
              <time dateTime="2024-07-08" className="text-sm mr-2">July 8, 2024</time>
              <div className="border-l-2 h-4 mx-2"></div>
              <a className="text-sm" href="https://www.linkedin.com/in/anirudh-salaria-0953b1247/">Anirudh Salaria BTech CSE 3rd year</a>
            </div>
            <Button variant="contained" color="primary" onClick={() => handleSelect('blog4')}>
              Read More
            </Button>
          </CardActions>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
