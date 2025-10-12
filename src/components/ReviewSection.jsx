import { useState, useEffect } from 'react';
import { Star, ThumbsUp, Filter } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import './ReviewSection.css';

const ReviewSection = ({ productId }) => {
  const { user } = useAuth();
  const toast = useToast();
  const [reviews, setReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [sortBy, setSortBy] = useState('helpful');
  const [filterRating, setFilterRating] = useState('all');
  const [newReview, setNewReview] = useState({
    rating: 5,
    title: '',
    comment: '',
    recommend: true
  });

  // Load reviews from localStorage
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('productReviews') || '{}');
    const productReviews = storedReviews[productId] || [];
    setReviews(productReviews);
  }, [productId]);

  // Calculate average rating
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: reviews.length > 0 
      ? ((reviews.filter(r => r.rating === rating).length / reviews.length) * 100).toFixed(0)
      : 0
  }));

  // Handle review submission
  const handleSubmitReview = (e) => {
    e.preventDefault();
    
    if (!user) {
      toast.warning('Please login to submit a review');
      return;
    }

    if (!newReview.title || !newReview.comment) {
      toast.warning('Please fill in all fields');
      return;
    }

    const review = {
      id: Date.now(),
      productId,
      userId: user.email,
      userName: user.name,
      rating: newReview.rating,
      title: newReview.title,
      comment: newReview.comment,
      recommend: newReview.recommend,
      date: new Date().toISOString(),
      helpful: 0,
      notHelpful: 0,
      helpfulVoters: []
    };

    // Save to localStorage
    const storedReviews = JSON.parse(localStorage.getItem('productReviews') || '{}');
    const productReviews = storedReviews[productId] || [];
    productReviews.unshift(review);
    storedReviews[productId] = productReviews;
    localStorage.setItem('productReviews', JSON.stringify(storedReviews));

    setReviews(productReviews);
    setShowReviewForm(false);
    setNewReview({ rating: 5, title: '', comment: '', recommend: true });
    toast.success('Review submitted successfully!');
  };

  // Handle helpful vote
  const handleHelpfulVote = (reviewId, isHelpful) => {
    if (!user) {
      toast.warning('Please login to vote');
      return;
    }

    const updatedReviews = reviews.map(review => {
      if (review.id === reviewId) {
        const hasVoted = review.helpfulVoters?.includes(user.email);
        if (hasVoted) {
          toast.info('You have already voted on this review');
          return review;
        }

        return {
          ...review,
          helpful: isHelpful ? review.helpful + 1 : review.helpful,
          notHelpful: !isHelpful ? review.notHelpful + 1 : review.notHelpful,
          helpfulVoters: [...(review.helpfulVoters || []), user.email]
        };
      }
      return review;
    });

    // Save to localStorage
    const storedReviews = JSON.parse(localStorage.getItem('productReviews') || '{}');
    storedReviews[productId] = updatedReviews;
    localStorage.setItem('productReviews', JSON.stringify(storedReviews));
    
    setReviews(updatedReviews);
    toast.success('Thank you for your feedback!');
  };

  // Sort and filter reviews
  const getFilteredReviews = () => {
    let filtered = [...reviews];

    // Filter by rating
    if (filterRating !== 'all') {
      filtered = filtered.filter(r => r.rating === parseInt(filterRating));
    }

    // Sort reviews
    switch (sortBy) {
      case 'helpful':
        filtered.sort((a, b) => b.helpful - a.helpful);
        break;
      case 'recent':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'highest':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        filtered.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredReviews = getFilteredReviews();

  // Render star rating
  const renderStars = (rating, interactive = false, onChange = null) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            size={interactive ? 24 : 16}
            className={`star ${star <= rating ? 'filled' : ''} ${interactive ? 'interactive' : ''}`}
            fill={star <= rating ? '#ffc107' : 'none'}
            onClick={() => interactive && onChange && onChange(star)}
          />
        ))}
      </div>
    );
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="review-section">
      <h2>Customer Reviews</h2>

      {/* Rating Summary */}
      <div className="rating-summary">
        <div className="rating-overview">
          <div className="average-rating">
            <span className="rating-number">{averageRating}</span>
            {renderStars(Math.round(averageRating))}
            <span className="review-count">Based on {reviews.length} reviews</span>
          </div>
          
          <button 
            className="write-review-btn"
            onClick={() => setShowReviewForm(!showReviewForm)}
          >
            {showReviewForm ? 'Cancel' : 'Write a Review'}
          </button>
        </div>

        <div className="rating-distribution">
          {ratingDistribution.map(({ rating, count, percentage }) => (
            <div key={rating} className="rating-bar-container">
              <span className="rating-label">{rating} {renderStars(rating)}</span>
              <div className="rating-bar">
                <div 
                  className="rating-bar-fill" 
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="rating-count">({count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <div className="review-form-container">
          <h3>Write Your Review</h3>
          <form onSubmit={handleSubmitReview} className="review-form">
            <div className="form-group">
              <label>Your Rating *</label>
              {renderStars(newReview.rating, true, (rating) => 
                setNewReview({ ...newReview, rating })
              )}
            </div>

            <div className="form-group">
              <label htmlFor="review-title">Review Title *</label>
              <input
                id="review-title"
                type="text"
                value={newReview.title}
                onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                placeholder="Sum up your experience"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="review-comment">Your Review *</label>
              <textarea
                id="review-comment"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                placeholder="Share your thoughts about this product"
                rows="5"
                required
              />
            </div>

            <div className="form-group checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={newReview.recommend}
                  onChange={(e) => setNewReview({ ...newReview, recommend: e.target.checked })}
                />
                I recommend this product
              </label>
            </div>

            <button type="submit" className="submit-review-btn">
              Submit Review
            </button>
          </form>
        </div>
      )}

      {/* Filter and Sort Controls */}
      {reviews.length > 0 && (
        <div className="review-controls">
          <div className="filter-group">
            <Filter size={18} />
            <select 
              value={filterRating} 
              onChange={(e) => setFilterRating(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>

          <div className="sort-group">
            <label>Sort by:</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="helpful">Most Helpful</option>
              <option value="recent">Most Recent</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="reviews-list">
        {filteredReviews.length > 0 ? (
          filteredReviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    {review.userName?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="reviewer-name">{review.userName}</div>
                    <div className="review-date">{formatDate(review.date)}</div>
                  </div>
                </div>
                {renderStars(review.rating)}
              </div>

              <h4 className="review-title">{review.title}</h4>
              
              {review.recommend && (
                <div className="recommend-badge">
                  ✓ Recommends this product
                </div>
              )}

              <p className="review-comment">{review.comment}</p>

              <div className="review-footer">
                <span className="helpful-text">Was this helpful?</span>
                <div className="helpful-buttons">
                  <button 
                    className="helpful-btn"
                    onClick={() => handleHelpfulVote(review.id, true)}
                  >
                    <ThumbsUp size={16} />
                    Yes ({review.helpful || 0})
                  </button>
                  <button 
                    className="helpful-btn"
                    onClick={() => handleHelpfulVote(review.id, false)}
                  >
                    No ({review.notHelpful || 0})
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-reviews">
            {filterRating !== 'all' 
              ? `No ${filterRating} star reviews yet.`
              : 'No reviews yet. Be the first to review this product!'}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
