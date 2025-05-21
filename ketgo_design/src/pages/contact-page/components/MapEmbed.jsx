import React from "react";

const MapEmbed = ({ latitude, longitude, title }) => {
  return (
    <div className="w-full h-full">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        title={title || "Location Map"}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`}
        className="border-0"
        aria-label="Google Maps showing our office location"
      ></iframe>
    </div>
  );
};

export default MapEmbed;