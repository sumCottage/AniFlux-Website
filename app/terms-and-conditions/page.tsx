import React from "react";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)]">
            <main className="max-w-4xl mx-auto px-6 py-24">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Terms & Conditions
                </h1>

                <div className="space-y-8 text-neutral-300 leading-relaxed">
                    <p className="text-lg">
                        Last updated: 2026
                    </p>

                    <p>
                        By downloading, accessing, or using the AniFlux mobile application (“App”), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the App.
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Use of the App</h2>
                        <p className="mb-2">AniFlux is provided for personal, non-commercial use only.</p>
                        <p className="mb-2">You agree to use the App in a lawful manner and not for any prohibited or unauthorized purpose.</p>
                        <p className="mb-2">You must not:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Attempt to reverse engineer or modify the App</li>
                            <li>Abuse or overload the backend services</li>
                            <li>Use the App in a way that violates any applicable laws</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. User Accounts</h2>
                        <p className="mb-2">To access certain features, you may be required to sign in.</p>
                        <p className="mb-2">You are responsible for:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Maintaining the confidentiality of your account</li>
                            <li>All activities that occur under your account</li>
                        </ul>
                        <p className="mt-2 text-neutral-400">We reserve the right to suspend or terminate accounts that violate these Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Data & Privacy</h2>
                        <p className="mb-2">Your use of AniFlux is also governed by our Privacy Policy.</p>
                        <p className="mb-2">By using the App, you consent to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>The collection and storage of data necessary to provide app functionality</li>
                            <li>Secure storage of your data using third-party services</li>
                        </ul>
                        <p className="mt-2">For more details, please refer to the <a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a>.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Services & Content</h2>
                        <p className="mb-2">AniFlux uses third-party services to function properly, including:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Authentication and cloud storage services</li>
                            <li>External APIs to retrieve anime data</li>
                        </ul>
                        <p className="mt-4">
                            Anime data is provided by the AniList API. AniFlux is not affiliated with or endorsed by AniList.
                        </p>
                        <p className="mt-2 text-neutral-400">We are not responsible for the accuracy or availability of third-party content.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
                        <p className="mb-2">All app branding, design, and original content belong to AniFlux or its developer.</p>
                        <p>Anime titles, images, and metadata belong to their respective owners and are used for informational purposes only.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
                        <p className="mb-2">AniFlux is provided “as is” without warranties of any kind.</p>
                        <p className="mb-2">We are not liable for:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Data loss</li>
                            <li>Service interruptions</li>
                            <li>Any damages resulting from use or inability to use the App</li>
                        </ul>
                        <p className="mt-2 font-medium">Use of the App is at your own risk.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Termination</h2>
                        <p className="mb-2">We reserve the right to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Suspend or terminate access to the App at any time</li>
                            <li>Remove user accounts that violate these Terms</li>
                        </ul>
                        <p className="mt-2">You may stop using the App at any time.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to These Terms</h2>
                        <p className="mb-2">These Terms may be updated occasionally.</p>
                        <p>Continued use of the App after changes means you accept the updated Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Contact</h2>
                        <p>
                            If you have questions about these Terms, please contact the developer using the support email listed on the app’s store page.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
