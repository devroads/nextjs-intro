import Link from "next/link";

const navigation = [
    {name: 'Lessons', href: '#'},
]

export default function NavBar() {
    return (
        <header className="bg-stone-900	">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div
                    className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
                    <div className="flex items-center">
                        <Link href="/">
                            <h4 className={'text-xl font-semibold text-white hover:text-indigo-50'}>Next.js New
                                Era </h4>
                        </Link>
                    </div>
                    <div className="ml-10 hidden space-x-8 lg:block">
                        <a href="http://github.com/devroads/nextjs-intro"
                           className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-stone-800  hover:bg-stone-700">
                            GitHub
                        </a>
                        <a href="http://github.com/devroads"
                           className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600	 hover:bg-sky-900">
                            Twitter
                        </a>

                    </div>
                </div>
                <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
                    {navigation.map((link) => (
                        <a key={link.name} href={link.href}
                           className="text-base font-medium text-white hover:text-indigo-50">
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
}
