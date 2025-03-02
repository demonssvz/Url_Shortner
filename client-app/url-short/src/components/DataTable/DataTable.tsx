// // // import * as React from "react";
// // // import { UrlData } from "../../interface/UrlData";
// // // import { Link } from "react-router-dom";
// // // import { serverUrl } from "../../helpers/Constants";
// // // import axios from "axios";

// // // interface IDataTableProps {
// // //   data: UrlData[];
// // //   updateReloadState: () => void;
// // // }

// // // const DataTable: React.FunctionComponent<IDataTableProps> = ({ data, updateReloadState }) => {
// // //   const [copied, setCopied] = React.useState<string | null>(null); // State for copied notification

// // //   const copyToClipboard = async (url: string) => {
// // //     try {
// // //       await navigator.clipboard.writeText(`${serverUrl}/shortUrl/${url}`);
// // //       setCopied(url); // Show copied notification
// // //       setTimeout(() => setCopied(null), 2000); // Hide after 2 seconds
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mx-auto pt-4 pb-10 relative">
// // //       {/* Copy Notification */}
// // //       {copied && (
// // //         <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md animate-fadeIn">
// // //           ✅ Copied to clipboard!
// // //         </div>
// // //       )}

// // //       <div className="relative overflow-hidden shadow-md sm:rounded-lg">
// // //         <table className="w-full text-sm text-left text-gray-400 bg-gray-900 border border-gray-800 rounded-lg">
// // //           <thead className="text-md uppercase bg-gray-800 text-gray-300">
// // //             <tr>
// // //               <th scope="col" className="px-6 py-3 w-6/12">Full URL</th>
// // //               <th scope="col" className="px-6 py-3 w-3/12">Short URL</th>
// // //               <th scope="col" className="px-6 py-3">Clicks</th>
// // //               <th scope="col" className="px-6 py-3 text-center">Action</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {data.map((item) => (
// // //               <tr
// // //                 key={item._id}
// // //                 className="border-b border-gray-700 hover:bg-gray-800 transition duration-200"
// // //               >
// // //                 <td className="px-6 py-4 break-words">
// // //                   <Link
// // //                     to={item.fullUrl}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                     className="text-blue-400 hover:underline"
// // //                   >
// // //                     {item.fullUrl}
// // //                   </Link>
// // //                 </td>
// // //                 <td className="px-6 py-4">
// // //                   <Link
// // //                     to={`${serverUrl}/shortUrl/${item.shortUrl}`}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                     className="text-green-400 hover:underline"
// // //                   >
// // //                     {item.shortUrl}
// // //                   </Link>
// // //                 </td>
// // //                 <td className="px-6 py-4 text-center font-semibold">{item.clicks}</td>
// // //                 <td className="px-6 py-4 flex justify-center space-x-4">
// // //                   {/* Copy Button */}
// // //                   <button
// // //                     onClick={() => copyToClipboard(item.shortUrl)}
// // //                     className="p-2 rounded-md text-gray-400 hover:text-gray-200 transition transform hover:scale-110"
// // //                   >
// // //                     📋
// // //                   </button>

// // //                   {/* Delete Button */}
// // //                   <button
// // //                     onClick={async () => {
// // //                       await axios.delete(`${serverUrl}/shortUrl/${item._id}`);
// // //                       updateReloadState();
// // //                     }}
// // //                     className="p-2 rounded-md text-red-500 hover:text-red-400 transition transform hover:scale-110"
// // //                   >
// // //                     ❌
// // //                   </button>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DataTable;
// import * as React from "react";
// import { UrlData } from "../../interface/UrlData";
// import { Link } from "react-router-dom";
// import { serverUrl } from "../../helpers/Constants";
// import axios from "axios";

// interface IDataTableProps {
//   data: UrlData[];
//   updateReloadState: () => void;
// }

// const DataTable: React.FunctionComponent<IDataTableProps> = ({ data, updateReloadState }) => {
//   console.log("Data in DataTable is ", data);

