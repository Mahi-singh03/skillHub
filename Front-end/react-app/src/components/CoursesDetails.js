import React from 'react';
import '../css/CourseCard.css';
import image from '../Images/React.jpg'

function CourseCard() {
  return (
    <div className="course-card">
      <div className="course-header">
        <div className="course-title">
          <h1>The Complete Python Bootcamp From Zero to Hero in Python</h1>
          <p>Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
        </div>
        <div className="course-video">
          <img src={ image } alt="Preview" />
        </div>
      </div>

      <div className="course-info">
        <div className="course-rating">
          <span className="rating">4.6 ★</span>
          <span className="reviews">527,285 ratings</span>
          <span className="learners">2,006,098 learners</span>
        </div>
        <div className="course-price">
          <span className="price">₹449</span>
          <span className="original-price">₹3,099</span>
          <span className="discount">86% off</span>
          <div className="offer-expiry">
            <p>5 hours left at this price!</p>
          </div>
        </div>
        <button className="add-to-cart-btn">Register</button>
        <div className="course-guarantee">
          <p>30-Day Money-Back Guarantee</p>
          <p>Full Lifetime Access</p>
        </div>
      </div>

      <div className="course-learn">
        <h2>What you'll learn</h2>
        <ul>
          <li>You will learn how to leverage the power of Python to solve tasks.</li>
          <li>You will be able to use Python for your own work problems or personal projects.</li>
          <li>Learn advanced Python features, like the collections module and how to work with timestamps!</li>
          <li>You will create a portfolio of Python-based projects you can share.</li>
          <li>Learn to use Python professionally, learning both Python 2 and Python 3!</li>
        </ul>
      </div>
    </div>
  );
}

export default CourseCard;