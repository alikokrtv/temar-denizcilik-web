import { redirect } from 'next/navigation';

export default function AdminIndex() {
    // For now, redirect to dashboard. Later: check auth and redirect to login if not authenticated.
    redirect('/admin/dashboard');
}
