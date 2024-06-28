import { useEffect, useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { TarrifsContainer } from "../TarrifsContainer/TarrifsContainer";
import { Modal } from "../Modal/Modal";
import { Offer } from "../Offer/Offer";



function App() {
  const [isDiscount, setIsDiscount] = useState(true)

  return (
    <div>
      <AppHeader
        isDiscount={isDiscount}
        setIsDiscount={setIsDiscount}
      />
      <TarrifsContainer isDiscount={isDiscount} />
    </div>
  );
}

export default App;
