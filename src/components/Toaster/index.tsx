import React from 'react';
import clsx from 'clsx';
import { Flip, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Toaster() {
    return (
        <ToastContainer
            transition={Flip}
            toastClassName={(options: any) =>
                clsx({
                    'flex my-[10px] py-[14px] w-[430px] rounded-md light-blue-shadow hover:cursor-pointer':
                        true,
                    'bg-positive-100': options.type === 'success',
                    'bg-[#ffffcc]': options.type === 'warning',
                    'bg-primary-100': options.type === 'info',
                    'bg-negative-100': options.type === 'error'
                })
            }
            bodyClassName={(options: any) =>
                clsx({
                    'flex flex-row items-center ml-[10px] text-base font-bold':
                        true,
                    'text-positive-200': options.type === 'success',
                    'text-[#ffc107]': options.type === 'warning',
                    'text-[#0043C8]': options.type === 'info',
                    'text-[#FB576A]': options.type === 'error'
                })
            }
            icon={(options: any) => (
                <img
                    src={clsx({
                        '/SuccessToast.svg': options.type === 'success',
                        '/Warning.svg': options.type === 'warning',
                        '/Information.svg': options.type === 'info',
                        '/Error.svg': options.type === 'error'
                    })}
                    alt="Alert"
                    height={30}
                    width={30}
                />
            )}
            position="top-right"
            autoClose={5000}
            closeButton={false}
            draggable={false}
            hideProgressBar
            pauseOnFocusLoss
        />
    );
}
