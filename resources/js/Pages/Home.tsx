import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';

export default function Home(props: PageProps) {

    console.log(props.currentRequests)

    return (
        <DashboardLayout>
            <Head title="Home" />

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
