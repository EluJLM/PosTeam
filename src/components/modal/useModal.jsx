import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (duration = null) => {
    setIsOpen(true);
    if (duration) {
      setTimeout(() => setIsOpen(false), duration);
    }
  };

  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
};

export default useModal;
