"use client";
import React, { useState } from 'react';
import ImageCard from '../components/ImageCard';
import Swal from 'sweetalert2';
import './page.scss' ;

const VoteBPH: React.FC = () => {
  const [candidate, setCandidate] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCardClicked = (candidateNumber: string) => {
    setCandidate(candidateNumber);
  };

  const handleNext = () => {
    let calon: string;

    if (candidate === '1') {
      calon = 'Arkam Emilul Fata';
    } else if (candidate === '2') {
      calon = 'Daniel Timothy Natanael Sihombing';
    } else if (candidate === '3') {
      calon = 'Kotak kosong';
    } else {
      // Handle other cases or show an error message
      Swal.fire({
        title: 'Pilihan Tidak Valid',
        text: 'Mohon pilih kandidat yang valid.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return; // Stop execution if the candidate is not valid
    }
  
    Swal.fire({
      title: 'Anda memilih ' + calon ,
      text: 'Apakah Anda yakin dengan pilihan Anda?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      footer : 'setelah menekan "Ya", Anda tidak bisa kembali ke page ini'
    }).then((result) => {
      if (result.isConfirmed) {
        // If user confirms, fetch data
        handleFetch();
      }
    });
  };
  
  const handleFetch = () => {
    if (candidate) {
      setLoading(true); // Set loading to true before the fetch

      // Replace the URL with your actual API endpoint
      fetch(`https://example-api.com/candidates/${candidate}`)
        .then((response) => response.text())
        .then((data) => {
          console.log('Fetched data:', data);
          setLoading(false); // Set loading to false after successful fetch
          
          // Display success message
          Swal.fire({
            title: 'Fetch Successful',
            text: 'Data has been successfully fetched!',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          
          // Handle the fetched data as needed
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false); // Set loading to false after fetch error
          
          // Display error message
          Swal.fire({
            title: 'Fetch Error',
            text: 'Failed to fetch data. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Anda belum memilih",
      });
    }
  };

  return (
    <div className='flex flex-col flex-shrink items-center space-y-12'>
      <h1 className="mb-4 text-3xl font-extrabold  md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-yellow-100">
          Pemilihan BPH
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className='shrink'>
          <ImageCard
            src="/images/arkan1.jpg"
            nama="Arkam Emilul Fata"
            nim="12021025"
            handleClick={() => handleCardClicked('1')}
            selected={candidate === '1'}
          />
        </div>
        <div className='shrink'>
          <ImageCard
            src="/images/timoy2.jpg"
            nama="Daniel Timothy Natanael Sihombing"
            nim="12021041"
            handleClick={() => handleCardClicked('2')}
            selected={candidate === '2'}
          />
        </div>
        <div className='shrink'>
          <ImageCard
            src="/images/emptyBox.jpg"
            nama="Kotak Kosong"
            nim="-"
            handleClick={() => handleCardClicked('3')}
            selected={candidate === '3'}
          />
        </div>
      </div>
        <button onClick={handleNext} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
         focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
          Next
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </button>
    </div>
  );
};

export default VoteBPH;
