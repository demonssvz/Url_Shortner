// import * as React from "react";
// import axios from "axios";
// import { serverUrl } from "../../helpers/Constants";

// interface IFormContainerProps {
//   updateReloadState: () => void;
// }

// const FormContainer: React.FunctionComponent<IFormContainerProps> = ({ updateReloadState }) => {
//   const [fullUrl, setFullUrl] = React.useState<string>("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${serverUrl}/shorturl`, { fullUrl });
//       setFullUrl("");
//       updateReloadState();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <div className="relative bg-gray-900 bg-opacity-75 rounded-xl p-10 shadow-lg backdrop-blur-md animate-fadeIn">
//         <h2 className="text-white text-4xl text-center font-semibold pb-3">URL Shortener</h2>
//         <p className="text-gray-300 text-center pb-3 text-lg font-light">
//           Paste your long link below and make it short!
//         </p>
//         <p className="text-gray-400 text-center pb-6 text-sm">
//           A simple and free tool to generate short, clean links instantly.
//         </p>
        
//         {/* Form */}
//         <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4">
//           <div className="relative w-full">
//             <input
//               type="url"
//               placeholder="Enter your long URL"
//               required
//               className="block w-full px-5 py-3 text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-300"
//               value={fullUrl}
//               onChange={(e) => setFullUrl(e.target.value)}
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full md:w-auto px-6 py-3 text-white bg-blue-600 rounded-lg font-medium transition duration-300 transform hover:scale-105 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 focus:outline-none"
//           >
//             Shorten URL
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormContainer;


import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";
import { FaLink } from "react-icons/fa"; // Import link icon

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = ({ updateReloadState }) => {
  const [fullUrl, setFullUrl] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shorturl`, { fullUrl });
      setFullUrl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-3 py-20">
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-925 rounded-xl p-10 shadow-lg backdrop-blur-md animate-fadeIn">
        {/* Icon & Title */}
        <div className="flex flex-col items-center justify-center pb-6">
          <FaLink className="text-blue-400 text-5xl mb-2" /> {/* Link Icon */}
          <h2 className="text-white text-4xl font-semibold pb-2">URL Shortener</h2>
          <p className="text-gray-300 text-lg font-light text-center">
            Paste your long link below and make it short!
          </p>
          <p className="text-gray-400 text-sm text-center">
            A simple and free tool to generate short, clean links instantly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full">
            <input
              type="url"
              placeholder="Enter your long URL"
              required
              className="block w-full px-5 py-3 text-white border border-black rounded-lg bg-black focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              value={fullUrl}
              onChange={(e) => setFullUrl(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 text-white bg-blue-950 rounded-lg font-medium transition duration-300 transform hover:scale-105 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Shorten URL
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContainer;

