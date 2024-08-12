import { useState } from "react";
import Modal from "../../common/Modal";
import OfflineImage from "../../../assets/images/offline.png";

// const NavLinks = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedLink, setSelectedLink] = useState("");

//   const links = [
//     "Fiction",
//     "Non-Fiction",
//     "Children's",
//     "Teen & YA",
//     "Signed",
//     "Gift Cards",
//     "Highlights",
//     "Gifts & Stationery",
//     "Events",
//     "Shops",
//     "Further Reading",
//   ];

//   const openModal = (link) => {
//     setSelectedLink(link);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <nav className="w-full h-11 flex justify-center items-center space-x-6 border-b-2 border-wild-sand">
//         {links.map((link) => (
//           <div
//             key={link}
//             onClick={() => openModal(link)}
//             className="cursor-pointer text-gray-700 hover:bg-wild-sand px-3 h-full flex items-center"
//           >
//             {link}
//           </div>
//         ))}
//       </nav>

//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <div className="p-6 flex flex-col items-center">
//           <h2 className="text-xl font-bold mb-4">{selectedLink}</h2>
//           <img
//             src={OfflineImage}
//             alt={selectedLink}
//             className="max-w-full h-auto rounded-lg shadow-lg"
//           />
//           <button
//             onClick={closeModal}
//             className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//           >
//             Close
//           </button>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default NavLinks;

const NavLinks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const links = [
    "Fiction",
    "Non-Fiction",
    "Children's",
    "Teen & YA",
    "Signed",
    "Gift Cards",
    "Highlights",
    "Gifts & Stationery",
    "Events",
    "Shops",
    "Further Reading",
  ];

  const openModal = (link) => {
    setSelectedLink(link);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <>
      <nav className="w-full h-11 flex justify-center items-center space-x-6 border-b-2 border-wild-sand">
        {links.map((link) => (
          <div
            key={link}
            onClick={() => openModal(link)}
            className="cursor-pointer text-gray-700 hover:bg-wild-sand px-3 h-full flex items-center"
          >
            {link}
          </div>
        ))}
      </nav>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-6 flex flex-col items-center">
          <img
            src={OfflineImage}
            alt={selectedLink}
            className="max-w-full h-auto rounded-lg "
          />
          <button
            onClick={closeModal}
            className=" absolute right-0 top-0 text-3xl mt-4 px-4 py-2 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
      </Modal>
    </>
  );
};

export default NavLinks;
