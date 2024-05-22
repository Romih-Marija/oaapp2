import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        ime: "",
        priimek: "",
        opis: "",
        lokacija: "",
        telefonska: "",
        eposta: "",
        datum_rojstva: "",
        delovni_cas: "Polni",
        delovni_cas2: "Dopoldan", // privzeta vrednost
        user_id: auth.user.id,
        slika: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        post(route("objava.store"), formData);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-center text-gray-800 leading-tight">
                    DODAJ OBJAVO
                </h2>
            }
        >
            <Head title="Dodaj Objavo" />
            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                                encType="multipart/form-data"
                            >
                                <div>
                                    <label className="block text-gray-700">
                                        Ime
                                    </label>
                                    <input
                                        type="text"
                                        value={data.ime}
                                        onChange={(e) =>
                                            setData("ime", e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                                        required
                                    />
                                    {errors.ime && (
                                        <div className="text-red-600">
                                            {errors.ime}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-gray-700">
                                        Priimek
                                    </label>

                                    <input
                                        type="text"
                                        value={data.priimek}
                                        onChange={(e) =>
                                            setData("priimek", e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                                        required
                                    />
                                    {errors.priimek && (
                                        <div className="text-red-600">
                                            {errors.priimek}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="slika">Slika: </label>
                                    <div>
                                        <input
                                            type="file"
                                            name="slika"
                                            onChange={(e) =>
                                                setData(
                                                    "slika",
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700">
                                        Opis
                                    </label>
                                    <textarea
                                        value={data.opis}
                                        onChange={(e) =>
                                            setData("opis", e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                                    />
                                    {errors.opis && (
                                        <div className="text-red-600">
                                            {errors.opis}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-gray-700">
                                        Lokacija
                                    </label>
                                    <input
                                        type="text"
                                        value={data.lokacija}
                                        onChange={(e) =>
                                            setData("lokacija", e.target.value)
                                        }
                                        required
                                        className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                                    />
                                    {errors.lokacija && (
                                        <div className="text-red-600">
                                            {errors.lokacija}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-gray-700">
                                        Telefonska številka
                                    </label>
                                    <input
                                        type="text"
                                        value={data.telefonska}
                                        onChange={(e) =>
                                            setData(
                                                "telefonska",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                                    />
                                    {errors.telefonska && (
                                        <div className="text-red-600">
                                            {errors.telefonska}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-gray-700">
                                        E-pošta
                                    </label>
                                    <input
                                        type="email"
                                        value={data.eposta}
                                        onChange={(e) =>
                                            setData("eposta", e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                                    />
                                    {errors.eposta && (
                                        <div className="text-red-600">
                                            {errors.eposta}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-gray-700">
                                        Datum rojstva
                                    </label>
                                    <input
                                        type="date"
                                        value={data.datum_rojstva}
                                        onChange={(e) =>
                                            setData(
                                                "datum_rojstva",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                                    />
                                    {errors.datum_rojstva && (
                                        <div className="text-red-600">
                                            {errors.datum_rojstva}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-gray-700">
                                        Delovni čas
                                    </label>
                                    <select
                                        value={data.delovni_cas}
                                        onChange={(e) =>
                                            setData(
                                                "delovni_cas",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                                    >
                                        <option value="polovični">
                                            Polovični
                                        </option>
                                        <option value="polni">Polni</option>
                                        <option value="brez">Drugo</option>
                                    </select>
                                    {errors.delovni_cas && (
                                        <div className="text-red-600">
                                            {errors.delovni_cas}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <select
                                        value={data.delovni_cas2}
                                        onChange={(e) =>
                                            setData(
                                                "delovni_cas2",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                                    >
                                        <option value="dopoldan">
                                            Dopoldan
                                        </option>
                                        <option value="popoldan">
                                            Popoldan
                                        </option>
                                        <option value="izmenično">
                                            Izmenično
                                        </option>
                                    </select>
                                    {errors.delovni_cas2 && (
                                        <div className="text-red-600">
                                            {errors.delovni_cas2}
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center justify-end">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                                        disabled={processing}
                                    >
                                        Dodaj Objavo
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
