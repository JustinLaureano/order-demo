import { Link, Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Welcome(props: Record<string, any>) {
  
    return (
        <DashboardLayout>
            <Head title="Welcome" />
            <div>
                <h1>Welcome</h1>


                <Link href={route('login')}>Login</Link>

                <div className="pt-6">
                    <Link href={route('clockin')}>Clock In</Link>
                </div>

            </div>
        </DashboardLayout>
    );
}
