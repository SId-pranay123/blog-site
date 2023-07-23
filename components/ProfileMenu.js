"use client"

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

const ProfileMenu = ({ session }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="flexCenter z-10 flex-col relative">
            <Menu as="div">
                <Menu.Button className="flexCenter" onMouseEnter={() => setOpenModal(true)} >
                    {session?.user?.image && (
                        <Image
                            src={session.user.image}
                            width={40}
                            height={40}
                            className="rounded-full"
                            alt="user profile image"
                        />
                    )}
                </Menu.Button>

                <Transition
                    show={openModal}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    className="menu"
                >
                    <Menu.Items
                        static
                        className="flexStart profile_menu-items"
                        onMouseLeave={() => setOpenModal(false)}
                    >
                        

                        <div className="flex flex-col gap-3 items-start w-full">
                            <Menu.Item>
                                <Link href={`/profile/${session?.user?.id}/blogs`} className="text-sm">My Library</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link href="/" className="text-sm">Notification</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link href={`/profile/${session?.user?.id}`} className="text-sm">My Profile</Link>
                            </Menu.Item>
                            {/* <Menu.Item>
                                <Link href="/" className="text-sm">Settings</Link>
                            </Menu.Item> */}
                            {/* <Menu.Item>
                                <Link href={`/profile/${session?.user?.id}`} className="text-sm">Profile</Link>
                            </Menu.Item> */}
                        </div>
                        <div className="w-full flexStart border-t border-nav-border mt-5 pt-5">
                            <Menu.Item>
                                <button type="button" className="text-sm" onClick={() => signOut()}> 
                                    Sign out
                                </button>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default ProfileMenu