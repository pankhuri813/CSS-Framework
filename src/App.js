export default function App(){
  return(
    <div>
    <nav className="flex items-center justify-between bg-red-400 p-6">
      <div className="flex items-center  text-white mr-6">
        <span className="font-bold text-xl">Kalvium</span>
      </div>

      <div className="w-full justify-between  sm:flex sm:items-center ">
        <div className="text">
          <a href="#" className="hover:text-white mr-4 text-gray-500">
            About Us
          </a>
          <a href="#" className="hover:text-white mr-4 text-gray-500">
           Contacts
          </a>
          <a href="#" className="hover:text-white mr-4 text-gray-500">
            Courses
          </a>
        </div>
        <div>
          <a href="#" className="flex text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white  ">
            Login</a>
        </div>
      </div>
    </nav>

    <div className="container mt-5  px-2">
      <button className=" hover:ease-in hover:scale-125 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
       Button One
      </button>

      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5" role="alert">
        <strong className="font-bold">Alert!</strong>
        <span className="flex-column"> This is awesome!</span>
      </div>
    </div>
    <div className="justify-center flex p-6 bg-white ">
      <div className="flex border border-red-400 p-6 rounded hover:scale-125 hover:transition duration-150 ease-in">
     
      <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" className="h-12 w-12" />
      
      <div className="ml-6 ">
        <h4 className="text-xl text-gray-900">Kavlium Store</h4>
        <p className="text-base text-gray-600">You have a new course!</p>
      </div>
    </div>
    </div>

    <footer className="bg-gray-200">
      <div className="text-gray-700 text-center p-4">
        © 2021 Copyright:
        Kalvium
     </div>
    </footer>
  </div>
  )
}