"use client";
import { QRCodeSVG } from "qrcode.react";

import { useEffect, useState } from "react";

export default function QRCode({ excursionId }: { excursionId: string }) {
  return (
    <figure className="w-full aspect-square">
      <QRCodeSVG
        includeMargin
        className="w-full h-full"
        value={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/join/${excursionId}`}
      />
    </figure>
  );
}
