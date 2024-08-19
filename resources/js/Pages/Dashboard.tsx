import { Head, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

interface Props {
    auth: any,
    tests: { id: number, user_id: number, text: string, created_at: string, updated_at: string },
    rest: any
}

export default function Dashboard({ auth, tests, ...rest } : Props) {
    const logout = (e: React.MouseEvent<HTMLElement>) => {
        router.post(route('logout'));
    }

    const moveSkid = (e: React.MouseEvent<HTMLElement>) => {
        axios.post(route('api.test'))
            .then(res => console.log(res))
    }

    useEffect(() => {

        window.Echo.channel('skid-moved')
            .listen('SkidMoved', (e: any) => {
                // console.log(e.test);

                toast(`new test created by ${e.test.user_id} with id #${e.test.id}!`)


                router.reload({ only: ['tests'] })


            });

        window.Echo.private(`skid-move.${auth.user.id}`)
            .listen('SkidMoveFinished', (e: any) => {
                toast(`You created this one!!`)
            });

        return () => {
            window.Echo.leave('skid-moved')
            window.Echo.leave(`skid-move.${auth.user.id}`)
        }



    }, [])

    // console.log(tests.data)

    return (
        <GuestLayout>
            <Head title="Dashboard" />
            <div>
                <h1 className="pb-4">Dashboard</h1>

                <h2>{auth.user.name}</h2>


                <button onClick={logout} className="border border-black p-1 rounded">Logout</button>


                <div className="pt-12">
                    <button onClick={moveSkid} className="border border-black p-1 rounded">Move Skid</button>
                </div>


            </div>
        </GuestLayout>
    );
}
