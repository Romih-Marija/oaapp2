import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 text-xl text-center">
                            Prijava je uspela!
                        </div>
                        <div className="p-10 text-gray-900 text-m text-center">
                            <Link
                                className=" bg-white hover:bg-gray-100 rounded-full border-2 border-gray-400 p-5"
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
