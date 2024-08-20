import React from "react";

interface AnnouncementProps {
  backgroundColor?: string;
  text?: string;
  message?: string;
}

const Announcement: React.FC<AnnouncementProps> = ({
  backgroundColor,
  text ,
  message,
}) => {
  return (
    <div className={`${backgroundColor} px-4 py-3 text-white`}>
      <p className="text-center text-sm font-medium">
        {text}
        {message && (
          <span className="inline-block ml-1">
            {message}
          </span>
        )}
      </p>
    </div>
  );
};

export default Announcement;
