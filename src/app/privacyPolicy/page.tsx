"use client";
export default function PrivacyPolicy() {
    return (
      <div className="max-w-3xl mx-auto py-10 px-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-white bg-teal-700 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
  
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
            <p className="mt-2">
              We collect personal information such as your name, email, and phone number when you sign up or place an order. 
              We also collect non-personal data like IP addresses and browsing history for analytics purposes.
            </p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mt-2">
              <li>To improve our services and customer experience.</li>
              <li>To process transactions and fulfill orders.</li>
              <li>To send marketing emails (with your consent).</li>
              <li>To comply with legal requirements.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">3. Third-Party Sharing</h2>
            <p className="mt-2">
              We do not sell your personal information. However, we may share data with third-party services like payment processors (PayPal, Stripe) and analytics tools (Google Analytics).
            </p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">4. Cookies & Tracking</h2>
            <p className="mt-2">
              We use cookies to enhance your browsing experience and gather insights on website usage. You can disable cookies in your browser settings.
            </p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">5. Your Rights</h2>
            <p className="mt-2">
              You have the right to access, update, or delete your personal information. If you have any concerns, you can contact us.
            </p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">6. Security Measures</h2>
            <p className="mt-2">
              We take appropriate security measures, including encryption and secure servers, to protect your data from unauthorized access.
            </p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">7. Contact Us</h2>
            <p className="mt-2">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2 font-semibold">Email: support@example.com</p>
          </section>
        </div>
      </div>
    );
  }
  