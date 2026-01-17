import React from "react";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)]">
            <main className="max-w-4xl mx-auto px-6 py-24">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Privacy Policy
                </h1>

                <div className="space-y-8 text-neutral-300 leading-relaxed">
                    <p className="text-lg">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                        <p>
                            Welcome to AniFlux. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website
                            or use our application and tell you about your privacy rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Data We Collect</h2>
                        <p>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><strong>Identity Data:</strong> includes username or similar identifier.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services (e.g., anime tracking history).</li>
                            <li><strong>Device Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>To provide the AniFlux service to you (tracking anime).</li>
                            <li>To improve our website and services.</li>
                            <li>To recommend content based on your interests.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at support@aniflux.com.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
