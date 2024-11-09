import React from 'react'

function InitialInfo() {
  return (
<>
<div className="bg-gray-900 text-white p-8 md:p-16 flex flex-col items-center">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Get Paid</span> to<br />
            Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">The World</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Your Ultimate Guide to turning your love for travel into a sustainable income stream!
          </p>

          {/* Features */}
          <div className="flex flex-wrap space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="text-white">🎥</span>
              <span>3+ Hours of Content</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white">📚</span>
              <span>9+ Modules</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white">🔍</span>
              <span>Tested framework for success</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white">🔒</span>
              <span>Lifetime Access</span>
            </div>
          </div>

          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
            Explore courses
          </button>

          {/* Ratings */}
          <div className="flex items-center space-x-2 mt-6">
            <div className="flex -space-x-2">
              <img src="https://via.placeholder.com/32" alt="Profile 1" className="w-8 h-8 rounded-full border-2 border-gray-900" />
              <img src="https://via.placeholder.com/32" alt="Profile 2" className="w-8 h-8 rounded-full border-2 border-gray-900" />
              <img src="https://via.placeholder.com/32" alt="Profile 3" className="w-8 h-8 rounded-full border-2 border-gray-900" />
            </div>
            <span className="text-white font-semibold">15k+ Average ratings</span>
            <span className="text-yellow-400">★★★★★</span>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Profile"
            className="w-64 h-64 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Struggle Section */}
      <div className="w-full max-w-6xl mt-16">
        <h2 className="text-center text-gray-500 text-lg mb-4">
          Do you struggle with unlocking the
        </h2>
        <h3 className="text-center text-2xl md:text-3xl font-semibold mb-8">
          Art of turning your love for travel into a sustainable income
        </h3>

        {/* Struggle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { emoji: "🌍", text: "You want to explore the world and get paid for it?" },
            { emoji: "💼", text: "You want to build a new career in travel" },
            { emoji: "💸", text: "You want to get sponsors to pay for your trips" },
            { emoji: "👤", text: "You want to build a strong personal brand" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 border border-pink-500 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300"
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-white">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
</>
  )
}

export default InitialInfo