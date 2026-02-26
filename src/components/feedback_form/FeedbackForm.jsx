import React, { useState } from "react";
import "./FeedbackForm.css";




const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
            Name: ${formData.name}
            Email: ${formData.email}
            Feedback: ${formData.feedback}
            Rating: ${formData.rating}`;

    const isConfirmed = window.confirm(
      `Please confirm your feedback:\n${confirmationMessage}`,
    );
    if (isConfirmed) {
      console.log("Feedback submitted:", formData);
      setFormData({
        name: "",
        email: "",
        feedback: "",
        rating: "",
      });
    } else {
      alert("Thank you for your valuable feedback!");
    }
  };

  return (
    <>
      <nav>Tell Us What You Think</nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>Feedback Form</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        ></textarea>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <span>Rate Us:</span>
          <p>
            <input
              type="radio"
              name="rating"
              value="1"
              onChange={handleChange}
            />{" "}
            1
          </p>
          <p>
            {" "}
            <input
              type="radio"
              name="rating"
              value="2"
              onChange={handleChange}
            />{" "}
            2
          </p>
          <p>
            {" "}
            <input
              type="radio"
              name="rating"
              value="3"
              onChange={handleChange}
            />{" "}
            3
          </p>
          <p>
            {" "}
            <input
              type="radio"
              name="rating"
              value="4"
              onChange={handleChange}
            />{" "}
            4
          </p>
          <p>
            <input
              type="radio"
              name="rating"
              value="5"
              onChange={handleChange}
            />{" "}
            5
          </p>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
