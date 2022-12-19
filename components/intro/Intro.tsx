import {ArrowTopRightOnSquareIcon} from '@heroicons/react/20/solid'

export default function Intro() {
    return (
        <div className="relative bg-gray-800 w-full">
            <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:ml-auto md:pl-10">
                    <svg className="relative mb-4"
                         fill="none"
                         height="80" role="img" viewBox="0 0 80 80" width="80"
                         xmlns="http://www.w3.org/2000/svg"><title id="nextjs-logo-title">The Next.js Logo</title>
                        <circle cx="40" cy="40" fill="black" r="40"></circle>
                        <path
                            d="M66.448 70.0091L30.7298 24H24V55.9867H29.3838V30.8371L62.2218 73.2645C63.7035 72.2727 65.1152 71.1846 66.448 70.0091Z"
                            fill="url(#paint0_linear_1766_6633)"></path>
                        <rect fill="url(#paint1_linear_1766_6633)" height="32" width="5.33333" x="51.1113"
                              y="24"></rect>
                        <defs>
                            <radialGradient cx="0" cy="0" gradientTransform="translate(40) rotate(90) scale(102.857)"
                                            gradientUnits="userSpaceOnUse" id="paint0_radial_1766_6745" r="1">
                                <stop stopColor="white"></stop>
                                <stop offset="1" stopColor="white"></stop>
                            </radialGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1766_6745" x1="0" x2="17.5"
                                            y1="0" y2="32.5">
                                <stop stopColor="white"></stop>
                                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1766_6633" x1="48.4444"
                                            x2="64.2222" y1="51.7778" y2="71.3333">
                                <stop stopColor="white"></stop>
                                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1766_6633" x1="53.778"
                                            x2="53.6887" y1="24" y2="47.5001">
                                <stop stopColor="white"></stop>
                                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    <h2 className="text-lg font-semibold text-gray-300 mt-4">Intro To Nextjs 13</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to help</p>
                    <p className="mt-3 text-lg text-gray-300">
                        We will cover basic concepts of Nextjs 13 and how to use it in your projects.
                    </p>
                    <div className="mt-8">
                        <div className="mt-6">
                            <div className="mt-6">
                                <a href="#"
                                   className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://lh3.googleusercontent.com/a/AEdFTp7NsNEjVd3OZk3fWPqOEPaUJOKPBx_52GtM12s35A=s192-c-rg-br100"
                                        alt=""
                                    />
                                    <span className="ml-3">Arya Sadeghi</span>
                                    <span className="ml-3">
                                        <ArrowTopRightOnSquareIcon className="h-5 w-5 text-white" aria-hidden="true"/>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
