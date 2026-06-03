import Appbar from "@/component/appbar";
import Footer from "@/component/footer";
import { Group } from "@/component/Utility/Group";
import { Input } from "@/component/Utility/Input";
import { Label } from "@/component/Utility/Label";


export default function Page() {
    return (<>
        <Appbar />
        <div className='w-full min-h-screen flex items-center justify-center bg-gray-50re  p-6'>

            <div className='w-full max-w-2xl bg-white rounded-xl shadow-lg border border-gray-200 p-8 mt-20'>

                <div className='mb-5'>
                    <h2 className='text-2xl font-bold text-gray-800 font-prata'>Contact Us</h2>
                    <p className='text-gray-500'>Please fill out the form below to get in touch.</p>
                    <p className="text-gray-500 font-semibold font-openSans"> <span className="text-red-600">*</span> indicate required</p>
                </div>

                <form className='grid grid-cols-1 gap-6'>

                    <Group className="flex flex-col gap-2">
                        <Label className="text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                            Name
                        </Label>
                        <Input
                            type='text'
                            name='name'
                            placeholder='Enter your name'
                            className="w-full"
                            required
                        />
                    </Group>

                    <Group className="flex flex-col gap-2">
                        <Label className="text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                            Email
                        </Label>
                        <Input
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            className="w-full"
                            required
                        />
                    </Group>

                    <Group className="flex flex-col gap-2">
                        <Label className="text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                            Contact number
                        </Label>
                        <Input
                            type='text'
                            name='number'
                            placeholder='Enter your contact number'
                            className="w-full"
                            required
                        />
                    </Group>

                    <Group className="flex flex-col gap-2">
                        <Label className="text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                            Message
                        </Label>

                        <textarea
                            name='message'
                            placeholder='Write briefly about your work'
                            required
                            rows={4}
                            className="w-full px-3 py-2 bg-gray-50 border-gray-300 rounded-md shadow-sm 
                                     placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 border focus:border-neutral-300 focus:bg-neutral-100 transition-all resize-none"

                        />
                    </Group>

                    <button
                        type="submit"
                        className="mt-2 w-full bg-linear-to-t from-[#28288d] to-[#505086] text-white
                                text-shadow-lg text-shadow-black/2 text-lg py-3 px-6 rounded-lg 
                                transition duration-150 active:scale-[0.98] cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
        <Footer />
    </>)
}