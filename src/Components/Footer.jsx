
function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white ">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">MyApp</h3>
              <p className="text-gray-400 text-sm">
                Building amazing experiences with modern web technologies.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Twitter</span>
                  <div className="h-6 w-6 bg-gray-600 rounded hover:bg-gray-500 transition-colors duration-200"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">GitHub</span>
                  <div className="h-6 w-6 bg-gray-600 rounded hover:bg-gray-500 transition-colors duration-200"></div>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 MyApp. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
