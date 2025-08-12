"use client";

import { useQrCodeStore } from "../stores/qrCode.store";

export default function ExcursionCard({
  title,
  id,
  numberOfParticipants,
  dateOfDeparture,
  img,
}: {
  title: string;
  id: string;
  numberOfParticipants: number;
  dateOfDeparture: string;
  img: string;
}) {
  const setQrCode = useQrCodeStore((state) => state.setQRCode);
  const openPopup = useQrCodeStore((state) => state.open);

  const openQr = () => {
    setQrCode(id, title, img);
    openPopup();
  };

  return (
    <div className="card w-72 flex grow bg-base-100 card-md shadow-sm relative pt-">
      <figure>
        <img src={img} />
      </figure>
      <div className="card-body relative">
        <p className="absolute top-1 right-1 text-xs opacity-30">{id}</p>
        <h2 className="card-title">{title}</h2>
        <div className="flex flex-col gap-2 my-2 py-1 border-t border-b border-base-content/10">
          <div className="flex justify-between flex-row">
            <p className="text-sm opacity-70 flex grow">Дата на отпътуване:</p>
            <p className="text-sm opacity-80 font-bold flex grow-0">
              {dateOfDeparture}
            </p>
          </div>
          <div className="flex justify-between flex-row">
            <p className="text-sm opacity-70 flex grow">Брой туристи:</p>
            <p className="text-sm opacity-80 font-bold flex grow-0">
              {numberOfParticipants}
            </p>
          </div>
        </div>
        <div className="justify-between card-actions">
          <button
            className="btn btn-accent opacity-70"
            onClick={() => openQr()}
          >
            QR Code
          </button>
          <button className="btn btn-primary">Детайли</button>
        </div>
      </div>
    </div>
  );
}
