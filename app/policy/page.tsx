import Appbar from "@/component/appbar";
import Footer from "@/component/footer";

export default function Page() {
    return (
        <>
            <Appbar />

            <main className="min-h-screen bg-white  text-gray-800  py-20 px-6 sm:px-12 lg:px-24 transition-colors duration-300 mt-25">
                <section className="max-w-4xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="space-y-4 border-b border-gray-200 dark:border-gray-800 pb-8">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            Privacy Policy
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="space-y-10 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">

                        {/* Section 1 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Introduction</h2>
                            <p>
                                Welcome to <strong>B10 IT Solution</strong>. We are committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and protect your information when you engage with our software development and IT consultancy services.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Information We Collect</h2>
                            <p>To provide our consultancy and development services effectively, we may collect the following types of information:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 marker:text-gray-400">
                                <li><strong>Contact Information:</strong> Name, email address, phone number, and company details.</li>
                                <li><strong>Project Data:</strong> Technical specifications, source code access, server credentials, and business logic shared during the consultancy process.</li>
                                <li><strong>Usage Data:</strong> Information about how you interact with our website and digital platforms.</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. How We Use Your Information</h2>
                            <p>B10 IT Solution uses the collected data strictly for professional purposes, including:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 marker:text-gray-400">
                                <li>Delivering customized software development and IT consulting services.</li>
                                <li>Communicating project updates, billing, and technical support.</li>
                                <li>Improving our internal operations, website experience, and service offerings.</li>
                                <li>Complying with legal obligations and enforcing our terms of service.</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Data Security & Confidentiality</h2>
                            <p>
                                We implement industry-standard security measures, including encryption and secure server hosting, to protect your project data and personal information. As a consultancy firm, we strictly adhere to Non-Disclosure Agreements (NDAs) and ensure that your proprietary software logic and business data remain entirely confidential.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Sharing of Information</h2>
                            <p>
                                We do not sell, trade, or rent your personal or project data to third parties. We may only share information with trusted third-party service providers (such as cloud hosting platforms or deployment environments) necessary to execute your project, provided they adhere to strict confidentiality agreements.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Your Data Rights</h2>
                            <p>Depending on your jurisdiction, you have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 marker:text-gray-400">
                                <li>Request access to the personal data we hold about you.</li>
                                <li>Request corrections to inaccurate or incomplete information.</li>
                                <li>Request the deletion of your personal or project data post-contract, subject to legal and operational retention requirements.</li>
                            </ul>
                        </div>

                        {/* Section 7 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Changes to This Policy</h2>
                            <p>
                                We may update our Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page with an updated &quot;Effective Date.&quot;
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div className="space-y-4 mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">8. Contact Us</h2>
                            <p>
                                If you have any questions or concerns about this Privacy Policy or how your data is handled, please reach out to us.
                            </p>
                            <div className="mt-4 text-gray-600 dark:text-gray-400">
                                <p><strong>B10 IT Solution</strong></p>
                                <p>Email: beautyofficialindia@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}