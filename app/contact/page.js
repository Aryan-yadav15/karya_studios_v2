'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <section className="section hero">
        <div className="container _840px">
          <div className="content">
            <div className="align-center">
              <motion.div
                className="heading-block contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-02">
                  Let&rsquo;s create something{' '}
                  <em className="heading-02 lora contact" style={loraStyle}>
                    special
                  </em>
                </h2>
                <div className="contact-emoji-sticker">
                  <Image
                    src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bb352d5b1084aead10271f_Emoji%20Icon.svg"
                    alt=""
                    width={80}
                    height={80}
                    unoptimized
                  />
                </div>
              </motion.div>
            </div>

            <div className="space-60px" />

            <div className="contact-form-block w-form">
              {sent ? (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div>Thanks! We&rsquo;ll be in touch within a business day.</div>
                </motion.div>
              ) : (
                <form className="contact-form-wrapper" onSubmit={onSubmit}>
                  <div className="contact-text-field-wrapper">
                    <div className="contact-text-field-content">
                      <div className="contact-text-field-block">
                        <div>First name</div>
                        <div className="space-16px" />
                        <input
                          className="contact-text-field"
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={update('firstName')}
                          required
                        />
                      </div>
                      <div className="contact-text-field-block">
                        <div>Last name</div>
                        <div className="space-16px" />
                        <input
                          className="contact-text-field"
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={update('lastName')}
                          required
                        />
                      </div>
                    </div>

                    <div className="contact-text-field-content">
                      <div className="contact-text-field-block">
                        <div>Email</div>
                        <div className="space-16px" />
                        <input
                          className="contact-text-field"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={update('email')}
                          required
                        />
                      </div>
                      <div className="contact-text-field-block">
                        <div>Phone number</div>
                        <div className="space-16px" />
                        <input
                          className="contact-text-field"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={update('phone')}
                        />
                      </div>
                    </div>

                    <div className="contact-text-field-block">
                      <div>Choose a topic</div>
                      <div className="space-16px" />
                      <select
                        className="select-field"
                        name="topic"
                        value={form.topic}
                        onChange={update('topic')}
                        required
                      >
                        <option value="">Select one...</option>
                        <option value="first">First choice</option>
                        <option value="second">Second choice</option>
                        <option value="third">Third choice</option>
                      </select>
                    </div>

                    <div className="contact-text-field-block">
                      <div>Message</div>
                      <div className="space-16px" />
                      <textarea
                        className="contact-textarea"
                        name="message"
                        maxLength={5000}
                        value={form.message}
                        onChange={update('message')}
                      />
                    </div>
                  </div>

                  <div className="space-40px" />

                  <div className="align-left">
                    <input
                      type="submit"
                      className="contact-submit-button w-button"
                      value="Send message"
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSlider />
    </main>
  );
}
