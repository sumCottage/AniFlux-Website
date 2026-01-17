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
                        Last updated: January 2026
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="p-2 bg-blue-600/10 rounded-full text-blue-400">
                                {/* Material Icon equivalent: data_usage (database) */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
                            </span>
                            Data Collection
                        </h2>
                        <p className="pl-14">
                            AniFlux collects only the minimum data required for the app to function. This includes your saved anime lists, watch progress, and app preferences. Account-related information is collected only for authentication purposes and is not used for advertising or marketing.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="p-2 bg-blue-600/10 rounded-full text-blue-400">
                                {/* Material Icon equivalent: cloud_queue */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19" /><path d="M5 20h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1" /><path d="M10 9a5 5 0 0 1 5 5v2" /></svg>
                            </span>
                            Data Storage & Security
                        </h2>
                        <p className="pl-14">
                            Your data is securely stored using Firebase services, including Firestore and Firebase Authentication. Backend operations are handled using Appwrite Cloud Functions. Reasonable security measures are in place to protect your data from unauthorized access.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="p-2 bg-blue-600/10 rounded-full text-blue-400">
                                {/* Material Icon equivalent: link */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                            </span>
                            Third-Party Services
                        </h2>
                        <p className="pl-14">
                            AniFlux uses third-party services to provide core functionality. Anime information is retrieved using the AniList API. Firebase is used for authentication and data storage, and Appwrite is used for backend processing. These services operate under their own privacy policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="p-2 bg-blue-600/10 rounded-full text-blue-400">
                                {/* Material Icon equivalent: shield */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </span>
                            Your Rights
                        </h2>
                        <p className="pl-14">
                            You have the right to access and delete your data at any time. You may request account and data deletion by using the in-app options or by contacting the developer. Upon request, your data will be permanently removed within a reasonable timeframe.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="p-2 bg-blue-600/10 rounded-full text-blue-400">
                                {/* Material Icon equivalent: email */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </span>
                            Contact
                        </h2>
                        <p className="pl-14">
                            If you have any questions or concerns regarding privacy or data usage, you can contact us at{" "}
                            <a href="mailto:aniflux.dev@gmail.com" className="text-blue-400 hover:underline">
                                aniflux.dev@gmail.com
                            </a>
                            . You may also report issues or request support via the AniFlux GitHub repository.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
