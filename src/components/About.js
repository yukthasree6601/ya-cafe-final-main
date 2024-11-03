import React from "react";
// import { useSelector } from "react-redux"; // Import useSelector

export default function About() {
  // const theme = useSelector((store) => store.sidebar.theme); // Access theme from Redux

  return (
    <div className="about-container max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold">About Our Restaurant App</h1>
      <p
        className="text-gray-600 text-lg mb-6"
        // style={{ color: theme.subtextColor }}
      >
        Welcome to our Restaurant Finder App! Whether you're looking for a cozy
        place to grab a quick bite or an elegant dining experience, we have you
        covered. Our app allows you to discover the best restaurants around you
        with just a few clicks. We are passionate about food and bringing people
        together through the joy of dining.
      </p>
      <h2 className="text-2xl font-semibold">What We Offer</h2>
      <ul className="list-disc list-inside">
        <li>Browse through a variety of restaurants with diverse cuisines</li>
        <li>See ratings, price range, and reviews to make informed choices</li>
        <li>Use our advanced search to find restaurants by name or cuisine</li>
        <li>
          Get real-time updates on new and trending restaurants in your area
        </li>
      </ul>
      <h2 className="text-2xl font-semibold">Our Vision</h2>
      <p className="text-gray-600 text-lg mb-6">
        Our mission is to make it easier for you to find the perfect place to
        eat, whether you're planning a family dinner, catching up with friends,
        or trying out a new place. We aim to provide a user-friendly platform
        where you can discover and explore restaurant options in your city.
      </p>
      <h2 className="text-2xl font-semibold">How It Works</h2>
      <p className="text-gray-600 text-lg mb-6">
        Our app uses a combination of user ratings, restaurant data, and
        advanced filtering options to give you the most accurate and relevant
        results. You can search by restaurant name, cuisine type, and even
        specific locations to tailor your search.
      </p>
      <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
      <p className="text-gray-600 text-lg mb-6">
        We understand that food is more than just sustenance – it’s an
        experience. That's why we focus on offering detailed restaurant
        information, user reviews, and curated lists to help you discover the
        best dining spots. With our easy-to-use interface, finding your next
        meal has never been easier!
      </p>
      <h2 className="text-2xl font-semibold">Get in Touch</h2>
      <p className="text-gray-600 text-lg mb-6">
        Have questions or feedback? We’d love to hear from you! Reach out to us
        through our contact page or drop us an email at
        support@restaurantapp.com.
      </p>
    </div>
  );
}
