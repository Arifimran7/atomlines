import * as React from "react";

function IconMail(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="2em"
      width="2em"
      color="green"
      {...props}
    >
      <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
    </svg>
  );
}

function IconPhoneCall(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="2em"
      width="2em"
      color="red"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92zM14.05 2a9 9 0 018 7.94M14.05 6A5 5 0 0118 10" />
    </svg>
  );
}

function IconRoadMapLine(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
      color="violet "
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M4 6.143v12.824l5.065-2.17 6 3L20 17.68V4.857l1.303-.558a.5.5 0 01.697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 01-.697-.46V7l2-.857zm12.243 5.1L12 15.485l-4.243-4.242a6 6 0 118.486 0zM12 12.657l2.828-2.829a4 4 0 10-5.656 0L12 12.657z" />
    </svg>
  );
}

export { IconMail, IconPhoneCall, IconRoadMapLine };
