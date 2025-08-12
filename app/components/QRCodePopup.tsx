"use client";

import { useQrCodeStore } from "../stores/qrCode.store";
import QRCode from "./QRCode";

export default function QRCodePopup() {
  const isOpened = useQrCodeStore((state) => state.isPopupOpen);
  const imgSrc = useQrCodeStore((state) => state.excursionImgSrc);
  const close = useQrCodeStore((state) => state.close);
  const excursionId = useQrCodeStore((state) => state.qrCode);
  const excursionName = useQrCodeStore((state) => state.excursionName);
  const onClose = useQrCodeStore((state) => state.close);

  if (!isOpened) return <></>;
  const closePopup = () => {
    onClose();
    close();
  };

  return (
    <div className="fixed inset-0 flex p-3 items-center justify-center bg-base-100/70 backdrop-blur-2xl z-50">
      <div className="bg-base-300 rounded-lg shadow-lg w-full max-w-lg">
        <figure className="w-full relative h-40 overflow-hidden rounded-t-lg flex items-center justify-center">
          <img
            src={imgSrc}
            className="w-full h-full rounded-t-lg aspect-auto object-cover"
          />
        </figure>
        <p className="text-4xl font-black underline decoration-primary p-2 px-3">
          {excursionName}
        </p>
        <div className="flex flex-col gap-0 p-4">
          <h2 className="text-sm font-bold mb-2 opacity-80">
            Сканирай този QR код, за да се присъединиш към информационния канал
            на екскурзията:
          </h2>
          <QRCode excursionId={excursionId} />
          <button
            className="btn btn-primary w-full mt-3"
            onClick={() => closePopup()}
          >
            Затвори
          </button>
        </div>
      </div>
    </div>
  );
}
