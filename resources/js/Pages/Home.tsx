import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import RequestForm from '@/Domains/Requests/Components/RequestForm';

export default function Home(props: PageProps) {

    console.log(props.currentRequests)

    useEffect(() => {

        window.Echo.channel('request-created')
            .listen('RequestCreated', (e: any) => {
                toast(`A new request has been created`);
            });


        return () => {
            window.Echo.leave('request-created')
        }
    }, [])


    return (
        <DashboardLayout>
            <Head title="Home" />

            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                <Card sx={{ flexGrow: 1 }}>
                    <CardHeader
                        title={'New Request'}
                    />
                    <CardContent>
                        <RequestForm />
                    </CardContent>
                </Card>

                <Card sx={{ flexGrow: 1 }}>
                    <CardHeader
                        title={"Recent"}
                    />
                    <CardContent>
                        <Typography>
                            Recent Requests Here
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>



            <Stack direction="row" spacing={2}>
                {['Requests', 'Sort', 'Materials'].map((title, index) => (
                    <Card key={index} sx={{ flexGrow: 1 }}>
                        <CardHeader
                            title={title}
                        />
                        <CardContent>
                            <Typography>
                                blah blah blah
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </DashboardLayout>
    );
}
