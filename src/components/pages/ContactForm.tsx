"use client";
import { Screen } from "@/@core/layout";
import { Button } from "@/components/ui/button";

import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";
import Header from "../layout/Header";

const ContactForm = () => {
  return (
    <section className=" inset-0 bg-gradient-to-r from-green-300 to-yellow-100 ">
      <Header />
      <Screen>
        <div className="grid lg:grid-cols-2 gap-12 items-start py-20">
          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we’ll get back to you shortly.
            </p>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                  placeholder="example@email.com"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                  placeholder="I want to know about..."
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-600">
                We’d love to hear from you. Whether you have a question,
                feedback, or just want to say hello – reach out anytime.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-green-600" />
                <span>umit@momsnaturalfoods.com.tr</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-green-600" />
                <span>+902122812801</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-green-600" />
                <span>
                  Güzeller OSB. Alp Tegin Sok. No:7 Gebze 41400 Kocaeli | TURKEY
                </span>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="250"
                loading="lazy"
                className="w-full h-64 border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </Screen>
    </section>
  );
};

export default ContactForm;
