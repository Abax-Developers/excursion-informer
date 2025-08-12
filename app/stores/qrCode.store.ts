import { create } from "zustand";

type QrCodeStore = {
  isPopupOpen: boolean;
  qrCode: string;
  excursionName: string;
  excursionImgSrc: string;
  open: () => void;
  close: () => void;
  setQRCode: (
    excursionId: string,
    excursionName: string,
    imgSrc: string
  ) => void;
};

export const useQrCodeStore = create<QrCodeStore>((set) => ({
  isPopupOpen: false,
  qrCode: "",
  excursionName: "",
  excursionImgSrc: "",
  open: () => set({ isPopupOpen: true }),
  close: () => set({ isPopupOpen: false }),
  setQRCode: (excursionId: string, excursionName: string, imgSrc: string) =>
    set({
      qrCode: excursionId,
      excursionName: excursionName,
      excursionImgSrc: imgSrc,
    }),
}));
