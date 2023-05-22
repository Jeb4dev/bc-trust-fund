import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import { logo } from './assets';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
    return (
        <>
            <Helmet>
                <title>Trust Fund - Decentralized Crowdfunding</title>
                <meta name="description" content="Trust Fund is a decentralized crowdfunding platform built on the Sepolia blockchain." />
                <meta name="keywords" content="Thirdweb, Sepolia, Trust Fund, Crowdfunding, Blockchain, Crypto" />
                <meta property="twitter:image" content="https://raw.githubusercontent.com/Jeb4dev/bc-trust-fund/main/client/src/assets/thirdweb.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Trust Fund" />
                <meta property="twitter:description" content="Trust Fund is a decentralized crowdfunding platform built on the Sepolia blockchain." />
                <meta property="og:image" content="https://raw.githubusercontent.com/Jeb4dev/bc-trust-fund/main/client/src/assets/thirdweb.png" />
                <meta property="og:title" content="Trust Fund" />
                <meta property="og:description" content="Trust Fund is a decentralized crowdfunding platform built on the Sepolia blockchain." />
                <meta property="og:url" content="https://trustfund.jeb4.dev/" />
                <link rel="icon" href={ logo } />
            </Helmet>
            <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
                <div className="sm:flex hidden mr-10 relative">
                    <Sidebar />
                </div>

                <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/create-campaign" element={<CreateCampaign />} />
                        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App