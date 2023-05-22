import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

    const { address, contract, getCampaigns } = useStateContext();

    const fetchCampaigns = async () => {
        setIsLoading(true);
        const data = await getCampaigns();
        // remove campaigns that have expired
        const filteredCampaigns = data.filter((campaign) => campaign.deadline > Date.now());
        // remove campaigns that have been fully funded
        filteredCampaigns.filter((campaign) => campaign.amountCollected < campaign.target);
        setCampaigns(filteredCampaigns);
        setIsLoading(false);
    }

    useEffect(() => {
        if(contract) fetchCampaigns();
    }, [address, contract]);

    return (
        <DisplayCampaigns
            title="All Campaigns"
            isLoading={isLoading}
            campaigns={campaigns}
        />
    )
}

export default Home