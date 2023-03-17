export default function Arrow() {
  return (
    <>
      <div className={"flex justify-center w-full"}>
        <a
          href={"#root"}
          className={
            "w-14 motion-safe:hover:animate-pulse flex justify-center items-center"
          }
        >
          <button aria-label={"Up arrow"}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 24 24"
            >
              <title />
              <path
                className={"fill-white"}
                d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
              />
            </svg>
          </button>
        </a>
      </div>
    </>
  );
}
