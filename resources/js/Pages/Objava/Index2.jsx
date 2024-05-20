import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function index({ auth, objavas }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-center text-gray-800 leading-tight">
                    IŠČEM ASISTENCO
                </h2>
            }
        >
            <Head title="Objave" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="w-full text-s text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th></th>
                                        <th className="px-3 py-3">Ime</th>
                                        <th className="px-3 py-3">Opis</th>

                                        <th className="px-3 py-3">Kontakt</th>
                                        <th className="px-3 py-3">Starost</th>
                                        <th className="px-3 py-3">
                                            Delovni čas
                                        </th>
                                        <th className="px-3 py-3">Lokacija</th>
                                        <th className="px-3 py-3 text-right"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {objavas.data.map((objava) => (
                                        <>
                                            <tr className="bg-white text-m border-b dark_bg-gray-800 dark:border-gray-700">
                                                <td>
                                                    <img
                                                        style={{
                                                            width: "200px",
                                                            height: "auto",
                                                        }}
                                                        className="p-5"
                                                        src={objava.slika}
                                                        alt="fotografija"
                                                    />
                                                </td>
                                                <td className="px-3 py-3 text-nowrap">
                                                    {objava.ime +
                                                        " " +
                                                        objava.priimek}
                                                </td>
                                                <td
                                                    style={{
                                                        minWidth: "400px",
                                                    }}
                                                    className="px-3 py-3"
                                                >
                                                    {objava.opis}
                                                </td>

                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="px-3 py-3 text-nowrap">
                                                    {objava.lokacija}
                                                </td>
                                                <td className="px-3 py-3 text-right">
                                                    <Link
                                                        href={route(
                                                            "objava.edit",
                                                            objava.id
                                                        )}
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                    >
                                                        Uredi
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "objava.destroy",
                                                            objava.id
                                                        )}
                                                        className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                    >
                                                        Izbriši
                                                    </Link>
                                                </td>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-10 text-gray-900 text-m text-center">
                            <Link
                                className=" rounded-full border-2 border-gray-400 p-5"
                                href="/"
                            >
                                Nazaj na prvo stran.
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
