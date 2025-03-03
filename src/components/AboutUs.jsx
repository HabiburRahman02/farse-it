import img from '../assets/images/about.png'
const AboutUs = () => {
    return (
        <div className='bg-gradient-radial from-[#0c3b61] to-[#041e37]'>
            <div className="max-w-[1390px] mx-auto py-20 md:flex items-center gap-14 justify-between">
                <div className='md:w-1/2'>
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-400">About Us</h2>
                    <h2 className='text-3xl font-bold my-6'>🚀 Elevate Your Digital Presence with farseIT! 🌐</h2>
                    <h5 className='text-[23px] text-justify'>Discover innovation and expertise at the heart of farseIT's web development solutions. Tailored for your unique needs, we craft powerful e-commerce experiences, streamline school management, and optimize private company operations. At farseIT, we don‘t just build websites; we shape unforgettable digital experiences that propel your success. Explore our portfolio and embark on a journey to transform your vision into a vibrant digital reality. Ready to elevate your online presence? Let’s connect and make it happen! 🚀🌐</h5>
                </div>
                <div className='md:w-1/2'>
                    <img className='w-3/5 mx-auto' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;