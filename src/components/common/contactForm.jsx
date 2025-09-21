import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./styles/contactForm.css";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			// Create mailto link with form data
			const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
			const body = encodeURIComponent(
				`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
			);
			const mailtoLink = `mailto:kumarpandeygourav@gmail.com?subject=${subject}&body=${body}`;
			
			// Open email client
			window.location.href = mailtoLink;
			
			// Reset form
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
			
			setSubmitStatus("success");
		} catch (error) {
			console.error("Error:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="contact-form-container">
			<div className="contact-form-header">
				<h2>Send Me a Message</h2>
				<p>Fill out the form below and I'll get back to you as soon as possible!</p>
			</div>
			
			<form onSubmit={handleSubmit} className="contact-form">
				<div className="form-row">
					<div className="form-group">
						<label htmlFor="name">Full Name *</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							placeholder="Your full name"
							className="form-input"
						/>
					</div>
					
					<div className="form-group">
						<label htmlFor="email">Email Address *</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							placeholder="your.email@example.com"
							className="form-input"
						/>
					</div>
				</div>
				
				<div className="form-group">
					<label htmlFor="subject">Subject</label>
					<input
						type="text"
						id="subject"
						name="subject"
						value={formData.subject}
						onChange={handleChange}
						placeholder="What's this about?"
						className="form-input"
					/>
				</div>
				
				<div className="form-group">
					<label htmlFor="message">Message *</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						placeholder="Tell me about your project, question, or just say hello!"
						className="form-textarea"
						rows="6"
					/>
				</div>
				
				<button
					type="submit"
					disabled={isSubmitting}
					className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
				>
					{isSubmitting ? (
						<>
							<FontAwesomeIcon icon={faSpinner} className="spinner" />
							Opening Email Client...
						</>
					) : (
						<>
							<FontAwesomeIcon icon={faPaperPlane} />
							Send Message
						</>
					)}
				</button>
				
				{submitStatus === "success" && (
					<div className="status-message success">
						Your email client should open shortly with the message pre-filled!
					</div>
				)}
				
				{submitStatus === "error" && (
					<div className="status-message error">
						Something went wrong. Please try again or email me directly at kumarpandeygourav@gmail.com
					</div>
				)}
			</form>
		</div>
	);
};

export default ContactForm;