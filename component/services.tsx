import { Card, CardHeader, CardTitle, CardDescription, CardSkelton } from "./card";
import { FaLaptopCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import PhoneMockup from "./phonemockup";
import MacbookIllustration from "./macbook-illustration";
import Isometric from "./isometric";

export default function Page() {
    return (
        <>
            <div className="max-w-7xl mx-auto border border-neutral-200 bg-gray-100 min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-y divide-neutral-200 ">
                    <Card>
                        <CardHeader>
                            <FaLaptopCode />
                            <CardTitle>Web app development</CardTitle>
                        </CardHeader>
                        <CardDescription>
                            From intricate SaaS platforms to elegant corporate sites, we build fast, secure, and scalable web ecosystems that convert.
                        </CardDescription>
                        <CardSkelton>
                            <div className="h-full w-full">
                                <MacbookIllustration className="mt-4" />
                            </div>
                        </CardSkelton>
                    </Card>
                    <Card>
                        <CardHeader>
                            <FaMobileAlt />
                            <CardTitle>Mobile app development</CardTitle>
                        </CardHeader>
                        <CardDescription>
                            Your vision, in the palm of their hand.
                        </CardDescription>
                        <CardSkelton className="mt-10">
                            <div className="w-full h-full ">
                                <PhoneMockup />
                            </div>
                        </CardSkelton>
                    </Card>
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <FaRocket />
                            <CardTitle>Custom Software Solutions</CardTitle>
                        </CardHeader>
                        <CardDescription>
                            We develop bespoke enterprise software that automates workflows, eliminates bottlenecks, and fuels organizational growth.
                        </CardDescription>
                        <CardSkelton className="min-h-96 h-auto pb-6">
                            <div className="h-full w-full mt-6">
                                <Isometric />
                            </div>
                        </CardSkelton>
                    </Card>

                </div>


            </div>
        </>
    )
}