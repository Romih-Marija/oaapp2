import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";

export default function Index({ auth, objavas }) {
    const [expandedObjavas, setExpandedObjavas] = useState([]);

    const toggleExpanded = (id) => {
        if (expandedObjavas.includes(id)) {
            setExpandedObjavas(expandedObjavas.filter((item) => item !== id));
        } else {
            setExpandedObjavas([...expandedObjavas, id]);
        }
    };

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
                    <div className="flex justify-between">
                        <>
                            <div className="p-10 pt-5 text-gray-900 text-m text-center">
                                <Link
                                    className="bg-white hover:bg-gray-100 rounded-full border-2 border-gray-400 p-5"
                                    href="/"
                                >
                                    Nazaj na prvo stran.
                                </Link>
                            </div>
                            <div className=" p-10 pt-5  text-gray-900 text-m text-center">
                                <Link
                                    className=" bg-white hover:bg-gray-100 rounded-full  border-2 border-gray-400 p-5"
                                    href={route("objava.create")}
                                >
                                    + DODAJ OBJAVO
                                </Link>
                            </div>
                        </>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                            {objavas.data.map((objava) => (
                                <div
                                    key={objava.id}
                                    className=" bg-white shadow-md rounded-lg overflow-hidden"
                                >
                                    <img
                                        className="m-auto  h-56 object-cover"
                                        src={objava.slika}
                                        alt="fotografija"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-bold text-xl mb-2">
                                            {objava.ime + " " + objava.priimek}
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            <strong>Lokacija:</strong>{" "}
                                            {objava.lokacija}
                                        </p>
                                        {expandedObjavas.includes(objava.id) ? (
                                            <p className="text-gray-700 mb-2">
                                                {objava.opis}
                                            </p>
                                        ) : (
                                            <>
                                                <p
                                                    className="text-gray-700 mb-2"
                                                    style={{
                                                        maxHeight: "5.6em",
                                                        overflow: "hidden",
                                                        textOverflow:
                                                            "ellipsis",
                                                        display: "-webkit-box",
                                                        WebkitBoxOrient:
                                                            "vertical",
                                                        WebkitLineClamp: 4,
                                                    }}
                                                >
                                                    {objava.opis}
                                                </p>
                                            </>
                                        )}
                                        <div className="flex justify-end">
                                            <button
                                                className="font-medium  text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                onClick={() =>
                                                    toggleExpanded(objava.id)
                                                }
                                            >
                                                {expandedObjavas.includes(
                                                    objava.id
                                                )
                                                    ? "Manj"
                                                    : "Več"}
                                            </button>
                                        </div>
                                        {expandedObjavas.includes(
                                            objava.id
                                        ) && (
                                            <div>
                                                <p className="text-gray-700">
                                                    <strong>Tel. št.: </strong>
                                                    {objava.telefonska}
                                                </p>
                                                <p className="text-gray-700">
                                                    <strong>E-pošta: </strong>
                                                    {objava.eposta}
                                                </p>
                                                <p className="text-gray-700">
                                                    <strong>Starost: </strong>
                                                    {objava.datum_rojstva}
                                                </p>
                                                <p className="text-gray-700">
                                                    <strong>
                                                        Delovni čas:{" "}
                                                    </strong>
                                                    {objava.delovni_cas +
                                                        " / " +
                                                        objava.delovni_cas2}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
