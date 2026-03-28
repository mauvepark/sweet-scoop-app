import { useEffect, useState } from "react";
import flavors from "../data/flavors";
import reviews from "../data/reviews";

function MainSection() {
  const [featuredFlavors, setFeaturedFlavors] = useState([]);
  const [featuredReviews, setFeaturedReviews] = useState([]);

  useEffect(() => {
    const shuffledFlavors = [...flavors].sort(() => 0.5 - Math.random());
    setFeaturedFlavors(shuffledFlavors.slice(0, 3));

    const shuffledReviews = [...reviews].sort(() => 0.5 - Math.random());
    setFeaturedReviews(shuffledReviews.slice(0, 2));
  }, []);

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="main-section">
      <section className="about-section">
        <h2>About Sweet Scoop Ice Cream</h2>
        <p>
          Sweet Scoop Ice Cream is a family-owned business that has been serving delicious ice cream since 1990. 
          We pride ourselves on using only the freshest ingredients to create our unique flavors. Whether you’re in 
          the mood for a classic vanilla or something more adventurous like our "Chocolate Explosion", we have something 
          for everyone. Come visit us and treat yourself to a sweet scoop today!
        </p>
      </section>

      <section>
        <h2>Featured Flavors</h2>
        <div className="flavor-grid">
          {featuredFlavors.map((flavor) => (
            <div className="flavor-card" key={flavor.id}>
              <h3>{flavor.name}</h3>
              <p>{flavor.description}</p>
              <p className="price">Price: {flavor.price}</p>
              <img src={flavor.image} alt={flavor.name} />
            </div>
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <h2>Customer Reviews</h2>
        {featuredReviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.customerName}</h3>
            <p className="rating">Rating: {renderStars(review.rating)}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default MainSection;