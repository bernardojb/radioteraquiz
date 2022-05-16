import React, { useState, useEffect } from 'react'

// const OpenDownload = (props) => {
//   const [modalOpen, setModalOpen] = useState(false)

//   function handleModal() {
//     setModalOpen(!modalOpen);
//     console.log(modalOpen)
//   }

//   return (
//     <>
//       <span onClick={() => {
//         handleModal()
//       }}>
//         {props.children}
//       </span>
//     </>,
//     handleModal
//   )
// }

function HandleModal() {

  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    console.log('MODAL!', modalOpen);
  })

  const openModal = () => {
    setModalOpen(modalOpen ? false : true)
    // console.log(modalOpen)
  }

  return {
    modalOpen,
    openModal
  }
}

export default HandleModal;
