export default function COC() {
  return (
    <div className="relative pt-16 lg:py-16 bg-coc-light-primary">
      <div
        className="hidden absolute top-0 inset-x-0 h-1/2 bg-coc-light-primary lg:block"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto bg-coc-purple-primary lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div
              className="absolute inset-x-0 h-1/2 bg-coc-light-primary lg:hidden"
              aria-hidden="true"
            />
            <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-h-1 aspect-w-1 max-w-10 max-h-10 md:max-w-full md:max-h-full">
                <img
                  className="object-cover p-6 object-center rounded-2xl shadow-2xl bg-white"
                  src="/img/logo.png"
                  alt="Culture of Consent Logo"
                />
              </div>
            </div>
          </div>

          <div className="relative bg-coc-purple-primary lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-2xl lg:grid lg:grid-cols-10 lg:items-center">
            <div
              className="hidden absolute inset-0 overflow-hidden rounded-2xl lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-coc-purple-light"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
              <svg
                className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-coc-purple-light"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
            </div>
            <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
              <h2
                className="text-3xl font-extrabold text-white"
                id="join-heading"
              >
                Culture of Consent
              </h2>
              <div className="text-lg text-white">
                <p>
                  Founded in 2020, Culture of Consent is a team of students and
                  staff at Saratoga High School dedicated to identifying
                  school-wide issues around sexual harassment and assault,
                  educating about consent, and supporting survivors of sexual
                  harassment and assault.{" "}
                </p>
                <p className="mt-1.5 font-semibold">
                  We hope to work with both administration and the student body
                  to create a safe and supportive community for all.
                </p>
              </div>
              <a
                className="block w-full py-3 px-5 text-center bg-white uppercase border border-transparent shadow-sm text-base font-medium text-coc-purple-dark hover:bg-gray-50 sm:inline-block sm:w-auto"
                href="https://www.instagram.com/cocshs/"
                target="_blank"
              >
                Instagram Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
