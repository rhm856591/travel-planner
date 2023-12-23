"use client"
import { useEffect } from 'react';
import useSWR from 'swr'; // Import the swr library
import Login from '@/components/Login'

const page: React.FC = () => {
  const { data: isClient } = useSWR('/api/isClient', () => fetch('/api/isClient').then((res) => res.json()), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  useEffect(() => {
    if (isClient) {
      // Your client-side code here

      const container: HTMLElement | null = document.getElementById('container');
      const registerBtn: HTMLElement | null = document.getElementById('register');
      const loginBtn: HTMLElement | null = document.getElementById('login');

      if (container && registerBtn && loginBtn) {
        registerBtn.addEventListener('click', () => {
          container.classList.add('active');
        });

        loginBtn.addEventListener('click', () => {
          container.classList.remove('active');
        });
      }

      // Cleanup event listeners when the component is unmounted
      return () => {
        if (registerBtn && loginBtn) {
          registerBtn.removeEventListener('click', () => {
            container?.classList.add('active');
          });

          loginBtn.removeEventListener('click', () => {
            container?.classList.remove('active');
          });
        }
      };
    }
  }, [isClient]);

  // Your component JSX here

  return (
    <div>
      <Login />
    </div>
  );
};

export default page;
