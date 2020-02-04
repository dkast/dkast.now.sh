import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsVectornator="http://vectornator.io"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipRule="evenodd"
      width={props.width}
      height={props.height}
      viewBox="0 0 300 300">
      <path
        fill={props.bgColor || "#F56565"}
        d="M297.468 150.275c0-118.062-29.516-147.578-147.578-147.578C31.828 2.697 2.312 32.213 2.312 150.275c0 118.062 29.516 147.578 147.578 147.578 118.062 0 147.578-29.516 147.578-147.578"
        vectornatorLayerName="Layer 1"></path>
      <path
        fill="#fff"
        d="M274.27 152.983c0 7.724-1.495 15.199-4.235 22.175-2.99 7.226-7.226 13.953-12.957 19.434-5.73 5.731-12.208 9.967-19.434 12.957-6.976 2.989-14.451 4.235-22.175 4.235-7.723 0-15.198-1.495-22.175-4.235-7.225-2.99-13.952-7.226-19.434-12.957l-42.107-41.609-22.922-22.922c-6.229-6.229-14.452-9.468-23.172-9.468a32.421 32.421 0 00-22.922 9.468c-6.23 5.98-9.468 14.202-9.468 22.922a32.423 32.423 0 009.468 22.923c6.229 6.229 14.202 9.468 22.922 9.468s16.943-3.489 22.922-9.468l3.987-3.987 18.687 18.687-3.987 3.986c-5.73 5.731-12.209 9.967-19.434 12.957-6.976 2.989-14.451 4.235-22.175 4.235s-15.199-1.495-22.175-4.235c-7.225-2.99-13.953-7.226-19.434-12.957-5.73-5.73-9.966-12.208-12.956-19.434-2.99-6.976-4.236-14.451-4.236-22.175 0-7.723 1.495-15.198 4.236-22.175 2.99-7.225 7.225-13.952 12.956-19.434 5.73-5.73 12.209-9.966 19.434-12.956 6.976-2.99 14.451-4.236 22.175-4.236s15.199 1.495 22.175 4.236c7.225 2.99 13.953 7.226 19.434 12.956l55.562 55.313 9.219 9.219c6.229 6.229 14.202 9.468 22.922 9.468a32.422 32.422 0 0022.922-9.468c6.229-6.229 9.468-14.202 9.468-22.923 0-8.72-3.488-16.942-9.468-22.922-5.979-6.229-13.952-9.468-22.673-9.468a32.422 32.422 0 00-22.922 9.468l-4.734 4.734-18.687-18.687 4.734-4.734c5.731-5.73 12.209-9.966 19.434-12.956 6.977-2.99 14.451-4.236 22.175-4.236s15.199 1.495 22.175 4.236c7.226 2.99 13.953 7.226 19.434 12.956 5.731 5.731 9.967 12.209 12.956 19.434 2.99 6.977 4.485 14.452 4.485 22.175z"
        vectornatorLayerName="Layer 2"></path>
    </svg>
  );
}

export default Icon;
