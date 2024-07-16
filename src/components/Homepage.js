import React from 'react';
import { Link } from 'react-router-dom';
import {
  CreditCardIcon,
  ShieldCheckIcon,
  LightningBoltIcon,
  CashIcon,
  CogIcon,
  ChartBarIcon,
  UserGroupIcon,
  MenuIcon
} from '@heroicons/react/outline';

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <CreditCardIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">PayGateway</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <Link to="/" className="btn btn-secondary"> {/* Example link to another route */}
            Get Started
          </Link>
        </nav>
        <button className="btn btn-outline btn-icon md:hidden">
          <MenuIcon className="h-6 w-6" />
        </button>
      </header>
      <section className="bg-primary py-16 px-6 text-primary-foreground">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Secure and Reliable Payment Gateway</h1>
            <p className="text-lg">
              Streamline your online payments with our cutting-edge payment gateway. Trusted by businesses of all sizes.
            </p>
            <div className="flex gap-4">
              <Link to="/get-started" className="btn">Get Started</Link>
              <Link to="/learn-more" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={600} height={400} alt="Payment Gateway" className="rounded-lg" />
        </div>
      </section>
      <section id="features" className="bg-muted py-16 px-6">
        <div className="container mx-auto max-w-5xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <p className="text-muted-foreground text-lg">
              Discover the powerful features that make our payment gateway the best choice for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <ShieldCheckIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold mt-4">Secure Payments</h3>
              <p className="text-muted-foreground mt-2">
                Our payment gateway uses industry-leading security measures to protect your customers' sensitive information.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <LightningBoltIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold mt-4">Fast Transactions</h3>
              <p className="text-muted-foreground mt-2">
                Experience lightning-fast payment processing with our optimized infrastructure and advanced algorithms.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <CashIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold mt-4">Multiple Payment Options</h3>
              <p className="text-muted-foreground mt-2">
                Offer your customers a wide range of payment methods, including credit/debit cards, digital wallets, and more.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <CogIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold mt-4">Customizable Integration</h3>
              <p className="text-muted-foreground mt-2">
                Seamlessly integrate our payment gateway into your existing platform with our flexible and developer-friendly API.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <ChartBarIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold mt-4">Robust Reporting</h3>
              <p className="text-muted-foreground mt-2">
                Access detailed transaction reports and analytics to gain valuable insights into your business's financial performance.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <UserGroupIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold mt-4">Dedicated Support</h3>
              <p className="text-muted-foreground mt-2">
                Our team of experts is available 24/7 to provide personalized support and ensure your success.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="bg-primary text-primary-foreground py-16 px-6">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 items-center">
          <img src="/placeholder.svg" width={600} height={400} alt="About Us" className="rounded-lg" />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About PayGateway</h2>
            <p className="text-lg">
              PayGateway is a leading payment gateway provider, dedicated to empowering businesses of all sizes with
              secure and reliable payment solutions. Our team of experts has years of experience in the fintech
              industry, and we are committed to delivering innovative products and exceptional customer service.
            </p>
            <p className="text-lg">
              At PayGateway, we believe that seamless and secure payments are the foundation of a thriving online
              business. That's why we've developed a cutting-edge payment gateway that combines advanced security
              features, lightning-fast transaction processing, and a user-friendly interface to help our clients
              succeed.
            </p>
            <button className="btn btn-outline">Meet the Team</button>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-muted py-16 px-6">
        <div className="container mx-auto max-w-5xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">
              Have a question or need help? Fill out the form below and our team will get back to you.
            </p>
          </div>
          <form className="bg-background rounded-lg p-8 shadow-sm grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" placeholder="Enter your name" className="input" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Enter your email" className="input" />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input id="phone" placeholder="Enter your phone number" className="input" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Enter your message" rows={5} className="textarea" />
              </div>
              <button type="submit" className="btn w-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer className="bg-primary text-primary-foreground py-6 px-6">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCardIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">PayGateway</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
