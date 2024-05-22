import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <div className="absolute top-3 right-0 mr-4 mt-4">
                            {auth.user ? (
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="rounded-full px-3 py-2 text-black ring-1 ring-transparent transition hover:bg-gray-100 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Odjava
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="rounded-full px-3 py-2 text-black ring-1 ring-transparent transition hover:bg-gray-100 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Prijava
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="rounded-full px-3 py-2 text-black ring-1 ring-transparent transition hover:bg-gray-100 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Registracija
                                    </Link>
                                </>
                            )}
                        </div>
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                                <img
                                    className="pl-10 pr-10 pt-5"
                                    fill="none"
                                    src="\build\assets\logo-oa.png"
                                    alt="Logo"
                                />
                            </div>
                        </header>

                        <main className="mt-6 ">
                            <div className=" flex flex-col justify-center ">
                                {auth.user ? (
                                    <>
                                        <Link
                                            href={route("objava.index")}
                                            style={{
                                                padding: "35px",
                                                fontSize: "20px",
                                            }}
                                            className=" mx-auto  shadow-[0px_14px_34px_0px_rgba(0,0,0,0.1)] bg-white text-xl font-semibold border-2 border-gray-400 mt-5  rounded-full px-3 py-2 text-black ring-1 ring-transparent transition hover:bg-gray-100 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            IŠČEM ASISTENCO
                                        </Link>
                                        <Link
                                            href={route("objava.index")}
                                            style={{
                                                padding: "35px",
                                                fontSize: "20px",
                                            }}
                                            className="mx-auto  shadow-[0px_14px_34px_0px_rgba(0,0,0,0.1)] bg-white text-xl font-semibold border-2 border-gray-400 mt-5  mb-10 rounded-full px-3 py-2 text-black ring-1 ring-transparent transition hover:bg-gray-100 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            NUDIM ASISTENCO
                                        </Link>
                                        <Link
                                            href={route("objava.index")}
                                            style={{
                                                padding: "35px",
                                                fontSize: "20px",
                                            }}
                                            className="mx-auto  shadow-[0px_14px_34px_0px_rgba(0,0,0,0.1)] bg-white text-xl font-semibold border-2 border-gray-400 mt-5 rounded-full px-3 py-2 text-black ring-1 ring-transparent transition hover:bg-gray-100 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            IŠČEM NADOMEŠČANJE
                                        </Link>
                                        <Link
                                            href={route("objava.index")}
                                            style={{
                                                padding: "35px",
                                                fontSize: "20px",
                                            }}
                                            className="mx-auto  shadow-[0px_14px_34px_0px_rgba(0,0,0,0.1)] bg-white text-xl font-semibold border-2 border-gray-400 mt-5 mb-10 rounded-full px-3 py-2 text-black ring-1 ring-transparent transition hover:bg-gray-100 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            NUDIM NADOMEŠČANJE
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            style={{
                                                padding: "35px",
                                                fontSize: "20px",
                                            }}
                                            className=" mx-auto shadow-[0px_14px_34px_0px_rgba(0,0,0,0.1)] bg-white text-xl font-semibold border-2 border-gray-400 mt-5 rounded-full px-3 py-2 text-black ring-1 ring-transparent transition hover:bg-gray-100 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            IŠČEM ASISTENCO
                                        </Link>
                                        <Link
                                            href={route("login")}
                                            style={{
                                                padding: "35px",
                                                fontSize: "20px",
                                            }}
                                            className=" mx-auto shadow-[0px_14px_34px_0px_rgba(0,0,0,0.1)] bg-white text-xl font-semibold border-2 border-gray-400 mt-5 mb-10 rounded-full px-3 py-2 text-black ring-1 ring-transparent transition hover:bg-gray-100 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            NUDIM ASISTENCO
                                        </Link>
                                        <Link
                                            href={route("objava.index")}
                                            style={{
                                                padding: "35px",
                                                fontSize: "20px",
                                            }}
                                            className="mx-auto  shadow-[0px_14px_34px_0px_rgba(0,0,0,0.1)] bg-white text-xl font-semibold border-2 border-gray-400 mt-5 rounded-full px-3 py-2 text-black ring-1 ring-transparent transition hover:bg-gray-100 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            IŠČEM NADOMEŠČANJE
                                        </Link>
                                        <Link
                                            href={route("objava.index")}
                                            style={{
                                                padding: "35px",
                                                fontSize: "20px",
                                            }}
                                            className="mx-auto  shadow-[0px_14px_34px_0px_rgba(0,0,0,0.1)] bg-white text-xl font-semibold border-2 border-gray-400 mt-5 mb-10 rounded-full px-3 py-2 text-black ring-1 ring-transparent transition hover:bg-gray-100 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            NUDIM NADOMEŠČANJE
                                        </Link>
                                    </>
                                )}
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            OAapp - Osebna asistenca - 2024
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