//   const copyToClipboard = async (url: string) => {
//     try {
//       await navigator.clipboard.writeText(`${serverUrl}/shortUrl/${url}`);
//       alert(`✅ URL Copied: ${serverUrl}/shortUrl/${url}`);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const deleteUrl = async (id: string) => {
//     await axios.delete(`${serverUrl}/shortUrl/${id}`);
//     updateReloadState();
//   };

//   return (
//     <div className="container mx-auto pt-4 pb-10">
//       <div className="relative overflow-hidden shadow-md sm:rounded-lg">
//         <table className="w-full text-sm text-left text-gray-400 bg-gray-900 border border-gray-800 rounded-lg">
//           <thead className="text-md uppercase bg-gray-800 text-gray-300">
//             <tr>
//               <th scope="col" className="px-6 py-3 w-6/12">Full URL</th>
//               <th scope="col" className="px-6 py-3 w-3/12">Short URL</th>
//               <th scope="col" className="px-6 py-3">Clicks</th>
//               <th scope="col" className="px-6 py-3 text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr
//                 key={item._id}
//                 className="border-b border-gray-700 hover:bg-gray-800 transition duration-200"
//               >
//                 <td className="px-6 py-4 break-words">
//                   <Link
//                     to={item.fullUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 hover:underline"
//                   >
//                     {item.fullUrl}
//                   </Link>
//                 </td>
//                 <td className="px-6 py-4">
//                   <Link
//                     to={`${serverUrl}/shortUrl/${item.shortUrl}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-green-400 hover:underline"
//                   >
//                     {item.shortUrl}
//                   </Link>
//                 </td>
//                 <td className="px-6 py-4 text-center font-semibold">{item.clicks}</td>
//                 <td className="px-6 py-4 flex justify-center space-x-4">
//                   {/* Copy Button */}
//                   <button
//                     onClick={() => copyToClipboard(item.shortUrl)}
//                     className="p-2 rounded-md text-gray-400 hover:text-gray-200 transition transform hover:scale-110"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       className="w-6 h-6"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6Z"
//                         clipRule="evenodd"
//                       />
//                       <path
//                         fillRule="evenodd"
//                         d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>

//                   {/* Delete Button */}
//                   <button
//                     onClick={() => deleteUrl(item._id)}
//                     className="p-2 rounded-md text-red-500 hover:text-red-400 transition transform hover:scale-110"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       className="w-6 h-6"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DataTable;
// import * as React from "react";
// import { UrlData } from "../../interface/UrlData";
// import { Link } from "react-router-dom";
// import { serverUrl } from "../../helpers/Constants";
// import axios from "axios";

// interface IDataTableProps {
//   data: UrlData[];
//   updateReloadState: () => void;
// }

// const DataTable: React.FunctionComponent<IDataTableProps> = ({ data, updateReloadState }) => {
//   const [copied, setCopied] = React.useState<string | null>(null); // State for copied notification

//   const copyToClipboard = async (url: string) => {
//     try {
//       await navigator.clipboard.writeText(`${serverUrl}/shortUrl/${url}`);
//       setCopied("✅ Copied to clipboard!");
//       setTimeout(() => setCopied(null), 2000); // Hide after 2 seconds
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container mx-auto pt-4 pb-10 relative">
//       {/* Copy Notification - Fixed on top */}
//       {copied && (
//         <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-5 py-2 rounded-md shadow-lg z-50 transition-opacity duration-300 animate-fadeIn">
//           {copied}
//         </div>
//       )}

