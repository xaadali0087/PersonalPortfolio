import Home from '@/components/Home/Home';
import Layout from '@/components/Layout';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Home | Xaad Ali",
  description: "I'm Xaad, a software engineer.I have 3 years experience in developing as a Mern Stack Developer using JavaScript, TypeScript and Web3.0 .",
  icons: {
    icon: {
      url: "/Logos/Logo.png",
      type: "image/png",
    },
    shortcut: { url: "/Logos/Logo.png", type: "image/png" },
  },
};
const page = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}


export default page