import Image from 'next/image';
import { useEffect, useState } from 'react';
import './FileUploadModal.module.css';

/**
 * from https://tailwindcomponents.com/component/tailwind-css-file-upload
 * @param {onSubmit} function to call when form is submitted
 * @returns FileUploadModal html/jsx
 */
export default function FileUploadModal ( { onSubmit } )
{
  const [selectedFile, setSelectedFile] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false)

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])
    setIsFilePicked(true)
  }

  useEffect(() => {
    console.log(selectedFile)
  },[selectedFile])

  const handleSubmission = () => {

  }
  return (
    <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
      <div className="text-center">
        <h2 className="mt-5 text-3xl font-bold text-gray-900">
          Create your NFT!
        </h2>
        <p className="mt-2 text-sm text-gray-400">Please choose the original document of ownership for the NFT!</p>
      </div>
      <form action="submit" className="mt-8 space-y-3" onSubmit={ onSubmit }>
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide" htmlFor="name">Name</label>
          <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" id="nameInput" placeholder="My NFT name" type="" />
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide" htmlFor="description">Description</label>
          <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" id="descriptionInput" placeholder="Description of my NFT" type="" />
        </div>
        {isFilePicked && <div className="grid grid-cols-1 space-y-2">
          <div className="flex items-center justify-center w-full">
            <p> selectedFile: {selectedFile.name}</p>
          </div>
          </div>
          } 
        
          {!isFilePicked &&        
            <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide" htmlFor="file">Attach Document</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
              <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                {/* <!---<svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>-->*/}
                <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                  <Image alt="freepik image" className="has-mask h-36 object-center" height="338" src="/images/file-upload.jpg" width="338" />
                </div>
                <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or click here to select a file from your computer</p>
              </div>
              <input className="hidden" id="file" type="file" onChange={changeHandler}/>
            </label>
          </div>
          <p className="text-sm text-gray-300">
                <span>File type: PNG, JPEG images only</span>
              </p>
        </div>
        }
        <div>
          <button className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300" type="submit">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

FileUploadModal.defaultProps = {
  onSubmit: () => { console.warn( "onSubmit called but not defined for FileUploadModal" ); }
};

FileUploadModal.propTypes = {
  onSubmit: () => { }
};