//       <div className="relative overflow-hidden shadow-md sm:rounded-lg">
//         <table className="w-full text-sm text-left text-gray-400 bg-gray-900 border border-gray-800 rounded-lg">
//           <thead className="text-md uppercase bg-gray-800 text-gray-300">
//             <tr>
//               <th scope="col" className="px-6 py-3 w-6/12">Full URL</th>
//               <th scope="col" className="px-6 py-3 w-3/12">Short URL</th>
//               <th scope="col" className="px-6 py-3">Clicks</th>
//               <th scope="col" className="px-6 py-3 text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr
//                 key={item._id}
//                 className="border-b border-gray-700 hover:bg-gray-800 transition duration-200"
//               >
//                 <td className="px-6 py-4 break-words">
//                   <Link
//                     to={item.fullUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 hover:underline"
//                   >
//                     {item.fullUrl}
//                   </Link>
//                 </td>
//                 <td className="px-6 py-4">
//                   <Link
//                     to={`${serverUrl}/shortUrl/${item.shortUrl}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-green-400 hover:underline"
//                   >
//                     {item.shortUrl}
//                   </Link>
             
//                 </td>
//                 <td className="px-6 py-4 text-center font-semibold">{item.clicks}</td>
//                 <td className="px-6 py-4 flex justify-center space-x-4">
//                   {/* Copy Button */}
//                   <button
//   onClick={() => copyToClipboard(item.shortUrl)}
//   className="p-2 rounded-md text-gray-400 hover:text-gray-200 transition transform hover:scale-110"
// >
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className="w-6 h-6"
//   >
//     <path
//       fillRule="evenodd"
//       d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
//       clipRule="evenodd"
//     />
//     <path
//       fillRule="evenodd"
//       d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
//       clipRule="evenodd"
//     />
//   </svg>
// </button>


//                   {/* Delete Button */}
//                   <button
//   onClick={async () => {
//     await axios.delete(`${serverUrl}/shortUrl/${item._id}`);
//     updateReloadState();
//   }}
//   className="p-2 rounded-md text-red-500 hover:text-red-400 transition transform hover:scale-110"
// >
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className="w-6 h-6"
//   >
//     <path
//       fillRule="evenodd"
//       d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Z"
//       clipRule="evenodd"
//     />
//   </svg>
// </button>


                  
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DataTable;
import * as React from "react";
import { UrlData } from "../../interface/UrlData";
import { Link } from "react-router-dom";
import { serverUrl } from "../../helpers/Constants";
import axios from "axios";

interface IDataTableProps {
  data: UrlData[];
  updateReloadState: () => void;
}

const DataTable: React.FC<IDataTableProps> = ({ data, updateReloadState }) => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(`${serverUrl}/shortUrl/${url}`);
      setCopied("✅ Copied to clipboard!");
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${serverUrl}/shortUrl/${id}`);
      // After deletion, trigger reload to fetch new data.
      updateReloadState();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div className="container mx-auto pt-1.5 pb-10 relative">
      {copied && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-5 py-2 rounded-md shadow-lg z-50 transition-opacity duration-300 animate-fadeIn">
          {copied}
        </div>
      )}
      <div className="relative overflow-hidden shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-400 bg-gray-900 border border-gray-800 rounded-lg">
          <thead className="text-md uppercase bg-gray-800 text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3 w-6/12">Full URL</th>
              <th scope="col" className="px-6 py-3 w-3/12">Short URL</th>
              <th scope="col" className="px-6 py-3">Clicks</th>
              <th scope="col" className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-b border-gray-700 hover:bg-gray-800 transition duration-200">
                <td className="px-6 py-4 break-words">
                  <Link
                    to={item.fullUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {item.fullUrl}
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`${serverUrl}/shortUrl/${item.shortUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    {item.shortUrl}
                  </Link>
                </td>
                <td className="px-6 py-4 text-center font-semibold">{item.clicks}</td>
                <td className="px-6 py-4 flex justify-center space-x-4">
                  <button
                    onClick={() => copyToClipboard(item.shortUrl)}
                    className="p-2 rounded-md text-gray-400 hover:text-gray-200 transition transform hover:scale-110"
                  >
                    {/* SVG icon for copy */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="p-2 rounded-md text-red-500 hover:text-red-400 transition transform hover:scale-110"
                  >
                    {/* SVG icon for delete */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
