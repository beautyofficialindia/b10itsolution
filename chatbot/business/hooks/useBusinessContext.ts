import { useContext } from "react";
import { BusinessContext } from "../provider/BusinessContextProvider";

export const useBusinessContext = () => {
  const context = useContext(BusinessContext);
  if (context === undefined) {
    throw new Error("useBusinessContext must be used within a BusinessContextProvider");
  }
  return context;
};
