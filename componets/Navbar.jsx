import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
  };

  const handleCloseModal = () => {
    setShowContact(false);
  };

  return (
    <div>
      <div className="navbar bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg text-white">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-2xl font-semibold hover:text-yellow-300 transition duration-300"
          >
            My Portfolio
          </Link>
        </div>
        <div className="flex-none space-x-4">
          <Link
            href="/admin"
            className="btn btn-ghost text-xl hover:text-yellow-300 transition duration-300"
          >
            Admin
          </Link>
          <button
            onClick={handleContactClick}
            className="btn btn-ghost text-xl hover:bg-yellow-300 hover:text-gray-900 transition duration-300"
          >
            Contact
          </button>
        </div>
      </div>

      {showContact && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
            <p className="text-lg mb-4">
              <strong>Name:</strong> Mohamed Bulhan
            </p>
            <p className="text-lg mb-4">
              <strong>Email:</strong> mohamed.bulhan@chasacademy.se
            </p>
            <p className="text-lg mb-4">
              <strong>Phone:</strong> 0739747863
            </p>
            <button
              onClick={handleCloseModal}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}