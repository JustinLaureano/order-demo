import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function TestIndex(props: PageProps) {

    return (
        <DashboardLayout>
            <Head title="Test Index" />
            <div>
                <h1 className="pb-4">Test Index</h1>

            </div>
        </DashboardLayout>
    );
}
