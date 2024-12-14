import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

function Footer() {
  return (
    <div className="bg-gray-800 text-white pt-8 pb-4">
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* About Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-sm sm:text-base">
            Taqwa-Shop is a trusted online shopping platform, offering a wide variety of quality products at affordable prices. 
            We ensure excellent customer service and a seamless shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-red-500">Home</a></li>
            <li><a href="/about" className="hover:text-red-500">About Us</a></li>
            <li><a href="/shop" className="hover:text-red-500">Shop</a></li>
            <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
            <li><a href="/privacy" className="hover:text-red-500">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p>Email: support@taqwashop.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-red-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-red-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-red-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-red-500" />
            </a>
          </div>
          
          {/* Subscribe Section */}
          <div className='flex flex-col sm:flex-row justify-start items-center mt-6 space-y-3 sm:space-y-0 sm:space-x-4'>
            <input type="text" placeholder='Write Something' className='p-2 border-2 rounded-md w-full sm:w-auto' />
            <button className='px-4 py-[0.5rem] border-2 bg-red-600 rounded-md'>Submit</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 border-t pt-4 text-sm">
        <p>&copy; 2024 Taqwa-Shop. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
