import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
      <div className="text-center">
        {/* Angka 404 Besar */}
        <h1 className="text-9xl font-bold text-indigo-600">404</h1>
        
        {/* Teks Pesan */}
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-600 mt-2 mb-8">
          Maaf, halaman yang kamu cari tidak tersedia atau telah dihapus.
        </p>

        {/* Tombol Kembali Sederhana */}
        <Link
          to="/"
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md"
        >
          Kembali ke Beranda
        </Link>
      </div>

      {/* Ilustrasi Sederhana */}
      <div className="mt-12 text-gray-300">
        <svg
          className="w-24 h-24 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

// PERBAIKAN DI SINI: Jangan pakai < >
export default NotFound;