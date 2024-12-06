import image from "../assets/images/banner.png"; // About page banner image

function About() {
  return (
    <div className='w-11/12 mx-auto'>
      {/* Hero Section */}
      <div className='grid grid-cols-12 gap-5 mb-[60px]'>
        <div className='col-span-9'>
          <div className='grid grid-cols-12 gap-7'>
            <div className='col-span-6 mt-20 ml-10'>
              <h1 className='text-3xl font-bold mb-4'>About Tauba-Shop</h1>
              <p className='mb-4'>
                Taqwa-Shop is your one-stop destination for high-quality products at unbeatable prices.
                We are committed to providing a seamless shopping experience for all our customers.
              </p>
              <button className='bg-green-600 text-white px-6 py-3 rounded'>Contact Us</button>
            </div>
            <div className='col-span-6'>
              <img src={image} className='h-[450px] w-full' alt="About Us Banner" />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default About;
